import Link from 'next/link'
import { BookOpen, Clock, Users, ChevronRight } from 'lucide-react'

const guias = [
  {
    id: 'introduccion-git',
    title: 'Introducción a Git',
    description: 'Aprende qué es Git, por qué es importante y conceptos fundamentales del control de versiones.',
    duration: '10 min',
    level: 'Principiante',
    topics: ['¿Qué es Git?', 'Control de versiones', 'Historia de Git', 'Conceptos básicos']
  },
  {
    id: 'configuracion-inicial',
    title: 'Configuración Inicial',
    description: 'Configura Git en tu sistema y personaliza tu entorno de desarrollo.',
    duration: '15 min',
    level: 'Principiante',
    topics: ['Instalación', 'git config', 'SSH keys', 'Configuración global']
  },
  {
    id: 'comandos-basicos',
    title: 'Comandos Básicos',
    description: 'Domina los comandos esenciales que necesitas para el día a día con Git.',
    duration: '25 min',
    level: 'Principiante',
    topics: ['git init', 'git add', 'git commit', 'git status', 'git log']
  },
  {
    id: 'ramas-y-merge',
    title: 'Ramas y Merge',
    description: 'Aprende a trabajar con ramas para desarrollar features de forma paralela.',
    duration: '30 min',
    level: 'Intermedio',
    topics: ['git branch', 'git checkout', 'git merge', 'Resolución de conflictos']
  },
  {
    id: 'repositorios-remotos',
    title: 'Repositorios Remotos',
    description: 'Conecta tu repositorio local con GitHub y aprende a colaborar con otros.',
    duration: '20 min',
    level: 'Intermedio',
    topics: ['git remote', 'git push', 'git pull', 'GitHub', 'Colaboración']
  },
  {
    id: 'flujo-git',
    title: 'Flujos de Trabajo',
    description: 'Aprende diferentes estrategias para organizar el trabajo en equipo.',
    duration: '35 min',
    level: 'Avanzado',
    topics: ['Git Flow', 'GitHub Flow', 'Feature branches', 'Buenas prácticas']
  }
]

export default function GuiasPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Guías de Aprendizaje
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Aprende Git paso a paso con nuestras guías detalladas, desde conceptos básicos hasta técnicas avanzadas.
          </p>
        </div>

        {/* Learning Path */}
        <div className="mb-12">
          <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 border border-primary-200 dark:border-primary-800">
            <h2 className="text-2xl font-bold text-primary-800 dark:text-primary-200 mb-4">
              🎯 Ruta de Aprendizaje Recomendada
            </h2>
            <p className="text-primary-700 dark:text-primary-300 mb-4">
              Sigue esta secuencia para obtener el máximo provecho de las guías:
            </p>
            <div className="flex flex-wrap gap-2">
              {guias.map((guia, index) => (
                <div key={guia.id} className="flex items-center">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {index + 1}. {guia.title}
                  </span>
                  {index < guias.length - 1 && (
                    <ChevronRight className="w-4 h-4 mx-2 text-primary-600" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Guías Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {guias.map((guia, index) => (
            <GuiaCard key={guia.id} guia={guia} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Listo para practicar?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            Después de leer las guías, practica lo aprendido en nuestra terminal interactiva
          </p>
          <Link href="/ejercicios" className="btn-primary inline-flex items-center text-lg">
            Ir a ejercicios prácticos
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

function GuiaCard({ guia, index }: { guia: typeof guias[0]; index: number }) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Principiante': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'Intermedio': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
      case 'Avanzado': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  return (
    <Link href={`/guias/${guia.id}`} className="group">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg card-hover border border-gray-200 dark:border-gray-700 h-full">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                  {guia.title}
                </h3>
              </div>
            </div>
            <BookOpen className="w-6 h-6 text-primary-600" />
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {guia.description}
          </p>

          {/* Metadata */}
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {guia.duration}
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(guia.level)}`}>
              {guia.level}
            </span>
          </div>

          {/* Topics */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Temas que cubrirás:
            </h4>
            <div className="flex flex-wrap gap-1">
              {guia.topics.map((topic, topicIndex) => (
                <span
                  key={topicIndex}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center text-primary-600 group-hover:text-primary-700 font-medium">
              Leer guía
              <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
