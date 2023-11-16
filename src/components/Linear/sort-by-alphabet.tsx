import * as React from "react";
import type { SVGProps } from "react";
const SvgSortByAlphabet = (props: SVGProps<SVGSVGElement>) => {
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
        d="M13 7H3M10 12H3M8 17H3"
      />
      <path
        fill="currentColor"
        d="M11.316 16.692a.75.75 0 1 0 1.368.616l-1.368-.616ZM16.5 7l.684-.308a.75.75 0 0 0-1.368 0L16.5 7Zm3.816 10.308a.75.75 0 1 0 1.368-.616l-1.368.616Zm-.952-3.944.684-.308-.684.308Zm-5.728-.75a.75.75 0 0 0 0 1.5v-1.5Zm-.952 4.694 4.5-10-1.368-.616-4.5 10 1.368.616Zm9-.616-1.636-3.636-1.368.615 1.636 3.637 1.368-.616Zm-1.636-3.636-2.864-6.364-1.368.616 2.864 6.363 1.368-.615Zm-.684-.442h-5.728v1.5h5.728v-1.5Z"
      />
    </svg>
  );
};
export default SvgSortByAlphabet;
