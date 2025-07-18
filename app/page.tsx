import Link from 'next/link'
import { BookOpen, Terminal, Video, Trophy, ArrowRight, Github, GitBranch } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="animate-fadeInUp">
            <GitBranch className="w-16 h-16 mx-auto mb-6 text-primary-200" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
              Learning Git
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Domina Git de forma interactiva con guías prácticas, videos educativos y una terminal simulada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ejercicios" className="btn-primary inline-flex items-center text-lg px-8 py-4">
                Comenzar ahora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/guias" className="btn-secondary inline-flex items-center text-lg px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30">
                Ver guías
                <BookOpen className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              ¿Por qué aprender Git con nosotros?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Una experiencia de aprendizaje completa diseñada específicamente para estudiantes de Ingeniería en Sistemas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Terminal className="w-8 h-8 text-primary-600" />}
              title="Terminal Interactiva"
              description="Practica comandos Git en una terminal simulada con respuestas realistas"
              href="/ejercicios"
            />
            <FeatureCard
              icon={<BookOpen className="w-8 h-8 text-primary-600" />}
              title="Guías Completas"
              description="Aprende desde lo básico hasta conceptos avanzados con explicaciones claras"
              href="/guias"
            />
            <FeatureCard
              icon={<Video className="w-8 h-8 text-primary-600" />}
              title="Videos Educativos"
              description="Contenido visual que complementa tu aprendizaje teórico"
              href="/videos"
            />
            <FeatureCard
              icon={<Trophy className="w-8 h-8 text-primary-600" />}
              title="Sistema de Logros"
              description="Gana medallas y sigue tu progreso mientras aprendes"
              href="/logros"
            />
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Tu ruta de aprendizaje
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Sigue un camino estructurado desde principiante hasta experto
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <LearningStep
              step="1"
              title="Fundamentos"
              description="Aprende qué es Git, por qué es importante y los conceptos básicos del control de versiones."
              topics={["¿Qué es Git?", "Configuración inicial", "Primer repositorio"]}
            />
            <LearningStep
              step="2"
              title="Comandos Esenciales"
              description="Domina los comandos fundamentales que usarás en tu día a día como desarrollador."
              topics={["git add & commit", "git status & log", "git push & pull"]}
            />
            <LearningStep
              step="3"
              title="Colaboración"
              description="Aprende a trabajar en equipo usando ramas, merge y resolución de conflictos."
              topics={["Ramas (branches)", "Merge & rebase", "Resolución de conflictos"]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para convertirte en un experto en Git?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Únete a miles de estudiantes que ya han mejorado sus habilidades de desarrollo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ejercicios" className="btn-primary bg-white text-primary-700 hover:bg-gray-100 inline-flex items-center text-lg px-8 py-4">
              Empezar ejercicios
              <Terminal className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="https://github.com/mat1520/Learning-Git"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary bg-white/10 hover:bg-white/20 text-white border border-white/30 inline-flex items-center text-lg px-8 py-4"
            >
              Ver en GitHub
              <Github className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description, href }: {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}) {
  return (
    <Link href={href} className="group">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg card-hover border border-gray-200 dark:border-gray-700 h-full">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  )
}

function LearningStep({ step, title, description, topics }: {
  step: string
  title: string
  description: string
  topics: string[]
}) {
  return (
    <div className="relative">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="absolute -top-4 left-6 bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
          {step}
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {description}
          </p>
          <ul className="space-y-2">
            {topics.map((topic, index) => (
              <li key={index} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
