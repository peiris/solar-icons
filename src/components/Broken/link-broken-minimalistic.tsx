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
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m10 5.049.367-.343c2.432-2.275 6.376-2.275 8.809 0M16.974 15l2.202-2.059c1.168-1.092 1.775-2.51 1.821-3.941M14 18.928l-.366.35c-2.422 2.316-6.38 2.286-8.802-.03-2.398-2.293-2.456-6.033-.091-8.358l.905-.89M6.587 3 7.5 5.205M3.502 6.087 9.05 8.795"
      />
    </svg>
  );
};
export default SvgLinkBrokenMinimalistic;
