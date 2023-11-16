import * as React from "react";
import type { SVGProps } from "react";
const SvgRuble = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={10} />
      <path d="M9 14h3M10 12V8.2c0-.186 0-.279.012-.356a1 1 0 0 1 .832-.832C10.92 7 11.014 7 11.2 7h2.3a2.5 2.5 0 0 1 0 5H10Zm0 0v5m0-5H9" />
    </svg>
  );
};
export default SvgRuble;
