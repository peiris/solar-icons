import * as React from "react";
import type { SVGProps } from "react";
const SvgSimCard = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M12 12h-.5c-1.405 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C8 13.393 8 14.096 8 15.5c0 1.404 0 2.107.337 2.611a2 2 0 0 0 .552.552C9.393 19 10.096 19 11.5 19h.5m0-7h.5c1.405 0 2.107 0 2.611.337.218.146.406.334.552.552.337.504.337 1.207.337 2.611M12 12v3.5m0 3.5h.5c1.405 0 2.107 0 2.611-.337.218-.146.406-.334.552-.552C16 17.607 16 16.904 16 15.5M12 19v-3.5m0 0h4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c.341 0 .512 0 .686.015.81.07 1.601.399 2.224.921.133.112.257.236.504.483l5.167 5.167c.247.247.37.37.483.504.522.623.85 1.415.92 2.224.016.174.016.345.016.686 0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465c-.973-.973-1.3-2.342-1.409-4.535"
      />
    </svg>
  );
};
export default SvgSimCard;
