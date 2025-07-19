'use client'

import AchievementSystem from '@/components/AchievementSystem'

export default function LogrosPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🏆 Sistema de Logros
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Desbloquea logros mientras aprendes Git. Cada comando que ejecutas en el terminal 
            puede desbloquearte nuevas insignias y reconocimientos.
          </p>
        </div>

        <AchievementSystem />

        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            💡 Cómo funciona
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Practica en el Terminal</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Usa el terminal interactivo en la página principal para ejecutar comandos Git.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Completa Objetivos</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Cada logro tiene requisitos específicos que debes cumplir para desbloquearlo.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Gana Puntos</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Cada logro desbloqueado te otorga puntos que se acumulan en tu perfil.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Colecciona Insignias</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Las insignias se guardan automáticamente y puedes verlas en cualquier momento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            🎯 Consejos para Desbloquear Logros
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="text-center">
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Empieza Simple</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Comienza con <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">git init</code> para tu primer logro.
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Experimenta</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Prueba diferentes comandos y combinaciones para descubrir logros ocultos.
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🏃</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Mantén el Ritmo</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Algunos logros requieren consistencia, como realizar múltiples commits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
