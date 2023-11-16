import * as React from "react";
import type { SVGProps } from "react";
const SvgBodyShapeMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M20 2s-2 4.688-2 8.571c0 1.244.426 2.284 1 3.32.66 1.193 1.517 2.38 2.146 3.863.499 1.178.854 2.543.854 4.246M4 2s2 4.688 2 8.571c0 1.244-.426 2.284-1 3.32-.66 1.193-1.517 2.38-2.146 3.863A10.605 10.605 0 0 0 2 22M6 13h12" />
      <path d="M12 22c.5-1.5 3-4.5 9-4.5M12 22c-.5-1.5-3-4.5-9-4.5" />
    </svg>
  );
};
export default SvgBodyShapeMinimalistic;
