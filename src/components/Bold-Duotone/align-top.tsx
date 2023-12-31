import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignTop = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7.5 7.75c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 8.848 5 9.315 5 10.25v9c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201A1.5 1.5 0 0 0 9.799 21c.201-.348.201-.815.201-1.75v-9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.348-.201-.815-.201-1.75-.201ZM16.5 7.75c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.848 14 9.315 14 10.25v6c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-6c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.348-.201-.815-.201-1.75-.201Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.75 3.75a.75.75 0 0 1-.75.75H2A.75.75 0 1 1 2 3h20a.75.75 0 0 1 .75.75Z"
        clipRule="evenodd"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgAlignTop;
