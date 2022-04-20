import React, { Suspense } from "react";
import Dashboard1 from "../components/Dashboard/Dashboard";
//import Footer from "../components/User/Footer/Footer";
import LineWaveLoader from "../components/utils/LineWaveLoader";

const Footer = React.lazy(() => import("../components/User/Footer/Footer"));
const Dashboard = () => {
  return (
    <>
      <Suspense fallback={<LineWaveLoader />}>
        <Dashboard1 />
        <Footer />
      </Suspense>
    </>
  );
};

export default Dashboard;
