import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const AuthLayout = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const user = useSelector((state) => state.auth.userData);
  console.log(user)

  useEffect(() => {
    if (authentication && user) {
      navigate("/home");
    } else if (user) {
      alert("already signed in");
    } else {
      navigate("/login");
    }
    setLoader(false);
  }, [navigate, authentication, user]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
};

export default AuthLayout;
