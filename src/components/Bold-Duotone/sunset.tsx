import * as React from "react";
import type { SVGProps } from "react";
const SvgSunset = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7.25 22a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75ZM12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75ZM17.917 15.25H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-4.083Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.25 19a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75ZM5.25 12c0 1.178.302 2.286.833 3.25h11.834A6.751 6.751 0 0 0 12.75 5.29h-1.5a6.751 6.751 0 0 0-6 6.709Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M11.47 12.841a.75.75 0 0 0 1.06 0l2-2a.75.75 0 0 0-1.06-1.06l-.72.719V5.29c-.447-.068-1.186-.028-1.5 0v5.21l-.72-.72a.75.75 0 1 0-1.06 1.061l2 2Z"
      />
      <g fill="currentColor" opacity={0.5}>
        <path d="M4.398 4.398a.75.75 0 0 1 1.061 0l.393.393a.75.75 0 0 1-1.06 1.06l-.394-.392a.75.75 0 0 1 0-1.06ZM19.6 4.399a.75.75 0 0 1 0 1.06l-.392.393a.75.75 0 0 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.06 0Z" />
      </g>
    </svg>
  );
};
export default SvgSunset;
