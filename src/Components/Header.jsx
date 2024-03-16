import { useState } from "react";
import {
    FaSearch,
    FaShoppingBag,
    FaSignInAlt,
    FaUser
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    const user= {_id:'afff',role:'admin'};
    const [isOpen, setIsOpen] = useState(false);
      return (
   <nav className=" flex flex-row justify-end align-center relative gap-6">
    <Link onClick={()=> setIsOpen(false)} to={'/'} >Home</Link>
    <Link onClick={()=> setIsOpen(false)} to={'/search'} > <FaSearch/> </Link>
    <Link onClick={()=> setIsOpen(false)} to={'/cart'} > <FaShoppingBag/> </Link>
    {user?._id ? (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <FaUser />
          </button>
          <dialog className="rounded-lg w-full text-end  absolute [left: calc(100% - 100px)] top-8  " open={isOpen}>
            <div className="flex flex-col justify-end gap-2">
              {user.role === "admin" && (
                <Link onClick={() => setIsOpen(false)} to="/admin/dashboard">
                  Admin
                </Link>
              )}

              <Link onClick={() => setIsOpen(false)} to="/orders">
                Orders
              </Link>
              <button className="text-end">
               LogOut
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to={"/login"}>
          <FaSignInAlt />
        </Link>
      )}
   </nav>
  )
}

export default Header