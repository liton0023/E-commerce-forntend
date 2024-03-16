import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import './Main.css';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;