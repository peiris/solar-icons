import * as React from "react";
import type { SVGProps } from "react";
const SvgUfo = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2.731 10c.876-.75 2.274-1.373 3.996-1.79m-3.996 5.442C4.355 15.042 7.774 16 11.73 16c5.524 0 10.002-1.869 10.002-4.174 0-1.167-1.148-2.223-3-2.98a13.96 13.96 0 0 0-2.001-.635M11.729 10c-3.191 0-4.388-.532-4.802-.82-.146-.1-.2-.274-.2-.451A4.73 4.73 0 0 1 11.457 4H12a4.73 4.73 0 0 1 4.73 4.729c0 .177-.054.35-.2.452-.281.195-.922.502-2.3.68M12 16v3M5.5 15.5l-1 2M18.5 15.5l1 2"
      />
      <circle cx={12} cy={13} r={1} fill="currentColor" />
      <circle cx={7} cy={12} r={1} fill="currentColor" />
      <circle cx={17} cy={12} r={1} fill="currentColor" />
    </svg>
  );
};
export default SvgUfo;
