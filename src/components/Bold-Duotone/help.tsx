import * as React from "react";
import type { SVGProps } from "react";
const SvgHelp = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-6a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="m5.479 19.582 4.272-4.273a4.021 4.021 0 0 1-1.06-1.06L4.418 18.52c.327.38.681.734 1.06 1.06ZM4.418 5.48l4.273 4.272a4.022 4.022 0 0 1 1.06-1.06L5.48 4.417c-.38.327-.734.682-1.061 1.061ZM14.248 8.691 18.52 4.42c.379.326.734.68 1.06 1.06L15.31 9.752a4.021 4.021 0 0 0-1.061-1.06ZM19.581 18.521l-4.273-4.273a4.02 4.02 0 0 1-1.06 1.06l4.272 4.274c.38-.327.735-.682 1.061-1.061Z"
      />
    </svg>
  );
};
export default SvgHelp;
