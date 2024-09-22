import React, { ReactNode } from "react";
import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@storyblok/react";

const fetchStory = async (storyName: string) => {
  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.get(
    `cdn/stories/${storyName}`,
    { version: "draft" },
    { cache: "no-store" },
  );
  return response.data.story;
};
export default async function layout({ children }: { children: ReactNode }) {
  const [headerStory, footerStory] = await Promise.all([
    fetchStory("header"),
    fetchStory("footer"),
  ]);
  return (
    <>
      <StoryblokStory story={headerStory} />
      {children}
      <StoryblokStory story={footerStory} />
    </>
  );
}
