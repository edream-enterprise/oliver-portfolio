---
name: braille-ascii-logos
description: Generates high resolution Braille ASCII logos for technologies using simple-icons and node-canvas.
---

# Braille ASCII Logos Generator

This skill provides a Node.js script to generate high-resolution ASCII graphics using Braille characters.
It takes SVG paths from the `simple-icons` package, renders them on a virtual canvas, and maps the opacity (alpha channel) of each pixel to Braille dot patterns.

## Use Case

Use this skill when you need to render logos or complex shapes in a terminal UI or text-based website component where standard ASCII art is too low resolution.

## Prerequisites

To use the generator script, you need to have `canvas` and `simple-icons` installed in the project:

```bash
npm install canvas simple-icons
```

## How it works

Braille characters (`U+2800` to `U+28FF`) map to a 2x4 dot matrix.
By rendering a logo on an 80x80 pixel `<canvas>`, we can read the pixel data and group every 2x4 block into a single Braille character, resulting in a 40x20 character block that has effective 80x80 pixel resolution.

## Using the Script

The generator script is located at `scripts/gen_ascii.cjs` relative to this skill's directory.
You can run or modify it to include any technology found in `simple-icons`.

1. **Find the Icon Key**: You can find the icon key by searching the `simple-icons` package (e.g. `siSvelte`, `siLinux`).
2. **Modify the Script**: Edit `scripts/gen_ascii.cjs` and add the new icon to the `icons` object at the top of the file:
   ```javascript
   const icons = {
   	Svelte: si.siSvelte?.path,
   	MyNewTech: si.siMyNewTech?.path
   };
   ```
3. **Run the Script**:
   ```bash
   node .agents/skills/braille-ascii-logos/scripts/gen_ascii.cjs
   ```
4. **Use Output**: The script will output an `arts.js` file with the exported templates. You can replace the target UI array with the generated content.
