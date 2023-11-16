import * as React from "react";
import type { SVGProps } from "react";
const SvgMusicNote2 = (props: SVGProps<SVGSVGElement>) => {
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
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.75 2c0 2.9 2.35 5.25 5.25 5.25a.75.75 0 0 1 0 1.5 6.737 6.737 0 0 1-5.25-2.507V18a4.75 4.75 0 1 1-1.5-3.464V2h1.5Zm-1.5 16a3.25 3.25 0 1 0-6.5 0 3.25 3.25 0 0 0 6.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMusicNote2;
