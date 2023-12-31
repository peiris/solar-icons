import * as React from "react";
import type { SVGProps } from "react";
const SvgBackpack = (props: SVGProps<SVGSVGElement>) => {
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
        fill="#1C274D"
        d="M10 12.25a.75.75 0 1 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z"
      />
      <path
        fill="#1C274D"
        fillRule="evenodd"
        d="M7.32 4.275A3.751 3.751 0 0 1 11 1.25h2a3.75 3.75 0 0 1 3.68 3.025 6.75 6.75 0 0 1 5.07 6.445V13.983a.93.93 0 0 1 0 .033v2.359a5.269 5.269 0 0 1-4.126 5.143 25.928 25.928 0 0 1-11.248 0 5.269 5.269 0 0 1-4.126-5.143V10.72a6.75 6.75 0 0 1 5.07-6.445Zm1.695-.335A2.25 2.25 0 0 1 11 2.75h2c.86 0 1.607.482 1.986 1.19a19.75 19.75 0 0 0-5.971 0Zm11.235 6.971v2.596a21.41 21.41 0 0 1-16.5 0V10.74a5.25 5.25 0 0 1 4.207-5.074c.084-.02.124-.028.164-.037a18.25 18.25 0 0 1 7.759 0l.163.037.167.037a5.25 5.25 0 0 1 4.04 5.207Zm-16.5 5.464v-1.252a22.911 22.911 0 0 0 13 1.04V17a.75.75 0 0 0 1.5 0v-1.209a22.943 22.943 0 0 0 2-.668v1.252a3.769 3.769 0 0 1-2.951 3.68c-3.49.775-7.108.775-10.598 0a3.769 3.769 0 0 1-2.95-3.68Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBackpack;
