import * as React from "react";
import type { SVGProps } from "react";
const SvgEraserCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.888 16.896c-.526.526-.973.974-1.378 1.283-.432.329-.902.571-1.478.571s-1.046-.242-1.478-.571c-.405-.31-.852-.757-1.379-1.283l-.07-.071c-.527-.527-.975-.974-1.284-1.38-.329-.43-.571-.901-.571-1.477 0-.576.242-1.046.571-1.478.31-.405.757-.852 1.283-1.378l4.008-4.008c.526-.526.973-.974 1.378-1.283.432-.329.902-.571 1.478-.571s1.046.242 1.478.571c.405.31.852.757 1.379 1.283l.07.071c.527.527.975.974 1.284 1.38.329.43.571.901.571 1.477 0 .576-.242 1.046-.571 1.478-.31.405-.757.852-1.283 1.378l-4.008 4.008ZM12.137 8.2c.571-.571.948-.946 1.263-1.186.298-.228.452-.264.568-.264.116 0 .27.036.568.264.315.24.692.615 1.264 1.186.571.572.946.949 1.186 1.264.228.298.264.452.264.568 0 .116-.036.27-.264.568-.24.315-.615.692-1.186 1.263l-2.62 2.619-3.662-3.663L12.137 8.2Zm-3.68 3.68 3.663 3.663-.257.257c-.571.571-.948.946-1.263 1.186-.298.228-.452.264-.568.264-.116 0-.27-.036-.568-.264-.315-.24-.692-.615-1.264-1.186-.571-.572-.946-.949-1.186-1.264-.228-.298-.264-.452-.264-.568 0-.116.036-.27.264-.568.24-.315.615-.692 1.186-1.263l.257-.257Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25ZM2.75 12a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgEraserCircle;
