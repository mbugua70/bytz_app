import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const UserHeader = () => {
  const locaton = useLocation();
  const pathname = locaton.pathname;
  console.log(pathname);
  return (
    <>
      <nav>
        <div className=" topmenu left_menu"></div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring" }}
          className=" topmenu centered_menu"
        >
          {pathname === "/registration" ? "Registration" : ""}
          {pathname.includes("/wholesale") ? "WHOLESALE STOCK" : ""}
          {pathname === "/wholesale/edit" ? "WHOLESALE STOCK" : ""}
          {pathname.includes("/retail") ? "RETAIL STOCK" : ""}
          {pathname === "/retail/edit" ? "RETAIL STOCK" : ""}
          {pathname.includes("/fitment") ? "FORM FITMENT" : ""}
          {pathname === "/fitment/edit" ? "FORM FITMENT" : ""}
        </motion.div>
        <div className=" topmenu right_menu">
          <Link href="index.html">
            <i className="fa fa-home fa-2x"></i>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default UserHeader;
