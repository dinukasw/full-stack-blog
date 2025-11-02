import { useState } from "react";
import { XIcon, MenuIcon } from "lucide-react";
import ImageComponent from "./Image";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='w-full h-16 md:h-20 flex items-center justify-between'>
            {/* Logo */}
            <div className="flex items-center gap-4 text-2xl font-bold ">
               <ImageComponent src="/Blog App/logo.png" className="w-8 h-8" alt="Logo" w={32} h={32} />
                <span>lamalog</span>
            </div>
            {/*Mobile Menu */}
            <div className="md:hidden">

                <div className="cursor-pointer" onClick={() => setOpen(prev => !prev)}>
                    {open ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                </div>
                <div className={`w-full h-screen flex flex-col font-medium text-lg gap-8 items-center justify-center absolute top-16 ${open ? "-right-0" : "-right-[100%]"} transition-all ease-in-out `}>
                    <a href="/">Home</a>
                    <a href="/">Trending</a>
                    <a href="/">Most Popular</a>
                    <a href="/">About</a>
                    <a href="/">
                        <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login</button>
                    </a>
                </div>
            </div>
            {/*Desktop Menu */}
            <div className="hidden md:flex items-center gap-4 xl:gap-8 font-medium">
                <a href="/">Home</a>
                <a href="/">Trending</a>
                <a href="/">Most Popular</a>
                <a href="/">About</a>
                <a href="/">
                    <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login</button>
                </a>
            </div>
        </div>
    )
}

export default Navbar