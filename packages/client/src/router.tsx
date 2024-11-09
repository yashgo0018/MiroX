import { ErrorBoundary, Route, Router as PreactRouter } from "preact-iso";
import _404 from "./pages/_404.tsx";
import Login from "./pages/login/page.tsx";
import Discover from "./pages/discover/page.tsx";
import Layout from "./Layout.tsx";

export default function Router() {
  return (
    <Layout>
      <ErrorBoundary onError={(e) => console.error(e)}>
        <PreactRouter>
          <Route path="login" component={Login} />

          <Route path="discover" component={Discover} />

          <Route default component={_404} />
        </PreactRouter>
      </ErrorBoundary>
    </Layout>
  );
}
