# Cyberpunk CLI Resume

[![npm version](https://img.shields.io/npm/v/ashish-bagdane.svg)](https://www.npmjs.com/package/ashish-bagdane)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18-green.svg)](https://nodejs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

A high-tech, cyberpunk-themed CLI resume generator with stunning visual effects and animations running directly in your terminal.

![Cyberpunk Resume Demo](https://raw.githubusercontent.com/ashish-bagdane/cli-resume/main/demo.gif)

## 📋 Table of Contents

- [Create Your Own Resume](#-create-your-own-resume)
- [Quick Start](#-quick-start)
- [Features](#-features)
- [Installation](#-installation)
- [Usage](#-usage)
- [Customization](#-customization)
- [Terminal Compatibility](#-terminal-compatibility)
- [Performance Tips](#-performance-tips)
- [Troubleshooting](#-troubleshooting)
- [Technical Implementation](#-technical-implementation)
- [Contributing](#-contributing)
- [License](#-license)

## 🔨 Create Your Own Resume

You can easily create your own cyberpunk resume with our generator:

```bash
# Use npx to run the generator (no installation required)
npx ashish-bagdane

# Or install the generator globally
npm install -g ashish-bagdane

# Then run
ashish-bagdane
```

The generator will guide you through:

1. Basic information (name, title, location)
2. Contact details (LinkedIn, website)
3. Professional summary
4. Work experience
5. Skills and expertise
6. Education
7. Color customization (optional)

Then it will:

1. Create a new directory with your complete resume project
2. Set up all necessary files and structure
3. Configure it as an npm package ready for publishing

Once generated, you can:

1. Test your resume with `npm start`
2. Customize further if needed
3. Publish to npm (optional) with `npm publish`

After publishing, anyone can view your resume by running:

```bash
npx your-package-name
```

## 🚀 Quick Start

```bash
# Run via npx (no installation required)
npx ashish-bagdane

# For faster animations
npx ashish-bagdane --fast

# For low-resource environments
npx ashish-bagdane --minimal
```

## ✨ Features

- ⚡ Matrix-style rain animation intro
- 💻 Animated ASCII name display
- 🔷 Typewriter text effects
- 🌈 Gradient color schemes and custom Unicode characters
- 🖼️ Perfectly centered boxes with cyberpunk borders
- 🎭 Glitch text effects
- 🚀 Dynamic loading animations
- ⏱️ Multiple speed modes (normal, fast, minimal)
- 📱 Responsive to terminal size

## 📥 Installation

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

## 🎮 Usage

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

### Keyboard Controls

While the resume is running:

- Press any key to exit at the end
- `Ctrl+C` to exit at any time

## 🏗️ Project Structure

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

## 🎨 Customization

### Creating your own CLI resume

1. Fork this repository
2. Update `src/config/resumeData.js` with your personal information
3. Modify the theme in `src/config/theme.js` to change colors, icons, or borders
4. Customize animations or components as needed
5. Update the package.json with your information
6. Publish to npm (optional)

### Customization Code Examples

#### Changing Colors

```javascript
// src/config/theme.js
export const colors = {
  electricBlue: "#0ff0fc", // Change to your preferred blue
  neonPink: "#ff2a6d", // Change to your preferred pink
  neonPurple: "#d300c5", // Change to your preferred purple
  matteBlack: "#121212", // Change background color
  cyborgGreen: "#05ffa1", // Change to your preferred green
  // Add more colors as needed
};
```

#### Updating Resume Data

```javascript
// src/config/resumeData.js
export const resumeData = {
  name: "YOUR NAME",
  title: "Your Title | Your Position | Your Specialty",
  location: "Your Location",
  contact: {
    linkedin: "www.linkedin.com/in/yourprofile",
    portfolio: "yourwebsite.com",
  },
  // Add more sections as needed
};
```

#### Customizing Icons

```javascript
// src/config/theme.js
export const icons = {
  contact: "✧", // Change to preferred icon
  email: "✉", // Change to preferred icon
  phone: "☏", // Change to preferred icon
  web: "⌘", // Change to preferred icon
  linkedin: "⚯", // Change to preferred icon
  // Add more icons as needed
};
```

## 💻 Terminal Compatibility

For the best experience, use one of these terminals:

| Terminal                    | OS             | Notes                                           |
| --------------------------- | -------------- | ----------------------------------------------- |
| iTerm2                      | macOS          | Best overall experience, true color support     |
| Windows Terminal            | Windows        | Excellent for Windows users, true color support |
| Hyper                       | Cross-platform | Great compatibility, customizable               |
| Gnome Terminal              | Linux          | Good support for animations                     |
| Konsole                     | Linux          | Good compatibility                              |
| Terminal.app                | macOS          | Basic support, limited colors                   |
| VS Code Integrated Terminal | Cross-platform | Good compatibility                              |

> **Note**: For optimal viewing, use a terminal that supports ANSI color codes and Unicode characters.

## ⚡ Performance Tips

1. **For lower-end machines**, use the `--minimal` flag to reduce animations:

   ```bash
   ashish-bagdane --minimal
   ```

2. **For slightly faster performance** without losing all animations, use:

   ```bash
   ashish-bagdane --fast
   ```

3. **Skip the matrix animation** if it runs too slowly:

   ```bash
   ashish-bagdane --noMatrix
   ```

4. **Terminal size matters**: Performance may vary in very large or very small terminals.

5. **Running in VS Code**: Terminal performance in VS Code can be slower - consider using a native terminal app instead.

## 🔧 Troubleshooting

### Common Issues

| Issue                              | Solution                                                                   |
| ---------------------------------- | -------------------------------------------------------------------------- |
| Box alignment issues               | Try adjusting your terminal window size or font                            |
| Garbled text or missing characters | Ensure your terminal supports Unicode and ANSI colors                      |
| Slow performance                   | Use `--fast` or `--minimal` mode                                           |
| Animation glitches                 | Some terminals may not fully support all animations - try another terminal |
| Black/blank screen                 | Press Ctrl+C and try running with `--minimal` flag                         |

### Debug Mode

If you're experiencing issues, run in debug mode to get more information:

```bash
ashish-bagdane --dev
```

## 🔍 Technical Implementation

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

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add some amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a pull request**

### Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/cli-resume.git

# Install dependencies
npm install

# Run in development mode
npm run dev
```

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## ❓ FAQ

### Can I use this for my own resume?

Yes! Fork the repository, update the resume data, and make it your own.

### How do I publish my resume to npm?

First, create an npm account, then:

```bash
# Update package.json with your details
# Then login to npm
npm login

# Publish your package
npm publish
```

### Will this work on Windows?

Yes, though some animations may display differently. Use Windows Terminal for best results.

### Can I add more sections to the resume?

Yes, you'll need to:

1. Update `resumeData.js` with new sections
2. Create new component files in `src/components/`
3. Update `app.js` to include your new components

### How can I change the font or ASCII art style?

The ASCII name is generated using Figlet. Change the font in `header.js` by modifying the `font` parameter in the `typewriterName` function. See [Figlet fonts](http://www.figlet.org/examples.html) for options.

## 📝 Changelog

### v2.0.0 (2024-03-04)

- Initial release
- Matrix animation and cyberpunk theme
- Full resume display with animations

### v1.0.0 (2024-03-04)

- Pre-release with core functionality
- Basic animations and styling

## 🔒 Requirements

- Node.js ≥ 18
- Terminal with ANSI color support
- Monospaced font for best display

## 👏 Credits

- Created by Ashish Bagdane
- Inspired by cyberpunk aesthetics and terminal art
- Special thanks to all open-source libraries used in this project

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.
