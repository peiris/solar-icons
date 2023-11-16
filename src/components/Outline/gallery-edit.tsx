import * as React from "react";
import type { SVGProps } from "react";
const SvgGalleryEdit = (props: SVGProps<SVGSVGElement>) => {
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
        d="M18.449 1.988a2.52 2.52 0 1 1 3.563 3.563L17.76 9.803l-.03.03c-.23.23-.391.392-.572.532a3.701 3.701 0 0 1-.683.423c-.206.098-.422.17-.732.273a4.803 4.803 0 0 1-.04.014l-1.838.612a1.227 1.227 0 0 1-1.552-1.552l.612-1.838a5.33 5.33 0 0 1 .014-.04c.103-.31.175-.526.273-.732.116-.242.258-.472.423-.684.14-.18.301-.34.532-.571l.03-.03 4.252-4.252Zm2.502 1.06a1.02 1.02 0 0 0-1.442 0l-.131.132.016.05c.082.236.238.548.533.843a2.224 2.224 0 0 0 .893.55l.131-.132a1.02 1.02 0 0 0 0-1.442Zm-1.265 2.708a3.754 3.754 0 0 1-1.442-1.442L15.258 7.3c-.272.273-.364.366-.44.464a2.195 2.195 0 0 0-.252.406c-.053.113-.096.236-.218.602l-.225.675.43.43.675-.226c.366-.121.489-.164.602-.217a2.2 2.2 0 0 0 .406-.252c.098-.076.191-.168.464-.44l2.986-2.986Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25h-.057c-2.309 0-4.118 0-5.53.19-1.444.194-2.584.6-3.479 1.494-.895.895-1.3 2.035-1.494 3.48-.19 1.411-.19 3.22-.19 5.529v.114c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h.114c2.309 0 4.118 0 5.53-.19 1.444-.194 2.584-.6 3.479-1.494.895-.895 1.3-2.035 1.494-3.48.19-1.411.19-3.22.19-5.529V12a.75.75 0 0 0-1.5 0c0 2.378-.002 4.086-.176 5.386l-.022.152-2.774-2.497a3.75 3.75 0 0 0-4.665-.28l-.298.21a1.25 1.25 0 0 1-1.602-.14l-4.29-4.29a3.05 3.05 0 0 0-4.165-.138l-.507.443c.005-1.792.03-3.153.175-4.232.172-1.279.5-2.05 1.069-2.62.57-.569 1.34-.896 2.619-1.068 1.3-.174 3.008-.176 5.386-.176a.75.75 0 0 0 0-1.5ZM2.926 17.386c.172 1.279.5 2.05 1.069 2.62.57.569 1.34.896 2.619 1.068 1.3.174 3.008.176 5.386.176s4.086-.002 5.386-.176c1.279-.172 2.05-.5 2.62-1.069a3.04 3.04 0 0 0 .604-.865.755.755 0 0 1-.112-.083l-3.223-2.9a2.25 2.25 0 0 0-2.8-.17l-.297.21a2.75 2.75 0 0 1-3.526-.305l-4.29-4.29a1.55 1.55 0 0 0-2.117-.07L2.75 12.84c.003 1.948.023 3.405.176 4.546Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgGalleryEdit;