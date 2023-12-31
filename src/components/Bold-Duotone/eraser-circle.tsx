import * as React from "react";
import type { SVGProps } from "react";
const SvgEraserCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M11.606 7.67C12.72 6.557 13.276 6 13.968 6c.692 0 1.249.557 2.362 1.67S18 9.34 18 10.032c0 .692-.557 1.248-1.67 2.362l-2.619 2.618-4.723-4.723 2.618-2.619ZM7.927 11.35l4.724 4.723-.257.257C11.28 17.443 10.724 18 10.032 18c-.692 0-1.249-.557-2.362-1.67S6 14.66 6 13.968c0-.692.557-1.248 1.67-2.362l.257-.257Z"
      />
    </svg>
  );
};
export default SvgEraserCircle;
