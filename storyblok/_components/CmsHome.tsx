import { StoryblokComponent } from "@storyblok/react/rsc";

type TCmsHome = {
  blok: {};
};

export function CmsHome({ blok }: TCmsHome) {
  return <StoryblokComponent blok={blok} />;
}
