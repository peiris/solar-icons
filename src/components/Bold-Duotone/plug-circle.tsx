import * as React from "react";
import type { SVGProps } from "react";
const SvgPlugCircle = (props: SVGProps<SVGSVGElement>) => {
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
        <path
          fillRule="evenodd"
          d="M12.75 22c5.172-.384 9.25-4.708 9.25-9.986V12c0-5.523-4.477-10-10-10S2 6.477 2 12v.014c0 5.278 4.078 9.602 9.25 9.986v-.028C6.08 21.59 2.004 17.274 2 12.007 2.004 6.48 6.48 2 12 2s9.996 4.48 10 10.007c-.004 5.267-4.08 9.582-9.25 9.965V22Z"
          clipRule="evenodd"
        />
        <path d="M11.25 21.972a10.11 10.11 0 0 0 1.5 0c5.17-.383 9.246-4.698 9.25-9.965C21.996 6.48 17.52 2 12 2S2.004 6.48 2 12.007c.004 5.267 4.08 9.582 9.25 9.965Z" />
      </g>
      <path
        fill="currentColor"
        d="M8.5 12.515a3.505 3.505 0 0 0 2.75 3.424v6.033a10.11 10.11 0 0 0 1.5 0V15.94a3.505 3.505 0 0 0 2.75-3.424v-.501a1 1 0 0 0-1-1.001h-.25V9.01a.75.75 0 1 0-1.5 0v2.003h-1.5V9.01a.75.75 0 1 0-1.5 0v2.003H9.5a1 1 0 0 0-1 1.001v.5Z"
      />
    </svg>
  );
};
export default SvgPlugCircle;
