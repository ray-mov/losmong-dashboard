import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const AuthLayout = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (!(authentication && authStatus)) {
      navigate("/login");
    }
    setLoader(false);
  }, []);

  return loader ? (
    <h1 className="flex justify-center items-center">Loading...</h1>
  ) : (
    <>{children}</>
  );
};

export default AuthLayout;
