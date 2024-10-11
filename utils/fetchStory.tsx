import { getStoryblokApi } from "@storyblok/react";

export const fetchStory = async (storyName: string) => {
  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.get(
    `cdn/stories/${storyName}`,
    { version: "draft" },
    { cache: "no-store" },
  );
  return response.data.story;
};
