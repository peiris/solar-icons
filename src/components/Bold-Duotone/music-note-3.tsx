import * as React from "react";
import type { SVGProps } from "react";
const SvgMusicNote3 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M14.319 2.505A2.75 2.75 0 0 0 11.414 4.3c-.098.27-.132.563-.148.869A17.25 17.25 0 0 0 11.25 6v8.536A4.75 4.75 0 1 0 12.75 18V9.21c.105.056.218.113.343.175L15.8 10.74c.418.21.759.38 1.038.5.281.123.558.223.843.257A2.75 2.75 0 0 0 20.586 9.7c.098-.27.132-.563.148-.87.016-.303.016-.683.016-1.151v-.083c0-.348 0-.62-.049-.878a2.75 2.75 0 0 0-1.03-1.667c-.21-.16-.453-.281-.764-.436L16.2 3.262c-.418-.21-.759-.38-1.038-.501-.28-.123-.558-.223-.843-.256Z"
      />
    </svg>
  );
};
export default SvgMusicNote3;
