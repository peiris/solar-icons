import * as React from "react";
import type { SVGProps } from "react";
const SvgRuler = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="m19 12.232.955-.955C21.318 9.913 22 9.23 22 8.384s-.682-1.529-2.045-2.892l-1.447-1.447C17.145 2.682 16.463 2 15.616 2c-.848 0-1.53.682-2.893 2.045l-8.678 8.678C2.682 14.087 2 14.768 2 15.616c0 .847.682 1.529 2.045 2.892l1.447 1.447C6.855 21.318 7.537 22 8.384 22s1.53-.682 2.893-2.045L16.232 15M8.464 8.464 9.88 9.88M12.707 4.222l1.414 1.414M4.222 12.707l1.414 1.414M6.343 10.586l2.122 2.121M10.586 6.343l2.121 2.121"
      />
    </svg>
  );
};
export default SvgRuler;
