import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartLock = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8.496 20.037C5.968 18.152 3 15.937 3 12.099c0-4.237 4.95-7.242 9-3.168 4.05-4.074 9-1.069 9 3.168 0 3.839-2.968 6.053-5.496 7.938-.262.196-.52.388-.77.578C13.8 21.328 12.9 22 12 22c-.9 0-1.8-.672-2.734-1.385-.25-.19-.508-.382-.77-.578Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M12 11.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75ZM7.75 7c0-1.505.447-2.539 1.139-3.2.697-.668 1.74-1.05 3.111-1.05 1.37 0 2.414.382 3.111 1.05.692.661 1.139 1.695 1.139 3.2v.001a4.627 4.627 0 0 1 1.5.288V7c0-1.809-.546-3.275-1.602-4.285C15.098 1.711 13.642 1.25 12 1.25s-3.098.461-4.148 1.465C6.796 3.725 6.25 5.191 6.25 7v.29A4.627 4.627 0 0 1 7.75 7V7Z"
      />
    </svg>
  );
};
export default SvgHeartLock;
