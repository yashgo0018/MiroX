import type { Children } from "../types/utils.d.ts";
import { usePrivy } from "privy";
import { useLocation } from "preact-iso";

type ProtectedRouteType = "AuthenticatedOnly" | "UnauthenticatedOnly";

export default function ProtectedRoute(
  props: { children: Children; type: ProtectedRouteType },
) {
  const { type } = props;
  const children = <>{props.children}</>;

  const location = useLocation();

  const privy = usePrivy();

  if (!privy.ready) return <>Wait</>;

  if (type === "UnauthenticatedOnly") {
    if (!privy.authenticated) return children;

    location.route("/");
  }

  return children;
}
