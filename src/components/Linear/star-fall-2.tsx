import * as React from "react";
import type { SVGProps } from "react";
const SvgStarFall2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="m9.95 6.649-.263-.702.263.702Zm1.45-1.415.699.274-.699-.274Zm-2.58 5.84-.466.588.466-.588Zm.66-4.249.263.703-.263-.703Zm.686 6.355-.748.05.748-.05Zm-.952-1.793.466-.588-.466.588Zm.775.75.662-.353-.662.352Zm4.17 3.504.397.636-.397-.636Zm-3.96-1.97.748-.048-.749.049Zm6.422 1.399.189-.726-.189.726Zm-2.038.306-.398-.636.397.636Zm5.636-3.21.723-.202-.723.202Zm-3.107 3.031-.19.726.19-.726Zm3.282-5.49-.627-.412.627.412Zm-.308 1.983-.722.201.722-.201Zm-1.46-6.239.043-.749-.043.749Zm2.04 3.843.626.412-.627-.412Zm-4.394-4.792-.573.484.573-.484Zm1.848.92-.044.748.044-.749ZM15.948 4.12l.573-.484-.573.484Zm-4.368.656-.698-.274.698.274ZM7.02 9.17a.75.75 0 0 0-.849-1.238L7.02 9.17ZM2.33 22l-.74.126a.75.75 0 0 0 1.445.13L2.331 22Zm8.283-5.875a.75.75 0 0 0-.452-1.43l.452 1.43Zm4.762-11.521.323.382 1.146-.968-.323-.382-1.146.968Zm2.7 1.566.506.03.087-1.498-.505-.03-.088 1.498Zm1.962 2.712-.27.413 1.253.823.271-.412-1.254-.824Zm-.674 3.009.133.476 1.445-.403-.133-.476-1.445.403Zm-2.064 2.58-.49-.127-.378 1.452.49.127.378-1.451Zm-3.115.27-.424.264.795 1.272.424-.265-.795-1.272Zm-3.238-1.118-.032-.492-1.497.098.032.492 1.497-.098ZM9.68 10.799l-.395-.313-.931 1.176.395.313.931-1.176Zm.063-3.271.47-.177-.526-1.404-.47.176.526 1.405Zm2.356-2.02.18-.458-1.397-.548-.18.458 1.397.548Zm-1.886 1.843c.455-.17.897-.32 1.226-.64L10.39 5.637c-.05.048-.124.092-.704.31l.526 1.404Zm.49-2.39c-.222.564-.265.63-.312.676L11.44 6.71c.331-.324.486-.761.66-1.203l-1.397-.548Zm-1.418 5.525c-.782-.62-1.3-1.034-1.622-1.374-.32-.34-.281-.44-.28-.443L5.9 8.44c-.11.704.255 1.259.671 1.7.414.44 1.04.934 1.783 1.523l.931-1.176Zm-.068-4.363c-.886.332-1.632.609-2.16.9-.531.294-1.048.711-1.157 1.416l1.482.23c0-.002-.006-.108.4-.332.408-.226 1.027-.46 1.96-.81l-.525-1.404Zm1.698 7.008c-.031-.474-.046-.937-.264-1.347l-1.325.704c.032.059.052.136.092.741l1.497-.098Zm-2.166-1.156c.485.384.544.45.577.513l1.325-.703c-.215-.406-.59-.684-.97-.986l-.932 1.176Zm5.012 3.03c-.84.525-1.398.872-1.827 1.06-.42.184-.526.128-.556.113l-.668 1.343c.628.312 1.262.164 1.825-.082.554-.242 1.224-.663 2.021-1.162l-.795-1.272ZM9.45 13.721c.06.924.11 1.705.238 2.29.132.598.388 1.195 1.022 1.51l.668-1.343c-.026-.013-.13-.055-.225-.489-.098-.447-.142-1.09-.206-2.066l-1.497.098Zm7.36.623c-.477-.124-.922-.254-1.375-.186l.223 1.484c.08-.012.174-.002.774.154l.378-1.452Zm-1.83 1.668c.52-.324.602-.359.678-.37l-.223-1.484c-.456.069-.838.325-1.25.582l.795 1.272Zm4.517-3.645c.264.946.436 1.571.49 2.024.055.445-.033.5-.038.505l1.047 1.073c.512-.499.554-1.157.48-1.759-.072-.593-.285-1.35-.534-2.246l-1.445.403Zm-2.574 3.556c.924.24 1.698.444 2.303.511.608.068 1.266.027 1.77-.465l-1.047-1.073c-.012.012-.087.1-.556.047-.473-.052-1.12-.219-2.093-.471l-.377 1.451Zm2.844-6.628c-.26.397-.53.779-.6 1.236l1.482.23c.01-.06.037-.132.372-.643l-1.254-.823Zm1.042 2.193c-.164-.589-.17-.666-.16-.727l-1.482-.23c-.071.456.07.902.197 1.36l1.445-.403ZM18.582 6.2c1.002.058 1.67.1 2.135.194.463.095.509.202.518.22l1.325-.704c-.33-.622-.943-.863-1.543-.985-.596-.122-1.395-.167-2.348-.223L18.582 6.2Zm2.71 3.506c.51-.776.942-1.431 1.191-1.974.253-.552.412-1.19.077-1.822l-1.325.703c.004.008.07.088-.116.494-.19.414-.543.956-1.08 1.775l1.253.824ZM15.7 4.986c.314.372.6.733 1.012.938l.668-1.343c-.07-.035-.139-.094-.534-.563l-1.146.968Zm2.465-.313c-.62-.037-.713-.056-.785-.092l-.668 1.343c.41.204.873.217 1.365.246l.088-1.497ZM16.52 3.636c-.608-.72-1.118-1.327-1.572-1.728-.46-.407-1.018-.743-1.712-.64l.223 1.484c.033-.005.15-.026.496.28.352.31.779.813 1.42 1.572l1.146-.968ZM12.279 5.05c.357-.91.595-1.509.823-1.904.223-.384.333-.39.36-.394l-.224-1.483c-.7.105-1.127.596-1.433 1.125-.3.518-.584 1.247-.922 2.108l1.396.548ZM6.171 7.932C4.5 9.08 3.021 10.752 2.132 13.1c-.888 2.342-1.174 5.31-.54 9.027l1.479-.252c-.6-3.514-.31-6.203.464-8.243.772-2.037 2.043-3.473 3.484-4.461l-.848-1.238ZM3.036 22.255c.98-2.705 4.016-5.004 7.578-6.13l-.452-1.43c-3.789 1.197-7.333 3.727-8.536 7.05l1.41.51Z"
      />
    </svg>
  );
};
export default SvgStarFall2;