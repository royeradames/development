// const fetchPage = async () => {
//   const storyblokApi = getStoryblokApi();
//   const response = await storyblokApi.get(
//     `cdn/stories/footer`,
//     {
//       version: "draft",
//     },
//     { cache: "no-store" },
//   );
//   return response.data.story;
// };
export default async function Home() {
  // const story = await fetchPage();
  // return <StoryblokStory story={story} />;
  return <h1>Home</h1>;
}
