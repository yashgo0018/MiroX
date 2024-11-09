import FlexSeparator from "../../shared/components/FlexSeparator.tsx";
import Icon from "../../shared/components/Icon.tsx";
import AssetManagerList from "./AssetManagerList.tsx";
import BecomeManagerBanner from "./BecomeManagerBanner.tsx";

export default function () {
  return (
    <div className={"p-page flex flex-col overflow-hidden"}>
      <BecomeManagerBanner />

      <FlexSeparator size="xl" />

      <h1 className={"font-medium flex items-center"}>
        <Icon name="BadgeDollarSign" className="size-5" />
        <FlexSeparator size="sm" />
        <span>
          Discover : Top Asset Managers
        </span>
      </h1>

      <FlexSeparator size="md" />

      <AssetManagerList />
    </div>
  );
}
