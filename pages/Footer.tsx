import React from 'react'

const Footer = () => {
    return (
        <div className='p-16 pb-6'>
            <div className='flex justify-between mb-12'>
                <div className='grid list-none m-2 '>
                    <p className='text-2xl font-bold mb-4'>About</p>
                    <div className='text-gray-600 text-sm'>
                        <a className='hover:underline hover:ease-in hover:duration-300' href="#"><li>Company</li></a>
                        <a href="#"><li>Careers</li></a>
                        <a href="#"><li>Help center</li></a>
                        <a href="#"><li>Privacy</li></a>
                        <a href="#"><li>Terms & conditions</li></a>
                    </div>
                </div>
                <div className='grid list-none m-2 '>
                    <p className='text-2xl font-bold mb-4'>Services</p>
                    <div className='text-gray-600 text-sm'>
                        <a href="#"><li>Hotel Booking</li></a>
                        <a href="#"><li>Car Rental</li></a>
                        <a href="#"><li>Bus Ticket</li></a>
                        <a href="#"><li>Flight Booking</li></a>
                        <a href="#"><li>Restaurant</li></a>
                    </div>
                </div>
                <div className='grid list-none m-2 '>
                    <p className='text-2xl font-bold mb-4'>Quick Links</p>
                    <div className='text-gray-600 text-sm'>
                        <a href="#"><li>Franch Experience</li></a>
                        <a href="#"><li>Ancient Rome Discover</li></a>
                        <a href="#"><li>Get Into Naxos Island</li></a>
                        <a href="#"><li>Vietnam Island Experience</li></a>
                        <a href="#"><li>Restaurant</li></a>
                    </div>
                </div>
                <div className='grid list-none m-2 '>
                    <p className='text-2xl font-bold mb-4'>Pay Safely With Us</p>
                    <div className='text-gray-600 text-sm grid'>
                        <span>Lorem ipsum dolor sit amet consectetur  adipisicing elit.<br />Odio eligendi, hic, tenetur est doloremque reprehenderit<br />atque autem culpa animi facilis nostrum suscipit quasi<br />repellendus, necessitatibus odit? Harum laboriosam id quis?</span>
                        <span>Payment options goes here.</span>
                    </div>
                </div>
            </div>
            <div className='bg-gray-300 w-full border'></div>
            <div className='flex justify-between p-2'>
                <span>Social icons goes here</span>
                <span>Copyright © 2021 Detour. All Rights Reserved By <a className='text-[#f4834a]' href="#">Hibootstrap</a></span>
            </div>
        </div>
    )
}

export default Footer