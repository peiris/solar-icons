import * as React from "react";
import type { SVGProps } from "react";
const SvgLamp = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M9 22h6M12 22v-7M12 2c2.423 0 3.635 0 4.582.566a4 4 0 0 1 .757.585c.786.775 1.09 1.948 1.7 4.294l.084.324c.828 3.189 1.241 4.783.49 5.903a2.985 2.985 0 0 1-.247.319C18.47 15 16.824 15 13.529 15h-3.058c-3.295 0-4.942 0-5.837-1.01-.09-.1-.172-.206-.247-.318-.751-1.12-.337-2.714.49-5.903l.085-.324c.608-2.346.913-3.519 1.699-4.294a4 4 0 0 1 .757-.585c.182-.109.374-.197.582-.268M17.5 15v2"
      />
    </svg>
  );
};
export default SvgLamp;
