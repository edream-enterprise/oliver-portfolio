const fs = require('fs');
const { createCanvas, Image } = require('canvas');
const si = require('simple-icons');

const icons = {
	Svelte: si.siSvelte?.path,
	Fedora: si.siFedora?.path,
	AlmaLinux: si.siAlmalinux?.path,
	Vue: si.siVuedotjs?.path,
	PostgreSQL: si.siPostgresql?.path,
	MongoDB: si.siMongodb?.path,
	Docker: si.siDocker?.path,
	NeoVim: si.siNeovim?.path,
	TailwindCSS: si.siTailwindcss?.path,
	Hyprland: si.siHyprland?.path,
	NodeJS: si.siNodedotjs?.path,
	FastAPI: si.siFastapi?.path
};

const WIDTH = 80;
const HEIGHT = 80;

function generateBraille(ctx, w = WIDTH, h = HEIGHT) {
	const imgData = ctx.getImageData(0, 0, w, h).data;
	let lines = [];

	for (let by = 0; by < Math.floor(h / 4); by++) {
		let row = '';
		for (let bx = 0; bx < Math.floor(w / 2); bx++) {
			let b = 0;
			const getPx = (x, y) => {
				const px = bx * 2 + x;
				const py = by * 4 + y;
				if (px >= w || py >= h) return false;
				const alpha = imgData[(py * w + px) * 4 + 3];
				return alpha > 128;
			};

			if (getPx(0, 0)) b |= 1;
			if (getPx(0, 1)) b |= 2;
			if (getPx(0, 2)) b |= 4;
			if (getPx(1, 0)) b |= 8;
			if (getPx(1, 1)) b |= 16;
			if (getPx(1, 2)) b |= 32;
			if (getPx(0, 3)) b |= 64;
			if (getPx(1, 3)) b |= 128;

			if (b === 0) row += ' ';
			else row += String.fromCharCode(0x2800 + b);
		}
		lines.push(row);
	}

	return lines.join('\n');
}

async function main() {
	let code = 'const asciiArts = [\n';

	for (const [name, path] of Object.entries(icons)) {
		if (!path) continue;
		const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 24 24"><path fill="black" d="${path}"/></svg>`;
		const img = new Image();
		img.src = 'data:image/svg+xml;base64,' + Buffer.from(svgStr).toString('base64');

		const canvas = createCanvas(WIDTH, HEIGHT);
		const ctx = canvas.getContext('2d');
		ctx.drawImage(img, 0, 0, WIDTH, HEIGHT);

		let braille = generateBraille(ctx);
		code += `\t\`\n${braille}\n\t\`,\n`;
	}

	code = code.replace(/,\n$/, '\n');
	code += '];\n';
	fs.writeFileSync('arts.js', code);
	console.log('Done');
}

main().catch(console.error);
