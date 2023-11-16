import * as React from "react";
import type { SVGProps } from "react";
const SvgWashingMachineMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M3 10c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172C21 4.343 21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828C18.657 22 16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172C3 19.657 3 17.771 3 14v-4Z" />
      <path d="M17 14a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM8 6h8" />
      <path d="M7.234 14.362c.855.428 1.833 1.159 3.49 1.457 2.362.426 2.126-1.648 4.488-1.223.72.13 1.206.35 1.55.585" />
    </svg>
  );
};
export default SvgWashingMachineMinimalistic;
