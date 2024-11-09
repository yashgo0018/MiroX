import FlexSeparator from "../../shared/components/FlexSeparator.tsx";
import RiskWarningBanner from "../../shared/components/RiskWarningBanner.tsx";
import LoginMethodSelection from "../login/LoginMethodSelection.tsx";
import { loginState } from "../login/signals.ts";
import EmailOtpVerification from "../login/EmailOtpVerification.tsx";
import { cn } from "../../shared/lib/tailwind.ts";
import Logo from "../../shared/components/Logo.tsx";
import ProtectedRoute from "../../shared/components/ProtectedRoute.tsx";

export default function () {
  return (
    <ProtectedRoute type="UnauthenticatedOnly">
      <div className={"p-page flex flex-col overflow-hidden"}>
        <RiskWarningBanner />

        <FlexSeparator size="xl" />

        <Logo className="w-1/4 self-center" />

        <FlexSeparator size="xl" />

        <h1 className={"text-2xl font-semibold text-nowrap"}>
          Welcome to MiroX
        </h1>

        <FlexSeparator size="xl" />

        <section
          className={cn(
            loginState.value === "initiatedEmailLogin" && "hidden",
            loginState.value === "initiatedSocialLogin" &&
              "animate-pulse opacity-80 pointer-events-none",
            loginState.value === "initiatedWalletConnect" &&
              "",
          )}
        >
          <LoginMethodSelection />
        </section>

        <section
          className={cn(
            "flex flex-col duration-500",
            loginState.value !== "initiatedEmailLogin" &&
              "opacity-0 pointer-events-none",
          )}
        >
          <EmailOtpVerification />
        </section>
      </div>
    </ProtectedRoute>
  );
}
