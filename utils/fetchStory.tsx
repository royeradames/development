import { getStoryblokApi, ISbResult } from "@storyblok/react";
import { log } from "console";

export const fetchStory = async (storyName: string) => {
  const storyblokApi = getStoryblokApi();
  let response: ISbResult;
  try {
    const version = process.env.STORYBLOK_VERSION;
    const cache = process.env.STORYBLOK_CACHE;
    response = await storyblokApi.get(
      `cdn/stories/${storyName}`,
      { version },
      { cache },
    );
  } catch (e) {
    console.error(e)
    throw Error("Response Storyblok Error");
  }
  return response.data.story;
};
