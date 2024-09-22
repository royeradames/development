# Storyblok integration
Story blok is a headless CMS that resembles many other headless configurations.

## Installed Packages
### @storyblok/react
[https://www.npmjs.com/package/@storyblok/react](https://www.npmjs.com/package/@storyblok/react)

## Setup

### Setup the environment variables
- [https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables)

#### Create an access token on Storyblok
1. Login to Storyblok.com
2. Navigate to your site
3. Navigate to "Settings" in the left sidebar
4. Navigate to "Configuration" > "Access Tokens"
5. Create a "Preview" key using your name as the title

#### Setup `.env.local` file

```
STORYBLOK_TOKEN=<your Storyblok preview access token>
```

## Currently working demo files
### `/app/guidelines`
#### `/app/guidelines/layout.tsx`
- This is where the initial `storyblokInit()` is called and where the `<StoryblockProvider>` wraps the content.

#### `/app/guidelines/page.tsx`
- This is where I set the `{ cache: 'no-store' }` to prevent the page from being cached.
- It is also where the page is fetched.
- It uses `<StoryblokStory story={story} />` to render the page component. The page component is found the the `lib/storyblok/_components/CmsPage.tsx` file.
### `/lib/storyblok/`
#### `/lib/storyblok/StoryblokProvider.tsx`
- This is the 'use client' `StoryblokProvider` used to handle the components and live updating interactions.
#### `/lib/storyblok/_components/CmsPage.tsx`
- This is the page component that is rendered by the `page.tsx` file. It is using the `<StoryblokComponent blok={blok} key={blok._uid} />` to determine which component to render. The component list is found in the `StoryblokProvider.tsx` file.
#### `/lib/storyblok/_components/CmsRichtext.tsx`
- This is using the 'storyblok-rich-text-react-renderer' npm package to handle rendering of the rich text from Storyblok. It allows you to resolve components to simple inline elements.