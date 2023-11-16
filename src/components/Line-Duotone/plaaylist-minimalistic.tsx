import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaaylistMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20 6H3M10 16H3M10 11H3"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.125 10.685c1.642.948 2.463 1.422 2.723 2.05a2 2 0 0 1 0 1.53c-.26.627-1.081 1.101-2.723 2.05-1.642.947-2.463 1.421-3.136 1.333a2 2 0 0 1-1.326-.766c-.413-.538-.413-1.486-.413-3.382 0-1.896 0-2.844.413-3.383a2 2 0 0 1 1.326-.765c.673-.089 1.494.385 3.136 1.333Z"
      />
    </svg>
  );
};
export default SvgPlaaylistMinimalistic;
