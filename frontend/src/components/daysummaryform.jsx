/* eslint-disable react-refresh/only-export-components */
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ToastContainer, toast, Slide } from "react-toastify";
import { summaryForm } from "./api";
import { OfflineContext } from "../contextApi/offline_context";
import useOnlineStatus from "../custom_hook/useOffline";

const DaySummaryForm = () => {
  const isOnline = useOnlineStatus();
  const { addToOffline } = useContext(OfflineContext);
  const form = useForm({
    defaultValues: {
      sub_1_1: "",
      sub_1_2: "",
      sub_1_3: "",
      sub_1_4: "",
      sub_1_5: "",
      sub_1_6: "",
      sub_1_7: "",
      sub_1_8: "",
      sub_1_10: "",
      sub_1_11: "",
      sub_1_12: "",
      sub_1_13: "",
      sub_1_14: "",
      sub_1_15: "",
    },
  });

  const { register, handleSubmit, reset, formState } = form;
  const { isSubmitSuccessful, isSubmitting } = formState;

  const onSubmit = async (data) => {

      try {

        const {sub_1_1, sub_1_2, sub_1_3, sub_1_4, sub_1_5} = data;
        if(sub_1_1 === "" || sub_1_2 === "" || sub_1_3 === "" || sub_1_4 === "" || sub_1_5 === "") {
          event.preventDefault()
          toast.error("Please fill in all the required fields!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
          });
        }else{

          const response = await summaryForm(data);
          if (response) {
            const MySwal = withReactContent(Swal);
            MySwal.fire({
              html: <i>Your data has been submitted successfully!</i>,
              icon: "success",
            });
          }
        }


      } catch (err) {
        console.log(err)
        const MySwal = withReactContent(Swal);
        MySwal.fire({
          html: <i>{err.message}</i>,
          icon: "error",
        });
      }

  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <div className="main_body">
        <div className="row parcel_form">
          <form
            className="form"
            id="form"
            method="post"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1>Questionnaire</h1>

            <div className="input-field col s12">
              <span>1. Date of Fitment</span>
              <br />
              <input id="sub_1_1" name="sub_1_1" placeholder="Date" type="date" title="Date" {...register("sub_1_1")}/>
            </div>

            <div className="input-field col s12">
              <span>2. Customer Name</span>
              <br />
              <input id="sub_1_2" name="sub_1_2" placeholder="Customer Name" title="Customer Name" type="text" {...register("sub_1_2")}/>
            </div>

            <div className="input-field col s12">
              <span>3. Phone Number</span>
              <br />
              <input
                id="sub_1_3"
                name="sub_1_3"
                title="phone number"
                type="tel"
                placeholder="Enter phone Number"
                {...register("sub_1_3")}
              />
            </div>

            <div className="input-field col s12">
              <span>4. Chassis Number</span>
              <br />
              <input
                id="sub_1_4"
                name="sub_1_4"
                title="Chassis Number"
                type="text"
                placeholder="Chassis Number"
                {...register("sub_1_4")}
              />
            </div>

            <div className="input-field col s12">
              <span>5. Registartion Number</span>
              <br />
              <input
                id="sub_1_5"
                name="sub_1_5"
                title="Registartion Number"
                type="text"
                placeholder="Registartion Number"
                {...register("sub_1_5")}
              />
            </div>

            <div className="input-field col s12">
              <span>6. Model</span>
              <br />
              <input
                id="sub_1_6"
                name="sub_1_6"
                title="Model"
                type="text"
                placeholder="Enter Model Number"
                {...register("sub_1_6")}
              />
            </div>

            <div className="input-field col s12">
              <span>7. Date of sale</span>
              <br />
              <input id="sub_1_7" name="sub_1_7" title="date" placeholder="Date" type="date" {...register("sub_1_7")}/>
            </div>

            <div className="input-field col s12">
              <span>8. Region</span>
              <br />
              <input id="sub_1_8" name="sub_1_8" placeholder="Region" type="text" title="Region"  {...register("sub_1_8")}/>
            </div>

            <div className="input-field col s12">
              <span>9. District</span>
              <br />
              <input id="sub_1_9" name="sub_1_9" placeholder="District" type="text" title="Discrict" {...register("sub_1_9")}/>
            </div>

            <div className="input-field col s12">
              <span>10. Location</span>
              <br />
              <input id="sub_1_10" name="sub_1_10" placeholder="Location" title="Location" type="text"  {...register("sub_1_10")}/>
            </div>

            <div className="input-field col s12">
              <span>11. Park Chairman Name</span>
              <br />
              <input id="sub_1_11" name="sub_1_11" placeholder="Park Chairman Name" type="text" title="Park Chairman Name"  {...register("sub_1_11")}/>
            </div>

            <div className="input-field col s12">
              <span>12. Park Chairman Phone Number</span>
              <br />
              <input id="sub_1_12" name="sub_1_12" placeholder="Park Chairman Phone Number" type="tel" title="Park Chairman Phone Number"  {...register("sub_1_12")}/>
            </div>

            <div className="input-field col s12">
              <span>13. Marking done at chassis Number after fitment (Y/N)</span>
              <br />
            <select className="select_els" name="sub_1_13" id="sub_1_13"  style={{ display: "block" }}  {...register("sub_1_13")}>
            <option value="">Select your answer</option>
            <option id="" value="YES">YES</option>
            <option id="" value="NO">NO</option>
            </select>
            </div>

            <div className="input-field col s12">
              <span>14. Sales Referral(Rider have any plan to take new Boxer) Y/N</span>
              <br />
            <select className="select_els" name="sub_1_14" id="sub_1_14"  style={{ display: "block" }}  {...register("sub_1_14")}>
            <option value="">Select your answer</option>
            <option id="" value="YES">YES</option>
            <option id="" value="NO">NO</option>
            </select>
            </div>


            <div className="input-field col s12">
              <span>15. Any Other Remarks</span>
              <br />
              <input id="sub_1_15" name="sub_1_15" placeholder="Remarks" type="text" title="remarks"  {...register("sub_1_15")}/>
            </div>

            <div className="input-field col s12 center_it">
              <button
                className="btn-large  margin-bottom waves-effect waves-light pick_color"
                id="hide_icons"
                disabled={isSubmitting}
              >
                {isSubmitting ? <>submitting </> : <>submit </>}
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default DaySummaryForm;
