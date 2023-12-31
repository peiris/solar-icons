import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartSpeaker = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M7.24 2.461A4.833 4.833 0 0 0 3.32 6.658l-.016.137a46.93 46.93 0 0 0-.296 6.268l.484.422c.436.38 1.637 1.381 4.427 1.916.321-.805.776-1.458 1.421-1.918.738-.524 1.637-.733 2.66-.733 1.022 0 1.92.209 2.658.733.646.46 1.101 1.114 1.422 1.92a12.41 12.41 0 0 0 2.195-.616c1.284-.502 1.919-1.066 2.217-1.34l.497-.456c.044-2.15-.06-4.303-.313-6.443a4.701 4.701 0 0 0-3.809-4.066l-.323-.06a24.736 24.736 0 0 0-9.09 0l-.216.04ZM8.488 4.98a.75.75 0 1 0-.978-1.138c-.467.402-.761 1-.761 1.57 0 1.013.767 1.71 1.653 2.114.91.416 2.153.635 3.597.635s2.686-.22 3.597-.635c.886-.404 1.653-1.101 1.653-2.115 0-.623-.345-1.123-.761-1.48a.75.75 0 0 0-.978 1.137c.225.194.239.313.239.343 0 .14-.102.443-.776.75-.649.296-1.657.5-2.974.5-1.317 0-2.325-.204-2.974-.5-.674-.307-.776-.61-.776-.75 0-.032.01-.101.054-.191a.758.758 0 0 1 .185-.24Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12 15.75c-.94 0-1.783-.045-2.539-.124.214-.426.466-.718.75-.92.405-.288.965-.456 1.79-.456.823 0 1.384.168 1.789.456.284.202.535.495.75.921-.753.078-1.596.123-2.54.123Z"
      />
      <path
        fill="currentColor"
        d="M20.902 15.057c-.458.342-1.125.753-2.079 1.127-1.498.586-3.673 1.066-6.823 1.066-5.137 0-7.69-1.294-8.908-2.17.05.803.122 1.604.213 2.404a4.714 4.714 0 0 0 4.105 4.137l1.016.126c.495.062.742.093.99.118 1.717.18 3.45.18 5.169 0 .247-.025.494-.056.989-.118l.906-.113a4.838 4.838 0 0 0 4.215-4.26l.017-.154c.08-.72.144-1.441.19-2.163Z"
      />
    </svg>
  );
};
export default SvgSmartSpeaker;
