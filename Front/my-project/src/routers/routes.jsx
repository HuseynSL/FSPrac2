import Add from "../pages/Add/add";
import UserRoot from "../pages/UserRoot";
import Wishlist from "../pages/Wishlist/wishlist";
import Home from "../pages/Home/home"
const Routers = [
{
    path:"/",element:<UserRoot/>,
    children:[
        {
            path:"/",element:<Home/>
        },
        {
            path:"/add",element:<Add/>
        },
        {
            path:"/wishlist",element:<Wishlist/>
        }
    ]
}
]

export default Routers