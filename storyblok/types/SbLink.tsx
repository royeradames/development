export type SbLink = {
  id: string;
  url: string;
  linktype: "url";
  fieldtype: "multilink" | "story";
  cached_url: string;
  target: "_blank" | "_self";
};
