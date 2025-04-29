import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import QiYeKa from "../pages/products/QiYeKa";
import OrderPay from "../pages/products/OrderPay";
import CreateManage from "../pages/products/CreateManage";
import Reimbursement from "../pages/products/Reimbursement";
import ProcessReport from "../pages/products/ProcessReport";
import RealTimeInfor from "../pages/products/RealTimeInfor";
import BudgetControl from "../pages/products/BudgetControl";
import AppleGooglePay from "../pages/products/AppleGooglePay";
import DebitCard from "../pages/products/DebitCard";
import SMEnterprises from "../pages/solution/SMEnterprises";
import LargeEnterprise from "../pages/solution/LargeEnterprise";
import NonProfit from "../pages/solution/NonProfit";
import StartupTeam from "../pages/solution/StartupTeam";
import EducationIndustry from "../pages/solution/EducationIndustry";
import AccountantsFnancial from "../pages/solution/AccountantsFnancial";
import CooperationOffers from "../pages/CooperationOffers";
import Information from "../pages/resource/Information";
import InforDetail from "../pages/resource/InforDetail";
import CustomerCases from "../pages/resource/CustomerCases";
import About from "../pages/resource/About";
import ProductUpdates from "../pages/resource/ProductUpdates";
import UpdateDetails from "../pages/resource/UpdateDetails";
import Recruitment from "../pages/resource/Recruitment";
import ContactSales from "../pages/resource/ContactSales";
import Recommended from "../pages/resource/Recommended";
import SubmitFeedback from "../pages/resource/SubmitFeedback";
import Community from "../pages/resource/Community";
import Price from "../pages/Price";
import ForexCalculator from "../pages/ForexCalculator";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import PrivacyCondition from "../pages/PrivacyCondition";
import HelpCenter from "../pages/HelpCenter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <Home />,
      },
      {
        path: "products/qiCard",
        element: <QiYeKa />,
      },
      {
        path: "products/orderPay",
        element: <OrderPay />,
      },
      {
        path: "products/createManage",
        element: <CreateManage />,
      },
      {
        path: "products/reimbursement",
        element: <Reimbursement />,
      },
      {
        path: "products/processreport",
        element: <ProcessReport />,
      },
      {
        path: "products/realtimeinfor",
        element: <RealTimeInfor />,
      },
      {
        path: "products/budgetcontrol",
        element: <BudgetControl />,
      },
      {
        path: "products/applegooglepay",
        element: <AppleGooglePay />,
      },
      {
        path: "products/debitcard",
        element: <DebitCard />,
      },
      {
        path: "solution/smenterprises",
        element: <SMEnterprises />,
      },
      {
        path: "solution/largeenterprise",
        element: <LargeEnterprise />,
      },
      {
        path: "solution/nonprofit",
        element: <NonProfit />,
      },
      {
        path: "solution/startupteam",
        element: <StartupTeam />,
      },
      {
        path: "solution/educationindustry",
        element: <EducationIndustry />,
      },
      {
        path: "solution/accountantsfnancial",
        element: <AccountantsFnancial />,
      },
      {
        path: "cooperationoffers",
        element: <CooperationOffers />,
      },
      {
        path: "resource/information",
        element: <Information />,
      },
      {
        path: "resource/infordetail",
        element: <InforDetail />,
      },
      {
        path: "resource/customercases",
        element: <CustomerCases />,
      },
      {
        path: "resource/about",
        element: <About />,
      },
      {
        path: "resource/productupdates",
        element: <ProductUpdates />,
      },
      {
        path: "resource/updatedetails",
        element: <UpdateDetails />,
      },
      {
        path: "resource/recruitment",
        element: <Recruitment />,
      },
      {
        path: "resource/contactsales",
        element: <ContactSales />,
      },
      {
        path: "resource/recommended",
        element: <Recommended />,
      },
      {
        path: "resource/submitfeedback",
        element: <SubmitFeedback />,
      },
      {
        path: "resource/community",
        element: <Community />,
      },
      {
        path: "/price",
        element: <Price />,
      },
      {
        path: "/forexcalculator",
        element: <ForexCalculator />,
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/privacycondition",
        element: <PrivacyCondition />,
      },
      {
        path: "/resource/helpcenter",
        element: <HelpCenter />,
      },
    ],
  },
]);

export default router;
