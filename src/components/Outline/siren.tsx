import * as React from "react";
import type { SVGProps } from "react";
const SvgSiren = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V2ZM15 10.065a.75.75 0 0 0 0 1.5c.842 0 1.464.638 1.436 1.408a.75.75 0 0 0 1.499.054c.061-1.69-1.317-2.962-2.935-2.962Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.966 7.25c-1.371 0-2.447 0-3.311.07-.88.073-1.607.221-2.265.557a5.75 5.75 0 0 0-2.513 2.513c-.336.658-.484 1.385-.556 2.265-.071.864-.071 1.94-.071 3.311v5.284H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-1.25v-5.284c0-1.371 0-2.447-.07-3.311-.072-.88-.221-1.607-.557-2.265a5.75 5.75 0 0 0-2.513-2.513c-.658-.336-1.385-.484-2.265-.556-.864-.071-1.94-.071-3.311-.071h-.068Zm.784 14h6.5V16c0-1.412 0-2.427-.066-3.223-.064-.787-.188-1.295-.397-1.707a4.251 4.251 0 0 0-1.857-1.857c-.412-.21-.92-.333-1.707-.397-.796-.065-1.81-.066-3.223-.066-1.412 0-2.427 0-3.223.066-.787.064-1.295.188-1.706.397a4.25 4.25 0 0 0-1.858 1.858c-.21.411-.333.919-.397 1.706-.065.796-.066 1.81-.066 3.223v5.25h6.5v-1.628a2.251 2.251 0 1 1 1.5 0v1.628Zm-.75-3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m21.53 5.53-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 1 1 1.06 1.06ZM3.53 4.47a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06l-1.5-1.5Z"
      />
    </svg>
  );
};
export default SvgSiren;
