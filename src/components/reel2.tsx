import * as React from "react";
import type { SVGProps } from "react";
const SvgReel2 = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={10} />
      <path d="M12 22h10M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM19.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 17.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
    </svg>
  );
};
export default SvgReel2;
