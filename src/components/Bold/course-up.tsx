import * as React from "react";
import type { SVGProps } from "react";
const SvgCourseUp = (props: SVGProps<SVGSVGElement>) => {
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
        d="M15.668 7a.75.75 0 0 1 .75-.75H22a.75.75 0 0 1 .75.75v5.546a.75.75 0 0 1-1.5 0V8.803L15.114 14.9c-.469.466-.873.868-1.24 1.147-.394.298-.83.524-1.369.524-.538 0-.975-.226-1.369-.525-.367-.278-.77-.68-1.24-1.146l-.274-.273c-.514-.511-.847-.84-1.125-1.051-.26-.198-.382-.22-.463-.22-.08 0-.202.023-.462.22-.277.211-.61.54-1.124 1.052l-3.919 3.902a.75.75 0 0 1-1.058-1.062l3.953-3.938c.47-.466.873-.869 1.24-1.148.394-.3.831-.525 1.37-.526.539 0 .976.226 1.37.525.367.279.771.681 1.24 1.148l.275.272c.514.511.847.84 1.124 1.05.26.198.382.22.462.22.08 0 .202-.022.462-.22.278-.21.61-.539 1.125-1.05l6.09-6.052h-3.764a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCourseUp;
