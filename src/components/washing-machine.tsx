import * as React from "react";
import type { SVGProps } from "react";
const SvgWashingMachine = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M6 22v-1M18 22v-1M3 10c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172C21 4.343 21 6.229 21 10v3c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3 18.657 3 16.771 3 13v-3ZM3 9h18" />
      <path d="M15 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.5 5.5h3M15.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM18.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    </svg>
  );
};
export default SvgWashingMachine;
