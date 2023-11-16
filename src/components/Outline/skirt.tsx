import * as React from "react";
import type { SVGProps } from "react";
const SvgSkirt = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7.847 1.25h8.305c.446 0 .852 0 1.18.043.36.047.739.157 1.053.463.316.308.433.685.483 1.044.044.324.044.722.044 1.154V5.39l3.725 12.347c.296.982.014 2.136-.986 2.736-1.532.92-4.648 2.278-9.651 2.278-5.004 0-8.119-1.358-9.652-2.278-1-.6-1.282-1.755-.986-2.736L5.087 5.39V3.954c0-.432 0-.83.045-1.154.05-.36.166-.736.483-1.044.314-.306.693-.416 1.052-.463.329-.043.734-.043 1.18-.043Zm-1.453 5L2.8 18.17c-.136.45.017.833.321 1.016.79.474 2.135 1.124 4.109 1.567L9.034 6.25h-2.64Zm4.152 0-1.84 14.774c.977.14 2.073.226 3.294.226 1.22 0 2.317-.085 3.293-.226L13.453 6.25h-2.907Zm4.42 0 1.805 14.503c1.973-.443 3.319-1.093 4.108-1.567.305-.183.458-.566.322-1.017L17.605 6.25h-2.64Zm2.446-1.5V4c0-.493-.001-.786-.03-.995a.68.68 0 0 0-.038-.162l-.004-.01-.001-.002a.774.774 0 0 0-.201-.05c-.22-.03-.525-.031-1.03-.031H7.892c-.505 0-.81.002-1.03.03a.775.775 0 0 0-.198.048l-.003.002-.001.003a.675.675 0 0 0-.042.172c-.029.21-.03.502-.03.995v.75h10.824Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSkirt;