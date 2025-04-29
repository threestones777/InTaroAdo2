import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect } from "react";
import WOW from "wow.js";
import "animate.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import QiYeKa from "./pages/products/QiYeKa";
import OrderPay from "./pages/products/OrderPay";
import CreateManage from "./pages/products/CreateManage";
import Reimbursement from "./pages/products/Reimbursement";
import ProcessReport from "./pages/products/ProcessReport";
import RealTimeInfor from "./pages/products/RealTimeInfor";
import BudgetControl from "./pages/products/BudgetControl";
import AppleGooglePay from "./pages/products/AppleGooglePay";
import DebitCard from "./pages/products/DebitCard";
import SMEnterprises from "./pages/solution/SMEnterprises";
import LargeEnterprise from "./pages/solution/LargeEnterprise";
import NonProfit from "./pages/solution/NonProfit";
import StartupTeam from "./pages/solution/StartupTeam";
import EducationIndustry from "./pages/solution/EducationIndustry";
import AccountantsFnancial from "./pages/solution/AccountantsFnancial";
import CooperationOffers from "./pages/CooperationOffers";
import Information from "./pages/resource/Information";
import InforDetail from "./pages/resource/InforDetail";
import CustomerCases from "./pages/resource/CustomerCases";
import About from "./pages/resource/About";
import ProductUpdates from "./pages/resource/ProductUpdates";
import UpdateDetails from "./pages/resource/UpdateDetails";
import Recruitment from "./pages/resource/Recruitment";
import ContactSales from "./pages/resource/ContactSales";
import Recommended from "./pages/resource/Recommended";
import SubmitFeedback from "./pages/resource/SubmitFeedback";
import Community from "./pages/resource/Community";
import Price from "./pages/Price";
import ForexCalculator from "./pages/ForexCalculator";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PrivacyCondition from "./pages/PrivacyCondition";
import HelpCenter from "./pages/HelpCenter";

export default function App() {
  if (!localStorage.getItem("lang")) {
    // 设置默认语言
    localStorage.setItem("lang", "cn"); // 例如默认英文
  }
  useEffect(() => {
    new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true,
      // callback: function (box) {
      //   console.log("WOW: animating <" + box.tagName.toLowerCase() + ">");
      // },
    }).init();
  });
  return (
    <div className="app min-w-page">
      <div className="z-50 fixed w-full">
        <Navbar />
      </div>
      <main className="z-10 pt-74 text-[#141416]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products/qiCard" element={<QiYeKa />} />
          <Route path="/products/orderPay" element={<OrderPay />} />
          <Route path="/products/createManage" element={<CreateManage />} />
          <Route path="/products/reimbursement" element={<Reimbursement />} />
          <Route path="/products/processreport" element={<ProcessReport />} />
          <Route path="/products/realtimeinfor" element={<RealTimeInfor />} />
          <Route path="/products/budgetcontrol" element={<BudgetControl />} />
          <Route path="/products/applegooglepay" element={<AppleGooglePay />} />
          <Route path="/products/debitcard" element={<DebitCard />} />
          <Route path="/solution/smenterprises" element={<SMEnterprises />} />
          <Route
            path="/solution/largeenterprise"
            element={<LargeEnterprise />}
          />
          <Route path="/solution/nonprofit" element={<NonProfit />} />
          <Route path="/solution/startupteam" element={<StartupTeam />} />
          <Route
            path="/solution/educationindustry"
            element={<EducationIndustry />}
          />
          <Route
            path="/solution/accountantsfnancial"
            element={<AccountantsFnancial />}
          />
          <Route path="/cooperationoffers" element={<CooperationOffers />} />
          <Route path="/resource/information" element={<Information />} />
          <Route path="/resource/infordetail" element={<InforDetail />} />
          <Route path="/resource/customercases" element={<CustomerCases />} />
          <Route path="/resource/helpcenter" element={<HelpCenter />} />
          <Route path="/resource/about" element={<About />} />
          <Route path="/resource/productupdates" element={<ProductUpdates />} />
          <Route path="/resource/updatedetails" element={<UpdateDetails />} />
          <Route path="/resource/recruitment" element={<Recruitment />} />
          <Route path="/resource/contactsales" element={<ContactSales />} />
          <Route path="/resource/recommended" element={<Recommended />} />
          <Route path="/resource/submitfeedback" element={<SubmitFeedback />} />
          <Route path="/resource/community" element={<Community />} />
          <Route path="/price" element={<Price />} />
          <Route path="/forexcalculator" element={<ForexCalculator />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/privacycondition" element={<PrivacyCondition />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
