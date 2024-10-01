export type TFullBleedCarousel = {
  blok: {
    title?: string;
  };
};

export function CmsFullBleedCarousel({
  blok,
  blok: { title = "Case studies" },
}: TFullBleedCarousel) {
  return (
    <section className="py-20 bg-white">
      {title ? (
        <h2 className="text-5xl font-bold mb-10 text-black px-4 xl:px-0 max-w-lg mx-auto">
          {title}
        </h2>
      ) : undefined}
      {/* todo: should cover the whole width and be show side items */}

      <div className="carousel carousel-center w-full pb-4 space-x-4 max-w-lg">
        <div className="carousel-item">
          <img
            id="slide1"
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            className="rounded-box "
          />
        </div>
        <div className="carousel-item">
          <img
            id="slide2"
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            className="rounded-box "
          />
        </div>
        <div className="carousel-item">
          <img
            id="slide3"
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            className="rounded-box "
          />
        </div>
      </div>
      <div className="flex gap-6 px-4 xl:px-0 max-w-7xl mx-auto">
        {/* todo: navigation should be smooth and it shouldn't hide the title */}
        <a href="#slide1" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide3" className="btn btn-circle">
          ❯
        </a>
      </div>
    </section>
  );
}
