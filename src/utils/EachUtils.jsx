import React, { Children } from 'react'

// function yang membungkus function map()
//of: data JSON ; render: callback;
const EachUtils = ({of, render}) => {
  return (
    <>
     {/* Check if data JSON */}
      {Children.toArray(of.map((item, index)=> render(item, index)))}
    </>
  )
}

export default EachUtils