import * as React from "react";
import type { SVGProps } from "react";
const SvgThreeSquares = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M7 12H6c-1.886 0-2.828 0-3.414.586-.472.471-.564 1.174-.582 2.414M12 17v1c0 1.886 0 2.828-.586 3.414C10.83 22 9.886 22 8 22H6c-1.886 0-2.828 0-3.414-.586-.472-.471-.564-1.174-.582-2.414"
      />
      <path
        stroke="currentColor"
        
        d="M12 7h-1c-1.886 0-2.828 0-3.414.586C7 8.172 7 9.114 7 11v2c0 1.886 0 2.828.586 3.414C8.172 17 9.114 17 11 17h2c1.886 0 2.828 0 3.414-.586C17 15.828 17 14.886 17 13v-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M15 2.004c-1.24.018-1.943.11-2.414.582C12 3.172 12 4.114 12 6v2c0 1.886 0 2.829.586 3.414C13.172 12 14.114 12 16 12h2c1.886 0 2.828 0 3.414-.586C22 10.83 22 9.886 22 8V6c0-1.886 0-2.828-.586-3.414-.471-.472-1.174-.564-2.414-.582"
      />
    </svg>
  );
};
export default SvgThreeSquares;
