import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom"
// import Layout from "./layout"
import RegistrationPage from "./registration"
// import SurveyPage from "./survey"
import IndexPage from "./indexpage"
import Layout from "./layout"
import PageNotFound from "./404"
import SurveyLayout from "./surveylayout"
import {action as loadingAction} from "./registration"
// import { surveyLoader} from "./survey"
import { loginloader} from "./registration"
import { loader as survyLoader } from "./surveylayout";


import EditEvent from "./EditEvent";

// import { requireAuth } from "./utilis"
import { requireAuth } from "./utilis";
// import FormLayout from "./FormLayout";
// import DaySummaryLayout from "./daylayout";
import RidesLayout from "./rideslayout";

import FleetLayout from "./fleetlayout";
import DayLayout from "./daylayout"


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<IndexPage />} />
      <Route path="/" element={<Layout />}>
        <Route
          path="/registration"
          element={<RegistrationPage />}
          loader={loginloader}
          action={loadingAction}
        />

        <Route path="/fitment" element={<SurveyLayout />} loader={survyLoader}>
          <Route
            path="/fitment"
            element={<DayLayout />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          >

            <Route
              path="/fitment/edit"
              element={<EditEvent />}
              loader={async ({ request }) => {
                return await requireAuth(request);
              }}
            />
          </Route>
        </Route>
        <Route path="/retail" element={<SurveyLayout />} loader={survyLoader}>
          <Route
            path="/retail"
            element={<RidesLayout />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          >
            <Route
              path="/retail/edit"
              element={<EditEvent />}
              loader={async ({ request }) => {
                return await requireAuth(request);
              }}
            />
          </Route>
        </Route>

        <Route path="/wholesale" element={<SurveyLayout />} loader={survyLoader}>
          <Route
            path="/wholesale"
            element={<FleetLayout />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          >
            <Route
              path="/wholesale/edit"
              element={<EditEvent />}
              loader={async ({ request }) => {
                return await requireAuth(request);
              }}
            />

          </Route>
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);