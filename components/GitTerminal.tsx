'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Terminal, Trophy, Zap, CheckCircle2 } from 'lucide-react'
import { GitRepository, CommandHistory, Achievement } from '@/types'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { GitCommandProcessor } from '@/utils/gitCommands'
import { useAchievementSystem } from '@/components/AchievementSystem'

const INITIAL_REPOSITORY: GitRepository = {
  isInitialized: false,
  currentBranch: 'main',
  branches: ['main'],
  files: [],
  commits: [],
  userConfig: { name: '', email: '' },
  commandHistory: [],
  sessionCount: 1
}

export default function GitTerminal() {
  const [repository, setRepository] = useLocalStorage<GitRepository>('git-repository', INITIAL_REPOSITORY)
  const [terminalHistory, setTerminalHistory] = useLocalStorage<string[]>('terminal-history', [])
  const [currentCommand, setCurrentCommand] = useState('')
  const [commandHistory, setCommandHistory] = useState<CommandHistory[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [newAchievement, setNewAchievement] = useState<Achievement | null>(null)
  const [showAchievement, setShowAchievement] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  
  const { achievements, checkAchievements } = useAchievementSystem()

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [commandHistory])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const executeCommand = () => {
    if (!currentCommand.trim()) return

    // Comando especial para limpiar terminal
    if (currentCommand.trim() === 'clear' || currentCommand.trim() === 'cls') {
      setCommandHistory([])
      setCurrentCommand('')
      setHistoryIndex(-1)
      return
    }

    // Comando especial para resetear completamente el repositorio
    if (currentCommand.trim() === 'reset-repo' || currentCommand.trim() === 'clear-repo') {
      setRepository(INITIAL_REPOSITORY)
      setCommandHistory([])
      setTerminalHistory([])
      setCurrentCommand('')
      setHistoryIndex(-1)
      
      // Mostrar mensaje de confirmación
      setCommandHistory([{
        command: currentCommand.trim(),
        output: [
          '🧹 Repositorio completamente limpiado!',
          '',
          'Se ha reiniciado:',
          '• Estado del repositorio',
          '• Todos los archivos',
          '• Historial de commits',
          '• Configuración de usuario',
          '• Ramas (vuelto a main)',
          '• Historial de comandos',
          '',
          'Puedes empezar de nuevo con "git init" 🚀'
        ],
        timestamp: new Date(),
        isError: false
      }])
      return
    }

    const result = GitCommandProcessor.processCommand(currentCommand, repository)
    
    setCommandHistory(prev => [...prev, {
      command: currentCommand,
      output: result.output,
      timestamp: new Date(),
      isError: result.isError || false
    }])

    setTerminalHistory(prev => [...prev, currentCommand])
    
    // Actualizar repositorio con historial de comandos y verificar logros
    const newRepo = {
      ...result.repository,
      commandHistory: [...(repository.commandHistory || []), currentCommand],
      sessionCount: repository.sessionCount || 1
    }
    setRepository(newRepo)
    
    // Verificar logros después de ejecutar el comando
    const updatedAchievements = checkAchievements(newRepo)
    const justUnlocked = updatedAchievements.find(a => 
      a.unlocked && !achievements.find(old => old.id === a.id && old.unlocked)
    )
    
    if (justUnlocked) {
      setNewAchievement(justUnlocked)
      setShowAchievement(true)
      setTimeout(() => setShowAchievement(false), 4000)
    }
    
    setCurrentCommand('')
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (terminalHistory.length > 0) {
        const newIndex = historyIndex === -1 
          ? terminalHistory.length - 1 
          : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setCurrentCommand(terminalHistory[newIndex] || '')
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex >= 0) {
        const newIndex = historyIndex + 1
        if (newIndex >= terminalHistory.length) {
          setHistoryIndex(-1)
          setCurrentCommand('')
        } else {
          setHistoryIndex(newIndex)
          setCurrentCommand(terminalHistory[newIndex] || '')
        }
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault()
      setCommandHistory([])
    }
  }

  const clearTerminal = () => {
    setCommandHistory([])
  }

  const resetRepository = () => {
    setRepository(INITIAL_REPOSITORY)
    setCommandHistory([])
    setTerminalHistory([])
    setCurrentCommand('')
    setHistoryIndex(-1)
    
    // Mostrar mensaje de confirmación
    setCommandHistory([{
      command: 'reset-repo',
      output: [
        '🧹 Repositorio completamente limpiado!',
        '',
        'Se ha reiniciado:',
        '• Estado del repositorio',
        '• Todos los archivos',
        '• Historial de commits',
        '• Configuración de usuario',
        '• Ramas (vuelto a main)',
        '• Historial de comandos',
        '',
        'Puedes empezar de nuevo con "git init" 🚀'
      ],
      timestamp: new Date(),
      isError: false
    }])
  }

  return (
    <div className="relative">
      {/* Achievement Notification */}
      {showAchievement && newAchievement && (
        <div className="fixed top-4 right-4 z-50 bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-4 rounded-lg shadow-2xl transform transition-all duration-300 animate-bounce">
          <div className="flex items-center space-x-3">
            <Trophy className="w-8 h-8" />
            <div>
              <div className="font-bold text-lg">¡Logro Desbloqueado!</div>
              <div className="text-sm">{newAchievement.title}</div>
              <div className="text-xs opacity-80">+{newAchievement.points} puntos</div>
            </div>
          </div>
        </div>
      )}

    <div className="bg-gradient-to-b from-gray-900 via-gray-900 to-black rounded-xl border-2 border-green-500/30 shadow-2xl shadow-green-500/10 h-[500px] flex flex-col overflow-hidden">
      {/* Terminal Header */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-800 to-gray-700 border-b border-green-500/30">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Terminal className="w-5 h-5 text-green-400" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <div>
            <span className="text-sm text-green-400 font-bold">Git Terminal Pro</span>
            <div className="text-xs text-gray-400">Learning-Git Interactive</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          {/* Achievement Counter */}
          <div className="flex items-center space-x-2 bg-yellow-500/20 px-3 py-1 rounded-full border border-yellow-500/30">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span className="text-xs text-yellow-300 font-semibold">
              {achievements.filter(a => a.unlocked).length}/{achievements.length}
            </span>
          </div>
          
          <button
            onClick={clearTerminal}
            className="px-2 py-1.5 text-xs bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/30 rounded-md transition-all duration-200 hover:scale-105"
            title="Limpiar solo la pantalla"
          >
            📺 Limpiar
          </button>
          
          <button
            onClick={resetRepository}
            className="px-2 py-1.5 text-xs bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30 rounded-md transition-all duration-200 hover:scale-105"
            title="Reiniciar completamente el repositorio"
          >
            🧹 Reset
          </button>
          
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
          </div>
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="flex-1 p-4 overflow-y-auto font-mono text-sm bg-gray-900 text-green-400"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Welcome message */}
        {commandHistory.length === 0 && (
          <div className="mb-4 text-gray-400">
            <p>¡Bienvenido al Terminal Git Interactivo! 🚀</p>
            <p>Escribe <span className="text-green-400 font-semibold">help</span> para ver los comandos disponibles.</p>
            <p>Ejemplo: <span className="text-blue-400">git init</span> para inicializar un repositorio.</p>
            <br />
          </div>
        )}

        {/* Command history */}
        {commandHistory.map((entry, index) => (
          <div key={index} className="mb-3">
            {/* Command input display */}
            <div className="flex items-center text-blue-400">
              <span className="text-gray-500 mr-2">$</span>
              <span>{entry.command}</span>
            </div>
            
            {/* Command output */}
            {entry.output.length > 0 && (
              <div className={`mt-1 pl-4 ${entry.isError ? 'text-red-400' : 'text-gray-300'}`}>
                {entry.output.map((line, lineIndex) => (
                  <div key={lineIndex} className="whitespace-pre">
                    {line}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Current input */}
        <div className="flex items-center">
          <span className="text-gray-500 mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-blue-400 outline-none font-mono"
            placeholder="Escribe un comando..."
            autoFocus
          />
        </div>

        {/* Repository status indicator */}
        {repository.isInitialized && (
          <div className="mt-4 p-3 bg-gray-800 rounded border border-gray-700">
            <div className="text-xs text-gray-400 mb-2">Estado del Repositorio:</div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-gray-500">Rama actual:</div>
                <div className="text-sm text-green-400 font-semibold">{repository.currentBranch}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Archivos:</div>
                <div className="text-sm text-yellow-400">
                  {repository.files.length} archivos
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Commits:</div>
                <div className="text-sm text-purple-400">
                  {repository.commits.length} commits
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Configuración:</div>
                <div className="text-sm text-blue-400">
                  {repository.userConfig.name || 'Sin configurar'}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tips */}
      <div className="px-4 py-3 bg-gradient-to-r from-gray-800 to-gray-700 border-t border-green-500/30">
        <div className="text-xs text-gray-300 flex items-center justify-between">
          <span className="flex items-center space-x-2">
            <Zap className="w-3 h-3 text-blue-400" />
            <span>Usa ↑↓ para historial | Ctrl+L para limpiar | Escribe &apos;help&apos; para ayuda</span>
          </span>
          <div className="flex items-center space-x-4">
            {repository.files.filter(f => f.status === 'staged').length > 0 && (
              <span className="flex items-center space-x-1 text-green-400">
                <CheckCircle2 className="w-3 h-3" />
                <span>{repository.files.filter(f => f.status === 'staged').length} staged</span>
              </span>
            )}
            {repository.files.filter(f => f.status === 'modified').length > 0 && (
              <span className="text-yellow-400">
                ● {repository.files.filter(f => f.status === 'modified').length} modified
              </span>
            )}
            {repository.files.filter(f => f.status === 'untracked').length > 0 && (
              <span className="text-red-400">
                ● {repository.files.filter(f => f.status === 'untracked').length} untracked
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
