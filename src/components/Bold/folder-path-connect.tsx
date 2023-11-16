import * as React from "react";
import type { SVGProps } from "react";
const SvgFolderPathConnect = (props: SVGProps<SVGSVGElement>) => {
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
        d="M19 8.369V9.8c0 2.451 0 3.677-.82 4.438-.82.762-2.14.762-4.78.762h-.65v3a.752.752 0 0 1-.013.14c.507.201.913.604 1.118 1.11h7.395a.75.75 0 0 1 0 1.5h-7.395a2 2 0 0 1-3.71 0H2.75a.75.75 0 0 1 0-1.5h7.395c.205-.506.61-.909 1.118-1.11a.752.752 0 0 1-.013-.14v-3h-.65c-2.64 0-3.96 0-4.78-.761C5 13.477 5 12.25 5 9.8V5.217c0-.573 0-.86.049-1.099.213-1.052 1.1-1.874 2.232-2.073C7.538 2 7.847 2 8.465 2c.27 0 .406 0 .536.011.56.049 1.093.254 1.526.587.1.078.196.167.388.344l.385.358c.571.53.857.795 1.198.972.188.097.388.174.594.228.377.1.78.1 1.588.1h.261c1.843 0 2.765 0 3.363.5.055.046.108.095.157.146C19 5.802 19 6.658 19 8.369ZM12.75 7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFolderPathConnect;