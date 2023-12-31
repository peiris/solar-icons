import * as React from "react";
import type { SVGProps } from "react";
const SvgCorkscrew = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 12a2.15 2.15 0 1 1-4.3 0 2.15 2.15 0 0 1 4.3 0Z"
      />
      <path
        fill="currentColor"
        d="M21.358 10.385 13.615 2.64a2.19 2.19 0 1 0-3.097 3.098l7.743 7.743c.171.172.364.309.57.412A2.15 2.15 0 1 1 22 11.957a2.184 2.184 0 0 0-.642-1.572Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="m12.535 10.405 1.324-1.325.914.914.147.147-1.325 1.324a.345.345 0 0 0-.05.425l.647 1.05c.737 1.198-.693 2.549-1.847 1.744l-2.623-1.828-1.995-1.39 1.26 1.807 3.684 5.287c.81 1.162-.563 2.597-1.76 1.837l-6.116-3.884.65 1.371c.333.704.19 1.542-.362 2.094L2.53 22.53a.75.75 0 1 1-1.06-1.06l2.552-2.553a.344.344 0 0 0 .067-.39l-.95-2.005c-.556-1.175.771-2.348 1.87-1.65l.543.345h.001l5.311 3.373-3.189-4.575-1.827-2.622c-.828-1.188.618-2.634 1.807-1.806l3.513 2.449 1.236.862-.136-.222a1.843 1.843 0 0 1 .267-2.271Z"
      />
    </svg>
  );
};
export default SvgCorkscrew;
