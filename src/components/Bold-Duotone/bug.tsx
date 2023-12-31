import * as React from "react";
import type { SVGProps } from "react";
const SvgBug = (props: SVGProps<SVGSVGElement>) => {
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
        d="M19 11.938V15a7.001 7.001 0 0 1-6.25 6.96V15a.75.75 0 0 0-1.5 0v6.96A7.001 7.001 0 0 1 5 15v-3.062A3.939 3.939 0 0 1 8.938 8h6.124A3.939 3.939 0 0 1 19 11.938Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M19 14.75v-1.5h3a.75.75 0 0 1 0 1.5h-3ZM17.496 19.336c.31-.393.58-.82.801-1.276l2.538 1.27a.75.75 0 1 1-.67 1.34l-2.67-1.334ZM5.703 18.06c.221.455.49.883.801 1.276l-2.669 1.335a.75.75 0 0 1-.67-1.342l2.538-1.269ZM5 13.25H2a.75.75 0 0 0 0 1.5h3v-1.5ZM17.354 8.735l2.81-1.406a.75.75 0 1 1 .671 1.341L18.42 9.88a3.958 3.958 0 0 0-1.065-1.144ZM6.647 8.735c-.427.306-.79.695-1.067 1.144L3.165 8.67a.75.75 0 0 1 .67-1.341l2.812 1.406ZM16.5 8.27V7.5a4.5 4.5 0 1 0-9 0v.77c.445-.174.93-.27 1.438-.27h6.124c.508 0 .993.096 1.438.27Z"
      />
      <g fill="currentColor" opacity={0.3}>
        <path d="M6.376 1.584a.75.75 0 0 0 .208 1.04l2.36 1.573a4.502 4.502 0 0 1 1.387-.877L7.416 1.376a.75.75 0 0 0-1.04.208ZM15.056 4.197a4.502 4.502 0 0 0-1.387-.877l2.915-1.944a.75.75 0 1 1 .832 1.248l-2.36 1.573Z" />
      </g>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 14.25a.75.75 0 0 1 .75.75v7h-1.5v-7a.75.75 0 0 1 .75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBug;
