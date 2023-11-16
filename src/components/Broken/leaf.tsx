import * as React from "react";
import type { SVGProps } from "react";
const SvgLeaf = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m12 9 4-4m-4 9.5 3-3M18.5 8l-1.625 1.625M12 19.5l1.875-1.875M19.5 12l-3.75 3.75M12 22c4.418 0 8-3.646 8-8.143 0-4.462-2.553-9.67-6.537-11.531A3.453 3.453 0 0 0 12 2m0 20c-4.418 0-8-3.646-8-8.143 0-1.586.323-3.266.917-4.857M12 22V2m0 0c-.5 0-.999.109-1.463.326-1.601.748-2.97 2.036-4.037 3.6"
      />
    </svg>
  );
};
export default SvgLeaf;
