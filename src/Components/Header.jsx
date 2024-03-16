import { useState } from "react";
import {
    FaSearch,
    FaShoppingBag
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
      return (
   <nav className=" flex-row  text-cyan-400 justify-end align-middle gap-3">
    <Link onClick={()=> setIsOpen(false)} to={'/'} >Home</Link>
    <Link onClick={()=> setIsOpen(false)} to={'/search'} > <FaSearch/> </Link>
    <Link onClick={()=> setIsOpen(false)} to={'/cart'} > <FaShoppingBag/> </Link>
   </nav>
  )
}

export default Header