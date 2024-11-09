import { ErrorBoundary, Route, Router as PreactRouter } from "preact-iso";

import Layout from "./Layout.tsx";
import { useLocation } from "preact-iso";

import _404 from "./pages/_404.tsx";
import Login from "./pages/login/page.tsx";
import You from "./pages/you/page.tsx";
import Discover from "./pages/discover/page.tsx";
import Portfolio from "./pages/portfolio/page.tsx";
import ManagerRegistration from "./pages/managerRegistration/page.tsx";

export default function Router() {
  return (
    <Layout>
      <ErrorBoundary onError={(e) => console.error(e)}>
        <PreactRouter>
          <Route path="" component={FallbackRoute} />

          <Route path="login" component={Login} />

          <Route path="mirox" component={You} />

          <Route path="discover" component={Discover} />

          <Route path="portfolio" component={Portfolio} />

          <Route path="new-manager" component={ManagerRegistration} />

          <Route default component={_404} />
        </PreactRouter>
      </ErrorBoundary>
    </Layout>
  );
}

function FallbackRoute() {
  const location = useLocation();

  location.route("/discover");

  return <></>;
}
