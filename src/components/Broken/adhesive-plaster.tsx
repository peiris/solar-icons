import * as React from "react";
import type { SVGProps } from "react";
const SvgAdhesivePlaster = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M13.5 7.642 9.071 3.213a4.142 4.142 0 0 0-5.858 5.858L14.93 20.787a4.142 4.142 0 0 0 5.858-5.858l-4.358-4.358"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m12 17.858-2.929 2.929A4.142 4.142 0 0 1 2.596 20m3.546-8-2.929 2.929c-.322.322-.58.685-.774 1.071M12 6.142l2.929-2.929a4.142 4.142 0 1 1 5.858 5.858L17.857 12"
      />
      <path
        fill="currentColor"
        d="M15.841 12.871a.788.788 0 1 1-1.114 1.114.788.788 0 0 1 1.114-1.114ZM12.129 9.159a.787.787 0 1 0-1.114 1.114.787.787 0 0 0 1.114-1.114ZM16.77 15.656a.787.787 0 1 1-1.114 1.114.787.787 0 0 1 1.114-1.114ZM9.345 8.23A.788.788 0 1 0 8.23 9.346.788.788 0 0 0 9.345 8.23ZM13.057 11.943a.787.787 0 1 1-1.113 1.114.787.787 0 0 1 1.113-1.114ZM13.985 14.728a.788.788 0 1 1-1.114 1.113.788.788 0 0 1 1.114-1.113ZM10.273 11.015a.787.787 0 1 0-1.114 1.114.787.787 0 0 0 1.114-1.114Z"
      />
    </svg>
  );
};
export default SvgAdhesivePlaster;
