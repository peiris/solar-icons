import * as React from "react";
import type { SVGProps } from "react";
const SvgFlipVertical = (props: SVGProps<SVGSVGElement>) => {
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
      <g fill="currentColor" opacity={0.3}>
        <path d="M18.113 22H5.886c-1.702 0-2.553 0-2.832-.542-.28-.543.215-1.235 1.205-2.62l1.13-1.582c.439-.616.659-.924.982-1.09C6.694 16 7.073 16 7.83 16h8.341c.757 0 1.135 0 1.458.166.324.166.544.474.983 1.09l1.13 1.581c.99 1.386 1.484 2.078 1.205 2.62-.28.543-1.13.543-2.833.543ZM18.113 2H5.886c-1.702 0-2.553 0-2.832.542-.28.543.215 1.235 1.205 2.62l1.13 1.582c.439.616.659.924.982 1.09C6.694 8 7.073 8 7.83 8h8.341c.757 0 1.135 0 1.458-.166.324-.166.544-.474.983-1.09l1.13-1.582c.99-1.385 1.484-2.077 1.205-2.62C20.666 2 19.816 2 18.113 2Z" />
      </g>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm8 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm8 0a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFlipVertical;
