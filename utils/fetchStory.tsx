import { getStoryblokApi, ISbResult } from "@storyblok/react";

export const fetchStory = async (storyName: string) => {
  const storyblokApi = getStoryblokApi();
  let response: ISbResult;
  try {
    const version: "draft" | "published" =
      process.env.ENVIRONMENT === "local" ? "draft" : "published";
    const cache: "no-store" | "default" =
      process.env.ENVIRONMENT === "local" ? "no-store" : "default";
    response = await storyblokApi.get(
      `cdn/stories/${storyName}`,
      { version },
      { cache },
    );
  } catch (e) {
    throw Error("Response Storyblok Error");
  }
  return response.data.story;
};
