import { StoryblokComponent } from "@storyblok/react/rsc";
import { SbBlokData, StoryblokComponentType } from "@storyblok/react";
import { formatTitleToId } from "@/utils/formatTitleToId";
import { TCmsHero } from "@/storyblok/_components/CmsHero";

export type TStoryBokCmsPage = {
  blok: {
    header: [SbBlokData & TCmsHero["blok"]];
    body: StoryblokComponentType<any>[];
  };
};

export function CmsPage({
  blok: {
    body,
    header: [headerBlock],
  },
}: TStoryBokCmsPage) {
  return (
    <article
      data-component="CmsPage"
      aria-labelledby={formatTitleToId(headerBlock.title)}
    >
      <StoryblokComponent blok={{ ...headerBlock, headingAs: "h1" }} />
      <div>
        {body?.map((blok: any) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))}
      </div>
    </article>
  );
}
