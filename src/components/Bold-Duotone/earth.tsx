import * as React from "react";
import type { SVGProps } from "react";
const SvgEarth = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={10} fill="currentColor" opacity={0.5} />
      <path
        fill="currentColor"
        d="M8.575 9.447C8.388 7.363 6.781 5.421 6 4.711l-.43-.37A9.96 9.96 0 0 1 12 2c2.214 0 4.26.72 5.916 1.936.234.711-.212 2.196-.68 2.906-.17.257-.554.577-.976.88-.95.683-2.15 1.02-2.76 2.278-.174.36-.166.71-.083 1.016.06.22.1.459.1.692.002.755-.762 1.3-1.517 1.292-1.964-.021-3.25-1.604-3.425-3.553ZM13.437 18.276c.988-1.862 4.281-1.862 4.281-1.862 3.432-.036 3.896-2.12 4.206-3.173a10.006 10.006 0 0 1-8.535 8.664c-.323-.68-.705-2.21.048-3.629Z"
      />
    </svg>
  );
};
export default SvgEarth;
