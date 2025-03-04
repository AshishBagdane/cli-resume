# // [PREMIUM] CYBERPUNK CLI RESUME

A cutting-edge animated CLI resume with immersive cyberpunk aesthetics, featuring matrix rain animations, dynamic text effects, and responsive terminal design.

![Cyberpunk CLI Resume Preview](/api/placeholder/800/400)

## // SYSTEM_OVERVIEW

This is not just a resume—it's an _experience_. Showcasing your professional profile through an immersive cyberpunk-styled terminal interface with advanced animations, this CLI resume makes a lasting impression on technical recruiters and fellow developers.

The resume automatically centers content based on terminal size, creating a visually balanced presentation on any terminal window.

## // FEATURE_MATRIX

- **Advanced Animation Suite:**

  - Matrix-style rain effect introduction
  - Character-by-character decoding text reveals
  - Glitch effects and simulated system boot
  - Typewriter animations with cursor effects
  - Scanning beam text transitions
  - Pulsing elements for emphasis

- **Responsive Design:**

  - Dynamically centers all content based on terminal dimensions
  - Adjusts layout for optimal viewing on any screen size
  - Ensures consistent visual presentation

- **Premium Visual Design:**

  - Electric blue accents against matte black background
  - Carefully crafted color gradients for section headers
  - Unicode icons for enhanced visual appeal ⚡✧⟡✵⎔★
  - Custom-designed cyberpunk-inspired borders and connector lines
  - Visual hierarchy with vertical connectors and animated bullet points

- **Interactive Experience:**
  - Simulated system boot sequence
  - Custom spinners and loading animations
  - Progress indicators for each section
  - "Wait for input" prompt at conclusion

## // EXECUTION_COMMAND

Anyone can view your resume by running:

```bash
npx ashish-bagdane
```

No installation required! The package runs directly through NPX.

## // DEVELOPER_DOCUMENTATION

### System Requirements

- Node.js (v18 or higher)
- npm or yarn
- Terminal with ANSI color support

### Dependency Matrix

| Package           | Purpose                                          |
| ----------------- | ------------------------------------------------ |
| `chalk`           | Terminal string styling with RGB/HEX colors      |
| `boxen`           | Creating bordered boxes in the terminal          |
| `figlet`          | ASCII art text generation                        |
| `gradient-string` | Color gradients in terminal text                 |
| `ora`             | Elegant terminal spinners                        |
| `cli-spinners`    | Collection of spinner animations                 |
| `term-size`       | Detect terminal dimensions for responsive layout |

### Local Development Instructions

```bash
# Clone repository
git clone https://github.com/ashish-bagdane/cyberpunk-resume.git

# Navigate to project
cd cyberpunk-resume

# Install dependencies
npm install

# Test locally
npm start
```

### Customization Options

1. **Content Configuration:**

   - Edit the `resumeData` object in `index.js` to contain your information
   - Customize section order by rearranging the code blocks

2. **Visual Styling:**

   - Modify the color scheme by changing the hex values in the color variables
   - Adjust animation timing by modifying sleep durations
   - Customize spinner styles by selecting different options from cli-spinners

3. **Animation Control:**
   - Enable/disable specific animations in the main function
   - Adjust animation speed by modifying sleep values
   - Create new animation patterns by combining existing techniques

## // PUBLISHING_PROTOCOL

```bash
# Login to npm
npm login

# Publish your package
npm publish
```

## // KNOWN_LIMITATIONS

- Some terminals may not support all Unicode characters
- Windows Command Prompt has limited color support
- Very small terminal windows may cause layout issues
- Animation performance may vary on older hardware

## // LICENSE

MIT

---

_Designed with ⚡ by Ashish Bagdane_
