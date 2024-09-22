import { StoryblokComponent } from "@storyblok/react/rsc";
import { StoryblokComponentType } from "@storyblok/react";
import { formatTitleToId } from "@/app/(helpers)/formatTitleToId";

export type TStoryBokCmsPage = {
  blok: {
    title: [StoryblokComponentType<any>];
    navigation?: StoryblokComponentType<any>[];
    body: StoryblokComponentType<any>[];
  };
};

export function CmsPage({
  blok: {
    body,
    title: [titleBlock],
  },
}: TStoryBokCmsPage) {
  return (
    <article aria-labelledby={formatTitleToId("Page title")}>
      <div className="max-w-7xl mx-auto">
        {body?.map((blok: any) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))}
      </div>
    </article>
  );
}
