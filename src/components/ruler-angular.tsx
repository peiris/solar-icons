import * as React from "react";
import type { SVGProps } from "react";
const SvgRulerAngular = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M2 6v12.5c0 1.404 0 2.107.337 2.611a2 2 0 0 0 .552.552C3.393 22 4.096 22 5.5 22c1.404 0 2.107 0 2.611-.337a2 2 0 0 0 .552-.552C9 20.607 9 19.904 9 18.5V11c0-.943 0-1.414.293-1.707C9.586 9 10.057 9 11 9h7.5c1.404 0 2.107 0 2.611-.337a2 2 0 0 0 .552-.552C22 7.607 22 6.904 22 5.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C20.607 2 19.904 2 18.5 2H6c-1.886 0-2.828 0-3.414.586C2 3.172 2 4.114 2 6ZM12 2v2m6-2v2M9 2v3m6-3v3M2 12h2m-2 6h2m-2-3h3M2 9h3" />
    </svg>
  );
};
export default SvgRulerAngular;
