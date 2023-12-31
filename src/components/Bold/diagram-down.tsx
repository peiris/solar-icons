import * as React from "react";
import type { SVGProps } from "react";
const SvgDiagramDown = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2.75 2a.75.75 0 0 0-1.5 0v10.057c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19H22a.75.75 0 0 0 0-1.5H12c-2.378 0-4.086-.002-5.386-.176-1.279-.172-2.05-.5-2.62-1.069-.569-.57-.896-1.34-1.068-2.619-.174-1.3-.176-3.008-.176-5.386V2Z"
      />
      <path
        fill="currentColor"
        d="M6.587 6.534a.75.75 0 0 0-1.174.932l3.133 3.946c.226.284.418.527.59.714.177.196.373.379.62.51a2.25 2.25 0 0 0 2.033.045c.252-.121.456-.296.642-.483.179-.18.382-.414.62-.688l.016-.018c.258-.298.428-.493.566-.633.136-.136.199-.174.227-.187a.75.75 0 0 1 .678.014c.028.015.088.056.218.198.133.145.294.347.539.656l3.118 3.926a.75.75 0 0 0 1.174-.932l-3.133-3.946a14.75 14.75 0 0 0-.589-.714 2.338 2.338 0 0 0-.62-.51 2.25 2.25 0 0 0-2.034-.045c-.252.121-.456.296-.642.483-.179.18-.381.414-.62.688l-.015.018c-.259.298-.428.493-.567.633-.136.136-.198.174-.227.188a.75.75 0 0 1-.678-.015c-.027-.015-.088-.055-.218-.198a14.049 14.049 0 0 1-.538-.656L6.587 6.534Z"
      />
    </svg>
  );
};
export default SvgDiagramDown;
