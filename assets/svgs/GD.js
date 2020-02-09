import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const SvgGD = props => (
  <Svg width="30" height="30" viewBox="0 0 25 25" fill="none" {...props}>
    <Path
      d="M20.8788 22.7976L24.9512 16.9686L16.3322 2.2749H8.5701L-0.0488281 16.9686L4.02355 22.7976H20.8788ZM20.117 21.3316H5.52902L7.76157 17.6669H22.6774L20.117 21.3316ZM16.3284 16.201H8.6546L12.4527 9.96624L16.3284 16.201ZM22.8039 16.201H18.0521L10.3062 3.74089H15.4951L22.8039 16.201ZM9.00688 4.42334L11.587 8.57383L4.26693 20.5898L1.68877 16.8995L9.00688 4.42334Z"
      fill="white"
    />
    <Rect width="25" height="25" fill="none" />
  </Svg>
);

export default SvgGD;
