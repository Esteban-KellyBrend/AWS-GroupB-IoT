import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import Display from "../../components/Display"

function WindDirectionStats() {
  return (
    <div className="bg-gradient-to-tr to-[#431857] from-black from-30% bg-cover absolute h-screen w-screen">
      <Navbar />

      <section className="ml-[10vw] mr-[8vw] z-10 my-3">
        <Heading type={1} name={"WIND DIRECTION"} />
      </section>
      
      <div className="ml-40 mt-4 flex items-center">
      <section className="flex flex-row gap-[5rem]">
      <Display
        type={5}
        name={"TODAY"}
        meas={"48"}
        unit={"°"}
        direction={" East of North"}
        className="z-0 relative"
      />

      <Display
        type={5}
        name={"THIS WEEK"}
        meas={"48"}
        unit={"°"}
        direction={" East of North"}
        className="z-0 relative"
      />
      </section>
      </div>
    </div>
  );
}


export default WindDirectionStats