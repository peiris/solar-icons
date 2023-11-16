import * as React from "react";
import type { SVGProps } from "react";
const SvgMentionCircle = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M12 6.75a5.25 5.25 0 1 0 0 10.5.75.75 0 0 1 0 1.5 6.75 6.75 0 1 1 6.344-4.44 2.29 2.29 0 0 1-.609.894l-.08.074a2.387 2.387 0 0 1-3.782-.745A3.15 3.15 0 1 1 15.15 12v1.524a.886.886 0 0 0 1.488.652l.08-.075a.796.796 0 0 0 .216-.304A5.25 5.25 0 0 0 12 6.75Zm0 3.6a1.65 1.65 0 1 1 0 3.3 1.65 1.65 0 0 1 0-3.3Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMentionCircle;
