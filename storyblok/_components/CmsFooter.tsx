import Image from 'next/image'
import { storyblokEditable } from '@storyblok/js'

export type TCmsFooter = {
	blok: {
		footer: {
			filename: string
			alt: string
		}
	}
}

export function CmsFooter({ blok }: TCmsFooter) {
	console.log(blok)
	return (
		<>
			<Image
				width={2802}
				height={368}
				src={blok.footer.filename}
				alt={blok.footer.alt}
				className="w-full max-w-7xl"
				{...storyblokEditable(blok)}
			/>
		</>
	)
}
