import * as React from "react";
import type { SVGProps } from "react";
const SvgDisplay = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 8.76c0-2.715 0-4.073.879-4.916C3.757 3 5.172 3 8 3h8c2.828 0 4.243 0 5.121.844.879.843.879 2.2.879 4.916v.96c0 2.715 0 4.073-.879 4.916-.878.844-2.293.844-5.121.844h-3.25v2.36l5.487 1.757a.714.714 0 0 1 .475.91.758.758 0 0 1-.95.456L12 19.119l-5.763 1.844a.757.757 0 0 1-.949-.456.714.714 0 0 1 .475-.91l5.487-1.756V15.48H8c-2.828 0-4.243 0-5.121-.844C2 13.793 2 12.436 2 9.72v-.96Z"
      />
    </svg>
  );
};
export default SvgDisplay;
