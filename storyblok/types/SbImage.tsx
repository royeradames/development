export type SbImage = {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  source: string;
  filename: string;
  copyright: string;
  fieldtype: "asset";
  meta_data: {
    alt: string;
    title: string;
    source: string;
    copyright: string;
  };
  is_external_url: boolean;
};
