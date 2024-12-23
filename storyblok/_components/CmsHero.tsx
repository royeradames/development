import { SbBlokData } from '@storyblok/react'
import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc'
import { SbImage } from '@/storyblok/types/SbImage'
import { useContactUsDialog } from '@/storyblok/customHooks/useContactUsDialog'
import { formatTitleToId } from '@/utils/formatTitleToId'

export type TCmsHero = {
	blok: {
		background: SbImage
		title: string
		body: string
		actions: [SbBlokData]
		headingAs?: 'h1' | 'h2'
		contactEmail: string
		contactPhone: string
	}
}
export default function CmsHero({
	blok,
	blok: {
		title,
		background: { filename },
		body,
		actions: [actionBlok],
		headingAs: Heading = 'h2',
		contactEmail,
		contactPhone,
	},
}: TCmsHero) {
	const { ContactUsDialog, openContactUsModal } = useContactUsDialog({
		contactEmail,
		contactPhone,
	})
	const id = formatTitleToId(title)
	return (
		<section
			aria-labelledby={id}
			data-component="CmsHero"
			className="hero min-h-screen bg-right-bottom bg-no-repeat bg-cover md:bg-contain bg-black justify-items-start"
			style={{
				backgroundImage: `url(${filename})`,
			}}
			{...storyblokEditable(blok)}
		>
			<div className="hero-overlay bg-opacity-60 bg-transparent"></div>
			<div className="hero-content text-neutral-content sm:pl-16 items-start">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="48px"
					height="48px"
					viewBox="0 0 48 48"
					version="1.1"
					className="h-12 w-12 hidden sm:block"
				>
					<title>chevron_right_white_48</title>
					<g
						id="Page-1"
						stroke="none"
						strokeWidth="1"
						fill="none"
						fillRule="evenodd"
					>
						<g id="chevron_right_white_48">
							<polygon id="Path" points="0 0 48 0 48 48 0 48" />
							<polygon
								id="Path"
								fill="#FFFFFF"
								fillRule="nonzero"
								points="20 12 17.18 14.82 26.34 24 17.18 33.18 20 36 32 24"
							/>
						</g>
					</g>
				</svg>

				<div className="max-w-md bg-black p-4">
					<Heading
						id={id}
						className="mb-5 text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#1abba9] to-[#6078ea]"
					>
						{title}
					</Heading>
					<p className="mb-5 text-base text-white">{body}</p>
					<StoryblokComponent
						blok={actionBlok}
						className="bg-white text-black hover:bg-white hover:text-black rounded-none"
						onClick={openContactUsModal}
					/>
					<ContactUsDialog />
				</div>
			</div>
		</section>
	)
}
