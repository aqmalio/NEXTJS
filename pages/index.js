import Feature from './components/feature'
import Hero from './components/hero'
import Paragraph from './components/paragraph'
import Title from './components/title'

export default function Home() {
  return (
    <>
      <Hero />

      {/* FEATURE SECTION */}
      <div className="flex justify-center flex-col md:flex-row space-x-0 md:space-x-5 m-5">
        <Feature dark title="Ultra Light" subtitle="Drone move faster with weighing component under 200 g" img="/img/feature1.png" />
        <Feature title="Best Resolution" subtitle="Take a beautiful view with best camera up to 4K Camera Resolution" img="/img/feature2.png" />
      </div>
      
      {/* BENEFIT SECTION */}
      <div className="w-full pt-6 px-4 sm:px-6 lg:px-8 bg-gray-50 p-8">
        <div className="lg:w-4/5 m-auto flex justify-center flex-col md:flex-row space-x-0 md:space-x-5">
        <img className="w-max-full md:w-max-1/5 h-auto p-14" src="/img/drone1.png" />
        <div className="flex flex-col space-y-5 mt-10">
          <Title dark label="Why Drone Light?" weight="bold" align="right"/>
          <Paragraph dark label="We provide a best self drone easy to use and operate. With auto pilot, the device will take a beautiful view for the best of flying operation." weight="light" align="right"/>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div>
              <Title dark label="4K" weight="bold" align="center" />
              <Paragraph className="text-gray-300" dark label="Camera Resolution" weight="thin" align="center"/>
            </div>
            <div>
              <Title dark label="2TB" weight="bold" align="center" />
              <Paragraph className="text-gray-300" dark label="Storage Capacity" weight="thin" align="center"/>
            </div>
            <div>
              <Title dark label="60 m/s" weight="bold" align="center" />
              <Paragraph className="text-gray-300" dark label="Super Max Speed" weight="thin" align="center"/>
            </div>
            <div>
              <Title dark label="30 mins" weight="bold" align="center" />
              <Paragraph className="text-gray-300" dark label="Long Flight Time" weight="thin" align="center"/>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* NEW PRODUCTS SECTION */}
      <div className="w-full pt-6 px-4 sm:px-6 lg:px-8 flex justify-center flex-col space-x-0 md:space-x-5 p-8">
        <Title dark label="New Products" weight="bold" align="center"/>
        <Paragraph dark label="New innovation, best quality than before. Make every moment flying operation become unforgettable." weight="light" align="center"/>
        <div className="flex flex-col space-y-5">
          
        </div>
      </div>
    </>
  )
}
