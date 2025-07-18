import GitTerminal from '@/components/GitTerminal'

export default function EjerciciosPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ejercicios Prácticos
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Aprende Git practicando en una terminal simulada. Todos tus comandos y progreso se guardan automáticamente.
          </p>
        </div>
        
        <GitTerminal />
        
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Ejercicios Sugeridos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-400">Nivel Principiante</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>1. Configura tu usuario: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">git config user.name "Tu Nombre"</code></p>
                <p>2. Inicializa un repositorio: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">git init</code></p>
                <p>3. Crea un archivo: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">touch README.md</code></p>
                <p>4. Agrega contenido: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">echo "# Mi Proyecto" &gt; README.md</code></p>
                <p>5. Revisa el estado: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">git status</code></p>
                <p>6. Agrega al staging: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">git add README.md</code></p>
                <p>7. Haz tu primer commit: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">git commit -m "Primer commit"</code></p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-400">Nivel Intermedio</h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>1. Crea una nueva rama: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">git branch feature</code></p>
                <p>2. Cambia a la nueva rama: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">git checkout feature</code></p>
                <p>3. Crea más archivos y commits</p>
                <p>4. Regresa a main: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">git checkout main</code></p>
                <p>5. Lista todas las ramas: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">git branch</code></p>
                <p>6. Revisa el historial: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">git log</code></p>
                <p>7. Experimenta con múltiples archivos: <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">git add .</code></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
