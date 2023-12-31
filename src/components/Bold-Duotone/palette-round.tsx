import * as React from "react";
import type { SVGProps } from "react";
const SvgPaletteRound = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      strokeWidth={props.strokeWidth ? props.strokeWidth : 1.5}
      width={24}
      height={24}
      {...props}
    >
      <path fill="currentColor" d="M7 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
      <path
        fill="currentColor"
        d="M10 6v12a4 4 0 0 1-8 0V6a4 4 0 1 1 8 0Z"
        opacity={0.4}
      />
      <path
        fill="currentColor"
        d="m9.248 20.336 3.974-3.975 5.838-6.09a4.042 4.042 0 0 0-5.776-5.655L10 7.9V18c0 .872-.279 1.679-.752 2.336Z"
        opacity={0.7}
      />
      <path
        fill="currentColor"
        d="m13.222 16.362-3.974 3.974A4 4 0 0 1 6 22h11.9a4 4 0 1 0 0-8h-2.414l-2.264 2.362Z"
      />
    </svg>
  );
};
export default SvgPaletteRound;
