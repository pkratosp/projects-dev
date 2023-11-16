import { Heart } from "@phosphor-icons/react/dist/ssr";


export function Footer() {
    return (
        <>
            <div className="w-[80%] h-[2px] bg-blue-600 mx-auto mt-4"></div>
            <span className="flex items-center justify-center text-slate-800 p-10">Designed & Build by Pedro Faria. <Heart className="text-blue-500" weight="bold" size={20} /></span>
        </>
    )
}