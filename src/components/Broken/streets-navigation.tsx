import * as React from "react";
import type { SVGProps } from "react";
const SvgStreetsNavigation = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M18 16.92c1.14-.099 1.922-.323 2.538-.828.202-.166.388-.352.554-.554C22 14.43 22 12.788 22 9.5c0-3.287 0-4.931-.908-6.038a4 4 0 0 0-.554-.554C19.43 2 17.788 2 14.5 2h-5c-3.287 0-4.931 0-6.038.908a4 4 0 0 0-.554.554C2 4.57 2 6.212 2 9.5c0 3.287 0 4.931.908 6.038a4 4 0 0 0 .554.554c.616.505 1.398.73 2.538.829M20.5 15.5l-6.5-5M3.5 3l3 2.143m14-1.643-6.5 7m0 0L9.5 7.286"
      />
      <path
        stroke="currentColor"
        
        d="m15.267 19.2-1.335-2.67C13.089 14.843 12.668 14 12 14c-.668 0-1.089.843-1.932 2.53L8.733 19.2c-.512 1.024-.768 1.537-.73 1.859.057.465.407.842.868.93.318.062.847-.157 1.905-.595.39-.162.587-.243.787-.284.288-.06.586-.06.874 0 .2.041.396.122.787.284 1.058.438 1.586.657 1.905.596.46-.09.81-.465.867-.931.04-.323-.217-.835-.729-1.858Z"
      />
    </svg>
  );
};
export default SvgStreetsNavigation;
