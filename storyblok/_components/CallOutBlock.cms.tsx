import { SbLink } from "@/storyblok/types/SbLink";
import { storyblokEditable } from "@storyblok/react/rsc";
import { ContactUsDialog } from "@/app/ContactUsDialog";
import { useRef } from "react";

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
  const modalRef = useRef(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };
  return (
    <section
      className="p-6 flex justify-center w-full"
      style={{ backgroundImage: "linear-gradient(225deg,#1abba9,#6078ea)" }}
      data-component="CallOutBlockCms"
      {...storyblokEditable(blok)}
    >
      <div className="max-w-sm ">
        <h2 className="text-4xl text-white font-extrabold">{title}</h2>
        <p className="text-base text-white">{message}</p>
        <button
          className="btn rounded-none text-white mt-2"
          onClick={openModal}
        >
          {label}
        </button>
        <ContactUsDialog modalRef={modalRef} />
      </div>
    </section>
  );
}
