import * as React from "react";
import type { SVGProps } from "react";
const SvgBus = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M4 10c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.172C20 4.343 20 6.229 20 10v2c0 3.771 0 5.657-1.172 6.828C17.657 20 15.771 20 12 20c-3.771 0-5.657 0-6.828-1.172C4 17.657 4 15.771 4 12v-2ZM4 13h16M15.5 16H17M7 16h1.5" />
      <path d="M6 19.5V21a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-1M18 19.5V21a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-1M20 9h1a1 1 0 0 1 1 1v1a1 1 0 0 1-.4.8L20 13M4 9H3a1 1 0 0 0-1 1v1a1 1 0 0 0 .4.8L4 13M19.5 5h-15" />
    </svg>
  );
};
export default SvgBus;
