import { GitRepository, GitFile, CommandResult } from '@/types'

export class GitCommandProcessor {
  static processCommand(command: string, repository: GitRepository): CommandResult {
    const args = command.trim().split(' ')
    const gitCommand = args[0]
    const subCommand = args[1]

    try {
      // Handle non-git commands
      if (gitCommand === 'help') {
        return this.handleHelp()
      }

      if (gitCommand === 'clear' || gitCommand === 'cls') {
        return { output: [], repository }
      }

      if (gitCommand === 'reset-repo' || gitCommand === 'clear-repo') {
        return this.handleResetRepository()
      }

      if (gitCommand === 'touch') {
        return this.handleTouch(args, repository)
      }

      if (gitCommand === 'echo') {
        return this.handleEcho(args, repository)
      }

      // Git commands
      if (gitCommand !== 'git') {
        return {
          output: [`Comando no reconocido: ${gitCommand}. Escribe 'help' para ver comandos disponibles.`],
          repository,
          isError: true
        }
      }

      return this.processGitSubcommand(subCommand || '', args, repository)
    } catch (error) {
      return {
        output: ['Error interno del sistema. Intenta de nuevo.'],
        repository,
        isError: true
      }
    }
  }

  private static handleHelp(): CommandResult {
    return {
      output: [
        'Comandos disponibles:',
        '',
        'Configuración:',
        '  git config user.name "Tu Nombre"',
        '  git config user.email "tu@email.com"',
        '',
        'Repositorio:',
        '  git init                - Inicializar repositorio',
        '  git status              - Ver estado del repositorio',
        '  git log                 - Ver historial de commits',
        '',
        'Archivos:',
        '  touch <archivo>         - Crear archivo',
        '  echo "contenido" > archivo - Escribir en archivo',
        '  git add <archivo>       - Agregar archivo al staging area',
        '  git add .               - Agregar todos los archivos',
        '  git commit -m "mensaje" - Crear commit',
        '',
        'Ramas:',
        '  git branch              - Listar ramas',
        '  git branch <nombre>     - Crear rama',
        '  git checkout <rama>     - Cambiar de rama',
        '',
        'Otros:',
        '  clear / cls             - Limpiar terminal',
        '  reset-repo              - 🧹 Reiniciar completamente el repositorio',
        '  help                    - Mostrar esta ayuda'
      ],
      repository: {} as GitRepository // This won't be used since output is just help
    }
  }

  private static handleTouch(args: string[], repository: GitRepository): CommandResult {
    if (!args[1]) {
      return {
        output: ['touch: falta el nombre del archivo'],
        repository,
        isError: true
      }
    }

    const fileName = args[1]
    const newRepository = { ...repository }
    
    if (!newRepository.files.find(f => f.name === fileName)) {
      newRepository.files.push({
        name: fileName,
        status: 'untracked',
        content: ''
      })
    }
    
    return {
      output: [`Archivo '${fileName}' creado`],
      repository: newRepository
    }
  }

  private static handleEcho(args: string[], repository: GitRepository): CommandResult {
    if (args.length < 4 || args[args.length - 2] !== '>') {
      return {
        output: ['Uso: echo "contenido" > archivo'],
        repository,
        isError: true
      }
    }
    
    const fileName = args[args.length - 1]
    if (!fileName) {
      return {
        output: ['Error: nombre de archivo requerido'],
        repository,
        isError: true
      }
    }
    
    const content = args.slice(1, -2).join(' ').replace(/"/g, '')
    const newRepository = { ...repository }
    
    const fileIndex = newRepository.files.findIndex(f => f.name === fileName)
    if (fileIndex >= 0) {
      const file = newRepository.files[fileIndex]
      if (file) {
        file.content = content
        if (file.status === 'committed') {
          file.status = 'modified'
        }
      }
    } else {
      newRepository.files.push({
        name: fileName,
        status: 'untracked',
        content
      })
    }
    
    return {
      output: [`Contenido escrito en '${fileName}'`],
      repository: newRepository
    }
  }

  private static processGitSubcommand(subCommand: string, args: string[], repository: GitRepository): CommandResult {
    switch (subCommand) {
      case 'init':
        return this.handleGitInit(repository)
      case 'config':
        return this.handleGitConfig(args, repository)
      case 'status':
        return this.handleGitStatus(repository)
      case 'add':
        return this.handleGitAdd(args, repository)
      case 'commit':
        return this.handleGitCommit(args, repository)
      case 'log':
        return this.handleGitLog(repository)
      case 'branch':
        return this.handleGitBranch(args, repository)
      case 'checkout':
        return this.handleGitCheckout(args, repository)
      default:
        return {
          output: [`git: '${subCommand}' no es un comando git. Ver 'help'.`],
          repository,
          isError: true
        }
    }
  }

  private static handleGitInit(repository: GitRepository): CommandResult {
    if (repository.isInitialized) {
      return {
        output: ['Ya existe un repositorio Git inicializado'],
        repository,
        isError: true
      }
    }
    
    return {
      output: ['Repositorio Git inicializado en .git/'],
      repository: { ...repository, isInitialized: true }
    }
  }

  private static handleGitConfig(args: string[], repository: GitRepository): CommandResult {
    if (args.length < 4) {
      return {
        output: ['Uso: git config user.name "Nombre" o git config user.email "email"'],
        repository,
        isError: true
      }
    }
    
    const configKey = args[2]
    const configValue = args.slice(3).join(' ').replace(/"/g, '')
    const newRepository = { ...repository }
    
    if (configKey === 'user.name') {
      newRepository.userConfig.name = configValue
      return {
        output: [`Nombre de usuario configurado: ${configValue}`],
        repository: newRepository
      }
    } else if (configKey === 'user.email') {
      newRepository.userConfig.email = configValue
      return {
        output: [`Email configurado: ${configValue}`],
        repository: newRepository
      }
    }
    
    return {
      output: [`Configuración no reconocida: ${configKey}`],
      repository,
      isError: true
    }
  }

  private static handleGitStatus(repository: GitRepository): CommandResult {
    if (!repository.isInitialized) {
      return {
        output: ['fatal: no es un repositorio git'],
        repository,
        isError: true
      }
    }
    
    const statusOutput = ['En la rama ' + repository.currentBranch, '']
    
    const stagedFiles = repository.files.filter(f => f.status === 'staged')
    const modifiedFiles = repository.files.filter(f => f.status === 'modified')
    const untrackedFiles = repository.files.filter(f => f.status === 'untracked')
    
    if (stagedFiles.length > 0) {
      statusOutput.push('Cambios listos para commit:')
      stagedFiles.forEach(file => {
        statusOutput.push(`\tnuevo archivo: ${file.name}`)
      })
      statusOutput.push('')
    }
    
    if (modifiedFiles.length > 0) {
      statusOutput.push('Cambios no preparados para commit:')
      statusOutput.push('  (usa "git add <archivo>..." para preparar)')
      modifiedFiles.forEach(file => {
        statusOutput.push(`\tmodificado: ${file.name}`)
      })
      statusOutput.push('')
    }
    
    if (untrackedFiles.length > 0) {
      statusOutput.push('Archivos sin seguimiento:')
      statusOutput.push('  (usa "git add <archivo>..." para incluir en commit)')
      untrackedFiles.forEach(file => {
        statusOutput.push(`\t${file.name}`)
      })
      statusOutput.push('')
    }
    
    if (stagedFiles.length === 0 && modifiedFiles.length === 0 && untrackedFiles.length === 0) {
      statusOutput.push('árbol de trabajo limpio')
    }
    
    return {
      output: statusOutput,
      repository
    }
  }

  private static handleGitAdd(args: string[], repository: GitRepository): CommandResult {
    if (!repository.isInitialized) {
      return {
        output: ['fatal: no es un repositorio git'],
        repository,
        isError: true
      }
    }
    
    if (!args[2]) {
      return {
        output: ['Nada especificado, nada agregado.'],
        repository,
        isError: true
      }
    }
    
    const newRepo = { ...repository }
    const fileName = args[2]
    
    if (fileName === '.') {
      // Add all files
      newRepo.files = newRepo.files.map(file => 
        file.status === 'untracked' || file.status === 'modified' 
          ? { ...file, status: 'staged' }
          : file
      )
      
      const addedCount = newRepo.files.filter(f => f.status === 'staged').length
      return {
        output: [`${addedCount} archivo(s) agregado(s) al staging area`],
        repository: newRepo
      }
    } else {
      // Add specific file
      const fileIndex = newRepo.files.findIndex(f => f.name === fileName)
      if (fileIndex === -1) {
        return {
          output: [`fatal: pathspec '${fileName}' no coincide con ningún archivo`],
          repository,
          isError: true
        }
      }
      
      const file = newRepo.files[fileIndex]
      if (file && (file.status === 'untracked' || file.status === 'modified')) {
        file.status = 'staged'
        return {
          output: [`Archivo '${fileName}' agregado al staging area`],
          repository: newRepo
        }
      }
      
      return {
        output: [`El archivo '${fileName}' ya está en el staging area`],
        repository
      }
    }
  }

  private static handleGitCommit(args: string[], repository: GitRepository): CommandResult {
    if (!repository.isInitialized) {
      return {
        output: ['fatal: no es un repositorio git'],
        repository,
        isError: true
      }
    }
    
    const stagedFiles = repository.files.filter(f => f.status === 'staged')
    if (stagedFiles.length === 0) {
      return {
        output: ['En la rama ' + repository.currentBranch, 'nada para hacer commit, árbol de trabajo limpio'],
        repository
      }
    }
    
    if (!args.includes('-m')) {
      return {
        output: ['fatal: debe especificar un mensaje de commit con -m'],
        repository,
        isError: true
      }
    }
    
    const messageIndex = args.indexOf('-m') + 1
    if (messageIndex >= args.length) {
      return {
        output: ['fatal: debe especificar un mensaje después de -m'],
        repository,
        isError: true
      }
    }
    
    const message = args.slice(messageIndex).join(' ').replace(/"/g, '')
    const commitHash = Math.random().toString(36).substr(2, 7)
    
    const newRepo = { ...repository }
    
    // Update file statuses
    newRepo.files = newRepo.files.map(file =>
      file.status === 'staged' ? { ...file, status: 'committed' } : file
    )
    
    // Add commit to history
    newRepo.commits.push({
      hash: commitHash,
      message,
      author: repository.userConfig.name || 'Usuario',
      date: new Date().toISOString()
    })
    
    return {
      output: [
        `[${repository.currentBranch} ${commitHash}] ${message}`,
        `${stagedFiles.length} archivo(s) cambiado(s)`
      ],
      repository: newRepo
    }
  }

  private static handleGitLog(repository: GitRepository): CommandResult {
    if (!repository.isInitialized) {
      return {
        output: ['fatal: no es un repositorio git'],
        repository,
        isError: true
      }
    }
    
    if (repository.commits.length === 0) {
      return {
        output: ['fatal: tu rama actual no tiene commits aún'],
        repository,
        isError: true
      }
    }
    
    const logOutput: string[] = []
    repository.commits.slice().reverse().forEach(commit => {
      logOutput.push(`commit ${commit.hash}`)
      logOutput.push(`Author: ${commit.author} <${repository.userConfig.email || 'email@example.com'}>`)
      logOutput.push(`Date: ${new Date(commit.date).toLocaleString()}`)
      logOutput.push('')
      logOutput.push(`    ${commit.message}`)
      logOutput.push('')
    })
    
    return {
      output: logOutput,
      repository
    }
  }

  private static handleGitBranch(args: string[], repository: GitRepository): CommandResult {
    if (!repository.isInitialized) {
      return {
        output: ['fatal: no es un repositorio git'],
        repository,
        isError: true
      }
    }
    
    if (!args[2]) {
      // List branches
      return {
        output: repository.branches.map(branch => 
          branch === repository.currentBranch ? `* ${branch}` : `  ${branch}`
        ),
        repository
      }
    } else {
      // Create new branch
      const branchName = args[2]
      if (repository.branches.includes(branchName)) {
        return {
          output: [`fatal: una rama llamada '${branchName}' ya existe`],
          repository,
          isError: true
        }
      }
      
      const newRepo = { ...repository }
      newRepo.branches.push(branchName)
      
      return {
        output: [`Rama '${branchName}' creada`],
        repository: newRepo
      }
    }
  }

  private static handleGitCheckout(args: string[], repository: GitRepository): CommandResult {
    if (!repository.isInitialized) {
      return {
        output: ['fatal: no es un repositorio git'],
        repository,
        isError: true
      }
    }
    
    if (!args[2]) {
      return {
        output: ['fatal: debe especificar una rama'],
        repository,
        isError: true
      }
    }
    
    const targetBranch = args[2]
    if (!repository.branches.includes(targetBranch)) {
      return {
        output: [`error: pathspec '${targetBranch}' no coincide con ninguna rama conocida`],
        repository,
        isError: true
      }
    }
    
    if (targetBranch === repository.currentBranch) {
      return {
        output: [`Ya en la rama '${targetBranch}'`],
        repository
      }
    }
    
    return {
      output: [`Cambiado a rama '${targetBranch}'`],
      repository: { ...repository, currentBranch: targetBranch }
    }
  }

  private static handleResetRepository(): CommandResult {
    const initialRepository: GitRepository = {
      isInitialized: false,
      currentBranch: 'main',
      branches: ['main'],
      files: [],
      commits: [],
      userConfig: { name: '', email: '' }
    }

    return {
      output: [
        '🧹 Repositorio completamente limpiado!',
        '',
        'Se ha reiniciado:',
        '• Estado del repositorio',
        '• Todos los archivos',
        '• Historial de commits',
        '• Configuración de usuario',
        '• Ramas (vuelto a main)',
        '',
        'Puedes empezar de nuevo con "git init" 🚀'
      ],
      repository: initialRepository
    }
  }
}
