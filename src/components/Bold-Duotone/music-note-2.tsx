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
        d="M9 13.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 1.25a.75.75 0 0 1 .75.75c0 2.9 2.35 5.25 5.25 5.25a.75.75 0 0 1 0 1.5A6.75 6.75 0 0 1 12.25 2a.75.75 0 0 1 .75-.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.25 14.536V2c0 1.607.562 3.084 1.5 4.243V18a4.737 4.737 0 0 0-1.5-3.464Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgMusicNote2;
