import * as React from "react";
import type { SVGProps } from "react";
const SvgFlashDrive = (props: SVGProps<SVGSVGElement>) => {
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
        d="M19.83 10.441 18.296 12l-.11.11-.09-.088c-.49-.87-1.446-1.827-2.869-3.25-1.408-1.407-2.359-2.359-3.221-2.853l1.687-1.714C15.139 2.735 15.863 2 16.76 2c.9 0 1.623.735 3.069 2.205C21.277 5.675 22 6.41 22 7.323c0 .913-.724 1.648-2.17 3.118Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 14.142c0 1.348 1.085 2.433 3.255 4.603S8.509 22 9.857 22c1.349 0 2.434-1.085 4.603-3.255l.767-.767c2.17-2.17 3.255-3.255 3.255-4.603 0-1.348-1.085-2.433-3.255-4.603s-3.254-3.254-4.602-3.254c-1.349 0-2.433 1.084-4.603 3.254l-.767.767C3.085 11.71 2 12.794 2 14.142Zm3.785-.53a.75.75 0 0 0-1.06 1.06l4.602 4.604a.75.75 0 1 0 1.061-1.06l-4.603-4.604ZM19.247 6.873a.75.75 0 0 1 0 1.06l-.707.708a.75.75 0 1 1-1.06-1.06l.706-.708a.75.75 0 0 1 1.061 0ZM17.126 4.752a.75.75 0 0 1 0 1.06l-.707.708a.75.75 0 1 1-1.06-1.06l.706-.708a.75.75 0 0 1 1.061 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFlashDrive;
