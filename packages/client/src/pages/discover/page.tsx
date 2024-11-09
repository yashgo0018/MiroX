import FlexSeparator from "../../shared/components/FlexSeparator.tsx";
import Icon from "../../shared/components/Icon.tsx";
import AssetManagerList from "./AssetManagerList.tsx";

export default function () {
  return (
    <div className={"p-page flex flex-col overflow-hidden"}>
      <div className="flex text-xxs p-2 primary rounded-sm items-center relative mt-1">
        <img
          src="/images/manager.webp"
          alt="asset manager"
          className={"size-10 absolute left-2 bottom-1 object-contain"}
        />

        <FlexSeparator size="full" />

        <span className={"pr-2"}>
          Become an asset manager, enjoy upto 15% Profit share
        </span>
      </div>

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
