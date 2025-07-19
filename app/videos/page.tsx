import Image from 'next/image'
import { Play, Clock, ExternalLink, Youtube } from 'lucide-react'

const videos = [
  {
    id: 'introduccion-git-video',
    title: 'Git en 10 Minutos - Conceptos Básicos',
    description: 'Una introducción rápida y clara a Git. Perfecto para principiantes que quieren entender qué es Git y por qué es tan importante.',
    thumbnail: 'https://img.youtube.com/vi/RGOj5yH7evk/maxresdefault.jpg',
    videoId: 'RGOj5yH7evk',
    duration: '10:45',
    level: 'Principiante',
    views: '125K'
  },
  {
    id: 'comandos-basicos-video',
    title: 'Los 7 Comandos Git que DEBES Conocer',
    description: 'Aprende los comandos esenciales de Git que todo desarrollador necesita saber para su día a día.',
    thumbnail: 'https://img.youtube.com/vi/HVsySz-h9r4/maxresdefault.jpg',
    videoId: 'HVsySz-h9r4',
    duration: '15:30',
    level: 'Principiante',
    views: '89K'
  },
  {
    id: 'ramas-git-video',
    title: 'Trabajando con Ramas en Git',
    description: 'Domina el sistema de ramas de Git para organizar mejor tu código y trabajar en equipo de forma efectiva.',
    thumbnail: 'https://img.youtube.com/vi/FyAAIHHClqI/maxresdefault.jpg',
    videoId: 'FyAAIHHClqI',
    duration: '18:20',
    level: 'Intermedio',
    views: '67K'
  },
  {
    id: 'github-colaboracion',
    title: 'GitHub y Colaboración en Equipo',
    description: 'Aprende a usar GitHub para colaborar con otros desarrolladores, hacer pull requests y manejar proyectos.',
    thumbnail: 'https://img.youtube.com/vi/w3jLJU7DT5E/maxresdefault.jpg',
    videoId: 'w3jLJU7DT5E',
    duration: '22:15',
    level: 'Intermedio',
    views: '95K'
  },
  {
    id: 'git-avanzado',
    title: 'Git Avanzado: Rebase, Cherry-pick y más',
    description: 'Técnicas avanzadas de Git para desarrolladores experimentados que quieren llevar sus habilidades al siguiente nivel.',
    thumbnail: 'https://img.youtube.com/vi/f1wnYdLEpgI/maxresdefault.jpg',
    videoId: 'f1wnYdLEpgI',
    duration: '25:40',
    level: 'Avanzado',
    views: '43K'
  },
  {
    id: 'flujos-trabajo-git',
    title: 'Flujos de Trabajo con Git en Proyectos Reales',
    description: 'Aprende diferentes estrategias y flujos de trabajo que se usan en equipos de desarrollo profesionales.',
    thumbnail: 'https://img.youtube.com/vi/1SXpE08hvGs/maxresdefault.jpg',
    videoId: '1SXpE08hvGs',
    duration: '28:55',
    level: 'Avanzado',
    views: '76K'
  }
]

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Videos Educativos
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Aprende Git de forma visual con nuestra colección curada de videos educativos en español.
          </p>
        </div>

        {/* Filter by Level */}
        <div className="mb-8 flex justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-md inline-flex">
            <button className="px-4 py-2 rounded-md text-sm font-medium bg-primary-600 text-white">
              Todos
            </button>
            <button className="px-4 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              Principiante
            </button>
            <button className="px-4 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              Intermedio
            </button>
            <button className="px-4 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              Avanzado
            </button>
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <div className="text-center mb-6">
            <Youtube className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Quieres más contenido?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Estos videos son una selección curada de contenido educativo de alta calidad disponible en YouTube.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                📚 Complementa con nuestras guías
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Lee nuestras guías detalladas para profundizar en los conceptos
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                💻 Practica en la terminal
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Aplica lo aprendido en nuestra terminal Git interactiva
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function VideoCard({ video }: { video: typeof videos[0] }) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Principiante': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'Intermedio': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
      case 'Avanzado': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  const openVideo = () => {
    window.open(`https://www.youtube.com/watch?v=${video.videoId}`, '_blank')
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg card-hover border border-gray-200 dark:border-gray-700 overflow-hidden group cursor-pointer">
      {/* Thumbnail */}
      <div className="relative" onClick={openVideo}>
        <Image
          src={video.thumbnail}
          alt={video.title}
          width={400}
          height={225}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <div className="w-16 h-16 bg-red-600 bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all duration-300">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
        </div>
        
        {/* Duration badge */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-sm font-medium">
          {video.duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(video.level)}`}>
            {video.level}
          </span>
          <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
            <span>{video.views} vistas</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
          {video.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {video.description}
        </p>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={openVideo}
            className="flex items-center text-red-600 hover:text-red-700 font-medium text-sm transition-colors"
          >
            <Play className="w-4 h-4 mr-1" />
            Ver en YouTube
          </button>
          <button
            onClick={openVideo}
            className="p-2 text-gray-400 hover:text-primary-600 transition-colors"
            title="Abrir en nueva pestaña"
          >
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
