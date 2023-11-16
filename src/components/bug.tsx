import * as React from "react";
import type { SVGProps } from "react";
const SvgBug = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M19 15v-3.062A3.938 3.938 0 0 0 15.063 8H8.936A3.938 3.938 0 0 0 5 11.938V15a7 7 0 1 0 14 0Z" />
      <path d="M16.5 8.5v-1a4.5 4.5 0 1 0-9 0v1M19 14h3M5 14H2M14.5 3.5 17 2M9.5 3.5 7 2M20.5 20l-2-.8M20.5 8l-2 .8M3.5 20l2-.8M3.5 8l2 .8M12 21.5V15" />
    </svg>
  );
};
export default SvgBug;
