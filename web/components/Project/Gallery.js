import React from 'react'

export const Gallery = ({ cover, images }) => {
  console.log(cover,images)
  return (
    <div className='py-10'>
      <div className="container px-4 sm:px-0  mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">
          <div className="w-full rounded-xl shadow-xl ">
              <img src={`data:image/png;base64,${Buffer.from(cover.data.data).toString( "base64")}` }
                  className='aspect-square rounded-xl'
                  alt="image"/>
                  
          </div>
          
          { images.map((img, index ) => (
            <div className="w-full rounded-xl shadow-xl aspect-square" key={index}>
                      <img src={`data:image/png;base64,${Buffer.from(img.data.data).toString( "base64")}` }
                          alt="image"
                          className='aspect-square rounded-xl'
                          />
            </div>
          )) }
          

      </div>


    </div>
  )
}
