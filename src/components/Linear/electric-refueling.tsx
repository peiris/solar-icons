import * as React from "react";
import type { SVGProps } from "react";
const SvgElectricRefueling = (props: SVGProps<SVGSVGElement>) => {
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
        d="M16 22V8c0-2.828 0-4.243-.879-5.121C14.243 2 12.828 2 10 2H9c-2.828 0-4.243 0-5.121.879C3 3.757 3 5.172 3 8v14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 10 8 12.5h3L9.5 15"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17 22H2M19.5 4l1.233.986c.138.11.207.166.27.222a3 3 0 0 1 .992 2.066c.005.084.005.172.005.348V18.5a1.5 1.5 0 0 1-3 0v-.071c0-.79-.64-1.429-1.429-1.429H16"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 8h-1.5A1.5 1.5 0 0 0 19 9.5v2.419a1.5 1.5 0 0 0 1.026 1.423L22 14"
      />
    </svg>
  );
};
export default SvgElectricRefueling;
