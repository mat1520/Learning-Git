'use client'

import React from 'react'
import { Trophy, Star, Award, Target, CheckCircle, Lock } from 'lucide-react'
import { Achievement } from '@/types'
import { useLocalStorage } from '@/hooks/useLocalStorage'

const AVAILABLE_ACHIEVEMENTS: Achievement[] = [
  // Categoría: Básicos
  {
    id: 'first-init',
    title: 'Primer Paso',
    description: 'Inicializaste tu primer repositorio Git',
    icon: 'trophy',
    unlocked: false,
    unlockedAt: null,
    category: 'basics',
    points: 10
  },
  {
    id: 'first-commit',
    title: 'Primer Commit',
    description: 'Realizaste tu primer commit',
    icon: 'star',
    unlocked: false,
    unlockedAt: null,
    category: 'basics',
    points: 15
  },
  {
    id: 'first-status',
    title: 'Inspector',
    description: 'Usaste git status para ver el estado',
    icon: 'target',
    unlocked: false,
    unlockedAt: null,
    category: 'basics',
    points: 5
  },
  {
    id: 'first-add',
    title: 'Preparador',
    description: 'Agregaste tu primer archivo al staging area',
    icon: 'checkCircle',
    unlocked: false,
    unlockedAt: null,
    category: 'basics',
    points: 10
  },
  {
    id: 'help-seeker',
    title: 'Curioso',
    description: 'Usaste el comando help para aprender',
    icon: 'star',
    unlocked: false,
    unlockedAt: null,
    category: 'basics',
    points: 5
  },

  // Categoría: Configuración
  {
    id: 'config-master',
    title: 'Configurador',
    description: 'Configuraste tu nombre y email en Git',
    icon: 'award',
    unlocked: false,
    unlockedAt: null,
    category: 'configuration',
    points: 10
  },
  {
    id: 'name-setter',
    title: 'Identificado',
    description: 'Configuraste tu nombre de usuario',
    icon: 'target',
    unlocked: false,
    unlockedAt: null,
    category: 'configuration',
    points: 5
  },

  // Categoría: Ramas
  {
    id: 'branch-creator',
    title: 'Ramificador',
    description: 'Creaste tu primera rama',
    icon: 'target',
    unlocked: false,
    unlockedAt: null,
    category: 'branching',
    points: 20
  },
  {
    id: 'branch-switcher',
    title: 'Navegante',
    description: 'Cambiaste entre ramas usando checkout',
    icon: 'star',
    unlocked: false,
    unlockedAt: null,
    category: 'branching',
    points: 15
  },
  {
    id: 'multi-branch',
    title: 'Multi-rama',
    description: 'Tienes 3 o más ramas en tu repositorio',
    icon: 'trophy',
    unlocked: false,
    unlockedAt: null,
    category: 'branching',
    points: 30
  },
  {
    id: 'branch-lister',
    title: 'Explorador',
    description: 'Listaste las ramas con git branch',
    icon: 'checkCircle',
    unlocked: false,
    unlockedAt: null,
    category: 'branching',
    points: 10
  },

  // Categoría: Organización
  {
    id: 'multi-file',
    title: 'Organizador',
    description: 'Tienes más de 3 archivos en tu repositorio',
    icon: 'checkCircle',
    unlocked: false,
    unlockedAt: null,
    category: 'organization',
    points: 15
  },
  {
    id: 'file-creator',
    title: 'Creativo',
    description: 'Creaste un archivo usando touch',
    icon: 'star',
    unlocked: false,
    unlockedAt: null,
    category: 'organization',
    points: 10
  },
  {
    id: 'content-writer',
    title: 'Escritor',
    description: 'Escribiste contenido en un archivo usando echo',
    icon: 'target',
    unlocked: false,
    unlockedAt: null,
    category: 'organization',
    points: 15
  },
  {
    id: 'add-all',
    title: 'Eficiente',
    description: 'Usaste git add . para agregar todos los archivos',
    icon: 'trophy',
    unlocked: false,
    unlockedAt: null,
    category: 'organization',
    points: 20
  },
  {
    id: 'big-repo',
    title: 'Constructor',
    description: 'Tienes más de 10 archivos en tu repositorio',
    icon: 'award',
    unlocked: false,
    unlockedAt: null,
    category: 'organization',
    points: 40
  },

  // Categoría: Productividad
  {
    id: 'commit-streak',
    title: 'Productivo',
    description: 'Realizaste 5 commits',
    icon: 'star',
    unlocked: false,
    unlockedAt: null,
    category: 'productivity',
    points: 25
  },
  {
    id: 'log-viewer',
    title: 'Historiador',
    description: 'Consultaste el historial con git log',
    icon: 'target',
    unlocked: false,
    unlockedAt: null,
    category: 'productivity',
    points: 10
  },
  {
    id: 'commit-master',
    title: 'Commitero',
    description: 'Realizaste 10 commits',
    icon: 'trophy',
    unlocked: false,
    unlockedAt: null,
    category: 'productivity',
    points: 50
  },
  {
    id: 'speed-demon',
    title: 'Demonio Veloz',
    description: 'Realizaste 3 commits en una sesión',
    icon: 'award',
    unlocked: false,
    unlockedAt: null,
    category: 'productivity',
    points: 35
  },
  {
    id: 'cleaner',
    title: 'Limpiador',
    description: 'Limpiaste la terminal con clear',
    icon: 'checkCircle',
    unlocked: false,
    unlockedAt: null,
    category: 'productivity',
    points: 5
  },
  {
    id: 'resetter',
    title: 'Renovador',
    description: 'Reiniciaste el repositorio con reset-repo',
    icon: 'star',
    unlocked: false,
    unlockedAt: null,
    category: 'productivity',
    points: 15
  },

  // Categoría: Experto
  {
    id: 'git-guru',
    title: 'Gurú del Git',
    description: 'Desbloqueaste 15 logros',
    icon: 'trophy',
    unlocked: false,
    unlockedAt: null,
    category: 'productivity',
    points: 100
  },
  {
    id: 'command-explorer',
    title: 'Explorador de Comandos',
    description: 'Usaste 10 comandos diferentes',
    icon: 'award',
    unlocked: false,
    unlockedAt: null,
    category: 'productivity',
    points: 60
  },
  {
    id: 'persistent',
    title: 'Persistente',
    description: 'Volviste después de reiniciar el repositorio',
    icon: 'star',
    unlocked: false,
    unlockedAt: null,
    category: 'productivity',
    points: 25
  },
  {
    id: 'perfectionist',
    title: 'Perfeccionista',
    description: 'Escribiste un commit con más de 10 caracteres',
    icon: 'target',
    unlocked: false,
    unlockedAt: null,
    category: 'productivity',
    points: 20
  }
]

const getIcon = (iconName: string, isUnlocked: boolean) => {
  const className = `w-8 h-8 ${isUnlocked ? 'text-yellow-500' : 'text-gray-400'}`
  
  switch (iconName) {
    case 'trophy':
      return <Trophy className={className} />
    case 'star':
      return <Star className={className} />
    case 'award':
      return <Award className={className} />
    case 'target':
      return <Target className={className} />
    case 'checkCircle':
      return <CheckCircle className={className} />
    default:
      return <Trophy className={className} />
  }
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'basics':
      return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    case 'configuration':
      return 'bg-green-500/20 text-green-400 border-green-500/30'
    case 'branching':
      return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
    case 'organization':
      return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
    case 'productivity':
      return 'bg-red-500/20 text-red-400 border-red-500/30'
    default:
      return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
  }
}

interface AchievementSystemProps {
  onAchievementUnlock?: (achievement: Achievement) => void
}

export default function AchievementSystem({ onAchievementUnlock }: AchievementSystemProps) {
  const [achievements, setAchievements] = useLocalStorage<Achievement[]>('user-achievements', AVAILABLE_ACHIEVEMENTS)

  // Función para verificar y desbloquear logros
  const checkAchievements = (repository: any) => {
    const updatedAchievements = achievements.map(achievement => {
      if (achievement.unlocked) return achievement

      let shouldUnlock = false

      switch (achievement.id) {
        // Básicos
        case 'first-init':
          shouldUnlock = repository.isInitialized
          break
        case 'first-commit':
          shouldUnlock = repository.commits && repository.commits.length > 0
          break
        case 'first-status':
          shouldUnlock = repository.commandHistory?.some((cmd: string) => cmd.includes('git status'))
          break
        case 'first-add':
          shouldUnlock = repository.files?.some((f: any) => f.status === 'staged')
          break
        case 'help-seeker':
          shouldUnlock = repository.commandHistory?.some((cmd: string) => cmd.includes('help'))
          break

        // Configuración
        case 'config-master':
          shouldUnlock = repository.userConfig?.name && repository.userConfig?.email
          break
        case 'name-setter':
          shouldUnlock = repository.userConfig?.name
          break

        // Ramas
        case 'branch-creator':
          shouldUnlock = repository.branches && repository.branches.length > 1
          break
        case 'branch-switcher':
          shouldUnlock = repository.commandHistory?.some((cmd: string) => cmd.includes('git checkout'))
          break
        case 'multi-branch':
          shouldUnlock = repository.branches && repository.branches.length >= 3
          break
        case 'branch-lister':
          shouldUnlock = repository.commandHistory?.some((cmd: string) => cmd.includes('git branch') && !cmd.includes('git branch '))
          break

        // Organización
        case 'multi-file':
          shouldUnlock = repository.files && repository.files.length > 3
          break
        case 'file-creator':
          shouldUnlock = repository.commandHistory?.some((cmd: string) => cmd.includes('touch'))
          break
        case 'content-writer':
          shouldUnlock = repository.commandHistory?.some((cmd: string) => cmd.includes('echo'))
          break
        case 'add-all':
          shouldUnlock = repository.commandHistory?.some((cmd: string) => cmd.includes('git add .'))
          break
        case 'big-repo':
          shouldUnlock = repository.files && repository.files.length > 10
          break

        // Productividad
        case 'commit-streak':
          shouldUnlock = repository.commits && repository.commits.length >= 5
          break
        case 'log-viewer':
          shouldUnlock = repository.commandHistory?.some((cmd: string) => cmd.includes('git log'))
          break
        case 'commit-master':
          shouldUnlock = repository.commits && repository.commits.length >= 10
          break
        case 'speed-demon':
          // Verificar si hay 3 commits en los últimos comandos (simulado)
          shouldUnlock = repository.commits && repository.commits.length >= 3
          break
        case 'cleaner':
          shouldUnlock = repository.commandHistory?.some((cmd: string) => cmd.includes('clear') || cmd.includes('cls'))
          break
        case 'resetter':
          shouldUnlock = repository.commandHistory?.some((cmd: string) => cmd.includes('reset-repo'))
          break

        // Experto
        case 'git-guru':
          const unlockedCount = achievements.filter(a => a.unlocked).length
          shouldUnlock = unlockedCount >= 15
          break
        case 'command-explorer':
          const uniqueCommands = new Set(repository.commandHistory?.map((cmd: string) => cmd.split(' ')[0]) || [])
          shouldUnlock = uniqueCommands.size >= 10
          break
        case 'persistent':
          shouldUnlock = repository.sessionCount > 1 // Necesitaríamos trackear esto
          break
        case 'perfectionist':
          shouldUnlock = repository.commits?.some((commit: any) => commit.message && commit.message.length > 10)
          break

        default:
          break
      }

      if (shouldUnlock) {
        const unlockedAchievement = {
          ...achievement,
          unlocked: true,
          unlockedAt: new Date().toISOString()
        }
        
        if (onAchievementUnlock) {
          onAchievementUnlock(unlockedAchievement)
        }
        
        return unlockedAchievement
      }

      return achievement
    })

    setAchievements(updatedAchievements)
    return updatedAchievements
  }

  const unlockedAchievements = achievements.filter(a => a.unlocked)
  const totalPoints = unlockedAchievements.reduce((sum, a) => sum + a.points, 0)
  const progressPercentage = (unlockedAchievements.length / achievements.length) * 100

  return (
    <div className="space-y-6">
      {/* Progress Overview */}
      <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg p-6 border border-purple-500/30">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Sistema de Logros</h2>
            <p className="text-purple-300">
              {unlockedAchievements.length} de {achievements.length} logros desbloqueados
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-yellow-400">{totalPoints}</div>
            <div className="text-sm text-yellow-300">puntos</div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
          <div 
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="text-sm text-gray-300">
          {progressPercentage.toFixed(0)}% completado
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`relative p-6 rounded-lg border transition-all duration-300 ${
              achievement.unlocked
                ? 'bg-gradient-to-br from-yellow-900/30 to-yellow-800/30 border-yellow-500/50 shadow-lg shadow-yellow-500/20'
                : 'bg-gray-800/50 border-gray-600 hover:border-gray-500'
            }`}
          >
            {/* Achievement Icon */}
            <div className="flex items-center justify-between mb-4">
              <div className="relative">
                {getIcon(achievement.icon, achievement.unlocked)}
                {!achievement.unlocked && (
                  <Lock className="absolute -bottom-1 -right-1 w-4 h-4 text-gray-500 bg-gray-800 rounded-full p-0.5" />
                )}
              </div>
              
              {/* Category Badge */}
              <div className={`px-2 py-1 rounded-full text-xs border ${getCategoryColor(achievement.category)}`}>
                {achievement.category}
              </div>
            </div>

            {/* Achievement Content */}
            <div className="space-y-2">
              <h3 className={`font-bold text-lg ${achievement.unlocked ? 'text-yellow-300' : 'text-gray-300'}`}>
                {achievement.title}
              </h3>
              <p className={`text-sm ${achievement.unlocked ? 'text-yellow-100' : 'text-gray-400'}`}>
                {achievement.description}
              </p>
              
              {/* Points and Date */}
              <div className="flex items-center justify-between pt-2">
                <div className={`text-xs ${achievement.unlocked ? 'text-yellow-400' : 'text-gray-500'}`}>
                  +{achievement.points} puntos
                </div>
                {achievement.unlocked && achievement.unlockedAt && (
                  <div className="text-xs text-yellow-300">
                    {new Date(achievement.unlockedAt).toLocaleDateString()}
                  </div>
                )}
              </div>
            </div>

            {/* Unlock Animation */}
            {achievement.unlocked && (
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-500/10 to-orange-500/10 animate-pulse"></div>
            )}
          </div>
        ))}
      </div>

      {/* Achievement Categories */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {['basics', 'configuration', 'branching', 'organization', 'productivity'].map(category => {
          const categoryAchievements = achievements.filter(a => a.category === category)
          const unlockedInCategory = categoryAchievements.filter(a => a.unlocked).length
          
          return (
            <div key={category} className="bg-gray-800 rounded-lg p-4 text-center">
              <div className={`text-2xl font-bold mb-1 ${getCategoryColor(category).split(' ')[1]}`}>
                {unlockedInCategory}/{categoryAchievements.length}
              </div>
              <div className="text-sm text-gray-400 capitalize">
                {category === 'basics' && 'Básicos'}
                {category === 'configuration' && 'Configuración'}
                {category === 'branching' && 'Ramas'}
                {category === 'organization' && 'Organización'}
                {category === 'productivity' && 'Productividad'}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Hook para usar el sistema de logros
export const useAchievementSystem = () => {
  const [achievements, setAchievements] = useLocalStorage<Achievement[]>('user-achievements', AVAILABLE_ACHIEVEMENTS)

  const checkAchievements = (repository: any): Achievement[] => {
    const updatedAchievements = achievements.map(achievement => {
      if (achievement.unlocked) return achievement

      let shouldUnlock = false

      switch (achievement.id) {
        // Básicos
        case 'first-init':
          shouldUnlock = repository.isInitialized
          break
        case 'first-commit':
          shouldUnlock = repository.commits && repository.commits.length > 0
          break
        case 'first-status':
          shouldUnlock = repository.commandHistory?.some((cmd: string) => cmd.includes('git status'))
          break
        case 'first-add':
          shouldUnlock = repository.files?.some((f: any) => f.status === 'staged')
          break
        case 'help-seeker':
          shouldUnlock = repository.commandHistory?.some((cmd: string) => cmd.includes('help'))
          break

        // Configuración
        case 'config-master':
          shouldUnlock = repository.userConfig?.name && repository.userConfig?.email
          break
        case 'name-setter':
          shouldUnlock = repository.userConfig?.name
          break

        // Ramas
        case 'branch-creator':
          shouldUnlock = repository.branches && repository.branches.length > 1
          break
        case 'branch-switcher':
          shouldUnlock = repository.commandHistory?.some((cmd: string) => cmd.includes('git checkout'))
          break
        case 'multi-branch':
          shouldUnlock = repository.branches && repository.branches.length >= 3
          break
        case 'branch-lister':
          shouldUnlock = repository.commandHistory?.some((cmd: string) => cmd.includes('git branch') && !cmd.includes('git branch '))
          break

        // Organización
        case 'multi-file':
          shouldUnlock = repository.files && repository.files.length > 3
          break
        case 'file-creator':
          shouldUnlock = repository.commandHistory?.some((cmd: string) => cmd.includes('touch'))
          break
        case 'content-writer':
          shouldUnlock = repository.commandHistory?.some((cmd: string) => cmd.includes('echo'))
          break
        case 'add-all':
          shouldUnlock = repository.commandHistory?.some((cmd: string) => cmd.includes('git add .'))
          break
        case 'big-repo':
          shouldUnlock = repository.files && repository.files.length > 10
          break

        // Productividad
        case 'commit-streak':
          shouldUnlock = repository.commits && repository.commits.length >= 5
          break
        case 'log-viewer':
          shouldUnlock = repository.commandHistory?.some((cmd: string) => cmd.includes('git log'))
          break
        case 'commit-master':
          shouldUnlock = repository.commits && repository.commits.length >= 10
          break
        case 'speed-demon':
          // Verificar si hay 3 commits en los últimos comandos (simulado)
          shouldUnlock = repository.commits && repository.commits.length >= 3
          break
        case 'cleaner':
          shouldUnlock = repository.commandHistory?.some((cmd: string) => cmd.includes('clear') || cmd.includes('cls'))
          break
        case 'resetter':
          shouldUnlock = repository.commandHistory?.some((cmd: string) => cmd.includes('reset-repo'))
          break

        // Experto
        case 'git-guru':
          const unlockedCount = achievements.filter(a => a.unlocked).length
          shouldUnlock = unlockedCount >= 15
          break
        case 'command-explorer':
          const uniqueCommands = new Set(repository.commandHistory?.map((cmd: string) => cmd.split(' ')[0]) || [])
          shouldUnlock = uniqueCommands.size >= 10
          break
        case 'persistent':
          shouldUnlock = repository.sessionCount > 1 // Necesitaríamos trackear esto
          break
        case 'perfectionist':
          shouldUnlock = repository.commits?.some((commit: any) => commit.message && commit.message.length > 10)
          break

        default:
          break
      }

      if (shouldUnlock) {
        return {
          ...achievement,
          unlocked: true,
          unlockedAt: new Date().toISOString()
        }
      }

      return achievement
    })

    setAchievements(updatedAchievements)
    return updatedAchievements
  }

  return { achievements, checkAchievements }
}
