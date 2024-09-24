"use client";

import { CmsPage } from "@/storyblok/_components/CmsPage";
import { CmsImage } from "@/storyblok/_components/CmsImage";
import { CmsHeader } from "@/storyblok/_components/CmsHeader";
import { CmsFooter } from "@/storyblok/_components/CmsFooter";
import { PropsWithChildren } from "react";
import { storyblokInit } from "@storyblok/react/rsc";
import CmsHero from "@/storyblok/_components/CmsHero";
import { CmsButton } from "@/storyblok/_components/CmsButton";

storyblokInit({
  components: {
    page: CmsPage,
    // richtext: CmsRichtext,
    image: CmsImage,
    header: CmsHeader,
    footer: CmsFooter,
    hero: CmsHero,
    button: CmsButton,
  },
  enableFallbackComponent: true,
});

const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default StoryblokProvider;
