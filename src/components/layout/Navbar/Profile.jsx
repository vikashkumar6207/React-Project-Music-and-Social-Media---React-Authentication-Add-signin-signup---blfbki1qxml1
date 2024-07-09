// import { useNavigate } from "react-router-dom";
// import useUser from "../../customHooks/useUser";
// import { Link } from "react-router-dom";
// import loginIcon from '../../assets/login.jpeg'

import useUser from "@/src/customHooks/useUser";
import Link from "next/link";

function Profil() {
  const {getToken, logout} = useUser;
//   const navigation = useNavigate();

  return (
    <>
      {/* {!getToken && ( */}
        <div
          style={{
            height: "30px",
            marginRight: "20px",
            width: "70px",
            background: "orange",
            borderRadius: "5px",
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => {
            <Link href="/login" ></Link>
          }}
        >
          <Link href="/login" className="logout-btn">
            Sign In
          </Link>
        </div>
      {/* )} */}
      {/* {getToken && ( */}
        <div
          style={{ marginRight: "20px" }}
          onClick={() => {
            // logout();
            <Link href="/" ></Link>
          }}
        >
          <Link href="/login" className="logout-btn" >
            <img
              src="./login.jpeg"
              style={{ height: "40px", width: "40px", borderRadius: '50%' } }
              
            />
          </Link>
        </div>
      {/* )} */}
    </>
  );
}
export default Profil;
