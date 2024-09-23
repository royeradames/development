import { StoryblokStory } from "@storyblok/react/rsc";
import { fetchStory } from "@/app/(helpers)/fetchStory";

const Page = async () => {
  const story = await fetchStory("footer");
  return <StoryblokStory story={story} bridgeOptions={{}} />;
};

export default Page;
