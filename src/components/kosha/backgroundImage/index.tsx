import React, { Fragment } from 'react';
import Image from 'next/image';
import backgroundImage from '../../../assets/image/background.png';

function BackgroundImage() {
  return (
    <Fragment>
      <Image
        src={backgroundImage}
        alt=""
        className="absolute w-full max-w-[1000px]"
      />
    </Fragment>
  );
}

export default BackgroundImage;
