import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartHomeAngle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2.25 12.25A.75.75 0 0 1 3 11.5c5.385 0 9.75 4.365 9.75 9.75a.75.75 0 0 1-1.5 0A8.25 8.25 0 0 0 3 13a.75.75 0 0 1-.75-.75Z"
      />
      <path
        fill="currentColor"
        d="M2.25 15.25A.75.75 0 0 1 3 14.5a6.75 6.75 0 0 1 6.75 6.75.75.75 0 0 1-1.5 0C8.25 18.35 5.9 16 3 16a.75.75 0 0 1-.75-.75Z"
      />
      <path
        fill="currentColor"
        d="M3 17.5A.75.75 0 0 0 3 19a2.25 2.25 0 0 1 2.25 2.25.75.75 0 0 0 1.5 0A3.75 3.75 0 0 0 3 17.5ZM2.024 10.222C2.32 10.08 2.65 10 3 10c6.213 0 11.25 5.037 11.25 11.25 0 .263-.045.515-.128.749 2.782-.01 4.276-.104 5.329-1.01 1.175-1.013 1.419-2.706 1.906-6.094l.279-1.937c.38-2.637.57-3.956.029-5.083-.54-1.127-1.691-1.813-3.992-3.183l-1.385-.825C14.2 2.622 13.154 2 12 2c-1.154 0-2.199.622-4.288 1.867l-1.385.825c-2.3 1.37-3.451 2.056-3.992 3.183-.31.648-.38 1.359-.31 2.347Z"
      />
    </svg>
  );
};
export default SvgSmartHomeAngle;
