import Paragraph from '../paragraph'
import Title from '../title'
import Image from 'next/image'
import logoImage from '../../../public/img/logo.png'

export default function Footer() {
  return (
    <div className="w-full mt-20 pt-6 px-4 sm:px-6 lg:px-28 flex justify-center flex-col space-x-0 md:space-x-5 p-8 bg-black">
      <div className="py-14 grid grid-cols-1 lg:grid-cols-4 gap-8">

        <div className="flex flex-col mr-10">
          <a href="#" className="flex">
            <Image
              className="h-8 w-auto sm:h-10"
              src={logoImage}
            />
            <Title label="autodrone" weight="bold" className="ml-5" />
          </a>
          <Paragraph className="mt-5" label="Look up the sky and beautiful world easily." align="left" weight="thin" />
        </div>

        <div className="flex flex-col">
          <div className="font-bold text-white text-lg mt-5">Explore</div>
          <Paragraph className="mt-5" label="Our Services" align="left" weight="thin" />
          <Paragraph className="mt-2" label="Specification" align="left" weight="thin" />
          <Paragraph className="mt-2" label="Refund" align="left" weight="thin" />
          <Paragraph className="mt-2" label="Playlist" align="left" weight="thin" />
        </div>

        <div className="flex flex-col">
          <div className="font-bold text-white text-lg mt-5">Account</div>
          <Paragraph className="mt-5" label="My Account" align="left" weight="thin" />
          <Paragraph className="mt-2" label="Top Benefit" align="left" weight="thin" />
          <Paragraph className="mt-2" label="How-To Tutorials" align="left" weight="thin" />
          <Paragraph className="mt-2" label="Moment" align="left" weight="thin" />
        </div>

        <div className="flex flex-col">
          <div className="font-bold text-white text-lg mt-5">Office</div>
          <Paragraph className="mt-5" label="+021 2208 1996" align="left" weight="thin" />
          <Paragraph className="mt-2" label="SCBD, Jakarta" align="left" weight="thin" />
          <Paragraph className="mt-2" label="No.2 (Autodrone)" align="left" weight="thin" />
          <Paragraph className="mt-2" label="Support@autodrone.id" align="left" weight="thin" />
        </div>


      </div>
    </div>
  )
}
