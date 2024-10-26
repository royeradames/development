import { SbBlokData } from '@storyblok/react'
import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc'
import { formatTitleToId } from '@/utils/formatTitleToId'
import { cn } from '@/utils/cn'

export type TCmsGalleryGrid = {
	blok: {
		title?: string
		items: SbBlokData[]
		/**
		 * Manual contrast of the component
		 * Can be changed to style
		 */
		isDarkMode: boolean
		/**
		 * determines how many columns out of 4.
		 */
		layout: 'ascending' | 'evens' | 'odds'
	}
}

export type TGalleryGridItem = {
	isDarkMode: boolean
	headingAs: 'h2' | 'h3'
	blok: SbBlokData
}

export function CmsGalleryGrid({
	blok,
	blok: { title, items, isDarkMode = true, layout = 'ascending' },
	...props
}: TCmsGalleryGrid) {
	const Section = title ? 'section' : 'div'
	const headingId = title ? formatTitleToId(title) : ''
	const isOneItem = items.length === 1
	return (
		<Section
			data-component="CmsGalleryGrid"
			className={cn('', {
				'bg-white': !isDarkMode,
				'bg-black': isDarkMode,
			})}
			aria-labelledby={title ? headingId : undefined}
			{...storyblokEditable(blok)}
			{...props}
		>
			<div
				className={cn('max-w-7xl mx-auto gap-6 py-20 px-4 xl:px-0 grid ', {
					'bg-white': !isDarkMode,
					'bg-black': isDarkMode,
					'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4':
						layout === 'ascending' && !isOneItem,
					'grid-cols-2 lg:grid-cols-4': layout === 'evens' && !isOneItem,
					'grid-cols-2 lg:grid-cols-3': layout === 'odds' && !isOneItem,
					'grid-cols-12 ': isOneItem,
				})}
			>
				{title ? (
					<h2
						id={headingId}
						className={cn('text-5xl font-bold col-span-full mb-10', {
							'text-white': isDarkMode,
							'text-black': !isDarkMode,
						})}
					>
						{title}
					</h2>
				) : undefined}
				{items.map((item) => {
					const singleItemLayout =
						'col-end-[-1] col-span-8 flex-row justify-end'
					return (
						<StoryblokComponent
							isDarkMode={isDarkMode}
							blok={item}
							key={item._uid}
							className={cn('', {
								[singleItemLayout]: isOneItem,
							})}
						/>
					)
				})}
			</div>
		</Section>
	)
}