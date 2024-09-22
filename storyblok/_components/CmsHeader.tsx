import Image from 'next/image'
import { storyblokEditable } from '@storyblok/js'

export type TCmsHeader = {
	blok: {
		header: {
			filename: string
			alt: string
		}
	}
}

export function CmsHeader({ blok }: TCmsHeader) {
	return (
		<>
			<Image
				width={2802}
				height={368}
				src={blok.header.filename}
				alt={blok.header.alt}
				className="w-full max-w-7xl"
				{...storyblokEditable(blok)}
			/>
		</>
	)
}
