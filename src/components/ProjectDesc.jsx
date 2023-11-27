import React from 'react'

function ProjectDesc() {
  return (
    <div className=" transition-all duration-100">
      <section className="mt-3 text-xl text-white font-light text-justify flex flex-col gap-4 indent-10 text-opacity-80 w-full flex-wrap pl-3 pr-8">
        <p className='font-bold text-3xl indent-0'>PROJECT DESCRIPTION</p>
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
        </section>
    </div>
  )
}

export default ProjectDesc
