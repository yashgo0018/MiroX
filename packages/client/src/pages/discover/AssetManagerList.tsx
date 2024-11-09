import FlexSeparator from "../../shared/components/FlexSeparator.tsx";
import AssetManagerCard from "./AssetManagerCard.tsx";

export default function AssetManagerList() {
  return (
    <section className={"flex flex-col"}>
      {dummy.map((manager, key) => (
        <>
          <AssetManagerCard
            key={key}
            thumbnail={manager.image}
            managerName={manager.name}
          />
          <FlexSeparator size="sm" />
        </>
      ))}
    </section>
  );
}

const dummy = [{
  name: "Eric_Dawg",
  image:
    "https://images.squarespace-cdn.com/content/v1/585832425016e17cbf7235be/1563133523404-O9W2FB1W0ZR1V74KS4U4/Dog+Man+feature.jpg",
}];
