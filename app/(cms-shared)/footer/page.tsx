import { getStoryblokApi } from "@storyblok/react";
import { StoryblokStory } from "@storyblok/react/rsc";

const fetchPage = async () => {
  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.get(
    `cdn/stories/footer`,
    {
      version: "draft",
    },
    { cache: "no-store" },
  );
  return response.data.story;
};

const Page = async () => {
  const story = await fetchPage();
  return <StoryblokStory story={story} bridgeOptions={{}} />;
};

export default Page;
