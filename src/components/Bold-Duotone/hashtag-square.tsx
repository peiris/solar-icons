import * as React from "react";
import type { SVGProps } from "react";
const SvgHashtagSquare = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.718 7.215a.75.75 0 0 0-1.436-.43l-.74 2.465H7a.75.75 0 0 0 0 1.5h2.092l-.75 2.5H6a.75.75 0 1 0 0 1.5h1.892l-.61 2.034a.75.75 0 0 0 1.436.431l.74-2.465h3.434l-.61 2.034a.75.75 0 0 0 1.436.431l.74-2.465H17a.75.75 0 0 0 0-1.5h-2.092l.75-2.5H18a.75.75 0 0 0 0-1.5h-1.892l.61-2.035a.75.75 0 0 0-1.436-.43l-.74 2.465h-3.434l.61-2.035Zm2.374 3.535-.75 2.5H9.908l.75-2.5h3.434Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHashtagSquare;
