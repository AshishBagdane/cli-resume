# Cyberpunk CLI Resume

A high-tech, cyberpunk-themed CLI resume with stunning visual effects and animations running directly in your terminal. This interactive resume presents professional information with a futuristic cyberpunk aesthetic, complete with matrix effects, glitch animations, and an immersive interface.

![Cyberpunk Resume Demo](https://raw.githubusercontent.com/ashish-bagdane/cli-resume/master/demo.gif)

## Features

- ⚡ Matrix-style rain animation intro
- 💻 Animated ASCII name display
- 🔷 Typewriter text effects
- 🌈 Gradient color schemes and custom Unicode characters
- 🖼️ Perfectly centered boxes with cyberpunk borders
- 🎭 Glitch text effects
- 🚀 Dynamic loading animations
- ⏱️ Multiple speed modes (normal, fast, minimal)
- 📱 Responsive to terminal size

## Installation

### Using npx (recommended)

The easiest way to view this resume is by using npx:

```bash
npx ashish-bagdane
```

### Installing globally

```bash
npm install -g ashish-bagdane
```

Then run:

```bash
ashish-bagdane
```

### Local installation

```bash
# Clone the repository
git clone https://github.com/ashish-bagdane/cli-resume.git

# Navigate to the project directory
cd cli-resume

# Install dependencies
npm install

# Run the resume
npm start
```

## Usage

### Command-line options

```bash
# Run with normal animations
ashish-bagdane

# Run with faster animations
ashish-bagdane --fast

# Run with minimal animations (for low-resource environments)
ashish-bagdane --minimal

# Skip the matrix rain animation
ashish-bagdane --noMatrix

# Run in development mode with debug information
ashish-bagdane --dev
```

## Project Structure

The project is organized into modular components for better maintainability:

```
cyberpunk-resume/
├── bin/
│   └── cli.js              # CLI entry point
├── src/
│   ├── config/
│   │   ├── theme.js        # Colors, icons, borders
│   │   └── resumeData.js   # Resume data
│   ├── utils/
│   │   └── helpers.js      # Utility functions
│   ├── animations/
│   │   ├── index.js        # Exports all animations
│   │   ├── boot.js         # Boot sequence animations
│   │   ├── matrix.js       # Matrix rain effect
│   │   ├── text.js         # Text animations (typewriter, glitch)
│   │   └── box.js          # Box animations
│   ├── components/
│   │   ├── index.js        # Exports all components
│   │   ├── header.js       # Header/name display
│   │   ├── contact.js      # Contact information
│   │   ├── profile.js      # Profile summary
│   │   ├── skills.js       # Technical skills
│   │   ├── experience.js   # Work experience
│   │   ├── education.js    # Education
│   │   └── footer.js       # Footer component
│   └── app.js              # Main application logic
├── package.json
└── README.md
```

## Customization

### Creating your own CLI resume

1. Fork this repository
2. Update `src/config/resumeData.js` with your personal information
3. Modify the theme in `src/config/theme.js` to change colors, icons, or borders
4. Customize animations or components as needed
5. Update the package.json with your information
6. Publish to npm (optional)

### Display Options

Adjust any of the following in the theme configuration:

- Color schemes
- Border styles
- Icons
- Animation speeds
- Text formatting

## Technical Implementation

This project uses:

- **chalk**: Terminal string styling
- **boxen**: Create boxes in the terminal
- **figlet**: ASCII art from text
- **gradient-string**: Create color gradients in the terminal
- **ora**: Elegant terminal spinners
- **cli-spinners**: Collection of spinners for terminal
- **term-size**: Reliably get terminal size
- **commander**: Command-line interface

### Animation Techniques

- **Typewriter effect**: Character-by-character text reveal
- **Box animations**: Line-by-line rendering of centered boxes
- **Matrix rain**: Custom terminal position-based animation
- **Section fade-in**: Spinner-based section introduction

## Requirements

- Node.js ≥ 18
- Terminal with ANSI color support
- Monospaced font for best display

## Credits

- Created by Ashish Bagdane
- Inspired by cyberpunk aesthetics and terminal art

## License

MIT License - see LICENSE file for details.
