  import React from 'react'
  import { FaRegPlayCircle } from 'react-icons/fa';
  import { Link} from 'react-router-dom'
  // import luca from '../luca.png';
  
  export default function Landpage() {
    return (
      <div className="h-full w-full bg-black">
        <div className="w-[100vw] h-[100vh] bg-black bg-hero bg-center bg-cover bg-no-repeat flex flex-col justify-between">
          <div className="flex justify-around pt-4">
            <div><h1 className="font-bold text-red-600 text-xl" ><span className="text-black">Movie</span>Cinema</h1></div>
            <div>
              <ul className="flex justify-around ">
                <Link to={'#'}><li className="pl-9 font-bold hover:border-b-4 border-red-500 pl-1 hover:"><a href="#"  className="text-black hover:text-black "> Tv Shows</a></li></Link >
                <Link to={'#'}> <li className="pl-9 font-bold hover:border-b-4 border-red-600 pl-1 text-black"><a href="#"  className="text-black  hover:text-black"> WatchList</a></li></Link >
                <Link to={'#'}><li className="pl-9 font-bold hover:border-b-4 border-red-600 pl-1 text-black"><a href="#"  className="text-black  hover:text-black">Series</a></li></Link >
                <Link to={'/signup'}><li className="pl-9 font-bold hover:border-b-4 border-red-600 pl-1 text-black"><a href="#"  className="text-black  hover:text-black">Community</a></li></Link >
              </ul>
            </div>
          </div>
          <div className="w-[100%]  flex flex-col justify-end  pl-[10rem] pb-[3rem]">
            <button className="bg-white  h-[60px] w-[13rem] rounded-3xl flex justify-around items-center "><FaRegPlayCircle className="scale-90" style={{color:'#ff0000',transform:'scale(2.5)'}} /><span className="text-black  font-bold text-2xl" style={{color:'black',}} > Play now</span></button>
            <p className="text-white">Set in a beautiful seaside town on the Italian Riviera, the original animated feature is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides. Luca shares these adventures with his newfound best friend, but all the fun is threatened by a deeply held secret: he is a sea monster from another world just below the water's surface.</p>
          </div>
        </div>
      </div>
    )
  }
  