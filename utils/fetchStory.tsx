import { getStoryblokApi, ISbResult } from "@storyblok/react";

export const fetchStory = async (storyName: string) => {
  const storyblokApi = getStoryblokApi();
  let response: ISbResult;
  try {
    const version: "draft" | "published" =
      process.env.ENVIRONMENT === "development" ? "published" : "draft";
    const cache: "no-store" | "default" =
      process.env.ENVIRONMENT === "development" ? "default" : "no-store";
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
