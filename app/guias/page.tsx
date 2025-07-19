import Link from 'next/link'
import { BookOpen, Clock, Users, Target, GitBranch, GitCommit, GitMerge, Code, Terminal, Video, Star, Award } from 'lucide-react'

const guides = [
  // Nivel Principiante
  {
    id: 'introduccion-git',
    title: '🚀 Introducción Completa a Git',
    description: 'Descubre qué es Git, su importancia en el desarrollo moderno, y cómo puede transformar tu flujo de trabajo. Incluye historia, filosofía y casos de uso reales.',
    level: 'Principiante' as const,
    duration: '20 min',
    topics: ['¿Qué es Git y por qué usarlo?', 'Historia del control de versiones', 'Git vs otros VCS', 'Instalación en Windows/Mac/Linux', 'Configuración inicial completa'],
    icon: <BookOpen className="w-6 h-6 text-blue-500" />,
    difficulty: 1,
    exercises: 4,
    videoCount: 3,
    practical: true
  },
  {
    id: 'primer-repositorio',
    title: '🌱 Tu Primer Repositorio Git',
    description: 'Experiencia práctica paso a paso: desde la inicialización hasta tu primer commit. Aprende los comandos fundamentales con ejemplos reales.',
    level: 'Principiante' as const,
    duration: '25 min',
    topics: ['git init explicado', 'Anatomía de un repositorio', 'git add y staging area', 'Escribir buenos commits', 'git status en detalle', 'git log y visualización'],
    icon: <Terminal className="w-6 h-6 text-green-500" />,
    difficulty: 1,
    exercises: 6,
    videoCount: 4,
    practical: true
  },
  {
    id: 'estados-archivos-detallado',
    title: '📊 Ciclo de Vida de Archivos en Git',
    description: 'Comprende profundamente los 4 estados de archivos en Git. Visualiza cómo se mueven los archivos entre working directory, staging area y repository.',
    level: 'Principiante' as const,
    duration: '22 min',
    topics: ['Working Directory explicado', 'Staging Area (Index)', 'Repository local', 'Estados: Untracked → Modified → Staged → Committed', 'Comandos para cada transición'],
    icon: <Code className="w-6 h-6 text-purple-500" />,
    difficulty: 2,
    exercises: 5,
    videoCount: 3,
    practical: true
  },
  {
    id: 'gitignore-y-archivos',
    title: '🔒 Gestión de Archivos con .gitignore',
    description: 'Aprende a excluir archivos y carpetas de tu repositorio. Patrones avanzados, plantillas por lenguaje y mejores prácticas.',
    level: 'Principiante' as const,
    duration: '18 min',
    topics: ['.gitignore básico', 'Patrones y wildcards', 'Gitignore por lenguajes', 'Archivos ya trackeados', 'gitignore global'],
    icon: <Code className="w-6 h-6 text-gray-500" />,
    difficulty: 2,
    exercises: 3,
    videoCount: 2,
    practical: true
  },

  // Nivel Intermedio
  {
    id: 'ramas-profesionales',
    title: '🌳 Ramas: Desde Básico a Profesional',
    description: 'Domina completamente el sistema de ramas de Git. Estrategias de nombrado, flujos de trabajo y técnicas avanzadas de manejo de ramas.',
    level: 'Intermedio' as const,
    duration: '35 min',
    topics: ['Conceptos de ramas', 'git branch vs git checkout vs git switch', 'Naming conventions', 'Feature branches', 'Ramas remotas', 'Tracking branches'],
    icon: <GitBranch className="w-6 h-6 text-orange-500" />,
    difficulty: 3,
    exercises: 8,
    videoCount: 5,
    practical: true
  },
  {
    id: 'merge-y-conflictos-avanzado',
    title: '⚔️ Merge Mastery y Resolución de Conflictos',
    description: 'Conviértete en experto resolviendo conflictos. Herramientas, estrategias y técnicas para situaciones complejas.',
    level: 'Intermedio' as const,
    duration: '40 min',
    topics: ['Tipos de merge', 'Fast-forward vs 3-way merge', 'Estrategias de merge', 'Conflictos complejos', 'Herramientas de merge', 'Prevention strategies'],
    icon: <GitMerge className="w-6 h-6 text-red-500" />,
    difficulty: 4,
    exercises: 10,
    videoCount: 6,
    practical: true
  },
  {
    id: 'historial-y-arqueologia',
    title: '🔍 Arqueología de Código con Git',
    description: 'Técnicas avanzadas para explorar, analizar y entender el historial de tu proyecto. Encuentra bugs, autores y cambios específicos.',
    level: 'Intermedio' as const,
    duration: '30 min',
    topics: ['git log avanzado', 'Filtros y formatos', 'git blame detective work', 'git bisect para bugs', 'git show en detalle', 'Análisis de diferencias'],
    icon: <GitCommit className="w-6 h-6 text-indigo-500" />,
    difficulty: 3,
    exercises: 7,
    videoCount: 4,
    practical: true
  },
  {
    id: 'repositorios-remotos-pro',
    title: '☁️ Repositorios Remotos Profesionales',
    description: 'Configuración completa de remotos, autenticación segura, y flujos de trabajo distribuidos. GitHub, GitLab, y otros servicios.',
    level: 'Intermedio' as const,
    duration: '32 min',
    topics: ['Configuración de remotos', 'SSH vs HTTPS', 'git push/pull/fetch', 'Tracking branches', 'Multiple remotes', 'Forks y upstream'],
    icon: <Target className="w-6 h-6 text-cyan-500" />,
    difficulty: 3,
    exercises: 6,
    videoCount: 4,
    practical: true
  },

  // Nivel Avanzado
  {
    id: 'rebase-interactivo-master',
    title: '🎯 Rebase Interactivo: Esculpe Tu Historia',
    description: 'Domina el rebase interactivo para crear historiales limpios y profesionales. Squash, edit, reword y más técnicas avanzadas.',
    level: 'Avanzado' as const,
    duration: '45 min',
    topics: ['Rebase vs merge', 'Interactive rebase', 'Squashing commits', 'Editing commits', 'Reordering history', 'Cherry-pick mastery'],
    icon: <Award className="w-6 h-6 text-yellow-500" />,
    difficulty: 5,
    exercises: 12,
    videoCount: 7,
    practical: true
  },
  {
    id: 'flujos-trabajo-empresariales',
    title: '🏢 Flujos de Trabajo Empresariales',
    description: 'Implementa flujos de trabajo escalables para equipos grandes. Git Flow, GitHub Flow, trunk-based development y más.',
    level: 'Avanzado' as const,
    duration: '50 min',
    topics: ['Git Flow completo', 'GitHub Flow', 'GitLab Flow', 'Trunk-based development', 'Release strategies', 'Hotfix workflows'],
    icon: <Users className="w-6 h-6 text-emerald-500" />,
    difficulty: 5,
    exercises: 15,
    videoCount: 8,
    practical: true
  },
  {
    id: 'git-hooks-automatizacion',
    title: '🤖 Git Hooks y Automatización',
    description: 'Automatiza tu flujo de trabajo con Git hooks. Pre-commit, post-commit, pre-push y más. Integración con CI/CD.',
    level: 'Avanzado' as const,
    duration: '35 min',
    topics: ['Client-side hooks', 'Server-side hooks', 'Pre-commit automation', 'Linting y testing', 'CI/CD integration', 'Custom hooks'],
    icon: <Target className="w-6 h-6 text-purple-600" />,
    difficulty: 4,
    exercises: 8,
    videoCount: 5,
    practical: true
  }
]

const getDifficultyStars = (difficulty: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`w-3 h-3 ${
        i < difficulty ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
      }`}
    />
  ))
}

const getDifficultyColor = (difficulty: number) => {
  if (difficulty <= 2) return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
  if (difficulty <= 4) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
  return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
}

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Principiante': return 'bg-gradient-to-r from-blue-500 to-blue-600'
    case 'Intermedio': return 'bg-gradient-to-r from-orange-500 to-orange-600'
    case 'Avanzado': return 'bg-gradient-to-r from-red-500 to-red-600'
    default: return 'bg-gray-500'
  }
}

export default function GuiasPage() {
  const principiante = guides.filter(g => g.level === 'Principiante')
  const intermedio = guides.filter(g => g.level === 'Intermedio')  
  const avanzado = guides.filter(g => g.level === 'Avanzado')

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header mejorado */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
            📚 Guías Completas de Git
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Desde conceptos básicos hasta técnicas profesionales. Cada guía incluye teoría, práctica, ejercicios interactivos y videos explicativos.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg">
              <Terminal className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Práctica Interactiva</span>
            </div>
            <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg">
              <Video className="w-5 h-5 text-red-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Videos HD</span>
            </div>
            <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg">
              <Award className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Sistema de Logros</span>
            </div>
          </div>
        </div>

        {/* Sección Principiante */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
              🌱 Nivel Principiante
            </div>
            <div className="ml-4 text-gray-500 dark:text-gray-400">
              Fundamentos esenciales para empezar
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {principiante.map((guia) => (
              <GuideCard key={guia.id} guide={guia} />
            ))}
          </div>
        </section>

        {/* Sección Intermedio */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
              🚀 Nivel Intermedio
            </div>
            <div className="ml-4 text-gray-500 dark:text-gray-400">
              Técnicas avanzadas para desarrolladores
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {intermedio.map((guia) => (
              <GuideCard key={guia.id} guide={guia} />
            ))}
          </div>
        </section>

        {/* Sección Avanzado */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
              🏆 Nivel Avanzado
            </div>
            <div className="ml-4 text-gray-500 dark:text-gray-400">
              Técnicas profesionales y flujos empresariales
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {avanzado.map((guia) => (
              <GuideCard key={guia.id} guide={guia} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-2xl p-8 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">¿Listo para Convertirte en un Experto en Git?</h2>
          <p className="text-xl mb-6 opacity-90">
            Practica con nuestro terminal interactivo y desbloquea logros mientras aprendes
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Ir al Terminal Interactivo
            </Link>
            <Link
              href="/ejercicios"
              className="bg-blue-800 text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-900 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Ver Ejercicios Prácticos
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

interface GuideCardProps {
  guide: {
    id: string
    title: string
    description: string
    level: 'Principiante' | 'Intermedio' | 'Avanzado'
    duration: string
    topics: string[]
    icon: React.ReactNode
    difficulty: number
    exercises: number
    videoCount: number
    practical: boolean
  }
}

function GuideCard({ guide }: GuideCardProps) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transform hover:-translate-y-2">
      {/* Header con gradiente */}
      <div className={`${getLevelColor(guide.level)} p-6 text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-16 translate-x-16"></div>
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
              {guide.icon}
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-1">
                {getDifficultyStars(guide.difficulty)}
              </div>
              <span className="text-xs opacity-75">Dificultad</span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-2 group-hover:scale-105 transition-transform">
            {guide.title}
          </h3>
          
          <div className="flex items-center space-x-4 text-sm opacity-90">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{guide.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Terminal className="w-4 h-4" />
              <span>{guide.exercises} ejercicios</span>
            </div>
            <div className="flex items-center space-x-1">
              <Video className="w-4 h-4" />
              <span>{guide.videoCount} videos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {guide.description}
        </p>

        {/* Topics */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
            <BookOpen className="w-4 h-4 mr-2 text-blue-500" />
            Temas que aprenderás:
          </h4>
          <div className="space-y-2">
            {guide.topics.slice(0, 3).map((topic, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                <span>{topic}</span>
              </div>
            ))}
            {guide.topics.length > 3 && (
              <div className="text-sm text-gray-500 dark:text-gray-400 italic">
                +{guide.topics.length - 3} temas más...
              </div>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {guide.practical && (
            <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-3 py-1 rounded-full text-xs font-medium">
              Práctica Incluida
            </span>
          )}
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(guide.difficulty)}`}>
            Nivel {guide.difficulty}/5
          </span>
        </div>

        {/* Action button */}
        <Link
          href={`/guias/${guide.id}`}
          className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-center font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] group"
        >
          <span className="flex items-center justify-center space-x-2">
            <span>Comenzar Guía</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  )
}
