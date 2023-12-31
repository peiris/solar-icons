import * as React from "react";
import type { SVGProps } from "react";
const SvgSatellite = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.63 2.924 1.635 9.03a.75.75 0 1 0 .728 1.311l8.686-4.825a5.978 5.978 0 0 0 1.005 5.368L4.47 18.47a.75.75 0 1 0 1.06 1.06l7.585-7.584a5.978 5.978 0 0 0 5.368 1.004l-4.825 8.686a.75.75 0 1 0 1.311.728l6.107-10.993a5.974 5.974 0 0 0-8.447-8.447Zm7.643 7.091a4.475 4.475 0 0 0-6.288-6.288c.085.172.2.39.356.649.431.718 1.163 1.747 2.35 2.934 1.186 1.186 2.215 1.918 2.934 2.35.258.154.476.27.648.355Zm-1.208 1.055c-.068-.04-.14-.08-.212-.124-.703-.422-1.63-1.075-2.683-2.055l-1.983 1.983a4.48 4.48 0 0 0 4.878.196Zm-5.939-1.257a4.48 4.48 0 0 1-.196-4.878c.04.069.08.14.125.212.421.703 1.074 1.63 2.054 2.683l-1.983 1.983Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSatellite;
