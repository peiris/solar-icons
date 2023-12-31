import * as React from "react";
import type { SVGProps } from "react";
const SvgMusicNoteSlider = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11 12.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.419 8c0-2.828 0-4.243.817-5.121C8.053 2 9.369 2 12 2c2.631 0 3.947 0 4.764.879.817.878.817 2.293.817 5.121v8c0 2.828 0 4.243-.817 5.121C15.947 22 14.631 22 12 22c-2.631 0-3.947 0-4.764-.879-.817-.878-.817-2.293-.817-5.121V8Zm7.331 0a.75.75 0 0 0-1.5 0v3.55a2.75 2.75 0 1 0 1.5 2.45v-3.55c.375.192.8.3 1.25.3a.75.75 0 0 0 0-1.5c-.69 0-1.25-.56-1.25-1.25Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.023 7.901V16.1c0 .982 0 1.865.046 2.629.017.27.039.524.069.764.013.107.029.214.046.32.036.217-.131.42-.35.401-.43-.037-.82-.118-1.183-.317a3.146 3.146 0 0 1-1.321-1.42c-.186-.391-.26-.81-.296-1.273C2 16.756 2 16.205 2 15.531V8.47c0-.674 0-1.224.034-1.672.035-.463.11-.882.296-1.272a3.146 3.146 0 0 1 1.32-1.42c.364-.2.753-.28 1.184-.318.219-.02.386.184.35.4a8.396 8.396 0 0 0-.046.321c-.03.24-.052.495-.069.764-.046.764-.046 1.646-.046 2.63ZM18.977 7.901V16.1c0 .982 0 1.865-.047 2.629-.016.27-.038.524-.068.764a8.313 8.313 0 0 1-.046.32c-.036.217.131.42.35.401.43-.037.82-.118 1.183-.317a3.147 3.147 0 0 0 1.322-1.42c.185-.391.26-.81.295-1.273.034-.447.034-.998.034-1.671V8.468c0-.674 0-1.225-.034-1.672-.035-.463-.11-.882-.296-1.272a3.147 3.147 0 0 0-1.32-1.42c-.364-.2-.753-.28-1.184-.318-.219-.02-.386.184-.35.4a11.992 11.992 0 0 1 .115 1.085c.046.764.046 1.646.046 2.63Z"
      />
    </svg>
  );
};
export default SvgMusicNoteSlider;
