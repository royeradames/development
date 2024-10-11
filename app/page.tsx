import { StoryblokStory } from "@storyblok/react/rsc";
import { fetchStory } from "@/utils/fetchStory";

export default async function Home() {
  const story = await fetchStory("home");
  return <StoryblokStory story={story} bridgeOptions={{}} />;
}
