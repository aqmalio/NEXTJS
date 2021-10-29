import Feature from './components/feature'
import Hero from './components/hero'
import Paragraph from './components/paragraph'
import ProductCard from './components/product-card'
import TestimonyCard from './components/testimony-card'
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
            <Title dark label="Why Drone Light?" weight="bold" align="left" />
            <Paragraph dark label="We provide a best self drone easy to use and operate. With auto pilot, the device will take a beautiful view for the best of flying operation." weight="light" align="left" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              <div>
                <Title dark label="4K" weight="bold" align="center" />
                <Paragraph className="text-gray-300" dark label="Camera Resolution" weight="thin" align="center" />
              </div>
              <div>
                <Title dark label="2TB" weight="bold" align="center" />
                <Paragraph className="text-gray-300" dark label="Storage Capacity" weight="thin" align="center" />
              </div>
              <div>
                <Title dark label="60 m/s" weight="bold" align="center" />
                <Paragraph className="text-gray-300" dark label="Super Max Speed" weight="thin" align="center" />
              </div>
              <div>
                <Title dark label="30 mins" weight="bold" align="center" />
                <Paragraph className="text-gray-300" dark label="Long Flight Time" weight="thin" align="center" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NEW PRODUCTS SECTION */}
      <div className="w-full mt-20 pt-6 px-4 sm:px-6 lg:px-28 flex justify-center flex-col space-x-0 md:space-x-5 p-8">
        <Title dark label="New Products" weight="bold" align="center" />
        <Paragraph dark label="New innovation, best quality than before. Make every moment flying operation become unforgettable." weight="light" align="center" />
        <div className="flex mt-10 flex-col justify-center md:flex-row space-x-0 space-y-10 md:space-x-20 md:space-y-0">
          <ProductCard img="/img/product1.png" title="Mini Drone" subtitle="Powerful camera drone at an affordable price range. Camera up to 4K resolution, optimize shots automatically." />
          <ProductCard img="/img/product2.png" title="Drone Light" subtitle="Drone light is every creators dream. Setting apperture manually and high battery  performance. Drone light is everything you need." />
          <ProductCard img="/img/product1.png" title="Mini Drone" subtitle="Powerful camera drone at an affordable price range. Camera up to 4K resolution, optimize shots automatically." />
        </div>
      </div>

      {/* TESTIMONIES SECTION */}
      <div className="w-full mt-20 pt-6 px-4 sm:px-6 lg:px-28 flex justify-center flex-col space-x-0 md:space-x-5 p-8">
        <Title dark label="What Our “Pilots Are Saying" className="text-4xl md:text-5xl md:w-2/5" weight="bold" align="left" />
        <div className="w-full flex justify-center flex-col mt-10 md:flex-row space-x-0 space-y-10 md:space-x-20 md:space-y-0">
          <TestimonyCard name="Hugo Adams" job="Content Creator" subtitle="With high resolution camera, picture become clear and beautiful. It’s so easy to operate drone." img="/img/profile1.png" />
          <TestimonyCard name="Jennie Obrien" job="Director File" subtitle="Taking high view video become easy and faster. Battery performance really helping for making film." img="/img/profile2.png" />
          <TestimonyCard name="Lisa Millz" job="Content WQCreator" subtitle="Making video content for my trip vlog so powerful and wonderful. Love the video quality." img="/img/profile3.png" />
        </div>
      </div>
    </>
  )
}
