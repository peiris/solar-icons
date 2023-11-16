import * as React from "react";
import type { SVGProps } from "react";
const SvgWatchRound = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 18.977c3.866 0 7-3.124 7-6.977s-3.134-6.977-7-6.977S5 8.147 5 12s3.134 6.977 7 6.977Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M11.209 2h1.582c1.539 0 2.308 0 2.856.44.549.44.716 1.19 1.05 2.692L17 6.5l.156.782A6.992 6.992 0 0 0 12 5.023c-2.04 0-3.877.87-5.156 2.259L7 6.5l.304-1.368c.334-1.501.5-2.252 1.049-2.692C8.901 2 9.671 2 11.209 2ZM17.156 16.719A6.992 6.992 0 0 1 12 18.977c-2.04 0-3.877-.87-5.156-2.258L7 17.5l.304 1.368c.334 1.501.5 2.252 1.049 2.692.548.44 1.317.44 2.856.44h1.582c1.539 0 2.308 0 2.856-.44s.715-1.19 1.05-2.692L17 17.5l.156-.781ZM12.7 9.138a.699.699 0 0 0-.7-.698c-.387 0-.7.313-.7.698V12c0 .19.077.372.215.503l1.866 1.79a.702.702 0 0 0 .99-.02.696.696 0 0 0-.02-.987L12.7 11.703V9.138Z"
      />
    </svg>
  );
};
export default SvgWatchRound;
