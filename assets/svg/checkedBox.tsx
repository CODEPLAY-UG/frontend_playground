import * as React from "react";
import Svg, { Rect, Path, SvgProps } from "react-native-svg";
const checkedBox = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Rect width={24} height={24} rx={12} fill="#636363" />
    <Path d="M8.85355 12.1465C8.65829 11.9512 8.34171 11.9512 8.14645 12.1465C7.95118 12.3417 7.95118 12.6583 8.14645 12.8536L10.6464 15.3536C10.8543 15.5615 11.1959 15.546 11.3841 15.3201L16.3841 9.3201C16.5609 9.10797 16.5322 8.79268 16.3201 8.6159C16.108 8.43912 15.7927 8.46778 15.6159 8.67992L10.9664 14.2593L8.85355 12.1465Z" fill="white" />
  </Svg>
);
export default checkedBox;
