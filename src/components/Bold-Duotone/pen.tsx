import * as React from "react";
import type { SVGProps } from "react";
const SvgPen = (props: SVGProps<SVGSVGElement>) => {
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
        d="M20.849 8.713a3.932 3.932 0 0 0-5.562-5.561l-.887.887.038.111a8.754 8.754 0 0 0 2.093 3.32 8.754 8.754 0 0 0 3.43 2.13l.888-.887Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="m14.439 4-.039.038.038.112a8.754 8.754 0 0 0 2.093 3.32 8.753 8.753 0 0 0 3.43 2.13l-8.56 8.56c-.578.577-.867.866-1.185 1.114a6.554 6.554 0 0 1-1.211.748c-.364.174-.751.303-1.526.561l-4.083 1.361a1.06 1.06 0 0 1-1.342-1.341l1.362-4.084c.258-.774.387-1.161.56-1.525.205-.43.456-.836.749-1.212.248-.318.537-.606 1.114-1.183L14.439 4Z"
      />
    </svg>
  );
};
export default SvgPen;
