import Paragraph from "./paragraph";
import Title from "./title";

export default function Feature({ title, subtitle, img, dark }) {
  return (
    <div className="relative block h-auto overflow-hidden my-5">
      <div className="w-full h-full">
        <div className="absolute z-10 w-full grid grid-cols-1 mt-10 lg:mt-40 text-center">
          <Title weight="bold" dark={dark} label={title} />
          <Paragraph className="w-3/5 m-auto" weight="light" dark={dark} label={subtitle} />
        </div>
        <img src={img} className="z-0 w-full" />
      </div>
    </div>
  )
}