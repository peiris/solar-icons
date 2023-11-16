import * as React from "react";
import type { SVGProps } from "react";
const SvgSsdSquare = (props: SVGProps<SVGSVGElement>) => {
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
        d="M16.5 3h-9c-1.105 0-2 .53-2.5 2.118l-2.843 9.808c.046-.147.104-.277.18-.397.146-.23.333-.43.552-.584.504-.357 1.206-.357 2.61-.357h13c1.405 0 2.107 0 2.612.357.218.155.406.353.552.584.08.128.142.268.188.427L19 5.118C18.5 3.529 17.604 3 16.5 3Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.5 13.588h13c1.404 0 2.107 0 2.611.357.218.154.406.353.552.584.08.128.142.268.189.426.148.506.148 1.207.148 2.338 0 1.487 0 2.231-.337 2.765-.146.232-.334.43-.552.585C20.607 21 19.904 21 18.5 21h-13c-1.404 0-2.107 0-2.611-.357a2.063 2.063 0 0 1-.552-.585C2 19.525 2 18.781 2 17.295c0-1.1 0-1.792.136-2.294l.021-.074c.046-.147.104-.277.18-.397.146-.231.333-.43.552-.584.504-.357 1.207-.357 2.611-.357ZM19 16.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm-1.75.75a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1ZM14 16.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75Zm-1.75.75a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSsdSquare;