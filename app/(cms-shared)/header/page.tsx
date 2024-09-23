import {fetchStory} from "@/app/(helpers)/fetchStory";
import {StoryblokStory} from "@storyblok/react/rsc";

const Page = async () => {
    const story = await fetchStory("header");
    return <StoryblokStory story={story} bridgeOptions={{}}/>;
};

export default Page;
