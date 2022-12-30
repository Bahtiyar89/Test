import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function RatingSvg(props) {
  return (
    <Svg
      width={22}
      height={23}
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M6.722 2.872C6.722 1.286 7.953 0 9.472 0h3.056c1.519 0 2.75 1.286 2.75 2.872V5.13h3.972c1.519 0 2.75 1.286 2.75 2.872v14.04c0 .528-.41.957-.917.957H.917C.41 23 0 22.571 0 22.043V11.832C0 10.246 1.231 8.96 2.75 8.96h3.972V2.872zm1.834 18.213h4.888V2.872c0-.529-.41-.957-.916-.957H9.472c-.506 0-.916.428-.916.957v18.213zm-1.834-10.21H2.75c-.506 0-.917.428-.917.957v9.253h4.89v-10.21zm8.556 10.21h4.889V8.003c0-.529-.41-.958-.917-.958h-3.972v14.04z"
        fill={props.focused ? '#B548C6' : '#2D303E'}
      />
    </Svg>
  );
}

export default RatingSvg;
