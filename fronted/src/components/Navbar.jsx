import {Link} from "react-router-dom"
import {BsSearch} from 'react-icons/bs'
export const Navbar = () => {
    const user=false
  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-y">
        <h1 className=" text-lg md:text-xl font-extrabold"><Link to="/">Blog Market</Link></h1>
        <div className="flex justify-center items-center space-x-0">
            <p><BsSearch/></p>
            <input  className="outline-none px-3 " type="text" placeholder="Search a post" />
        </div>
        <div className="flex items-center justify-center space-x-4 md:space-x-4">
            {user?  <h3><Link to="/write">Write</Link></h3>: <h3><Link to="/login">Login</Link></h3>}
            { user? <h3 >Profile</h3> :<h3><Link to="/register">Register</Link> </h3>}
        </div>
    </div>
  )
}
