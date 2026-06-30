import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Membership from "./pages/Membership";
import News from "./pages/News";
import Benefits from "./pages/Benefits";
import Loans from "./pages/Loans";
import Laws from "./pages/Laws";
import Opportunities from "./pages/Opportunities";
import Contact from "./pages/Contact";
import Disclaimer from "./pages/Disclaimer";
import BecomeMember from "./pages/BecomeMember";
import OFWProgram from "./pages/OFWProgram";
import ContributionSubsidy from "./pages/ContributionSubsidy";
import PayContributions from "./pages/PayContributions";
import ApplyBenefitLoan from "./pages/ApplyBenefitLoan";
import BranchLocator from "./pages/BranchLocator";
import Survey from "./pages/Survey";
import { Layout } from "./components/layout/Layout";

const withLayout = (element: JSX.Element) => {
  return <Layout>{element}</Layout>;
};

export const routers = [
  {
    path: "/",
    name: "home",
    element: withLayout(<Index />),
  },
  {
    path: "/about",
    name: "about",
    element: withLayout(<About />),
  },
  {
    path: "/membership",
    name: "membership",
    element: withLayout(<Membership />),
  },
  {
    path: "/news",
    name: "news",
    element: withLayout(<News />),
  },
  {
    path: "/benefits",
    name: "benefits",
    element: withLayout(<Benefits />),
  },
  {
    path: "/loans",
    name: "loans",
    element: withLayout(<Loans />),
  },
  {
    path: "/laws",
    name: "laws",
    element: withLayout(<Laws />),
  },
  {
    path: "/opportunities",
    name: "opportunities",
    element: withLayout(<Opportunities />),
  },
  {
    path: "/contact",
    name: "contact",
    element: withLayout(<Contact />),
  },
  {
    path: "/disclaimer",
    name: "disclaimer",
    element: withLayout(<Disclaimer />),
  },
  {
    path: "/become-member",
    name: "become-member",
    element: withLayout(<BecomeMember />),
  },
  {
    path: "/ofw-program",
    name: "ofw-program",
    element: withLayout(<OFWProgram />),
  },
  {
    path: "/contribution-subsidy",
    name: "contribution-subsidy",
    element: withLayout(<ContributionSubsidy />),
  },
  {
    path: "/pay-contributions",
    name: "pay-contributions",
    element: withLayout(<PayContributions />),
  },
  {
    path: "/apply-benefit-loan",
    name: "apply-benefit-loan",
    element: withLayout(<ApplyBenefitLoan />),
  },
  {
    path: "/branch-locator",
    name: "branch-locator",
    element: withLayout(<BranchLocator />),
  },
  {
    path: "/survey",
    name: "survey",
    element: withLayout(<Survey />),
  },
  /* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */
  {
    path: "*",
    name: "404",
    element: withLayout(<NotFound />),
  },
];

declare global {
  interface Window {
    __routers__: typeof routers;
  }
}

window.__routers__ = routers;
