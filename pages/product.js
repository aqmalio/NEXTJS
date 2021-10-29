import Paragraph from './components/paragraph'
import Title from './components/title'
import Button from './components/button'
import { ArchiveIcon, CameraIcon, ClockIcon, DatabaseIcon } from '@heroicons/react/outline'


export default function Product() {
  return (
    <>
      {/* PRODUCT SECTION */}
      <div className="w-full mt-20 pt-6 px-4 sm:px-6 lg:px-28 flex justify-center flex-col p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col">
            <img className="rounded-lg md:p-3 border-2 border-gray-100" src="/img/highlight_large.png" />
            <div className="flex flex-row justify-between mt-2 md:mt-10">
              <img className="w-1/5 p-0 md:rounded-lg md:p-2 md:border-2 border-gray-100" src="/img/highlight1.png" />
              <img className="w-1/5 p-0 md:rounded-lg md:p-2 md:border-2 border-gray-100" src="/img/highlight2.png" />
              <img className="w-1/5 p-0 md:rounded-lg md:p-2 md:border-2 border-gray-100" src="/img/highlight3.png" />
              <img className="w-1/5 p-0 md:rounded-lg md:p-2 md:border-2 border-gray-100" src="/img/highlight4.png" />
            </div>
          </div>
          <div className="flex flex-col">
            <Title label="Drone Light" dark weight="medium" align="left" />
            <Paragraph label="Super fast, easy control drone" dark weight="light" align="left" />
            <Title label="$ 4.500,00" className="lg:text-4xl" dark weight="bold" align="left" />
            <Paragraph label="Drone features:" dark weight="medium" align="left" />
            <div className="flex flex-col my-3 space-y-3">
              <div className="inline-flex">
                <CameraIcon className="h-6 w-6 mr-3" aria-hidden="true" />
                <div className="text-gray-700">4K Camera Resolution</div>
              </div>
              <div className="inline-flex">
                <DatabaseIcon className="h-6 w-6 mr-3" aria-hidden="true" />
                <div className="text-gray-700">2 TB Storage</div>
              </div>
              <div className="inline-flex">
                <ClockIcon className="h-6 w-6 mr-3" aria-hidden="true" />
                <div className="text-gray-700">60 m/s Speed</div>
              </div>
              <div className="inline-flex">
                <ArchiveIcon className="h-6 w-6 mr-3" aria-hidden="true" />
                <div className="text-gray-700">5000 mAh Battery</div>
              </div>
            </div>
            <Button href="#" className="m-auto md:m-px" label="ORDER IT NOW" />
          </div>
        </div>
        <div className="flex flex-col rounded-lg p-3 border-2 border-gray-100 mt-10">
          <Title className="md:text-2xl mb-3" label="Description" dark weight="medium" align="left" />
          <Paragraph dark align="left" weight="light" label="We provide a best self drone easy to use and operate. With auto pilot, the device will take a beautiful view for the best of flying operation. Drone light is every creators dream. Setting apperture manually and high battery performance. With 2 Terabyte storage, you can take a lot of picture in one take. 4K Camera resolution make your video clean and feels like a real environtment. Capture your moment in easy way effortlesly with auto pilot system. No need to learn how to fly and operate drone. Enjoy your simple and easy flying experience. Drone light is everything you need." />
         </div>
      </div>
    </>
  )
}
