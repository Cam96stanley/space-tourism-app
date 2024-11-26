import { Outlet } from "react-router-dom";
import Header from "./Header";
import mobilehomebg from "/home/background-home-mobile.jpg";

export default function Layout() {
  const bgStyle = {
    backgroundImage: `url(${mobilehomebg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };
  return (
    <div style={bgStyle}>
      <Header />
      <Outlet />
    </div>
  );
}
