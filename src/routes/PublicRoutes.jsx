import PembeliLoginPage from "../pages/login";
import PetaniLoginPage from "../pages/seller/login_seller";
import StepOne from "../pages/biodata/step1";
import StepTwo from "../pages/biodata/step2";
import StepThree from "../pages/biodata/step3";
import TestPage from "../pages/test";

const PublicRoutes = [
  { path: "/login", element: <PembeliLoginPage userType="pembeli" /> },
  { path: "/loginseller", element: <PetaniLoginPage userType="petani" /> },
  { path: "/stepone", element: <StepOne /> },
  { path: "/steptwo", element: <StepTwo /> },
  { path: "/stepthree", element: <StepThree /> },
  { path: "/test", element: <TestPage /> },
];

export default PublicRoutes;
