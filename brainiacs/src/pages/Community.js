import React from 'react'
import { Link } from 'react-router-dom'
function Community() {
    return (
        <div className='h-screen w-full bg-[url("https://www.animatedtimes.com/wp-content/uploads/2022/04/Content-On-Netflix.jpg")]  flex items-center flex-col justify-between'>
            <div className='flex flex-col mt-56 '>
                <h1 className='text-4xl text-white font-bold'>Unlimited Movies,Tv Shows, Series,Reality shows and more.</h1>
                <div className='btns flex gap-10 justify-around'>
                    <Link to="/signup" className="px-10 py-4 bg-red-600 rounded-lg text-white">Join now</Link>
                    <Link to="/signup" className="px-10 py-4 bg-red-600 rounded-lg text-white">Login
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default Community