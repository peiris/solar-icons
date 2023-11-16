import * as React from "react";
import type { SVGProps } from "react";
const SvgSirenRounded = (props: SVGProps<SVGSVGElement>) => {
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
        d="M4 16v5.25h16V16a8 8 0 1 0-16 0Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M12.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V2ZM21.53 5.47a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0ZM3.53 5.47a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06l-1.5-1.5ZM14.572 10.805a.75.75 0 0 0-.563 1.39c.814.33 1.466.981 1.795 1.796a.75.75 0 1 0 1.39-.563 4.764 4.764 0 0 0-2.622-2.623ZM12.75 18.8a1.5 1.5 0 1 0-1.5 0v2.45h1.5V18.8ZM4 21.25H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5H4Z"
      />
    </svg>
  );
};
export default SvgSirenRounded;
