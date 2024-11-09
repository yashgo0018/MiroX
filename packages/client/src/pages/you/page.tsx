import FlexSeparator from "../../shared/components/FlexSeparator.tsx";
import ProtectedRoute from "../../shared/components/ProtectedRoute.tsx";
import { usePrivy } from "privy";

export default function () {
  const privy = usePrivy();

  return (
    <ProtectedRoute type="AuthenticatedOnly">
      <div className={"p-page flex flex-col items-center"}>
        <h1 className={"font-mono text-rainbow text-xxs"}>
          {privy.user?.wallet?.address}
        </h1>

        <FlexSeparator size="sm" />

        <button className={"btn-sm destructive"} onClick={privy.logout}>
          Logout
        </button>
      </div>
    </ProtectedRoute>
  );
}
