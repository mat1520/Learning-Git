import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-4">Learning Git</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Una aplicación web educativa diseñada para ayudar a estudiantes de Ingeniería en Sistemas 
              a dominar Git de forma interactiva y práctica.
            </p>
            <p className="text-gray-400 text-sm">
              Desarrollado con ❤️ para la comunidad de desarrolladores
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/guias" className="text-gray-300 hover:text-white transition-colors">
                  Guías de aprendizaje
                </a>
              </li>
              <li>
                <a href="/videos" className="text-gray-300 hover:text-white transition-colors">
                  Videos educativos
                </a>
              </li>
              <li>
                <a href="/ejercicios" className="text-gray-300 hover:text-white transition-colors">
                  Terminal interactiva
                </a>
              </li>
              <li>
                <a href="/logros" className="text-gray-300 hover:text-white transition-colors">
                  Sistema de logros
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <a
                href="https://github.com/mat1520"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ariel-melo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
              <a
                href="mailto:ariel@example.com"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Learning Git by Ariel Melo. Todos los derechos reservados.
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
            <span>usando Next.js & TailwindCSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
