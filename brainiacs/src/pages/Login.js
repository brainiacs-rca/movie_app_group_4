import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const Login = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let res = await axios.post("http://localhost:4000/auth/login", { email, password })
            console.log(res.data)
            localStorage.setItem("Token", res.data)
        }
        catch (error) {
            console.log(error)
        }

    }

    return (
        <div className='signup h-screen px-[5vw] py-2  bg-no-repeat bg-darker bg-cover font-sans grid grid-cols-2 bg-black'>
            {/* <h1 className="text-4xl font-bold text-white" >Profylia.</h1> */}
            <form className="w-[412px] mx-auto mt-[20vh]  bg-black px-6 rounded-md" onSubmit={handleSubmit}>
                <h1 className="text-red-600 text-4xl font-extrabold ">The box office</h1>
                <h1 className="font-bold text-2xl  mb-10   text-white">Login to your account </h1>

                <input type="email" placeholder="Email address" className="w-full px-4 py-3 border rounded-md mb-2  bg-gray-500 bg-opacity-20" onChange={(e) => setEmail(e.target.value.trim())} />
                <input type="password" placeholder="Enter password" className="w-full px-4 py-3 border rounded-md mb-2 bg-gray-500 bg-opacity-20 " onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value="Log in" className="w-full px-4 py-3 cursor-pointer hover:bg-blac  rounded-md text-white font-bold bg-red-700 mb-4" />
            <p className="mt-10 text-center  text-gray-400" >Don't have an account ? <Link to='/signup' className="text-red-700 hover:text-underline">Create one</Link> </p>
            </form>
            <div className="p-10 flex  flex-col">
                <img className="w-ful" src="https://pbs.twimg.com/profile_images/1455040181753442315/el48-KeN_400x400.jpg "/>
            </div>  
            {/* <p className="text-gray-400"> <span>Copyright 2022. All rights reserved</span> <span className="float-right"> <a href="#">Facebook</a> - <a href="#">Instagram</a> - <a href="#">Twitter</a></span></p> */}
        </div>
    )
}

export default Login;