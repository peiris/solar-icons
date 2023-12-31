import * as React from "react";
import type { SVGProps } from "react";
const SvgMapPointFavourite = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10.537 21.674a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.606 20 10.144 20 5.645 16.418 2 12 2s-8 3.646-8 8.143c0 4.462 2.553 9.67 6.537 11.531Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M10.724 13.33C9.554 12.396 8 10.888 8 9.46c0-2.426 2.2-3.332 4-1.458 1.8-1.874 4-.968 4 1.458 0 1.428-1.553 2.936-2.724 3.87-.56.447-.84.67-1.276.67-.437 0-.716-.223-1.276-.67Z"
      />
    </svg>
  );
};
export default SvgMapPointFavourite;
