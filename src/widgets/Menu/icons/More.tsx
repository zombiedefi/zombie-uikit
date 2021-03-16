import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
      <g fill="none" fill-rule="evenodd">
        <g fill="#000" fill-rule="nonzero">
          <g>
            <path
              d="M2 .5C1.172.5.5 1.172.5 2S1.172 3.5 2 3.5 3.5 2.828 3.5 2 2.828.5 2 .5zM6.5 2c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5S8.828 3.5 8 3.5 6.5 2.828 6.5 2zM12.5 2c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5z"
              transform="translate(4 10)"
            />
          </g>
        </g>
      </g>
    </Svg>

    // <Svg viewBox="0 0 24 24" {...props}>
    //   <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" />
    // </Svg>
  );
};

export default Icon;
