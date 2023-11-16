import * as React from "react";
import type { SVGProps } from "react";
const SvgSkirt = (props: SVGProps<SVGSVGElement>) => {
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
        d="M16.108 2H7.892c-.969 0-1.453 0-1.754.293-.3.293-.3.764-.3 1.707v.75h12.324V4c0-.943 0-1.414-.3-1.707C17.56 2 17.077 2 16.108 2ZM2.08 17.953 5.612 6.25h3.423L7.147 21.407a.756.756 0 0 0-.005.095C5.046 21.041 3.6 20.35 2.734 19.83c-.652-.391-.87-1.16-.653-1.876ZM8.593 21.766C9.606 21.912 10.74 22 12 22c1.26 0 2.393-.088 3.407-.235a.756.756 0 0 1-.043-.172L13.454 6.25h-2.908l-1.91 15.343a.753.753 0 0 1-.043.172ZM14.966 6.25l1.886 15.157a.767.767 0 0 1 .006.096c2.096-.462 3.541-1.154 4.407-1.674.653-.391.87-1.16.654-1.876L18.39 6.25h-3.423Z"
      />
    </svg>
  );
};
export default SvgSkirt;
