import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkBrokenMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
      <g fill="currentColor" opacity={0.3}>
        <path d="M19.688 4.158c-2.72-2.544-7.112-2.544-9.833 0l-.367.343a.75.75 0 0 0 1.024 1.096l.367-.344c2.144-2.004 5.64-2.004 7.784 0 2.116 1.978 2.116 5.163 0 7.14l-2.202 2.06a.75.75 0 0 0 1.025 1.095l2.202-2.059c2.75-2.57 2.75-6.76 0-9.331ZM6.172 10.535a.75.75 0 1 0-1.052-1.07l-.905.89c-2.672 2.628-2.6 6.854.099 9.435 2.707 2.59 7.122 2.627 9.839.03l.365-.35a.75.75 0 0 0-1.036-1.084l-.366.35c-2.127 2.034-5.629 2.013-7.766-.03-2.097-2.006-2.14-5.258-.083-7.281l.905-.89Z" />
      </g>
      <path
        fill="currentColor"
        d="M7.28 2.713a.75.75 0 1 0-1.386.574l.913 2.205a.75.75 0 0 0 1.386-.574L7.28 2.713ZM3.831 5.413a.75.75 0 1 0-.658 1.348l5.548 2.707a.75.75 0 0 0 .658-1.348L3.83 5.413Z"
      />
    </svg>
  );
};
export default SvgLinkBrokenMinimalistic;
