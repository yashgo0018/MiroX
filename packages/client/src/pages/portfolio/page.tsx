import Divider from "../../shared/components/Divider.tsx";
import Header from "./Header.tsx";
import AssetManagerList from "./YourManagersList.tsx";

export default function () {
  return (
    <div className="p-page">
      <Header />

      <Divider className="my-3 mx-2" />

      <AssetManagerList />
    </div>
  );
}
