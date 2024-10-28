import { z } from 'zod'

const envSchema = z.object({
	// Server-side environment variables
	STORYBLOK_TOKEN: z.string().min(1, {
		message: 'STORYBLOK_TOKEN is required and cannot be empty',
	}),
	// Next.js specific variables
	ENVIRONMENT: z.enum(['development', 'production'], {
		errorMap: () => ({
			message: "ENVIRONMENT must be either 'development' or 'production'",
		}),
	}),
	CONTACT_PHONE: z.string({
		required_error: "Contact phone number is required in environment variables",
	}),
	CONTACT_EMAIL: z.string({
		required_error: "Contact email is required in environment variables",
	}).email("Invalid email format in environment variables"),
})

/**
 * @type {Record<keyof z.infer<typeof envSchema>, string | undefined>}
 */
const processEnv = {
	STORYBLOK_TOKEN: process.env.STORYBLOK_TOKEN,
	ENVIRONMENT: process.env.ENVIRONMENT,
	CONTACT_PHONE: process.env.CONTACT_PHONE,
	CONTACT_EMAIL: process.env.CONTACT_EMAIL,
}

try {
	envSchema.parse(processEnv)
} catch (err) {
	if (err instanceof z.ZodError) {
		const errorMessages = err.issues.map((issue) => issue.message)
		throw new Error(
			`❌ Environment variable validation failed:\n${errorMessages.join(
				'\n'
			)}\n` + 'See .env.example for all required variables.'
		)
	}
	throw err
}

declare global {
	namespace NodeJS {
		interface ProcessEnv extends z.infer<typeof envSchema> {}
	}
}
