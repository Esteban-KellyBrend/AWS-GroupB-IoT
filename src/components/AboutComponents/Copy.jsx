import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Icon } from "@iconify/react";

const Copy = ({Email}) => {

  return (
    <div className="flex justify-center items-center h-screen">
      <CopyToClipboard text={Email}>
        <button className='border-2 border-red-600 text-white'>
          <Icon
                    icon="ic:outline-email"
                    className="border-none bg-transparent"
                  />
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default Copy;
