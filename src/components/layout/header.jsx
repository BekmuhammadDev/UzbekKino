import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const header = () => {
    return (

        <>
            <header className='bg-black'>
                <div className='container mx-auto'>
                    <nav className='flex justify-between items-center py-[18px]'>
                        <h1 className='text-white text-3xl font-semibold'>LOGO</h1>
                        <ul className=' flex gap-[30px]'>

                            <li><a className='text-white text-xl font-semibold' href="/">Biz haqimizda</a></li>
                            <li><a className='text-white text-xl font-semibold' href="catalog">Hizmatlar</a></li>
                            <li><a className='text-white text-xl font-semibold' href="news">Katalog</a></li>
                            <li><a className='text-white text-xl font-semibold' href="service">Yangliklar</a></li>

                        </ul>

                        <div>
                            <GiHamburgerMenu color='white' size={25} />
                        </div>
                    </nav>
                </div>
            </header>
        </>

    );
};

export default header;