import * as React from "react";
import type { SVGProps } from "react";
const SvgCourseDown = (props: SVGProps<SVGSVGElement>) => {
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
        d="M1.469 6.47a.75.75 0 0 1 1.06-.001l3.919 3.902c.514.511.847.84 1.124 1.052.26.197.382.22.462.22.081 0 .203-.022.463-.22.278-.21.61-.54 1.125-1.051l.274-.273c.47-.466.873-.868 1.24-1.146.394-.299.83-.525 1.369-.525.538 0 .975.226 1.369.524.367.279.771.68 1.24 1.147l6.136 6.098v-3.743a.75.75 0 0 1 1.5 0V18a.75.75 0 0 1-.75.75h-5.582a.75.75 0 1 1 0-1.5h3.764l-6.09-6.053c-.514-.51-.847-.84-1.125-1.05-.26-.197-.381-.219-.462-.219-.08 0-.202.022-.462.22-.277.21-.61.539-1.124 1.05l-.274.272c-.47.467-.874.87-1.241 1.148-.394.299-.831.525-1.37.525-.539 0-.976-.227-1.37-.526-.367-.279-.77-.682-1.24-1.149a12.73 12.73 0 0 0-.035-.034L1.471 7.53a.75.75 0 0 1-.002-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCourseDown;
