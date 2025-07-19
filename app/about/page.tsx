import { Github, Linkedin, Mail, Heart, User, Code, Award, BookOpen } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center shadow-lg">
            <User className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Acerca de Learning Git
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Una aplicación educativa diseñada para estudiantes de Ingeniería en Sistemas
          </p>
        </div>

        {/* About the Project */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            🚀 Sobre el Proyecto
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Learning Git nació como un proyecto educativo para ayudar a estudiantes de Ingeniería en Sistemas 
              a dominar Git de una manera práctica e interactiva. La aplicación combina teoría con práctica 
              mediante guías detalladas, videos educativos y una terminal Git simulada completamente funcional.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
              El objetivo principal es proporcionar una plataforma donde los estudiantes puedan aprender Git 
              sin temor a cometer errores, ya que todo se ejecuta en un entorno simulado seguro donde pueden 
              experimentar libremente.
            </p>
          </div>
        </div>

        {/* About the Developer */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            👨‍💻 Sobre el Desarrollador
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Ariel Melo
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Estudiante de Ingeniería en Sistemas apasionado por la tecnología y la educación. 
                Creo en el poder del aprendizaje práctico y en hacer que la tecnología sea accesible para todos.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 px-3 py-1 rounded-full text-sm">
                  Next.js
                </span>
                <span className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 px-3 py-1 rounded-full text-sm">
                  React
                </span>
                <span className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 px-3 py-1 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 px-3 py-1 rounded-full text-sm">
                  Git
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">Contacto</h4>
              <div className="space-y-3">
                <a
                  href="https://github.com/mat1520"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <Github className="w-5 h-5 mr-3" />
                  github.com/mat1520
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            ✨ Características Principales
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="bg-primary-100 dark:bg-primary-900 p-2 rounded-lg">
                <Code className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Terminal Interactiva</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Simula una terminal Git real con comandos funcionales y respuestas realistas
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-primary-100 dark:bg-primary-900 p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Guías Detalladas</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Contenido educativo estructurado desde principiante hasta avanzado
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-primary-100 dark:bg-primary-900 p-2 rounded-lg">
                <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Sistema de Logros</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Gamificación del aprendizaje con medallas y puntos de progreso
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-primary-100 dark:bg-primary-900 p-2 rounded-lg">
                <Heart className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Diseño Responsive</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Funciona perfectamente en computadoras, tablets y teléfonos móviles
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            🛠️ Tecnologías Utilizadas
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Frontend</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Next.js 14 (App Router)</li>
                <li>• React 18</li>
                <li>• TypeScript</li>
                <li>• TailwindCSS</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Funcionalidades</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Simulación de terminal Git</li>
                <li>• Tema claro/oscuro</li>
                <li>• Persistencia con localStorage</li>
                <li>• Animaciones CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Despliegue</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Vercel</li>
                <li>• Optimización automática</li>
                <li>• PWA ready</li>
                <li>• SEO optimizado</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Open Source */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-lg p-8 text-white text-center">
          <Github className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">
            Proyecto Open Source
          </h2>
          <p className="text-primary-100 mb-6">
            Este proyecto es completamente open source. Puedes ver el código, contribuir con mejoras 
            o usarlo como base para tus propios proyectos educativos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/mat1520/Learning-Git"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              <Github className="w-5 h-5 mr-2" />
              Ver código fuente
            </a>
            <a
              href="https://github.com/mat1520/Learning-Git/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Reportar un problema
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
