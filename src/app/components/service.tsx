import React from "react";

export default function Service({path_icon, title, description}) {
  return(
    <div className='flex flex-cols-2 gap-3 mb-2 mt-1'>
      <svg className="w-12 h-12 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d={path_icon} clip-rule="evenodd"/>
      </svg>
      <div className='text-white'>
        <span className='font-semibold'>{title}</span><br></br>
        <small className='text-gray-400'>{description}</small>
      </div>
    </div>
  )
}