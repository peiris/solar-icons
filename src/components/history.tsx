import * as React from "react";
import type { SVGProps } from "react";
const SvgHistory = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M12 8v4l2.5 2.5M5.604 5.604l-.53-.53.53.53ZM4.338 6.871l-.75.003a.75.75 0 0 0 .746.747l.004-.75Zm2.542.762a.75.75 0 1 0 .007-1.5l-.007 1.5ZM5.075 4.321a.75.75 0 1 0-1.5.008l1.5-.008Zm-1.248 6.464a.75.75 0 1 0-1.486-.204l1.486.204Zm15.035-5.647c-3.82-3.82-9.993-3.86-13.788-.064l1.06 1.06c3.2-3.199 8.423-3.18 11.668.064l1.06-1.06ZM5.138 18.862c3.82 3.82 9.993 3.86 13.788.064l-1.06-1.06c-3.2 3.199-8.423 3.18-11.668-.064l-1.06 1.06Zm13.788.064c3.795-3.795 3.756-9.968-.064-13.788l-1.06 1.06c3.244 3.245 3.263 8.468.064 11.668l1.06 1.06ZM5.074 5.074 3.807 6.34 4.868 7.4l1.266-1.266-1.06-1.06Zm-.74 2.547 2.546.012.007-1.5-2.545-.012-.008 1.5Zm.754-.754L5.075 4.32l-1.5.008.013 2.545 1.5-.007ZM2.34 10.58a9.812 9.812 0 0 0 2.797 8.281l1.06-1.06a8.312 8.312 0 0 1-2.371-7.017L2.34 10.58Z" />
    </svg>
  );
};
export default SvgHistory;
