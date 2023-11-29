import React from 'react'

function ProjectDesc() {
  return (
    <div className=" transition-all duration-100 px-[5vw] mt-[3vh]">
      <section className="w-full mt-3 text-lg text-white font-light flex gap-4 indent-10 text-opacity-80 flex-col  ">
        <p className='font-bold text-3xl indent-0 pb-[1vh]'>PROJECT DESCRIPTION</p>
        <article className='flex flex-col justify-center gap-4 text-justify items-center text-[16px]'>
          <p>
            Computer engineering students at Adamson University, in their
            graduating year, are working on an advanced project as part of their
            "Internet of Things" course. The project involves the creation of an
            IoT-based Automatic Weather Station (AWS) designed for deployment in
            the northern region of Metro Manila. This AWS system aims to provide
            real-time data on key environmental parameters and facilitate
            comprehensive environmental monitoring.
          </p>
          <p>
          The Automatic Weather Station (AWS) is strategically located in the northern part of Metro Manila to provide accurate and localized weather data for this specific area. This data is crucial for various applications, including urban planning, disaster preparedness, and agriculture in the northern region.
          </p>
          </article>
        </section>
    </div>
  )
}

export default ProjectDesc
