import { NavLink } from "react-router-dom";
import HomeNavBar from "./homenavbar";
import { motion } from "framer-motion";

import "react-toastify/dist/ReactToastify.css";

const IndexPage = () => {
  return (
    <>
      {/* navbar below */}
      <HomeNavBar />
      {/* index content */}
      <div className="main_body">
        <motion.div
          layout
          variants={{
            hidden: { opacity: 1, scale: 1 },
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, x: -30 }}
          className="row"
          id="p_to center_it"
          style={{ textAlign: "center" }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: [0.6, 1.2, 1] },
            }}
            whileTap={{ scale: 1.2 }}
            transition={{ type: "spring" }}
            className="col s12 m12"
          >
            <p>
              <NavLink
                to="summary"
                className="waves-effect block waves-light black btn-large w80"
              >
                Day Summary
              </NavLink>
            </p>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: [0.6, 1.2, 1] },
            }}
            whileTap={{ scale: 1.2 }}
            transition={{ type: "spring" }}
            className="col s12 m12"
          >
            <p>
              <NavLink
                to="rides"
                className="waves-effect block waves-light orange  btn-large w80"
                style={{ textAlign: "center" }}
              >
                Test Rides
              </NavLink>
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: [0.6, 1.2, 1] },
            }}
            whileTap={{ scale: 1.2 }}
            transition={{ type: "spring" }}
            className="col s12 m12"
          >
            {" "}
            <p>
              <NavLink
                to="fleet"
                className="waves-effect waves-light purple  btn-large w80"
              >
                FLEET OWNERS
              </NavLink>
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: [0.6, 1.2, 1] },
            }}
            whileTap={{ scale: 1.2 }}
            transition={{ type: "spring" }}
            className="col s12 m12"
          >
            {" "}
            <p>
              <NavLink
                to="park"
                className="waves-effect waves-light  lime accent-4  btn-large w80"
              >
                PARK MAPPING
              </NavLink>
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: [0.6, 1.2, 1] },
            }}
            whileTap={{ scale: 1.2 }}
            transition={{ type: "spring" }}
            className="col s12 m12"
          >
            {" "}
            <p>
              <NavLink
                to="hotleads"
                className="waves-effect waves-light teal darken-3  btn-large w80"
              >
                HOTLEADS
              </NavLink>
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: [0.6, 1.2, 1] },
            }}
            whileTap={{ scale: 1.2 }}
            transition={{ type: "spring" }}
            className="col s12 m12"
          >
            {" "}
            <p>
              <NavLink
                to="registration"
                className="waves-effect waves-light green  btn-large w80"
              >
                Registration
              </NavLink>
            </p>
          </motion.div>
        </motion.div>
      </div>
      {/* <Outlet /> */}
    </>
  );
};

export default IndexPage;
