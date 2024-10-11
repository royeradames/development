import slugify from "slugify";

// https://www.npmjs.com/package/slugify
export function formatTitleToId(title: string = "") {
  if (title === "") return "";
  return slugify(title, { lower: true, strict: true });
}
