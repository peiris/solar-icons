import * as React from "react";
import type { SVGProps } from "react";
const SvgPaw = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M7.57 15.376c1.586-3.228 2.38-4.842 3.52-5.227a2.849 2.849 0 0 1 1.82 0c1.14.385 1.934 1.999 3.52 5.227l.878 1.79c.41.833.614 1.25.663 1.534.201 1.179-.67 2.265-1.846 2.3-.283.008-.725-.113-1.61-.356a17.066 17.066 0 0 0-1.01-.259 7.581 7.581 0 0 0-3.01 0c-.252.051-.505.12-1.01.26-.885.242-1.327.363-1.61.355-1.175-.035-2.047-1.121-1.846-2.3.048-.284.253-.7.663-1.535l.879-1.789ZM6.145 5.527c.412 1.631 1.576 2.717 2.6 2.426 1.025-.292 1.522-1.85 1.11-3.48-.412-1.631-1.576-2.717-2.6-2.426-1.025.292-1.522 1.85-1.11 3.48ZM17.855 5.527c-.412 1.631-1.576 2.717-2.6 2.426-1.025-.292-1.522-1.85-1.11-3.48.412-1.631 1.576-2.717 2.6-2.426 1.025.292 1.522 1.85 1.11 3.48ZM2.202 12.297c.45 1.205 1.508 1.937 2.363 1.635.855-.302 1.183-1.524.733-2.73-.45-1.204-1.508-1.936-2.363-1.634-.855.302-1.183 1.524-.733 2.73ZM21.798 12.297c-.45 1.205-1.508 1.937-2.363 1.635-.855-.302-1.183-1.524-.733-2.73.45-1.204 1.508-1.936 2.363-1.634.855.302 1.183 1.524.733 2.73Z" />
    </svg>
  );
};
export default SvgPaw;
