import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const BankNote = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    // viewBox="0 0 24 24"
    fill="none"
    stroke="#808080"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-left"
    {...props}>
    <Path d="M6 12H6.01M18 12H18.01M4 6H20C21.1046 6 22 6.89543 22 8V16C22 17.1046 21.1046 18 20 18H4C2.89543 18 2 17.1046 2 16V8C2 6.89543 2.89543 6 4 6ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" />
  </Svg>
);
export default BankNote;
