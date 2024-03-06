'use client';

import Link from "next/link";
import Image from 'next/image'
import { FaUserCircle } from "react-icons/fa"
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { useContext } from "react"
import { useSession } from "next-auth/react";
import ThemeContext from "@/app/context/themeContext"


const Header = () => {
    const { darkTheme, setDarkTheme } = useContext(ThemeContext);
    const { data: session } = useSession();
    // console.log(session)

    return (
        <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap item-center justify-between">
            <div className="flex item-center w-full md:2/3">
                <Link href="/" className="font-black mt-2 text-[#F27405]">
                    Hotelzz
                </Link>
                <ul className="flex items-center ml-5">                
                    <li className="flex items-center">
                        {session?.user ? (
                            <Link href={`/users/${session.user.id}`}>
                                {session.user.image ? (
                                    <div className="w-10 h-10 roundes-full overflow-hidden">
                                        <Image
                                            src={session.user.image}
                                            alt={session.user.name!}
                                            width={40}
                                            height={40}
                                            className="img scale-animation "
                                        />                                      
                                    </div>
                                ) : (                                  
                                    <FaUserCircle className='cursor-pointer' />
                                )}
                            </Link>
                        ) : (
                            <Link href='/auth'>
                                <FaUserCircle className='cursor-pointer' />
                            </Link>
                        )}
                    </li>

                    {/* FOR DARK THEME */}

                    <li className="ml-2">
                        {darkTheme ? (<MdOutlineLightMode className='cursor-pointer'
                            onClick={() => {
                                setDarkTheme(false);
                                localStorage.removeItem("hotel-theme")
                            }}
                        />

                        ) : (
                            <MdDarkMode className='cursor-pointer'
                                onClick={() => {
                                    setDarkTheme(true);
                                    localStorage.setItem("hotel-theme", 'true');
                                }} />
                        )}
                    </li>
                </ul>
            </div>

            <ul className="flex item-center justify-between w-full md:w-1/3 mt-4">
                <li className="hover:-translate-y-2 duration-500 transition-all">
                    <Link href="/">Home</Link>
                </li>
                <li className="hover:-translate-y-2 duration-500 transition-all">
                    <Link href="/rooms">Rooms </Link>
                </li>
                <li className="hover:-translate-y-2 duration-500 transition-all">
                    <Link href="/">Contact</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
