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
        
        d="m10 5.049.367-.343c2.432-2.275 6.376-2.275 8.809 0 2.432 2.274 2.432 5.961 0 8.235L16.974 15M14 18.928l-.366.35c-2.422 2.316-6.38 2.286-8.802-.03-2.398-2.293-2.456-6.033-.091-8.358l.905-.89"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M6.587 3 7.5 5.205M3.502 6.087 9.05 8.795"
      />
    </svg>
  );
};
export default SvgLinkBrokenMinimalistic;
