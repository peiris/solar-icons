import * as React from "react";
import type { SVGProps } from "react";
const SvgTreadmill = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={15} cy={4} r={2} stroke="currentColor"  />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M11 16v-1.633a1.85 1.85 0 0 0-.666-1.422l-.996-.83a1.59 1.59 0 0 1-.106-2.346l1.654-1.654a1.067 1.067 0 0 0-.335-1.736 4.269 4.269 0 0 0-3.943.304L4.5 8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m7 14-.328.328c-.578.579-.868.867-1.235 1.02-.368.152-.776.152-1.594.152H3M12.5 10h3"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        
        d="M19.489 22H3.087a1.087 1.087 0 0 1-.188-2.158l16.157-2.827A2.511 2.511 0 1 1 19.489 22Z"
      />
      <path
        fill="currentColor"
        d="m19.292 8.889-.742-.111.742.111Zm1.585-1.664.147.735-.147-.735Zm1.27.51a.75.75 0 1 0-.294-1.47l.294 1.47Zm-3.405 9.876 1.291-8.61-1.483-.223-1.292 8.61 1.484.223Zm2.282-9.651 1.123-.225-.294-1.47-1.123.224.294 1.471ZM20.034 9c.052-.352.084-.555.123-.701a.63.63 0 0 1 .046-.128l-1.085-1.035c-.227.238-.34.51-.41.776-.066.246-.11.547-.158.866L20.033 9Zm.696-2.51c-.316.062-.614.12-.857.199a1.73 1.73 0 0 0-.755.447l1.086 1.034.012-.007a.635.635 0 0 1 .113-.046c.145-.046.346-.087.695-.157l-.294-1.47Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgTreadmill;
