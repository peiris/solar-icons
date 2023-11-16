import * as React from "react";
import type { SVGProps } from "react";
const SvgParagraphSpacing = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M4 21h16M4 3h16M12 5.5l3 3m-3-3-3 3m3-3v13m0 0 3-3m-3 3-3-3" />
    </svg>
  );
};
export default SvgParagraphSpacing;
