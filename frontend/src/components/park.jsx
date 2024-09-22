/* eslint-disable react-refresh/only-export-components */

import UserDetails from "./userdetails";

import { useOutletContext } from "react-router-dom";
import ParkForm from "./parkForm";

const ParkPage = ({ revalidator, onEdit, userData }) => {
  return (
    <>
      <div className="container">
        <UserDetails
          userData={userData}
          revalidator={revalidator}
          onEdit={onEdit}
        />

        <ParkForm />
      </div>
    </>
  );
};

export default ParkPage;
