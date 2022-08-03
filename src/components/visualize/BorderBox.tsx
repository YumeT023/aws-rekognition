import React, { CSSProperties } from 'react';

const BorderBox: React.FC<{
  css: CSSProperties
}> = ({css}) => {


  return (
    <div className='b-box' style={css}></div>
  )
}

export default BorderBox;