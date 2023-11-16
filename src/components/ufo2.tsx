import * as React from "react";
import type { SVGProps } from "react";
const SvgUfo2 = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M17 7.21c2.989.723 5 2.071 5 3.616C22 13.131 17.523 15 12 15S2 13.13 2 10.826c0-1.545 2.011-2.893 5-3.615" />
      <path d="M7 7.729A4.729 4.729 0 0 1 11.729 3h.542A4.729 4.729 0 0 1 17 7.729c0 .177-.054.35-.2.451-.414.288-1.61.82-4.8.82-3.19 0-4.386-.532-4.8-.82-.146-.1-.2-.274-.2-.451Z" />
      <circle cx={12} cy={12} r={1} />
      <circle cx={7} cy={11} r={1} />
      <circle cx={17} cy={11} r={1} />
      <path d="M12 21v-3M18 20v-3M6 20v-3" />
    </svg>
  );
};
export default SvgUfo2;