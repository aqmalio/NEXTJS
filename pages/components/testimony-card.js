import Paragraph from "./paragraph";

export default function TestimonyCard({ name, job, subtitle, img }) {
    return (
        <div className="flex flex-col w-full md:w-96 border-2 border-gray-100 rounded-lg p-5">
            <div className="w-full h-full ">
                <Paragraph dark weight="extralight" className="text-gray-500 md:text-lg" align="left" label={subtitle} />
                <div className="w-full text-center mt-10 flex flex-row justify-start">
                    <img src={img} className="rounded-full" />
                    <div className="flex flex-col pl-8 text-left">
                        <div className="text-base font-bold">{name}</div>
                        <div className="text-base text-gray-500">{job}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}