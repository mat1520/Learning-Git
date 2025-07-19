'use client'

import React, { useState } from 'react'
import GitTerminal from '@/components/GitTerminal'
import { CheckCircle, Circle, Play, BookOpen, Target, Trophy, Zap } from 'lucide-react'

const exercises = [
  // Nivel Principiante
  {
    id: 'setup-git',
    title: '⚙️ Configuración Inicial de Git',
    description: 'Aprende a configurar Git con tu identidad y personalizar tu entorno.',
    level: 'Principiante',
    difficulty: 1,
    estimatedTime: '5 min',
    points: 50,
    steps: [
      {
        command: 'git config user.name "Tu Nombre"',
        description: 'Configura tu nombre de usuario',
        hint: 'Usa tu nombre real o como quieres aparecer en los commits'
      },
      {
        command: 'git config user.email "tu@email.com"',
        description: 'Configura tu email',
        hint: 'Usa el mismo email que usas en GitHub/GitLab'
      }
    ]
  },
  {
    id: 'first-repo',
    title: '🌱 Tu Primer Repositorio',
    description: 'Crea tu primer repositorio Git y realiza operaciones básicas.',
    level: 'Principiante',
    difficulty: 1,
    estimatedTime: '8 min',
    points: 100,
    steps: [
      {
        command: 'git init',
        description: 'Inicializa un nuevo repositorio Git',
        hint: 'Este comando crea la carpeta .git oculta'
      },
      {
        command: 'touch README.md',
        description: 'Crea un archivo README',
        hint: 'README.md es el archivo que describe tu proyecto'
      },
      {
        command: 'git status',
        description: 'Verifica el estado del repositorio',
        hint: 'Este comando te muestra qué archivos han cambiado'
      },
      {
        command: 'git add README.md',
        description: 'Agrega el archivo al staging area',
        hint: 'El staging area es donde preparas los cambios para el commit'
      },
      {
        command: 'git commit -m "Initial commit"',
        description: 'Crea tu primer commit',
        hint: 'Los mensajes de commit deben ser descriptivos'
      }
    ]
  },
  {
    id: 'working-with-files',
    title: '📁 Trabajando con Archivos',
    description: 'Aprende a manejar múltiples archivos y entender los estados.',
    level: 'Principiante',
    difficulty: 2,
    estimatedTime: '12 min',
    points: 150,
    steps: [
      {
        command: 'touch app.js',
        description: 'Crea un archivo JavaScript',
        hint: 'Simula crear un archivo de código'
      },
      {
        command: 'echo "console.log(\\"Hello World\\");" > app.js',
        description: 'Agrega contenido al archivo',
        hint: 'Escribe código JavaScript básico'
      },
      {
        command: 'touch style.css',
        description: 'Crea un archivo CSS',
        hint: 'Los proyectos web necesitan estilos'
      },
      {
        command: 'echo "body { margin: 0; }" > style.css',
        description: 'Agrega estilos CSS',
        hint: 'CSS básico para resetear márgenes'
      },
      {
        command: 'git add .',
        description: 'Agrega todos los archivos nuevos',
        hint: 'El punto (.) significa "todos los archivos"'
      },
      {
        command: 'git commit -m "Add JavaScript and CSS files"',
        description: 'Confirma los cambios',
        hint: 'Describe qué archivos agregaste'
      },
      {
        command: 'git log',
        description: 'Revisa el historial de commits',
        hint: 'Verás todos los commits que has hecho'
      }
    ]
  },

  // Nivel Intermedio
  {
    id: 'branches-basics',
    title: '🌳 Introducción a Ramas',
    description: 'Aprende a crear y manejar ramas para organizar tu trabajo.',
    level: 'Intermedio',
    difficulty: 3,
    estimatedTime: '15 min',
    points: 200,
    steps: [
      {
        command: 'git branch feature/new-header',
        description: 'Crea una nueva rama para el header',
        hint: 'Las ramas te permiten trabajar en características independientes'
      },
      {
        command: 'git branch',
        description: 'Lista todas las ramas',
        hint: 'La rama actual aparece marcada con *'
      },
      {
        command: 'git checkout feature/new-header',
        description: 'Cambia a la nueva rama',
        hint: 'Ahora trabajarás en la rama feature/new-header'
      },
      {
        command: 'touch header.html',
        description: 'Crea un archivo para el header',
        hint: 'Trabajo específico de esta característica'
      },
      {
        command: 'echo "<header><h1>Mi Sitio Web</h1></header>" > header.html',
        description: 'Agrega contenido HTML al header',
        hint: 'HTML básico para el encabezado'
      },
      {
        command: 'git add header.html',
        description: 'Prepara el archivo para commit',
        hint: 'Solo en la rama feature/new-header'
      },
      {
        command: 'git commit -m "Add website header"',
        description: 'Confirma los cambios en la rama',
        hint: 'Este commit solo existe en feature/new-header'
      },
      {
        command: 'git checkout main',
        description: 'Vuelve a la rama principal',
        hint: 'main es la rama principal del proyecto'
      }
    ]
  },
  {
    id: 'merge-practice',
    title: '🔄 Práctica de Merge',
    description: 'Aprende a fusionar ramas y integrar características.',
    level: 'Intermedio',
    difficulty: 3,
    estimatedTime: '18 min',
    points: 250,
    steps: [
      {
        command: 'git branch feature/footer',
        description: 'Crea una rama para el footer',
        hint: 'Otra característica independiente'
      },
      {
        command: 'git checkout feature/footer',
        description: 'Cambia a la rama del footer',
        hint: 'Trabajarás en el pie de página'
      },
      {
        command: 'touch footer.html',
        description: 'Crea el archivo del footer',
        hint: 'Archivo específico para esta rama'
      },
      {
        command: 'echo "<footer><p>&copy; 2024 Mi Sitio</p></footer>" > footer.html',
        description: 'Agrega contenido al footer',
        hint: 'HTML para el pie de página'
      },
      {
        command: 'git add footer.html',
        description: 'Prepara para commit',
        hint: 'Staging del footer'
      },
      {
        command: 'git commit -m "Add website footer"',
        description: 'Confirma el footer',
        hint: 'Commit en la rama feature/footer'
      },
      {
        command: 'git checkout main',
        description: 'Vuelve a main',
        hint: 'Para hacer el merge'
      },
      {
        command: 'git merge feature/footer',
        description: 'Fusiona footer con main',
        hint: 'Integra la característica al proyecto principal'
      },
      {
        command: 'git merge feature/new-header',
        description: 'Fusiona header con main',
        hint: 'Ahora tienes ambas características'
      }
    ]
  },

  // Nivel Avanzado
  {
    id: 'conflict-resolution',
    title: '⚔️ Resolución de Conflictos',
    description: 'Aprende a resolver conflictos cuando las ramas modifican el mismo archivo.',
    level: 'Avanzado',
    difficulty: 4,
    estimatedTime: '25 min',
    points: 300,
    steps: [
      {
        command: 'git branch feature/update-readme',
        description: 'Crea rama para actualizar README',
        hint: 'Simularemos un conflicto modificando el mismo archivo'
      },
      {
        command: 'git checkout feature/update-readme',
        description: 'Cambia a la nueva rama',
        hint: 'Trabajarás en actualizar la documentación'
      },
      {
        command: 'echo "# Mi Proyecto Increíble\\nEste proyecto es genial." > README.md',
        description: 'Actualiza README en la rama',
        hint: 'Modificas el contenido del README'
      },
      {
        command: 'git add README.md',
        description: 'Prepara README actualizado',
        hint: 'Staging de los cambios'
      },
      {
        command: 'git commit -m "Update README with project description"',
        description: 'Confirma cambios en README',
        hint: 'Commit en feature/update-readme'
      },
      {
        command: 'git checkout main',
        description: 'Vuelve a main',
        hint: 'Para modificar el mismo archivo'
      },
      {
        command: 'echo "# Mi Sitio Web\\nUn proyecto web moderno y responsivo." > README.md',
        description: 'Modifica README en main',
        hint: 'Cambio diferente al mismo archivo - esto causará conflicto'
      },
      {
        command: 'git add README.md',
        description: 'Prepara cambios en main',
        hint: 'Staging en la rama principal'
      },
      {
        command: 'git commit -m "Update README with website description"',
        description: 'Confirma en main',
        hint: 'Ahora tienes dos versiones diferentes'
      },
      {
        command: 'git merge feature/update-readme',
        description: 'Intenta fusionar (causará conflicto)',
        hint: 'Git detectará el conflicto y te pedirá resolverlo'
      }
    ]
  },
  {
    id: 'advanced-workflow',
    title: '🚀 Flujo de Trabajo Avanzado',
    description: 'Implementa un flujo de trabajo profesional con múltiples ramas.',
    level: 'Avanzado',
    difficulty: 5,
    estimatedTime: '30 min',
    points: 400,
    steps: [
      {
        command: 'git branch develop',
        description: 'Crea rama de desarrollo',
        hint: 'develop es común en Git Flow'
      },
      {
        command: 'git checkout develop',
        description: 'Cambia a develop',
        hint: 'Trabajarás desde develop'
      },
      {
        command: 'git branch feature/user-auth',
        description: 'Crea rama para autenticación',
        hint: 'Feature branch para nueva funcionalidad'
      },
      {
        command: 'git checkout feature/user-auth',
        description: 'Trabaja en autenticación',
        hint: 'Desarrollo de la característica'
      },
      {
        command: 'touch auth.js',
        description: 'Crea sistema de autenticación',
        hint: 'Archivo para manejo de usuarios'
      },
      {
        command: 'echo "// Sistema de autenticación\\nfunction login() { return true; }" > auth.js',
        description: 'Implementa función de login',
        hint: 'Código básico de autenticación'
      },
      {
        command: 'git add auth.js',
        description: 'Prepara para commit',
        hint: 'Staging del sistema de auth'
      },
      {
        command: 'git commit -m "Implement basic user authentication"',
        description: 'Confirma la autenticación',
        hint: 'Commit de la nueva característica'
      },
      {
        command: 'git checkout develop',
        description: 'Vuelve a develop',
        hint: 'Para integrar la característica'
      },
      {
        command: 'git merge feature/user-auth',
        description: 'Integra auth a develop',
        hint: 'Merge de feature a develop'
      },
      {
        command: 'git checkout main',
        description: 'Cambia a main para release',
        hint: 'Preparar para producción'
      },
      {
        command: 'git merge develop',
        description: 'Deploy a producción',
        hint: 'Merge de develop a main (producción)'
      }
    ]
  }
]

export default function EjerciciosPage() {
  const [completedSteps, setCompletedSteps] = useState<{[key: string]: number}>({})

  const markStepCompleted = (exerciseId: string, stepIndex: number) => {
    setCompletedSteps(prev => ({
      ...prev,
      [exerciseId]: Math.max(prev[exerciseId] || 0, stepIndex + 1)
    }))
  }

  const getDifficultyColor = (difficulty: number) => {
    if (difficulty <= 2) return 'text-green-600 dark:text-green-400'
    if (difficulty <= 3) return 'text-yellow-600 dark:text-yellow-400'
    if (difficulty <= 4) return 'text-orange-600 dark:text-orange-400'
    return 'text-red-600 dark:text-red-400'
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Principiante': return 'bg-gradient-to-r from-green-500 to-green-600'
      case 'Intermedio': return 'bg-gradient-to-r from-yellow-500 to-orange-500'
      case 'Avanzado': return 'bg-gradient-to-r from-red-500 to-red-600'
      default: return 'bg-gray-500'
    }
  }

  const principiante = exercises.filter(e => e.level === 'Principiante')
  const intermedio = exercises.filter(e => e.level === 'Intermedio')
  const avanzado = exercises.filter(e => e.level === 'Avanzado')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            💻 Ejercicios Prácticos de Git
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Practica Git con ejercicios progresivos. Cada ejercicio incluye pasos detallados, comandos específicos y puntos de logro.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg border border-blue-200 dark:border-blue-800">
              <Play className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Ejercicios Interactivos</span>
            </div>
            <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg border border-green-200 dark:border-green-800">
              <Trophy className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Sistema de Puntos</span>
            </div>
            <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg border border-purple-200 dark:border-purple-800">
              <Target className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progreso Tracking</span>
            </div>
          </div>
        </div>

        {/* Terminal Interactivo */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-t-xl p-6 text-white">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-500 p-2 rounded-lg">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Terminal Interactivo</h2>
                <p className="text-gray-300">Practica los comandos directamente aquí</p>
              </div>
            </div>
          </div>
          <GitTerminal />
        </div>

        {/* Instrucciones de Uso */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white mb-16">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <BookOpen className="w-8 h-8 mr-3" />
            Cómo Usar los Ejercicios
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl mb-2">1️⃣</div>
              <h3 className="font-bold mb-2">Elige un Ejercicio</h3>
              <p className="text-sm opacity-90">Selecciona un ejercicio según tu nivel y sigue los pasos.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl mb-2">2️⃣</div>
              <h3 className="font-bold mb-2">Ejecuta Comandos</h3>
              <p className="text-sm opacity-90">Escribe cada comando en el terminal de arriba y observa el resultado.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl mb-2">3️⃣</div>
              <h3 className="font-bold mb-2">Gana Puntos</h3>
              <p className="text-sm opacity-90">Completa pasos para ganar puntos y desbloquear logros.</p>
            </div>
          </div>
        </div>

        {/* Nivel Principiante */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-bold text-xl shadow-lg">
              🌱 Nivel Principiante
            </div>
            <div className="ml-4 text-gray-500 dark:text-gray-400 text-lg">
              Comandos básicos y fundamentos
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {principiante.map((exercise) => (
              <ExerciseCard 
                key={exercise.id} 
                exercise={exercise} 
                completedSteps={completedSteps[exercise.id] || 0}
                onStepComplete={(stepIndex) => markStepCompleted(exercise.id, stepIndex)}
                getDifficultyColor={getDifficultyColor}
                getLevelColor={getLevelColor}
              />
            ))}
          </div>
        </section>

        {/* Nivel Intermedio */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-lg font-bold text-xl shadow-lg">
              🚀 Nivel Intermedio
            </div>
            <div className="ml-4 text-gray-500 dark:text-gray-400 text-lg">
              Ramas, merge y flujos de trabajo
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {intermedio.map((exercise) => (
              <ExerciseCard 
                key={exercise.id} 
                exercise={exercise} 
                completedSteps={completedSteps[exercise.id] || 0}
                onStepComplete={(stepIndex) => markStepCompleted(exercise.id, stepIndex)}
                getDifficultyColor={getDifficultyColor}
                getLevelColor={getLevelColor}
              />
            ))}
          </div>
        </section>

        {/* Nivel Avanzado */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-bold text-xl shadow-lg">
              🏆 Nivel Avanzado
            </div>
            <div className="ml-4 text-gray-500 dark:text-gray-400 text-lg">
              Conflictos, workflows empresariales
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {avanzado.map((exercise) => (
              <ExerciseCard 
                key={exercise.id} 
                exercise={exercise} 
                completedSteps={completedSteps[exercise.id] || 0}
                onStepComplete={(stepIndex) => markStepCompleted(exercise.id, stepIndex)}
                getDifficultyColor={getDifficultyColor}
                getLevelColor={getLevelColor}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

interface ExerciseCardProps {
  exercise: {
    id: string
    title: string
    description: string
    level: string
    difficulty: number
    estimatedTime: string
    points: number
    steps: Array<{
      command: string
      description: string
      hint: string
    }>
  }
  completedSteps: number
  onStepComplete: (stepIndex: number) => void
  getDifficultyColor: (difficulty: number) => string
  getLevelColor: (level: string) => string
}

function ExerciseCard({ exercise, completedSteps, onStepComplete, getDifficultyColor, getLevelColor }: ExerciseCardProps) {
  const progressPercentage = (completedSteps / exercise.steps.length) * 100

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Header */}
      <div className={`${getLevelColor(exercise.level)} p-6 text-white`}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold mb-2">{exercise.title}</h3>
            <p className="opacity-90 text-sm">{exercise.description}</p>
          </div>
          <div className="text-right">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
              <div className="text-lg font-bold">{exercise.points}</div>
              <div className="text-xs opacity-75">puntos</div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <span>⏱️ {exercise.estimatedTime}</span>
            <span className={getDifficultyColor(exercise.difficulty)}>
              {'★'.repeat(exercise.difficulty)} Dificultad {exercise.difficulty}/5
            </span>
          </div>
          <div>
            {completedSteps}/{exercise.steps.length} completados
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-white/20 rounded-full h-2 mt-3">
          <div 
            className="bg-white h-2 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Steps */}
      <div className="p-6">
        <div className="space-y-4">
          {exercise.steps.map((step, index) => {
            const isCompleted = index < completedSteps
            const isCurrent = index === completedSteps
            
            return (
              <div
                key={index}
                className={`border rounded-lg p-4 transition-all duration-200 ${
                  isCompleted 
                    ? 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700' 
                    : isCurrent 
                    ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700 ring-2 ring-blue-200 dark:ring-blue-800' 
                    : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <button
                    onClick={() => onStepComplete(index)}
                    className={`mt-1 ${
                      isCompleted 
                        ? 'text-green-500' 
                        : isCurrent 
                        ? 'text-blue-500 hover:text-blue-600' 
                        : 'text-gray-400 hover:text-gray-500'
                    } transition-colors`}
                  >
                    {isCompleted ? <CheckCircle className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                  </button>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className={`font-semibold ${isCompleted ? 'text-green-800 dark:text-green-300' : 'text-gray-900 dark:text-white'}`}>
                        Paso {index + 1}: {step.description}
                      </h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {index + 1}/{exercise.steps.length}
                      </span>
                    </div>
                    
                    <div className={`bg-gray-900 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm ${
                      isCompleted ? 'opacity-75' : ''
                    }`}>
                      <code className="text-green-400">{step.command}</code>
                    </div>
                    
                    <p className={`text-sm mt-2 ${
                      isCompleted 
                        ? 'text-green-700 dark:text-green-400' 
                        : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      💡 {step.hint}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {completedSteps === exercise.steps.length && (
          <div className="mt-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg p-4 text-center">
            <Trophy className="w-8 h-8 mx-auto mb-2" />
            <div className="font-bold">¡Ejercicio Completado!</div>
            <div className="text-sm opacity-90">Has ganado {exercise.points} puntos</div>
          </div>
        )}
      </div>
    </div>
  )
}
