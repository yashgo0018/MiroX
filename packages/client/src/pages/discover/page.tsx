import { usePrivy } from "privy";
import RiskWarningBanner from "../../shared/components/RiskWarningBanner.tsx";

export default function () {
  const { authenticated } = usePrivy();

  return (
    <div className={"p-page flex flex-col overflow-hidden"}>
      {!authenticated && <RiskWarningBanner />}
    </div>
  );
}
