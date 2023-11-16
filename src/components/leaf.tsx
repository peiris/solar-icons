import * as React from "react";
import type { SVGProps } from "react";
const SvgLeaf = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="m12 9 4.5-4.5m-4.5 10L18.5 8M12 19.5l7.5-7.5M12 22c4.418 0 8-3.646 8-8.143 0-4.462-2.553-9.67-6.537-11.531A3.453 3.453 0 0 0 12 2m0 20c-4.418 0-8-3.646-8-8.143 0-4.462 2.553-9.67 6.537-11.531A3.453 3.453 0 0 1 12 2m0 20V2" />
    </svg>
  );
};
export default SvgLeaf;
