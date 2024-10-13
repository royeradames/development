import { StoryblokComponent } from "@storyblok/react/rsc";

type TCmsHome = {
  blok: {};
};

export function CmsHome({ blok }: TCmsHome) {
  return <StoryblokComponent data-component="CmsHome" blok={blok} />;
}
