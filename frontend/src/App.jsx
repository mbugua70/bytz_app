import ParentRouter from "./components/parentrouter";
import {App} from "@capacitor/app"
import { FormProvider } from "./contextApi/selectelement_context";
import { useEffect } from "react";
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';

if (Capacitor.isNativePlatform()) {
  StatusBar.hide().catch(err => console.error('Error hiding StatusBar:', err));
}


const MyApp = () => {


  useEffect(() => {
    const handler = App.addListener("backButton", (event) => {
      if (window.location.pathname === "/") {
        App.exitApp();
      } else {
        window.history.back();
      }
    });

    return () => {
      handler.remove();
    };
  }, []);

  return (
    <>
      {/* for importing parentRouter component below */}
      <FormProvider>
        <ParentRouter />
      </FormProvider>
    </>
  );
};

export default MyApp;
