import * as React from "react";
import type { SVGProps } from "react";
const SvgArchiveMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        fill="currentColor"
        fillRule="evenodd"
        d="M2.545 8.73C2 9.8 2 11.2 2 14c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C5.8 22 7.2 22 10 22h4c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C22 18.2 22 16.8 22 14c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C18.2 6 16.8 6 14 6h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 8.73ZM15.06 12.5a.75.75 0 0 0-1.12-1l-3.011 3.374-.87-.974a.75.75 0 0 0-1.118 1l1.428 1.6a.75.75 0 0 0 1.119 0l3.572-4Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12 2c4.713 0 7.07 0 8.535 1.464.757.758 1.123 1.754 1.3 3.192V10H2.164V6.656c.176-1.438.541-2.434 1.299-3.192C4.928 2 7.285 2 11.999 2Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgArchiveMinimalistic;
