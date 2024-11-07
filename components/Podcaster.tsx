import Image from "next/image"

const Podcaster=()=>{
return(
    <div className="flex justify-between items-center">
        <div className="left flex flex-row items-center gap-3">
            <div className="relative w-12 h-11">
            <Image src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb' alt="" layout="fill" objectFit="cover"/>
            </div>
            <div className="name flex flex-col">
                <h1 className="font-medium text-[#FFFFFF] text-lg">Roman Picsian</h1>
                <p className="text-gray-400">Picsian</p>
            </div>
        </div>
        <div className="right">
            <p className="text-[#FFFFFF]">34 Podcasts</p>
        </div>
    </div>
)
}
export default Podcaster