'use client'
import { useState, useEffect, useRef } from 'react'
import { Terminal, ChevronRight } from 'lucide-react'

interface GitFile {
  name: string
  status: 'untracked' | 'modified' | 'staged' | 'committed'
  content?: string
}

interface GitRepository {
  files: GitFile[]
  currentBranch: string
  branches: string[]
  commits: Array<{
    hash: string
    message: string
    author: string
    date: string
  }>
  isInitialized: boolean
  userConfig: {
    name?: string
    email?: string
  }
}

interface CommandHistory {
  command: string
  output: string[]
  timestamp: Date
  isError?: boolean
}

export default function GitTerminal() {
  const [repository, setRepository] = useState<GitRepository>({
    files: [],
    currentBranch: 'main',
    branches: ['main'],
    commits: [],
    isInitialized: false,
    userConfig: {}
  })
  
  const [currentInput, setCurrentInput] = useState('')
  const [commandHistory, setCommandHistory] = useState<CommandHistory[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [isTyping, setIsTyping] = useState(false)
  
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [commandHistory])

  // Focus input when clicking on terminal
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]?.command || '')
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]?.command || '')
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setCurrentInput('')
      }
    }
  }

  // Execute command
  const executeCommand = (command: string) => {
    const trimmedCommand = command.trim()
    if (!trimmedCommand) return

    setIsTyping(true)
    
    setTimeout(() => {
      const result = processGitCommand(trimmedCommand, repository)
      
      const newHistory: CommandHistory = {
        command: trimmedCommand,
        output: result.output,
        timestamp: new Date(),
        isError: result.isError
      }
      
      setCommandHistory(prev => [...prev, newHistory])
      setRepository(result.repository)
      setCurrentInput('')
      setHistoryIndex(-1)
      setIsTyping(false)
      
      // Save progress to localStorage
      saveProgress(result.repository, [...commandHistory, newHistory])
    }, 300 + Math.random() * 500) // Simulate realistic response time
  }

  // Save progress to localStorage
  const saveProgress = (repo: GitRepository, history: CommandHistory[]) => {
    localStorage.setItem('git-terminal-repo', JSON.stringify(repo))
    localStorage.setItem('git-terminal-history', JSON.stringify(history))
  }

  // Load progress from localStorage
  useEffect(() => {
    const savedRepo = localStorage.getItem('git-terminal-repo')
    const savedHistory = localStorage.getItem('git-terminal-history')
    
    if (savedRepo) {
      setRepository(JSON.parse(savedRepo))
    }
    
    if (savedHistory) {
      setCommandHistory(JSON.parse(savedHistory))
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    executeCommand(currentInput)
  }

  const clearTerminal = () => {
    setCommandHistory([])
    localStorage.removeItem('git-terminal-history')
  }

  const resetRepository = () => {
    setRepository({
      files: [],
      currentBranch: 'main',
      branches: ['main'],
      commits: [],
      isInitialized: false,
      userConfig: {}
    })
    setCommandHistory([])
    localStorage.removeItem('git-terminal-repo')
    localStorage.removeItem('git-terminal-history')
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <Terminal className="w-8 h-8 text-primary-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Terminal Git Interactiva</h1>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Practica comandos Git en un entorno simulado. Todos los comandos y el estado del repositorio se guardan automáticamente.
        </p>
        <div className="flex gap-2 mb-4">
          <button
            onClick={clearTerminal}
            className="btn-secondary text-sm"
          >
            Limpiar terminal
          </button>
          <button
            onClick={resetRepository}
            className="btn-secondary text-sm"
          >
            Reiniciar repositorio
          </button>
        </div>
      </div>

      {/* Terminal */}
      <div 
        ref={terminalRef}
        onClick={focusInput}
        className="terminal-container h-96 overflow-y-auto cursor-text"
      >
        {/* Welcome message */}
        {commandHistory.length === 0 && (
          <div className="mb-4 text-green-400">
            <div>Bienvenido a la Terminal Git Interactiva</div>
            <div>Escribe 'help' para ver los comandos disponibles</div>
            <div>Comienza con 'git init' para inicializar un repositorio</div>
          </div>
        )}

        {/* Command history */}
        {commandHistory.map((entry, index) => (
          <div key={index} className="mb-2">
            <div className="terminal-line">
              <span className="terminal-prompt">
                {repository.isInitialized ? `(${repository.currentBranch})` : ''} $
              </span>
              <span className="text-white">{entry.command}</span>
            </div>
            <div className={`ml-4 ${entry.isError ? 'text-red-400' : 'text-gray-300'}`}>
              {entry.output.map((line, lineIndex) => (
                <div key={lineIndex}>{line}</div>
              ))}
            </div>
          </div>
        ))}

        {/* Current input */}
        <form onSubmit={handleSubmit} className="terminal-line">
          <span className="terminal-prompt">
            {repository.isInitialized ? `(${repository.currentBranch})` : ''} $
          </span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="terminal-input"
            autoFocus
            disabled={isTyping}
          />
          {isTyping && <span className="terminal-cursor"></span>}
        </form>
      </div>

      {/* Repository status */}
      {repository.isInitialized && (
        <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Estado del Repositorio</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>Rama actual:</strong> {repository.currentBranch}</p>
              <p><strong>Total de commits:</strong> {repository.commits.length}</p>
              <p><strong>Archivos:</strong> {repository.files.length}</p>
            </div>
            <div>
              <p><strong>Configuración:</strong></p>
              <p className="ml-2">Usuario: {repository.userConfig.name || 'No configurado'}</p>
              <p className="ml-2">Email: {repository.userConfig.email || 'No configurado'}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Git command processor
function processGitCommand(command: string, repository: GitRepository): {
  output: string[]
  repository: GitRepository
  isError?: boolean
} {
  const args = command.split(' ')
  const gitCommand = args[0]
  const subCommand = args[1]

  // Handle non-git commands first
  if (gitCommand === 'help') {
    return {
      output: [
        'Comandos disponibles:',
        '',
        'Configuración:',
        '  git config user.name "Tu Nombre"',
        '  git config user.email "tu@email.com"',
        '',
        'Repositorio:',
        '  git init                - Inicializar repositorio',
        '  git status              - Ver estado del repositorio',
        '  git log                 - Ver historial de commits',
        '',
        'Archivos:',
        '  touch <archivo>         - Crear archivo',
        '  echo "contenido" > archivo - Escribir en archivo',
        '  git add <archivo>       - Agregar archivo al staging area',
        '  git add .               - Agregar todos los archivos',
        '  git commit -m "mensaje" - Crear commit',
        '',
        'Ramas:',
        '  git branch              - Listar ramas',
        '  git branch <nombre>     - Crear rama',
        '  git checkout <rama>     - Cambiar de rama',
        '',
        'Otros:',
        '  clear                   - Limpiar terminal',
        '  help                    - Mostrar esta ayuda'
      ],
      repository
    }
  }

  if (gitCommand === 'clear') {
    return {
      output: [],
      repository
    }
  }

  if (gitCommand === 'touch') {
    if (!args[1]) {
      return {
        output: ['touch: falta el nombre del archivo'],
        repository,
        isError: true
      }
    }
    
    const fileName = args[1]
    const newRepository = { ...repository }
    
    if (!newRepository.files.find(f => f.name === fileName)) {
      newRepository.files.push({
        name: fileName,
        status: 'untracked',
        content: ''
      })
    }
    
    return {
      output: [`Archivo '${fileName}' creado`],
      repository: newRepository
    }
  }

  if (gitCommand === 'echo') {
    if (args.length < 4 || args[args.length - 2] !== '>') {
      return {
        output: ['Uso: echo "contenido" > archivo'],
        repository,
        isError: true
      }
    }
    
    const fileName = args[args.length - 1]
    const content = args.slice(1, -2).join(' ').replace(/"/g, '')
    const newRepository = { ...repository }
    
    const fileIndex = newRepository.files.findIndex(f => f.name === fileName)
    if (fileIndex >= 0) {
      newRepository.files[fileIndex].content = content
      if (newRepository.files[fileIndex].status === 'committed') {
        newRepository.files[fileIndex].status = 'modified'
      }
    } else {
      newRepository.files.push({
        name: fileName,
        status: 'untracked',
        content
      })
    }
    
    return {
      output: [`Contenido escrito en '${fileName}'`],
      repository: newRepository
    }
  }

  // Git commands
  if (gitCommand !== 'git') {
    return {
      output: [`Comando no reconocido: ${gitCommand}. Escribe 'help' para ver comandos disponibles.`],
      repository,
      isError: true
    }
  }

  switch (subCommand) {
    case 'init':
      if (repository.isInitialized) {
        return {
          output: ['Ya existe un repositorio Git inicializado'],
          repository,
          isError: true
        }
      }
      
      return {
        output: ['Repositorio Git inicializado en .git/'],
        repository: { ...repository, isInitialized: true }
      }

    case 'config':
      if (args.length < 4) {
        return {
          output: ['Uso: git config user.name "Nombre" o git config user.email "email"'],
          repository,
          isError: true
        }
      }
      
      const configKey = args[2]
      const configValue = args.slice(3).join(' ').replace(/"/g, '')
      const newRepository = { ...repository }
      
      if (configKey === 'user.name') {
        newRepository.userConfig.name = configValue
        return {
          output: [`Nombre de usuario configurado: ${configValue}`],
          repository: newRepository
        }
      } else if (configKey === 'user.email') {
        newRepository.userConfig.email = configValue
        return {
          output: [`Email configurado: ${configValue}`],
          repository: newRepository
        }
      }
      
      return {
        output: [`Configuración no reconocida: ${configKey}`],
        repository,
        isError: true
      }

    case 'status':
      if (!repository.isInitialized) {
        return {
          output: ['fatal: no es un repositorio git'],
          repository,
          isError: true
        }
      }
      
      const statusOutput = ['En la rama ' + repository.currentBranch, '']
      
      const stagedFiles = repository.files.filter(f => f.status === 'staged')
      const modifiedFiles = repository.files.filter(f => f.status === 'modified')
      const untrackedFiles = repository.files.filter(f => f.status === 'untracked')
      
      if (stagedFiles.length > 0) {
        statusOutput.push('Cambios listos para commit:')
        stagedFiles.forEach(file => {
          statusOutput.push(`\tnuevo archivo: ${file.name}`)
        })
        statusOutput.push('')
      }
      
      if (modifiedFiles.length > 0) {
        statusOutput.push('Cambios no preparados para commit:')
        statusOutput.push('  (usa "git add <archivo>..." para preparar)')
        modifiedFiles.forEach(file => {
          statusOutput.push(`\tmodificado: ${file.name}`)
        })
        statusOutput.push('')
      }
      
      if (untrackedFiles.length > 0) {
        statusOutput.push('Archivos sin seguimiento:')
        statusOutput.push('  (usa "git add <archivo>..." para incluir en commit)')
        untrackedFiles.forEach(file => {
          statusOutput.push(`\t${file.name}`)
        })
        statusOutput.push('')
      }
      
      if (stagedFiles.length === 0 && modifiedFiles.length === 0 && untrackedFiles.length === 0) {
        statusOutput.push('árbol de trabajo limpio')
      }
      
      return {
        output: statusOutput,
        repository
      }

    case 'add':
      if (!repository.isInitialized) {
        return {
          output: ['fatal: no es un repositorio git'],
          repository,
          isError: true
        }
      }
      
      if (!args[2]) {
        return {
          output: ['Nada especificado, nada agregado.'],
          repository,
          isError: true
        }
      }
      
      const newRepo = { ...repository }
      const fileName = args[2]
      
      if (fileName === '.') {
        // Add all files
        newRepo.files = newRepo.files.map(file => 
          file.status === 'untracked' || file.status === 'modified' 
            ? { ...file, status: 'staged' }
            : file
        )
        
        const addedCount = newRepo.files.filter(f => f.status === 'staged').length
        return {
          output: [`${addedCount} archivo(s) agregado(s) al staging area`],
          repository: newRepo
        }
      } else {
        // Add specific file
        const fileIndex = newRepo.files.findIndex(f => f.name === fileName)
        if (fileIndex === -1) {
          return {
            output: [`fatal: pathspec '${fileName}' no coincide con ningún archivo`],
            repository,
            isError: true
          }
        }
        
        if (newRepo.files[fileIndex].status === 'untracked' || 
            newRepo.files[fileIndex].status === 'modified') {
          newRepo.files[fileIndex].status = 'staged'
          return {
            output: [`Archivo '${fileName}' agregado al staging area`],
            repository: newRepo
          }
        }
        
        return {
          output: [`El archivo '${fileName}' ya está en el staging area`],
          repository
        }
      }

    case 'commit':
      if (!repository.isInitialized) {
        return {
          output: ['fatal: no es un repositorio git'],
          repository,
          isError: true
        }
      }
      
      const stagedFilesForCommit = repository.files.filter(f => f.status === 'staged')
      if (stagedFilesForCommit.length === 0) {
        return {
          output: ['En la rama ' + repository.currentBranch, 'nada para hacer commit, árbol de trabajo limpio'],
          repository
        }
      }
      
      if (!args.includes('-m')) {
        return {
          output: ['fatal: debe especificar un mensaje de commit con -m'],
          repository,
          isError: true
        }
      }
      
      const messageIndex = args.indexOf('-m') + 1
      if (messageIndex >= args.length) {
        return {
          output: ['fatal: debe especificar un mensaje después de -m'],
          repository,
          isError: true
        }
      }
      
      const message = args.slice(messageIndex).join(' ').replace(/"/g, '')
      const commitHash = Math.random().toString(36).substr(2, 7)
      
      const newRepoForCommit = { ...repository }
      
      // Update file statuses
      newRepoForCommit.files = newRepoForCommit.files.map(file =>
        file.status === 'staged' ? { ...file, status: 'committed' } : file
      )
      
      // Add commit to history
      newRepoForCommit.commits.push({
        hash: commitHash,
        message,
        author: repository.userConfig.name || 'Usuario',
        date: new Date().toISOString()
      })
      
      return {
        output: [
          `[${repository.currentBranch} ${commitHash}] ${message}`,
          `${stagedFilesForCommit.length} archivo(s) cambiado(s)`
        ],
        repository: newRepoForCommit
      }

    case 'log':
      if (!repository.isInitialized) {
        return {
          output: ['fatal: no es un repositorio git'],
          repository,
          isError: true
        }
      }
      
      if (repository.commits.length === 0) {
        return {
          output: ['fatal: tu rama actual no tiene commits aún'],
          repository,
          isError: true
        }
      }
      
      const logOutput: string[] = []
      repository.commits.slice().reverse().forEach(commit => {
        logOutput.push(`commit ${commit.hash}`)
        logOutput.push(`Author: ${commit.author} <${repository.userConfig.email || 'email@example.com'}>`)
        logOutput.push(`Date: ${new Date(commit.date).toLocaleString()}`)
        logOutput.push('')
        logOutput.push(`    ${commit.message}`)
        logOutput.push('')
      })
      
      return {
        output: logOutput,
        repository
      }

    case 'branch':
      if (!repository.isInitialized) {
        return {
          output: ['fatal: no es un repositorio git'],
          repository,
          isError: true
        }
      }
      
      if (!args[2]) {
        // List branches
        return {
          output: repository.branches.map(branch => 
            branch === repository.currentBranch ? `* ${branch}` : `  ${branch}`
          ),
          repository
        }
      } else {
        // Create new branch
        const branchName = args[2]
        if (repository.branches.includes(branchName)) {
          return {
            output: [`fatal: una rama llamada '${branchName}' ya existe`],
            repository,
            isError: true
          }
        }
        
        const newRepoForBranch = { ...repository }
        newRepoForBranch.branches.push(branchName)
        
        return {
          output: [`Rama '${branchName}' creada`],
          repository: newRepoForBranch
        }
      }

    case 'checkout':
      if (!repository.isInitialized) {
        return {
          output: ['fatal: no es un repositorio git'],
          repository,
          isError: true
        }
      }
      
      if (!args[2]) {
        return {
          output: ['fatal: debe especificar una rama'],
          repository,
          isError: true
        }
      }
      
      const targetBranch = args[2]
      if (!repository.branches.includes(targetBranch)) {
        return {
          output: [`error: pathspec '${targetBranch}' no coincide con ninguna rama conocida`],
          repository,
          isError: true
        }
      }
      
      if (targetBranch === repository.currentBranch) {
        return {
          output: [`Ya en la rama '${targetBranch}'`],
          repository
        }
      }
      
      return {
        output: [`Cambiado a rama '${targetBranch}'`],
        repository: { ...repository, currentBranch: targetBranch }
      }

    default:
      return {
        output: [`git: '${subCommand}' no es un comando git. Ver 'help'.`],
        repository,
        isError: true
      }
  }
}
