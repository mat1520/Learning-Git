'use client'

import Image from 'next/image'
import { Play, Clock, ExternalLink, Youtube, Users, BookOpen, Target, Star } from 'lucide-react'

const videos = [
  // Nivel Principiante
  {
    id: 'git-intro-2024',
    title: '🚀 Git y GitHub Desde Cero - Curso Completo 2024',
    description: 'Aprende Git desde los fundamentos hasta técnicas avanzadas. Perfecto para principiantes que quieren dominar el control de versiones.',
    thumbnail: 'https://i.ytimg.com/vi/3GymExBkKjE/maxresdefault.jpg',
    videoId: '3GymExBkKjE',
    duration: '4:32:15',
    level: 'Principiante',
    views: '2.1M',
    channel: 'MoureDev by Brais Moure',
    topics: ['Git Básico', 'GitHub', 'Repositorios', 'Branches', 'Merge', 'Pull Requests'],
    rating: 4.9
  },
  {
    id: 'git-github-principiantes',
    title: '📚 Curso Git y GitHub Completo Desde Cero',
    description: 'Tutorial completo de Git y GitHub explicado paso a paso. Ideal para desarrolladores que empiezan.',
    thumbnail: 'https://i.ytimg.com/vi/mBYSUUnMt9M/maxresdefault.jpg',
    videoId: 'mBYSUUnMt9M',
    duration: '1:46:39',
    level: 'Principiante',
    views: '1.2M',
    channel: 'Fazt',
    topics: ['Instalación', 'Configuración', 'Comandos básicos', 'GitHub'],
    rating: 4.8
  },
  {
    id: 'comandos-git-esenciales',
    title: '⚡ Git Tutorial for Beginners',
    description: 'Los comandos más importantes de Git explicados con ejemplos prácticos. Perfecto para memorizar.',
    thumbnail: 'https://i.ytimg.com/vi/8JJ101D3knE/maxresdefault.jpg',
    videoId: '8JJ101D3knE',
    duration: '1:09:13',
    level: 'Principiante',
    views: '15M',
    channel: 'Programming with Mosh',
    topics: ['git add', 'git commit', 'git push', 'git pull', 'git status', 'git log'],
    rating: 4.9
  },
  {
    id: 'git-visual-explicado',
    title: '🎨 Git Explicado con Animaciones',
    description: 'Comprende Git de manera visual con diagramas y animaciones. Perfecto para aprendices visuales.',
    thumbnail: 'https://i.ytimg.com/vi/hwP7WQkmECE/maxresdefault.jpg',
    videoId: 'hwP7WQkmECE',
    duration: '12:32',
    level: 'Principiante',
    views: '1.8M',
    channel: 'Academind',
    topics: ['Conceptos visuales', 'Diagramas', 'Staging area', 'Working directory'],
    rating: 4.8
  },

  // Nivel Intermedio  
  {
    id: 'git-workflow-profesional',
    title: '🏢 Git Branching y Workflow Strategies',
    description: 'Aprende los flujos de trabajo profesionales con Git: Git Flow, GitHub Flow y técnicas de equipos.',
    thumbnail: 'https://i.ytimg.com/vi/Uszj_k0DGsg/maxresdefault.jpg',
    videoId: 'Uszj_k0DGsg',
    duration: '25:33',
    level: 'Intermedio',
    views: '2.5M',
    channel: 'GitKraken',
    topics: ['Git Flow', 'Feature Branches', 'Code Review', 'Merge Strategies'],
    rating: 4.7
  },
  {
    id: 'git-branches-avanzado',
    title: '🌳 Advanced Git: Branches, Merging & Rebasing',
    description: 'Domina completamente las ramas en Git: merge, rebase, cherry-pick y resolución de conflictos.',
    thumbnail: 'https://i.ytimg.com/vi/0chZFIZLR_0/maxresdefault.jpg',
    videoId: '0chZFIZLR_0',
    duration: '30:15',
    level: 'Intermedio',
    views: '892K',
    channel: 'The Net Ninja',
    topics: ['Merge vs Rebase', 'Conflictos', 'Cherry-pick', 'Branch strategies'],
    rating: 4.6
  },
  {
    id: 'git-collaboration',
    title: '🤝 Git Collaboration Workflow',
    description: 'Aprende a colaborar efectivamente usando Git con pull requests, forks y más.',
    thumbnail: 'https://i.ytimg.com/vi/MnUd31TvBoU/maxresdefault.jpg',
    videoId: 'MnUd31TvBoU',
    duration: '28:45',
    level: 'Intermedio',
    views: '567K',
    channel: 'Codevolution',
    topics: ['Pull Requests', 'Forks', 'Code Review', 'Collaboration'],
    rating: 4.5
  },
  {
    id: 'git-github-pages',
    title: '🌐 GitHub Pages Tutorial',
    description: 'Aprende a desplegar tu proyecto web gratuitamente usando GitHub Pages y Actions.',
    thumbnail: 'https://i.ytimg.com/vi/QyFcl_Fba-k/maxresdefault.jpg',
    videoId: 'QyFcl_Fba-k',
    duration: '19:12',
    level: 'Intermedio',
    views: '567K',
    channel: 'Codigo Facilito',
    topics: ['GitHub Pages', 'CI/CD', 'Deployment', 'Static sites'],
    rating: 4.7
  },

  // Nivel Avanzado
  {
    id: 'git-rebase-interactivo',
    title: '🎯 Git Rebase Tutorial',
    description: 'Reescribe la historia de Git como un profesional. Squash, edit, reword y más técnicas avanzadas.',
    thumbnail: 'https://i.ytimg.com/vi/f1UrL0Cqyz8/maxresdefault.jpg',
    videoId: 'f1UrL0Cqyz8',
    duration: '18:56',
    level: 'Avanzado',
    views: '245K',
    channel: 'Git Tutorials',
    topics: ['Interactive rebase', 'Squashing', 'History editing', 'Advanced techniques'],
    rating: 4.8
  },
  {
    id: 'git-advanced-features',
    title: '🔍 Advanced Git Features',
    description: 'Aprende funciones avanzadas de Git: bisect, hooks, submodules y más herramientas profesionales.',
    thumbnail: 'https://i.ytimg.com/vi/Ew8HQsFyVHo/maxresdefault.jpg',
    videoId: 'Ew8HQsFyVHo',
    duration: '45:27',
    level: 'Avanzado',
    views: '189K',
    channel: 'Fireship',
    topics: ['Git Bisect', 'Git Hooks', 'Git Stash', 'Advanced troubleshooting'],
    rating: 4.9
  },
  {
    id: 'git-internals',
    title: '📦 Git Internals Deep Dive',
    description: 'Comprende cómo funciona Git internamente. Objetos, referencias, y arquitectura interna.',
    thumbnail: 'https://i.ytimg.com/vi/P6jD966jzlk/maxresdefault.jpg',
    videoId: 'P6jD966jzlk',
    duration: '38:43',
    level: 'Avanzado',
    views: '134K',
    channel: 'Atlassian',
    topics: ['Git Objects', 'References', 'Internals', 'Architecture'],
    rating: 4.4
  },
  {
    id: 'git-conventional-commits',
    title: '📝 Conventional Commits - Mensajes Profesionales',
    description: 'Aprende a escribir mensajes de commit profesionales usando Conventional Commits.',
    thumbnail: 'https://i.ytimg.com/vi/OJqUWvmf4gg/maxresdefault.jpg',
    videoId: 'OJqUWvmf4gg',
    duration: '11:28',
    level: 'Intermedio',
    views: '143K',
    channel: 'DevTips',
    topics: ['Conventional commits', 'Semantic versioning', 'Changelog', 'Best practices'],
    rating: 4.7
  }
]

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Principiante': return 'bg-green-500'
    case 'Intermedio': return 'bg-yellow-500'
    case 'Avanzado': return 'bg-red-500'
    default: return 'bg-gray-500'
  }
}

const getStarRating = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`w-4 h-4 ${
        i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
      }`}
    />
  ))
}

export default function VideosPage() {
  const principiante = videos.filter(v => v.level === 'Principiante')
  const intermedio = videos.filter(v => v.level === 'Intermedio')
  const avanzado = videos.filter(v => v.level === 'Avanzado')

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 via-pink-600 to-red-800 bg-clip-text text-transparent mb-6">
            🎥 Videos Tutoriales de Git
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Aprende Git con los mejores tutoriales de YouTube. Desde principiante hasta experto con contenido seleccionado y de alta calidad.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg border border-red-200 dark:border-red-800">
              <Youtube className="w-5 h-5 text-red-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Videos HD de YouTube</span>
            </div>
            <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg border border-blue-200 dark:border-blue-800">
              <Users className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Contenido de Expertos</span>
            </div>
            <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg border border-green-200 dark:border-green-800">
              <BookOpen className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Todos los Niveles</span>
            </div>
          </div>
        </div>

        {/* Sección Principiante */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-bold text-xl shadow-lg">
              🌱 Nivel Principiante
            </div>
            <div className="ml-4 text-gray-500 dark:text-gray-400 text-lg">
              Fundamentos y primeros pasos
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principiante.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>

        {/* Sección Intermedio */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-lg font-bold text-xl shadow-lg">
              🚀 Nivel Intermedio
            </div>
            <div className="ml-4 text-gray-500 dark:text-gray-400 text-lg">
              Técnicas avanzadas y workflows
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {intermedio.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>

        {/* Sección Avanzado */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-bold text-xl shadow-lg">
              🏆 Nivel Avanzado
            </div>
            <div className="ml-4 text-gray-500 dark:text-gray-400 text-lg">
              Técnicas profesionales y expertas
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {avanzado.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">¿Prefieres Aprender Practicando?</h2>
          <p className="text-xl mb-6 opacity-90">
            Combina estos videos con nuestro terminal interactivo para una experiencia de aprendizaje completa
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/"
              className="bg-white text-purple-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Probar Terminal Interactivo
            </a>
            <a
              href="/ejercicios"
              className="bg-purple-800 text-white font-bold py-3 px-8 rounded-xl hover:bg-purple-900 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Ver Ejercicios Prácticos
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

interface VideoCardProps {
  video: {
    id: string
    title: string
    description: string
    thumbnail: string
    videoId: string
    duration: string
    level: string
    views: string
    channel: string
    topics: string[]
    rating: number
  }
}

function VideoCard({ video }: VideoCardProps) {
  const openVideo = () => {
    window.open(`https://www.youtube.com/watch?v=${video.videoId}`, '_blank')
  }

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-600 transform hover:-translate-y-2">
      {/* Thumbnail */}
      <div className="relative cursor-pointer" onClick={openVideo}>
        <Image
          src={video.thumbnail}
          alt={video.title}
          width={400}
          height={225}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <div className="w-16 h-16 bg-red-600 bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all duration-300 group-hover:scale-110">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
        </div>
        
        {/* Duration badge */}
        <div className="absolute bottom-3 right-3 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-xs font-semibold">
          {video.duration}
        </div>
        
        {/* Level badge */}
        <div className={`absolute top-3 left-3 ${getLevelColor(video.level)} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
          {video.level}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Channel and Rating */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <Users className="w-4 h-4" />
            <span>{video.channel}</span>
          </div>
          <div className="flex items-center space-x-1">
            {getStarRating(video.rating)}
            <span className="text-sm text-gray-500 ml-1">({video.rating})</span>
          </div>
        </div>

        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
          {video.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
          {video.description}
        </p>

        {/* Topics */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {video.topics.slice(0, 3).map((topic, index) => (
              <span
                key={index}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs"
              >
                {topic}
              </span>
            ))}
            {video.topics.length > 3 && (
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full text-xs">
                +{video.topics.length - 3} más
              </span>
            )}
          </div>
        </div>

        {/* Stats and Action */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{video.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Target className="w-4 h-4" />
              <span>{video.views} vistas</span>
            </div>
          </div>
          
          <button
            onClick={openVideo}
            className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 group-hover:scale-105"
          >
            <Youtube className="w-4 h-4" />
            <span>Ver Video</span>
          </button>
        </div>
      </div>
    </div>
  )
}
