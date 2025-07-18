# 🚀 Learning Git

Una aplicación web educativa moderna para aprender Git de forma interactiva, diseñada específicamente para estudiantes de Ingeniería en Sistemas.

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18+-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3+-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Características

- 🖥️ **Terminal Git Interactiva**: Practica comandos Git en un entorno simulado completamente funcional
- 📚 **Guías Completas**: Contenido educativo desde principiante hasta avanzado
- 🎥 **Videos Educativos**: Colección curada de videos de YouTube
- 🏆 **Sistema de Logros**: Gamificación del aprendizaje con medallas y puntos
- 🌙 **Tema Claro/Oscuro**: Interfaz adaptable con cambio de tema automático
- 📱 **Diseño Responsive**: Funciona perfectamente en todos los dispositivos
- 💾 **Persistencia Local**: Tu progreso se guarda automáticamente

## 🎯 Objetivo

Proporcionar una plataforma educativa completa donde los estudiantes puedan:
- Aprender Git desde cero de manera práctica
- Practicar comandos sin miedo a cometer errores
- Seguir su progreso y obtener logros
- Acceder a contenido educativo de calidad

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js 14** (App Router)
- **React 18** con hooks
- **TypeScript** para type safety
- **TailwindCSS** para estilos
- **Lucide React** para iconos

### Funcionalidades
- **next-mdx-remote** para contenido MDX
- **gray-matter** para parsing de frontmatter
- **localStorage** para persistencia
- **CSS animations** para UX mejorada

### Despliegue
- **Vercel** (configuración incluida)
- **Optimización automática**
- **SEO optimizado**

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos de instalación

1. **Clona el repositorio**
```bash
git clone https://github.com/mat1520/Learning-Git.git
cd Learning-Git
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Ejecuta en modo desarrollo**
```bash
npm run dev
```

4. **Abre en tu navegador**
```
http://localhost:3000
```

### Scripts disponibles

```bash
# Desarrollo
npm run dev

# Construcción para producción
npm run build

# Iniciar servidor de producción
npm start

# Linting
npm run lint
```

## 📁 Estructura del Proyecto

```
Learning-Git/
├── app/                          # App Router de Next.js
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Página de inicio
│   ├── globals.css              # Estilos globales
│   ├── guias/                   # Páginas de guías
│   │   ├── page.tsx            # Lista de guías
│   │   └── [id]/page.tsx       # Guía individual
│   ├── videos/page.tsx          # Página de videos
│   ├── ejercicios/page.tsx      # Terminal interactiva
│   ├── logros/page.tsx          # Sistema de logros
│   └── about/page.tsx           # Información del proyecto
├── components/                   # Componentes reutilizables
│   ├── Navbar.tsx               # Navegación principal
│   ├── Footer.tsx               # Footer
│   ├── GitTerminal.tsx          # Terminal Git simulada
│   └── ThemeProvider.tsx        # Proveedor de tema
├── content/                     # Contenido MDX
│   └── guias/                   # Guías en formato MDX
│       ├── introduccion-git.mdx
│       └── comandos-basicos.mdx
├── public/                      # Archivos estáticos
├── next.config.js              # Configuración de Next.js
├── tailwind.config.js          # Configuración de Tailwind
├── tsconfig.json               # Configuración de TypeScript
└── vercel.json                 # Configuración de Vercel
```

## 🎮 Funcionalidades Principales

### 1. Terminal Git Interactiva
- Simula un entorno Git completo
- Soporta comandos básicos e intermedios
- Persistencia del estado del repositorio
- Respuestas realistas y educativas

### 2. Sistema de Logros
- Seguimiento automático del progreso
- Medallas por completar tareas
- Puntos y estadísticas
- Motivación gamificada

### 3. Guías Educativas
- Contenido estructurado por niveles
- Formato MDX para rich content
- Navegación intuitiva
- Ejemplos prácticos

### 4. Videos Educativos
- Colección curada de contenido
- Filtros por nivel de dificultad
- Integración con YouTube
- Complementa el aprendizaje teórico

## 🔧 Comandos Git Soportados

La terminal interactiva soporta los siguientes comandos:

### Configuración
- `git config user.name "Nombre"`
- `git config user.email "email@example.com"`

### Repositorio
- `git init`
- `git status`
- `git log`

### Archivos
- `touch archivo.txt`
- `echo "contenido" > archivo.txt`
- `git add archivo.txt`
- `git add .`
- `git commit -m "mensaje"`

### Ramas
- `git branch`
- `git branch nombre-rama`
- `git checkout rama`

### Utilidades
- `help` - Muestra ayuda
- `clear` - Limpia la terminal

## 🎨 Personalización

### Temas
El proyecto incluye soporte completo para tema claro/oscuro:
- Detección automática de preferencias del sistema
- Persistencia de la selección del usuario
- Transiciones suaves entre temas

### Estilos
Usa TailwindCSS para personalización fácil:
- Colores definidos en `tailwind.config.js`
- Componentes reutilizables en `globals.css`
- Responsive design móvil-first

## 🚀 Despliegue

### Vercel (Recomendado)
El proyecto está preconfigurado para Vercel:

1. **Conecta tu repositorio en Vercel**
2. **Deploy automático** - Vercel detecta Next.js automáticamente
3. **Dominio personalizado** - Opcional

### Otras plataformas
También funciona en:
- Netlify
- Railway
- Heroku
- Cualquier host que soporte Node.js

## 📈 Roadmap

### Funcionalidades futuras
- [ ] Más comandos Git (rebase, cherry-pick, etc.)
- [ ] Simulación de conflictos y resolución
- [ ] Integración con GitHub API
- [ ] Modo colaborativo multijugador
- [ ] Ejercicios guiados paso a paso
- [ ] Exportación de progreso
- [ ] Integración con VS Code

### Mejoras técnicas
- [ ] Tests unitarios y de integración
- [ ] PWA (Progressive Web App)
- [ ] Optimizaciones de performance
- [ ] Internacionalización (i18n)
- [ ] Accesibilidad mejorada

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si quieres contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Tipos de contribuciones
- 🐛 **Bug fixes**
- ✨ **Nuevas funcionalidades**
- 📚 **Mejoras en documentación**
- 🎨 **Mejoras de UI/UX**
- 🔧 **Refactoring de código**

## 🧪 Testing

```bash
# Ejecutar tests (cuando estén implementados)
npm test

# Tests con cobertura
npm run test:coverage

# Tests en modo watch
npm run test:watch
```

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Ariel Melo**
- GitHub: [@mat1520](https://github.com/mat1520)
- LinkedIn: [Ariel Melo](https://linkedin.com/in/ariel-melo)
- Email: ariel@example.com

## 🙏 Agradecimientos

- **Linus Torvalds** por crear Git
- **Vercel** por la plataforma de despliegue
- **Comunidad de Next.js** por el framework
- **TailwindCSS** por el sistema de diseño
- **Lucide** por los iconos

## 📊 Estadísticas del Proyecto

- 🎯 **Objetivo**: Educación en Git
- 👥 **Audiencia**: Estudiantes de Ingeniería en Sistemas
- 🛠️ **Tecnología**: Next.js 14 + React 18
- 📱 **Compatibilidad**: Todos los dispositivos
- 🌐 **Despliegue**: Vercel

---

<div align="center">

**¿Te gusta el proyecto? ¡Dale una ⭐ en GitHub!**

[🚀 Ver Demo](https://learning-git.vercel.app) • [📚 Documentación](https://github.com/mat1520/Learning-Git/wiki) • [🐛 Reportar Bug](https://github.com/mat1520/Learning-Git/issues)

</div>
