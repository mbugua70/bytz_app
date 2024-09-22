import { Link, useLocation } from "react-router-dom";

const UserDetails = ({ userData, revalidator, onEdit }) => {
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname);

  return (
    <>
      <div className="card-panel">
        {/* <Link className="editButton" to={`${pathname}/edit`}>
          Edit
        </Link> */}

        <button className="editButton" onClick={onEdit}>
          Edit
        </button>

        <h4>Personal Information</h4>
        <div className="profile">
          <div className="details">
            <div className="user">
              <i className="material-icons ">person</i>
              <span className="user_name">Name</span>
            </div>
            <span className="user_detail users_input" id="ba_name">
              {userData === null ? (
                <div
                  className="preloader-wrapper small active preloader_element"
                  id="preloader_one"
                >
                  <div className="spinner-layer spinner-green-only">
                    <div className="circle-clipper left">
                      <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                      <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>
              ) : (
                userData.ba_name
              )}
            </span>
          </div>
          <div className="details">
            <div className="user">
              <i className="material-icons">call</i>
              <span className="user_phone">Contact</span>
            </div>
            <span className="user_phones users_input" id="ba_phone">
              {userData === null ? (
                <div
                  className="preloader-wrapper small active preloader_element"
                  id="preloader_one"
                >
                  <div className="spinner-layer spinner-green-only">
                    <div className="circle-clipper left">
                      <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                      <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>
              ) : (
                userData.ba_phone
              )}
            </span>
          </div>
          <div className="details">
            <div className="user">
              <i className="material-icons">location_on</i>
              <span className="user_location">Location</span>
            </div>
            <span className="user_locations users_input" id="ba_region">
              {userData === null ? (
                <div
                  className="preloader-wrapper small active preloader_element"
                  id="preloader_one"
                >
                  <div className="spinner-layer spinner-green-only">
                    <div className="circle-clipper left">
                      <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                      <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>
              ) : (
                userData.ba_region
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
