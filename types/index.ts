export interface GitFile {
  name: string
  status: 'untracked' | 'modified' | 'staged' | 'committed'
  content?: string
}

export interface GitCommit {
  hash: string
  message: string
  author: string
  date: string
}

export interface GitUserConfig {
  name?: string
  email?: string
}

export interface GitRepository {
  files: GitFile[]
  currentBranch: string
  branches: string[]
  commits: GitCommit[]
  isInitialized: boolean
  userConfig: GitUserConfig
  commandHistory?: string[]
  sessionCount?: number
}

export interface CommandHistory {
  command: string
  output: string[]
  timestamp: Date
  isError?: boolean
}

export interface CommandResult {
  output: string[]
  repository: GitRepository
  isError?: boolean
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  category: 'basics' | 'configuration' | 'branching' | 'organization' | 'productivity'
  points: number
  unlocked: boolean
  unlockedAt: string | null
}

export interface GuideMetadata {
  title: string
  description: string
  level: 'Principiante' | 'Intermedio' | 'Avanzado'
  duration: string
  topics: string[]
}

export interface VideoData {
  id: string
  title: string
  description: string
  thumbnail: string
  videoId: string
  duration: string
  level: 'Principiante' | 'Intermedio' | 'Avanzado'
  views: string
}

export type LevelType = 'Principiante' | 'Intermedio' | 'Avanzado'
export type CategoryType = 'beginner' | 'intermediate' | 'advanced'
