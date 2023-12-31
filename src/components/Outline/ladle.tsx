import * as React from "react";
import type { SVGProps } from "react";
const SvgLadle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5.434 2.5A2.934 2.934 0 0 0 2.5 5.434a.75.75 0 0 1-1.5 0 4.434 4.434 0 1 1 8.868 0v6.912a7.303 7.303 0 0 1 1.23-.569c1.333-.485 3.046-.777 4.652-.777 1.608 0 3.205.293 4.427.787.608.246 1.16.557 1.574.939.411.38.749.894.749 1.524v1.184a7.066 7.066 0 0 1-14.132 0v-10A2.934 2.934 0 0 0 5.434 2.5Zm15.49 13.86a5.567 5.567 0 0 1-11.006-.177c.355.206.757.386 1.18.54 1.333.485 3.046.777 4.652.777 1.608 0 3.205-.293 4.427-.787.261-.106.512-.224.747-.354ZM21 14.25c0-.06-.03-.204-.267-.422-.234-.217-.61-.444-1.12-.65-1.014-.411-2.417-.678-3.863-.678-1.448 0-2.985.267-4.139.687-.58.211-1.022.446-1.304.674-.296.238-.307.375-.307.389 0 .014.011.151.307.39.282.227.724.462 1.304.673 1.154.42 2.691.687 4.139.687 1.446 0 2.849-.267 3.864-.678.51-.206.885-.433 1.12-.65.235-.218.266-.362.266-.422Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLadle;
