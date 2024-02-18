import { TbBrandFlutter, TbBrandNextjs, TbBrandPrisma, TbBrandSupabase } from "react-icons/tb";
import { SiNestjs } from "react-icons/si";
export default function ToolWork(){
    return (
        <div className="grid grid-cols-5 m-9 space-x-2">
        <div className="border  bg-blue-500 p-3 text-center justify-center">
            <TbBrandFlutter className="justify-center items-center"/>
            <h2>Flutter</h2>
        </div>
        <div className="bg-red-500 p-3 text-center justify-center">
            <SiNestjs/>
            <h2>Nestjs</h2>
        </div>
        <div className="bg-gray-900 p-3 text-center justify-center">
            <TbBrandNextjs/>
            <h2>Nextjs</h2>
        </div>
        <div className="bg-green-900 p-3 text-center justify-center">
            <TbBrandSupabase/>
            <h2>Supabase</h2>
        </div>
        <div className="bg-gray-900 p-3 text-center justify-center">
            <TbBrandPrisma/>
            <h2>Prisma</h2>
        </div>
    </div>
    )
}