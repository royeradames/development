"use client";

import { CmsPage } from "@/storyblok/_components/CmsPage";
import { CmsImage } from "@/storyblok/_components/CmsImage";
import { CmsHeader } from "@/storyblok/_components/CmsHeader";
import { CmsFooter } from "@/storyblok/_components/CmsFooter";
import { PropsWithChildren } from "react";
import { storyblokInit } from "@storyblok/react/rsc";
import CmsHero from "@/storyblok/_components/CmsHero";
import { CmsButton } from "@/storyblok/_components/CmsButton";
import { CmsGalleryGrid } from "@/storyblok/_components/CmsGalleryGrid";
import { CmsGalleryItem } from "@/storyblok/_components/CmsGalleryItem";
import { CmsGalleryFlex } from "@/storyblok/_components/CmsGalleryFlex";
import { CmsGalleryFlexItem } from "@/storyblok/_components/CmsGalleryFlexItem";
import CmsPanoramaImage from "@/storyblok/_components/CmsParonamaImage";
import CmsContentBlock from "@/storyblok/_components/CmsContentBlock";
import { CmsHeroWithFigure } from "@/storyblok/_components/CmsHeroWithFigure";
import { CmsRichtext } from "@/storyblok/_components/CmsRichtext";
import { CmsPartnerGridItem } from "@/storyblok/_components/CmsPartnerGridItem";
import { DepricatedCmsPartnerGridExtended } from "@/storyblok/_components/DepricatedCmsPartnerGridExtended";
import { DepricatedCmsPartnerGrid } from "@/storyblok/_components/DepricatedCmsPartnerGrid";
import { DepricatedCmsPartnerGridExtendedNoLimit } from "@/storyblok/_components/DepricatedCmsPartnerGridExtendedNoLimit";
import { CmsFullBleedCarousel } from "@/storyblok/_components/CmsFullBleedCarousel";

storyblokInit({
  components: {
    page: CmsPage,
    image: CmsImage,
    header: CmsHeader,
    footer: CmsFooter,
    hero: CmsHero,
    button: CmsButton,
    gallery_grid: CmsGalleryGrid,
    gallery_item: CmsGalleryItem,
    gallery_flex: CmsGalleryFlex,
    gallery_flex_item: CmsGalleryFlexItem,
    panorama_image: CmsPanoramaImage,
    content_block: CmsContentBlock,
    hero_with_figure: CmsHeroWithFigure,
    richtext: CmsRichtext,
    partner_grid_item: CmsPartnerGridItem,
    partner_grid_extended: DepricatedCmsPartnerGridExtended,
    partner_grid_extended_no_limit: DepricatedCmsPartnerGridExtendedNoLimit,
    partner_grid: DepricatedCmsPartnerGrid,
    full_bleed_carousel: CmsFullBleedCarousel,
  },
  enableFallbackComponent: true,
});

const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default StoryblokProvider;
