import React from 'react'
import { ScaleLoader } from 'react-spinners'

export const CustomLoader = ({ color }) => {
  return (
    <div>
        <ScaleLoader color={color}/>
    </div>
  )
}
