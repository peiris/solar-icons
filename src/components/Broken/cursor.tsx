import * as React from "react";
import type { SVGProps } from "react";
const SvgCursor = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinejoin="round"
        
        d="M9 4.942c-2.524-.915-3.871-1.288-4.609-.55-.84.84-.24 2.47.962 5.728l2.007 5.45c.602 1.633.903 2.45 1.565 2.596.662.145 1.277-.47 2.508-1.702l1.203-1.202 3.938 3.938c.408.408.612.612.84.706.303.125.643.125.947 0 .227-.094.431-.298.839-.706s.612-.612.706-.84a1.238 1.238 0 0 0 0-.947c-.094-.227-.298-.43-.706-.839l-3.938-3.938 1.202-1.203c1.232-1.23 1.847-1.846 1.702-2.508-.146-.662-.963-.963-2.596-1.565L13 6.414"
      />
    </svg>
  );
};
export default SvgCursor;
