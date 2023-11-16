import * as React from "react";
import type { SVGProps } from "react";
const SvgRoundedMagniferZoomIn = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={11} cy={11} r={9} stroke="#8E93A6" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M9 11h2m0 0h2m-2 0v2m0-2V9M21.812 20.975c-.063.095-.176.208-.403.434-.226.227-.34.34-.434.403a1.13 1.13 0 0 1-1.62-.408c-.053-.1-.099-.254-.19-.561-.101-.335-.151-.503-.161-.621a1.13 1.13 0 0 1 1.218-1.218c.118.01.285.06.621.16.307.092.46.138.56.192a1.13 1.13 0 0 1 .409 1.619Z"
      />
    </svg>
  );
};
export default SvgRoundedMagniferZoomIn;
