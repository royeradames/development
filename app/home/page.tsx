import { StoryblokStory } from "@storyblok/react/rsc";
import { fetchStory } from "@/utils/fetchStory";

const Page = async () => {
  const story = await fetchStory("home");
  return <StoryblokStory story={story} bridgeOptions={{}} />;
};

export default Page;
