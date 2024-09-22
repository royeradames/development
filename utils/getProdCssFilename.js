// .next/static/css/{filename}.css - this filename changes on every build
// this util reads the current filename so it can be added to the iframe for demoing patterns

import fs from 'fs'

export function getProdCssFilename() {
	const cssDir = `${process.cwd()}/.next/static/css`

	const cssFiles = fs.readdirSync(cssDir)

	const cssFilenames = cssFiles.filter((file) => file.endsWith('.css'))

	return cssFilenames[0] //there is only 1 css output file currently
}
