import { Link } from "react-router-dom"
import { account } from "../lib/appwrite.js"

const DashboardNavbar = () => {


   const logout = async() => {
    try {
          await account.deleteSessions('current');
          console.log("user logout")
        } catch (error) {
          console.log("logout error", error);
    }
 }
  return (
    <>
       <div className=" bg-black flex flex-col gap-10 text-white items-center py-6 h-full font-semibold">
        <h1 className="text-3xl font-bold">Losmong</h1>
        <div className="cursor-pointer hover:bg-slate-800 p-2">
          <Link to="/home"></Link>
          Dashboard Home
        </div>
        <div className="cursor-pointer  hover:bg-slate-800 p-2 w-full text-center">
          <Link to="/add-product"></Link>
         Add Product
        </div>
        <div className="cursor-pointer  hover:bg-slate-800 p-2 w-full text-center">
          <Link to="/products"></Link>
         All Products
        </div>
        <div className="cursor-pointer  hover:bg-slate-800 p-2 w-full text-center">
          <Link to="/update-product"></Link>
          Update Product
        </div>
        <div className="cursor-pointer  hover:bg-slate-800 p-2 w-full text-center">
          <Link to="/orders"></Link>
          Orders
        </div>
        <div className="cursor-pointer  hover:bg-slate-800 p-2 w-full text-center">
          <Link to="/customers"></Link>
          Customers
        </div>
        <button className="bg-white text text-blue-800 px-4 py-2 rounded-lg cursor-pointer hover:scale-110 font-bold text-xl" onClick={logout}>Logout</button>
      </div>
      <div className="w-4/5">
      </div>
    </>
  )
}

export default DashboardNavbar