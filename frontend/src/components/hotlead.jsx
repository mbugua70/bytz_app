/* eslint-disable react-refresh/only-export-components */

import UserDetails from "./userdetails";
import HotLeadForm from "./hotleadForm";

const HotleadPage = ({ revalidator, onEdit, userData }) => {
  return (
    <>
      <div className="container">
        <UserDetails
          userData={userData}
          revalidator={revalidator}
          onEdit={onEdit}
        />

        <HotLeadForm />
      </div>
    </>
  );
};

export default HotleadPage;
