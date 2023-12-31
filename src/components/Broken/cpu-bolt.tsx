import * as React from "react";
import type { SVGProps } from "react";
const SvgCpuBolt = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinejoin="round"
        
        d="M12.429 10 11 12h2l-1.429 2"
      />
      <path
        stroke="currentColor"
        
        d="M4 12c0-3.771 0-5.657 1.172-6.828C6.343 4 8.229 4 12 4c3.771 0 5.657 0 6.828 1.172C20 6.343 20 8.229 20 12c0 3.771 0 5.657-1.172 6.828C17.657 20 15.771 20 12 20c-3.771 0-5.657 0-6.828-1.172C4 17.657 4 15.771 4 12Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M4 12H2M22 12h-2M4 9H2M22 9h-2M4 15H2M22 15h-2M12 20v2M12 2v2M9 20v2M9 2v2M15 20v2M15 2v2M17 14c0 1.414 0 2.121-.44 2.56-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14v-4c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44.44.439.44 1.146.44 2.56"
      />
    </svg>
  );
};
export default SvgCpuBolt;
