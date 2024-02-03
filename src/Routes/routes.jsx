import { LandingPage } from "../page/index";
import { DefaultLayout } from "../layouts/index";

export const routes = {
  LandingPage: {
    path: "/",
    layout: DefaultLayout,
    component: LandingPage,
  },
};
