import { StoryblokStory } from "@storyblok/react/rsc";
import { fetchStory } from "@/app/(helpers)/fetchStory";

export default async function Home() {
  const story = await fetchStory("home");
  return <StoryblokStory story={story} bridgeOptions={{}} />;
}
