import { storyblokEditable } from "@storyblok/react/rsc";
import NextImage from "next/image";
import { SbImage } from "@/storyblok/types/SbImage";
import Link from "next/link";
import { SbLink } from "@/storyblok/types/SbLink";

export type TLeaderGridItem = {
  blok: {
    image: SbImage;
    name: string;
    position: string;
    linkedIn: SbLink;
  };
};

export function LeaderGridItem({
  blok,
  blok: {
    image: { filename, alt },
    linkedIn: { url, target },
    position,
    name,
  },
  headingAs: Heading = "h3",
}: TLeaderGridItem) {
  return (
    <section {...storyblokEditable(blok)} className="flex flex-col gap-4">
      <NextImage alt={filename} src={alt} height={490} width={490} />
      <div className="flex justify-around items-center">
        <hgroup className="flex flex-col gap-4">
          <Heading className="uppercase text-base font-bold text-black">
            {name}
          </Heading>
          <p className="text-base text-black">{position}</p>
        </hgroup>
        <Link href={url} target={target}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="48px"
            height="48px"
            viewBox="0 0 48 48"
            version="1.1"
          >
            <title>LinkedIn Icon</title>
            <defs>
              <filter colorInterpolationFilters="auto" id="filter-1">
                <feColorMatrix
                  in="SourceGraphic"
                  type="matrix"
                  values="0 0 0 0 0.043137 0 0 0 0 0.047059 0 0 0 0 0.047059 0 0 0 1.000000 0"
                />
              </filter>
            </defs>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="Group" transform="translate(0.000000, -0.000290)">
                <rect
                  id="Rectangle"
                  fill="#FFFFFF"
                  x="1"
                  y="1.0002899"
                  width="46"
                  height="46"
                />
                <g filter="url(#filter-1)" id="LinkedIn_Logomark_White">
                  <g>
                    <path
                      d="M40.8990831,40.8993298 L33.7867871,40.8993298 L33.7867871,29.7612343 C33.7867871,27.1052071 33.7393389,23.6861438 30.0877577,23.6861438 C26.3833609,23.6861438 25.8165586,26.5798415 25.8165586,29.5677916 L25.8165586,40.898471 L18.7044773,40.898471 L18.7044773,17.9940742 L25.5320839,17.9940742 L25.5320839,21.1241542 L25.6278392,21.1241542 C27.0180078,18.7472342 29.6124167,17.3222846 32.3644138,17.4244807 C39.5728944,17.4244807 40.9020888,22.1658682 40.9020888,28.3343524 L40.8990831,40.8993298 Z M10.6795008,14.8631353 C10.6790714,14.8631353 10.6788567,14.8631353 10.678642,14.8631353 C8.41443843,14.8631353 6.55129042,13.000202 6.55129042,10.7359984 C6.55129042,8.47179479 8.41443843,6.60864678 10.678642,6.60864678 C12.9426309,6.60864678 14.8055643,8.47136539 14.8059936,10.7351396 C14.8059936,10.7353543 14.8059936,10.735569 14.8059936,10.7359984 C14.8059936,12.9997726 12.943275,14.8629206 10.6795008,14.8631353 M14.2355414,40.8993298 L7.11594579,40.8993298 L7.11594579,17.9940742 L14.2355414,17.9940742 L14.2355414,40.8993298 Z M44.4446035,0.00389659272 L3.54187056,0.00389659272 C1.62182762,-0.0177878909 0.0234020665,1.54349492 0,3.46353786 L0,44.5360968 C0.022543275,46.4572132 1.62075413,48.0202136 3.54187056,48.0001537 L44.4446035,48.0001537 C46.3704433,48.0238635 47.9742363,46.4610778 48,44.5360968 L48,3.46074679 C47.9742363,1.53662459 46.3682963,-0.0244435245 44.4446035,0.000289904279"
                      id="Shape"
                      fill="#0A66C2"
                      fillRule="nonzero"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </Link>
      </div>
    </section>
  );
}
