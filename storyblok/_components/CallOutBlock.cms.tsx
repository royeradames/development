import { SbLink } from "@/storyblok/types/SbLink";
import Link from "next/link";
import { storyblokEditable } from "@storyblok/react/rsc";

export function CallOutBlockCms({
  blok,
  blok: {
    title = "",
    message = "",
    destination: { cached_url = "", target = "_blank" } = {
      cached_url: "",
      target: "_blank",
      id: "",
      url: "",
      linktype: "url",
      fieldtype: "multilink",
    },
    label = "",
  },
}: {
  blok: { title: string; message: string; destination: SbLink; label: string };
}) {
  return (
    <section
      className="p-6 flex justify-center w-full"
      style={{ backgroundImage: "linear-gradient(225deg,#1abba9,#6078ea)" }}
      {...storyblokEditable(blok)}
    >
      <div className="max-w-sm ">
        <h2 className="text-4xl text-white font-extrabold">{title}</h2>
        <p className="text-base text-white">{message}</p>
        <Link
          href={cached_url}
          target={target}
          className="btn rounded-none text-white mt-2"
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {label}
        </Link>
      </div>
    </section>
  );
}
