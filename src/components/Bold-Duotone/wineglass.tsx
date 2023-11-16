import * as React from "react";
import type { SVGProps } from "react";
const SvgWineglass = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5 4.895C5 3.848 5.848 3 6.895 3h10.21C18.152 3 19 3.848 19 4.895V8A7 7 0 1 1 5 8V4.895Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.25 20.25h-3a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-4.5ZM12 15a7.002 7.002 0 0 0 6.925-5.97c-.402.157-2.332.886-3.694.963-1.327.075-2.28-.459-3.23-.993-.952-.534-1.904-1.068-3.232-.993-1.371.078-3.318.816-3.702.966A7.001 7.001 0 0 0 12 15Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.75 14.96a7.087 7.087 0 0 1-1.5 0v5.29h1.5v-5.29Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgWineglass;
