import * as React from "react";
import type { SVGProps } from "react";
const SvgSofa3 = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M4 18h16a2 2 0 1 0 0-4H4a2 2 0 1 0 0 4ZM4.5 14l-.075-.299c-1.087-4.347-1.63-6.52-.56-8.023.068-.095.14-.186.216-.275C5.278 4 7.519 4 12 4s6.722 0 7.92 1.403c.075.089.146.18.214.275 1.07 1.502.527 3.676-.56 8.023L19.5 14M20 20v-2M4 20v-2" />
    </svg>
  );
};
export default SvgSofa3;