import * as React from "react";
import type { SVGProps } from "react";
const SvgSofa3 = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4 18h16a2 2 0 1 0 0-4H4a2 2 0 1 0 0 4ZM4.5 14l-.075-.299c-1.087-4.347-1.63-6.52-.56-8.023.068-.095.14-.186.216-.275C5.278 4 7.519 4 12 4s6.722 0 7.92 1.403c.075.089.146.18.214.275 1.07 1.502.527 3.676-.56 8.023L19.5 14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20 20v-2M4 20v-2"
      />
    </svg>
  );
};
export default SvgSofa3;
