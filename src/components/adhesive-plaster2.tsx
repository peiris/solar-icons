import * as React from "react";
import type { SVGProps } from "react";
const SvgAdhesivePlaster2 = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="m12.765 20.416-9.18-9.181m9.18 9.18a5.41 5.41 0 1 0 7.65-7.65m-7.65 7.65 7.65-7.65m0 0-9.18-9.18m0 0a5.41 5.41 0 0 0-7.65 7.65m7.65-7.65-7.65 7.65" />
      <circle cx={9.172} cy={12} r={1} transform="rotate(-45 9.172 12)" />
      <circle cx={12} cy={14.829} r={1} transform="rotate(-45 12 14.829)" />
      <circle cx={12} cy={9.171} r={1} transform="rotate(-45 12 9.171)" />
      <circle cx={14.828} cy={12} r={1} transform="rotate(-45 14.828 12)" />
    </svg>
  );
};
export default SvgAdhesivePlaster2;