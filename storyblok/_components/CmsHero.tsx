import { SbBlokData } from "@storyblok/react";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";

export type TStoryBlokAsset = {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  source: string;
  filename: string;
  copyright: string;
  fieldtype: "asset";
  meta_data: {
    alt: string;
    title: string;
    source: string;
    copyright: string;
  };
  is_external_url: boolean;
};
type TCmsHero = {
  blok: {
    background: TStoryBlokAsset;
    title: string;
    body: string;
    actions: [SbBlokData];
  };
};
export default function CmsHero({
  blok,
  blok: {
    background: { filename },
    body,
    actions: [actionBlok],
  },
}: TCmsHero) {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${filename})`,
      }}
      {...storyblokEditable(blok)}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">{body}</p>
          <StoryblokComponent blok={actionBlok} />
        </div>
      </div>
    </div>
  );
}
