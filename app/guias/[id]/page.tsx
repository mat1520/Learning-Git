import { notFound } from 'next/navigation'
import { readFileSync } from 'fs'
import { join } from 'path'
// @ts-ignore: gray-matter has no type definitions
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { ArrowLeft, Clock, User, BookOpen } from 'lucide-react'
import Link from 'next/link'

// Define available guide IDs (in a real app, you'd scan the directory)
const availableGuides = [
  'introduccion-git',
  'comandos-basicos',
  'configuracion-inicial',
  'ramas-y-merge',
  'repositorios-remotos',
  'flujo-git',
  'git-hooks-automatizacion'
]

interface GuidePageProps {
  params: {
    id: string
  }
}

async function getGuideContent(id: string) {
  try {
    const filePath = join(process.cwd(), 'content', 'guias', `${id}.mdx`)
    const fileContent = readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)
    
    return {
      frontmatter: data,
      content
    }
  } catch (error) {
    return null
  }
}

export default async function GuidePage({ params }: GuidePageProps) {
  const guide = await getGuideContent(params.id)
  
  if (!guide || !availableGuides.includes(params.id)) {
    notFound()
  }

  const { frontmatter, content } = guide

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Principiante': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'Intermedio': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
      case 'Avanzado': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <Link 
              href="/guias" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a guías
            </Link>
          </div>
          
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(frontmatter.level)}`}>
                {frontmatter.level}
              </span>
              {frontmatter.duration && (
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {frontmatter.duration}
                </div>
              )}
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                <BookOpen className="w-4 h-4 mr-1" />
                Guía de aprendizaje
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {frontmatter.title}
            </h1>
            
            {frontmatter.description && (
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {frontmatter.description}
              </p>
            )}
          </div>

          {/* Topics */}
          {frontmatter.topics && frontmatter.topics.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Temas que aprenderás:
              </h3>
              <div className="flex flex-wrap gap-2">
                {frontmatter.topics.map((topic: string, index: number) => (
                  <span
                    key={index}
                    className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <MDXRemote 
              source={content}
              options={{
                parseFrontmatter: true,
              }}
            />
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              💻 Practica ahora
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Aplica lo que acabas de aprender en nuestra terminal Git interactiva
            </p>
            <Link href="/ejercicios" className="btn-primary inline-flex items-center">
              Ir a ejercicios
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              🏆 Gana puntos
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Completa ejercicios relacionados con esta guía y desbloquea logros
            </p>
            <Link href="/logros" className="btn-secondary inline-flex items-center">
              Ver logros
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
