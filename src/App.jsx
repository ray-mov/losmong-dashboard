import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { account } from "./lib/appwrite";
import { login } from "./redux/authSlice";
import DashboardNavbar from "./components/DashboardNavbar";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      // Checking if the user has a session stored
      if (!sessionStorage.getItem("cookieFallback")) {
        navigate("/login");
        console.log("s1");
        setLoading(false);
        return null;
      } else {
        try {
          // Fetching user data
          const userData = await account.get();

          if (userData) {
            dispatch(login({ userData }));
            navigate("/home");
            console.log("home");
          } else {
            console.log("login");
            navigate("/login");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          navigate("/login");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUser();
  }, [dispatch, navigate]);

  return (
    <div className="min-h-screen flex ">
      <div className="w-1/5">
        <DashboardNavbar />
      </div>
      <main className="w-4/5">
        {loading ? "Loading...." : null}
        <Outlet />
      </main>
    </div>
  );
}

export default App;
