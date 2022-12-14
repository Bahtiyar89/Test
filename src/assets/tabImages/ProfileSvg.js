import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ProfileSvg(props) {
  return (
    <Svg
      width={53}
      height={36}
      viewBox="0 0 53 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M26 6c-3.156 0-5.714 2.686-5.714 6s2.558 6 5.714 6c3.156 0 5.714-2.686 5.714-6S29.156 6 26 6zm-4.286 6c0-2.485 1.92-4.5 4.286-4.5 2.367 0 4.286 2.015 4.286 4.5s-1.92 4.5-4.286 4.5c-2.367 0-4.286-2.015-4.286-4.5zm-2.844 7.5c-1.58 0-2.87 1.33-2.87 3 0 2.537 1.19 4.45 3.05 5.695C20.881 29.42 23.35 30 26 30c2.65 0 5.119-.579 6.95-1.805C34.81 26.95 36 25.037 36 22.5c0-1.657-1.28-3-2.857-3H18.87zm-1.441 3c0-.83.64-1.5 1.44-1.5h14.274c.789 0 1.428.672 1.428 1.5 0 1.963-.889 3.425-2.389 4.43-1.53 1.024-3.703 1.57-6.182 1.57-2.479 0-4.653-.546-6.182-1.57-1.5-1.005-2.39-2.467-2.39-4.43z"
        fill={props.focused ? '#3066BE' : '#2D303E'}
      />
    </Svg>
  );
}

export default ProfileSvg;
