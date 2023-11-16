import * as React from "react";
import type { SVGProps } from "react";
const SvgScreenShare = (props: SVGProps<SVGSVGElement>) => {
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
        d="M15.03 7.47a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l1.22-1.22V16a.75.75 0 0 0 1.5 0V9.81l1.22 1.22a.75.75 0 1 0 1.06-1.06l-2.5-2.5Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.945 1.25h1.11c1.367 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v8.11c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116h-1.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982-.4-.4-.648-.869-.805-1.402-.951-.001-1.744-.012-2.386-.098-.764-.103-1.426-.325-1.955-.854-.529-.529-.751-1.19-.854-1.955-.098-.73-.098-1.656-.098-2.79V9.447c0-1.133 0-2.058.098-2.79.103-.763.325-1.425.854-1.954.529-.529 1.19-.751 1.955-.854.642-.086 1.435-.097 2.386-.098.157-.533.406-1.002.805-1.402.602-.602 1.36-.86 2.26-.981.867-.117 1.97-.117 3.337-.117ZM7.25 16.055c0 1.05 0 1.943.053 2.694-.835-.003-1.455-.018-1.946-.084-.598-.08-.89-.224-1.094-.428-.204-.203-.348-.496-.428-1.094-.083-.619-.085-1.443-.085-2.643v-5c0-1.2.002-2.024.085-2.643.08-.598.224-.89.428-1.094.203-.204.496-.348 1.094-.428.491-.066 1.111-.08 1.946-.084C7.25 6 7.25 6.895 7.25 7.945v8.11Zm3.558-13.202c-.734.099-1.122.28-1.399.556-.277.277-.457.665-.556 1.4C8.752 5.562 8.75 6.564 8.75 8v8c0 1.435.002 2.436.103 3.192.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.755.101 1.756.103 3.191.103h1c1.435 0 2.436-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4.101-.755.103-1.756.103-3.191V8c0-1.435-.002-2.437-.103-3.192-.099-.734-.28-1.122-.556-1.399-.277-.277-.665-.457-1.4-.556-.755-.101-1.756-.103-3.191-.103h-1c-1.435 0-2.437.002-3.192.103Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgScreenShare;