'use client'
import { useState, useEffect } from 'react'
import { Trophy, Star, Award, Target, CheckCircle, Lock } from 'lucide-react'

interface Achievement {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  category: 'beginner' | 'intermediate' | 'advanced'
  requirement: string
  points: number
  unlocked: boolean
  progress?: number
  maxProgress?: number
}

const initialAchievements: Achievement[] = [
  {
    id: 'first-init',
    title: 'Primer Paso',
    description: 'Inicializa tu primer repositorio Git',
    icon: <Trophy className="w-6 h-6 text-yellow-500" />,
    category: 'beginner',
    requirement: 'Ejecuta git init',
    points: 100,
    unlocked: false
  },
  {
    id: 'first-commit',
    title: 'Tu Primera Huella',
    description: 'Realiza tu primer commit en Git',
    icon: <Star className="w-6 h-6 text-blue-500" />,
    category: 'beginner',
    requirement: 'Realiza un commit',
    points: 150,
    unlocked: false
  },
  {
    id: 'config-master',
    title: 'Configuración Completa',
    description: 'Configura tu nombre y email en Git',
    icon: <Award className="w-6 h-6 text-green-500" />,
    category: 'beginner',
    requirement: 'Configura user.name y user.email',
    points: 100,
    unlocked: false
  },
  {
    id: 'command-explorer',
    title: 'Explorador de Comandos',
    description: 'Ejecuta 10 comandos Git diferentes',
    icon: <Target className="w-6 h-6 text-purple-500" />,
    category: 'beginner',
    requirement: 'Usa 10 comandos diferentes',
    points: 200,
    unlocked: false,
    progress: 0,
    maxProgress: 10
  },
  {
    id: 'branch-creator',
    title: 'Maestro de Ramas',
    description: 'Crea y cambia entre múltiples ramas',
    icon: <Trophy className="w-6 h-6 text-indigo-500" />,
    category: 'intermediate',
    requirement: 'Crea 3 ramas diferentes',
    points: 300,
    unlocked: false,
    progress: 0,
    maxProgress: 3
  },
  {
    id: 'commit-streak',
    title: 'Racha de Commits',
    description: 'Realiza 5 commits seguidos',
    icon: <Star className="w-6 h-6 text-orange-500" />,
    category: 'intermediate',
    requirement: 'Haz 5 commits',
    points: 250,
    unlocked: false,
    progress: 0,
    maxProgress: 5
  },
  {
    id: 'log-master',
    title: 'Historiador',
    description: 'Consulta el historial de commits múltiples veces',
    icon: <Award className="w-6 h-6 text-red-500" />,
    category: 'intermediate',
    requirement: 'Usa git log 5 veces',
    points: 150,
    unlocked: false,
    progress: 0,
    maxProgress: 5
  },
  {
    id: 'file-manager',
    title: 'Gestor de Archivos',
    description: 'Trabaja con múltiples archivos en tu repositorio',
    icon: <Target className="w-6 h-6 text-teal-500" />,
    category: 'advanced',
    requirement: 'Maneja 10 archivos diferentes',
    points: 400,
    unlocked: false,
    progress: 0,
    maxProgress: 10
  },
  {
    id: 'git-ninja',
    title: 'Ninja de Git',
    description: 'Demuestra dominio completo de Git',
    icon: <Trophy className="w-6 h-6 text-pink-500" />,
    category: 'advanced',
    requirement: 'Desbloquea todos los demás logros',
    points: 1000,
    unlocked: false
  }
]

export default function LogrosPage() {
  const [achievements, setAchievements] = useState<Achievement[]>(initialAchievements)
  const [totalPoints, setTotalPoints] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  // Load achievements from localStorage
  useEffect(() => {
    const savedAchievements = localStorage.getItem('git-achievements')
    if (savedAchievements) {
      const parsed = JSON.parse(savedAchievements)
      setAchievements(parsed)
      
      // Calculate total points
      const points = parsed.reduce((sum: number, ach: Achievement) => 
        sum + (ach.unlocked ? ach.points : 0), 0
      )
      setTotalPoints(points)
    }
  }, [])

  // Check achievements when terminal history changes
  useEffect(() => {
    const checkAchievements = () => {
      const terminalHistory = localStorage.getItem('git-terminal-history')
      const repoState = localStorage.getItem('git-terminal-repo')
      
      if (!terminalHistory) return

      const history = JSON.parse(terminalHistory)
      const repo = repoState ? JSON.parse(repoState) : null

      const updatedAchievements = achievements.map(achievement => {
        if (achievement.unlocked) return achievement

        const newAchievement = { ...achievement }

        switch (achievement.id) {
          case 'first-init':
            if (repo?.isInitialized) {
              newAchievement.unlocked = true
            }
            break

          case 'first-commit':
            if (repo?.commits?.length > 0) {
              newAchievement.unlocked = true
            }
            break

          case 'config-master':
            if (repo?.userConfig?.name && repo?.userConfig?.email) {
              newAchievement.unlocked = true
            }
            break

          case 'command-explorer':
            const uniqueCommands = new Set(
              history.map((h: any) => h.command.split(' ')[0])
            )
            newAchievement.progress = Math.min(uniqueCommands.size, 10)
            if (uniqueCommands.size >= 10) {
              newAchievement.unlocked = true
            }
            break

          case 'branch-creator':
            const branchCount = repo?.branches?.length || 1
            newAchievement.progress = Math.min(branchCount - 1, 3) // -1 because main is default
            if (branchCount >= 4) {
              newAchievement.unlocked = true
            }
            break

          case 'commit-streak':
            const commitCount = repo?.commits?.length || 0
            newAchievement.progress = Math.min(commitCount, 5)
            if (commitCount >= 5) {
              newAchievement.unlocked = true
            }
            break

          case 'log-master':
            const logCount = history.filter((h: any) => 
              h.command.includes('git log')
            ).length
            newAchievement.progress = Math.min(logCount, 5)
            if (logCount >= 5) {
              newAchievement.unlocked = true
            }
            break

          case 'file-manager':
            const fileCount = repo?.files?.length || 0
            newAchievement.progress = Math.min(fileCount, 10)
            if (fileCount >= 10) {
              newAchievement.unlocked = true
            }
            break

          case 'git-ninja':
            const otherAchievements = achievements.filter(a => a.id !== 'git-ninja')
            const unlockedCount = otherAchievements.filter(a => a.unlocked).length
            if (unlockedCount === otherAchievements.length) {
              newAchievement.unlocked = true
            }
            break
        }

        return newAchievement
      })

      setAchievements(updatedAchievements)
      localStorage.setItem('git-achievements', JSON.stringify(updatedAchievements))
      
      // Calculate new total points
      const newTotalPoints = updatedAchievements.reduce((sum, ach) => 
        sum + (ach.unlocked ? ach.points : 0), 0
      )
      setTotalPoints(newTotalPoints)
    }

    // Check achievements periodically
    const interval = setInterval(checkAchievements, 2000)
    return () => clearInterval(interval)
  }, [achievements])

  const filteredAchievements = achievements.filter(achievement =>
    selectedCategory === 'all' || achievement.category === selectedCategory
  )

  const unlockedCount = achievements.filter(a => a.unlocked).length
  const totalCount = achievements.length

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'beginner': return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300'
      case 'intermediate': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300'
      case 'advanced': return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-300'
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sistema de Logros
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Gana medallas y puntos mientras aprendes Git. Tu progreso se guarda automáticamente.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-primary-600 mb-2">{totalPoints}</div>
            <div className="text-gray-600 dark:text-gray-300">Puntos totales</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-green-600 mb-2">{unlockedCount}/{totalCount}</div>
            <div className="text-gray-600 dark:text-gray-300">Logros desbloqueados</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-purple-600 mb-2">{Math.round((unlockedCount / totalCount) * 100)}%</div>
            <div className="text-gray-600 dark:text-gray-300">Progreso general</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-md inline-flex">
            {[
              { key: 'all', label: 'Todos' },
              { key: 'beginner', label: 'Principiante' },
              { key: 'intermediate', label: 'Intermedio' },
              { key: 'advanced', label: 'Avanzado' }
            ].map(category => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === category.key
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map(achievement => (
            <AchievementCard key={achievement.id} achievement={achievement} getCategoryColor={getCategoryColor} />
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            ¿Cómo desbloquear logros?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600 dark:text-gray-300">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Para principiantes:</h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>Usa la terminal Git interactiva en la sección de ejercicios</li>
                <li>Sigue las guías paso a paso</li>
                <li>Experimenta con diferentes comandos</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Para avanzados:</h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>Completa proyectos complejos con múltiples ramas</li>
                <li>Practica workflows profesionales</li>
                <li>Desbloquea todos los logros básicos e intermedios</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AchievementCard({ 
  achievement, 
  getCategoryColor 
}: { 
  achievement: Achievement
  getCategoryColor: (category: string) => string 
}) {
  const progressPercentage = achievement.maxProgress 
    ? Math.round(((achievement.progress || 0) / achievement.maxProgress) * 100)
    : 0

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 transition-all duration-300 ${
      achievement.unlocked 
        ? 'ring-2 ring-yellow-400 shadow-yellow-100 dark:shadow-yellow-900/20' 
        : 'opacity-75'
    }`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-full ${achievement.unlocked ? 'bg-yellow-100 dark:bg-yellow-900' : 'bg-gray-100 dark:bg-gray-700'}`}>
            {achievement.unlocked ? achievement.icon : <Lock className="w-6 h-6 text-gray-400" />}
          </div>
          <div>
            <h3 className={`font-bold ${achievement.unlocked ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              {achievement.title}
            </h3>
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${getCategoryColor(achievement.category)}`}>
              {achievement.category === 'beginner' ? 'Principiante' : 
               achievement.category === 'intermediate' ? 'Intermedio' : 'Avanzado'}
            </span>
          </div>
        </div>
        {achievement.unlocked && <CheckCircle className="w-6 h-6 text-green-500" />}
      </div>

      {/* Description */}
      <p className={`text-sm mb-3 ${achievement.unlocked ? 'text-gray-600 dark:text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}>
        {achievement.description}
      </p>

      {/* Requirement */}
      <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
        <strong>Requisito:</strong> {achievement.requirement}
      </div>

      {/* Progress Bar */}
      {achievement.maxProgress && (
        <div className="mb-3">
          <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-1">
            <span>Progreso</span>
            <span>{achievement.progress || 0}/{achievement.maxProgress}</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Points */}
      <div className="flex justify-between items-center pt-3 border-t border-gray-200 dark:border-gray-700">
        <span className="text-sm font-medium text-gray-900 dark:text-white">
          {achievement.points} puntos
        </span>
        {achievement.unlocked && (
          <span className="text-xs text-green-600 dark:text-green-400 font-medium">
            ¡Desbloqueado!
          </span>
        )}
      </div>
    </div>
  )
}
