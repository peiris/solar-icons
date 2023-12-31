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
        fill="currentColor"
        d="m21.323 3.786-6.216 6.63 6.18 4.855C22 14.169 22 12.535 22 9.502c0-2.983 0-4.612-.677-5.715ZM15.267 19.2l-1.335-2.67C13.089 14.843 12.668 14 12 14c-.668 0-1.089.843-1.932 2.53L8.733 19.2c-.512 1.024-.768 1.537-.73 1.859.057.465.407.842.868.93.318.062.847-.157 1.905-.595.39-.162.587-.243.787-.284.288-.06.586-.06.874 0 .2.041.396.122.787.284 1.058.438 1.586.657 1.905.596.46-.09.81-.465.867-.931.04-.323-.217-.835-.729-1.858Z"
      />
      <path
        fill="currentColor"
        d="M2 9.5v.04c0 3.26.004 4.896.908 5.998.166.203.352.388.554.554.181.149.377.273.591.377C5.15 17 6.75 17 9.497 17H14.5l1.343-.003c.84-.005 1.55-.023 2.157-.076.944-.082 1.642-.25 2.204-.592l-6.656-5.23-10.587-7.7-.053.064C2 4.569 2 6.213 2 9.5Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M14.5 2h-5c-2.616 0-4.191 0-5.283.458l9.689 7.046 6.366-6.79C19.168 2 17.534 2 14.5 2Z"
      />
    </svg>
  );
};
export default SvgStreetsNavigation;
