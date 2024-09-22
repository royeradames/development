import { storyblokEditable } from '@storyblok/react/rsc'
import NextImage from 'next/image'

// Resources
// https://www.storyblok.com/docs/image-service#united-states

type CmsImageProps = {
	blok: {
		ratio: string
		image: {
			filename: string
			alt: string
			title: string
		}
		id: string
	}
}

export function CmsImage({ blok }: CmsImageProps) {
	const { ratio, image, id } = blok
	const { filename, alt, title } = image
	const width = 800
	let height: 450 | 600 | 800 | 1067 | 1600 = 450

	switch (ratio) {
		case '16:9':
			height = 450
			break
		case '4:3':
			height = 600
			break
		case '1:1':
			height = 800
			break
		case '3:4':
			height = 1067
			break
		case '9:16':
			height = 1600
			break
		default:
			break
	}

	const formattedImage = `${filename}/m/${width}x${height}/filters:format(webp)`

	return (
		<NextImage
			id={id}
			src={formattedImage}
			width={width}
			height={height}
			alt={alt}
			title={title}
			className="rounded-lg"
			{...storyblokEditable(blok)}
		/>
	)
}
