import * as React from "react";
import type { SVGProps } from "react";
const SvgFloorLamp = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 7a3.001 3.001 0 0 0 2.835-2.018C15.016 4.46 14.552 4 14 4h-4c-.552 0-1.017.46-.836.982A3.001 3.001 0 0 0 12 7Z"
      />
      <path
        fill="currentColor"
        d="M12 2a2 2 0 0 1 2 2h-4a2 2 0 0 1 2-2Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M6.455 10.98a3.12 3.12 0 0 0 .174-3.587c-.305-.48-.968-.398-1.318.05L2.78 10.684c-.35.448-.274 1.118.26 1.305 1.2.42 2.585.055 3.416-1.01Z"
      />
      <path
        fill="currentColor"
        d="M2.439 7.786a2.033 2.033 0 0 1 2.872-.343L2.78 10.684a2.076 2.076 0 0 1-.34-2.898Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M17.545 10.98a3.12 3.12 0 0 1-.174-3.587c.305-.48.968-.398 1.318.05l2.532 3.241c.35.448.274 1.118-.26 1.305-1.2.42-2.585.055-3.416-1.01Z"
      />
      <path
        fill="currentColor"
        d="M21.561 7.786a2.033 2.033 0 0 0-2.872-.343l2.532 3.241a2.076 2.076 0 0 0 .34-2.898Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.25 22a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
      <g fill="currentColor" opacity={0.55}>
        <path d="M12 7c.257 0 .507-.032.745-.093.004.03.005.061.005.093v6.407c.123-.118.252-.23.387-.334l.012-.01 3.94-2.892a3.097 3.097 0 0 0 .856 1.232l-3.9 2.864a3.39 3.39 0 0 0-1.294 2.67v4.313h-1.5v-4.347a3.39 3.39 0 0 0-1.296-2.636l-3.9-2.864a3.103 3.103 0 0 0 .856-1.232l3.941 2.893.012.009c.135.105.264.216.386.334V7a.77.77 0 0 1 .006-.093c.238.06.487.093.744.093ZM11.998 22.75h.005-.005Z" />
      </g>
    </svg>
  );
};
export default SvgFloorLamp;
