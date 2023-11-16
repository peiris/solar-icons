import * as React from "react";
import type { SVGProps } from "react";
const SvgAdhesivePlaster2 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M12.765 20.416a5.41 5.41 0 1 0 7.65-7.651m-7.65 7.65 7.65-7.65m-7.65 7.65-4.59-4.59m-4.59-4.59a5.41 5.41 0 0 1 7.65-7.65m-7.65 7.65 7.65-7.65m-7.65 7.65L5 12.65m15.416.115L19 11.35m-7.765-7.766 4.59 4.59"
      />
      <circle
        cx={9.172}
        cy={12}
        r={1}
        fill="currentColor"
        transform="rotate(-45 9.172 12)"
      />
      <circle
        cx={12}
        cy={14.829}
        r={1}
        fill="currentColor"
        transform="rotate(-45 12 14.829)"
      />
      <circle
        cx={12}
        cy={9.171}
        r={1}
        fill="currentColor"
        transform="rotate(-45 12 9.171)"
      />
      <circle
        cx={14.829}
        cy={12}
        r={1}
        fill="currentColor"
        transform="rotate(-45 14.829 12)"
      />
    </svg>
  );
};
export default SvgAdhesivePlaster2;
