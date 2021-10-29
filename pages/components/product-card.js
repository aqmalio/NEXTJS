import Button from "./button";
import Paragraph from "./paragraph";
import Title from "./title";

export default function ProductCard({ title, subtitle, img }) {
    return (
        <div className="flex flex-col w-full md:w-96 border-2 border-gray-100 rounded-lg p-5">
            <img src={img} className="rounded w-full" />
            <div className="w-full h-full mt-8">
                <div className="w-full text-center flex flex-col justify-center">
                    <Title weight="medium" dark label={title} />
                    <Paragraph dark weight="light" label={subtitle} />
                    <Button label="GET NOW" className="mt-5" />
                </div>
            </div>
        </div>
    )
}