import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkBrokenMinimalistic = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="m10 5.049.367-.343c2.432-2.275 6.376-2.275 8.809 0 2.432 2.274 2.432 5.961 0 8.235L16.974 15M14 18.928l-.366.35c-2.422 2.316-6.38 2.286-8.802-.03-2.398-2.293-2.456-6.033-.091-8.358l.905-.89M6.587 3 7.5 5.205M3.502 6.087 9.05 8.795" />
    </svg>
  );
};
export default SvgLinkBrokenMinimalistic;
