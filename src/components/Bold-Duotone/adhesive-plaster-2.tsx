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
        fill="currentColor"
        d="m20.416 12.765-9.181-9.18a5.41 5.41 0 0 0-7.65 7.65l9.18 9.18a5.41 5.41 0 1 0 7.65-7.65Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="m19.885 12.234.531.531c.18.18.344.37.494.566l-7.578 7.578a5.45 5.45 0 0 1-.567-.493l-.53-.531 7.65-7.65ZM10.668 3.09c.198.15.387.314.567.494l.53.53-7.65 7.651-.53-.53c-.18-.18-.345-.37-.494-.567l7.577-7.578Z"
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
        cx={14.828}
        cy={12}
        r={1}
        fill="currentColor"
        transform="rotate(-45 14.828 12)"
      />
    </svg>
  );
};
export default SvgAdhesivePlaster2;
