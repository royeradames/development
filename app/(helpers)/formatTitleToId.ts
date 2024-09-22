import slugify from 'slugify'

// https://www.npmjs.com/package/slugify
export function formatTitleToId(title: string) {
	return slugify(title, { lower: true, strict: true })
}
