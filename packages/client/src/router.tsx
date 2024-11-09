import { ErrorBoundary, Route, Router as PreactRouter } from "preact-iso";
import _404 from "./pages/_404.tsx";
import Login from "./pages/login/page.tsx";
import Discover from "./pages/discover/page.tsx";
import userDashboard from "./pages/userDashboard/page.tsx";
import Layout from "./Layout.tsx";
import { useLocation } from "preact-iso";

export default function Router() {
  return (
    <Layout>
      <ErrorBoundary onError={(e) => console.error(e)}>
        <PreactRouter>
          <Route path="" component={FallbackRoute} />

          <Route path="login" component={Login} />

          <Route path="discover" component={Discover} />

          <Route path="user/dashboard" component={userDashboard} />

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
