import * as React from "react";
import type { SVGProps } from "react";
const SvgWallpaper = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16V8Z" />
      <path d="M19 19.5c.465 0 .697 0 .891-.03a2.5 2.5 0 0 0 2.078-2.079c.031-.194.031-.426.031-.891v-9c0-.465 0-.697-.03-.891a2.5 2.5 0 0 0-2.08-2.079c-.193-.03-.425-.03-.89-.03M5 19.5c-.465 0-.697 0-.891-.03a2.5 2.5 0 0 1-2.079-2.08C2 17.197 2 16.965 2 16.5v-9c0-.465 0-.697.03-.891A2.5 2.5 0 0 1 4.11 4.53c.193-.03.425-.03.89-.03" />
      <circle cx={14.5} cy={6.5} r={1.5} />
      <path d="m5 14.816 1.29-1.324c.672-.69 1.684-.65 2.315.09l3.16 3.706c.507.594 1.304.675 1.89.192l.22-.18c.843-.695 1.984-.615 2.75.193l1.901 2.007" />
    </svg>
  );
};
export default SvgWallpaper;
