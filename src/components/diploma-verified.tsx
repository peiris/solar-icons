import * as React from "react";
import type { SVGProps } from "react";
const SvgDiplomaVerified = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M7 17.998c-2.175-.012-3.353-.108-4.121-.877C2 16.243 2 14.828 2 12V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h8c2.828 0 4.243 0 5.121.879C22 3.757 22 5.172 22 8v4c0 2.828 0 4.243-.879 5.121-.73.73-1.829.854-3.801.875l-.82.002M9 6h6M7 9.5h10" />
      <path d="M10.89 13.945a1.71 1.71 0 0 1 2.22 0c.273.234.614.375.972.404a1.71 1.71 0 0 1 1.57 1.568c.028.36.169.7.402.974a1.71 1.71 0 0 1 0 2.218 1.71 1.71 0 0 0-.403.974 1.71 1.71 0 0 1-1.569 1.569 1.71 1.71 0 0 0-.973.403 1.71 1.71 0 0 1-2.219 0 1.71 1.71 0 0 0-.973-.404 1.71 1.71 0 0 1-1.569-1.568 1.71 1.71 0 0 0-.403-.974 1.71 1.71 0 0 1 0-2.218 1.71 1.71 0 0 0 .403-.974 1.71 1.71 0 0 1 1.57-1.568c.358-.029.699-.17.973-.404Z" />
      <path d="m10.5 18.2.857.8 2.143-2" />
    </svg>
  );
};
export default SvgDiplomaVerified;
