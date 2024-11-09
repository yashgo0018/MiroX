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
            totalClients={manager.totalClients}
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
  totalClients: 100,
}, {
  name: "-- Proud-Trell --",
  image:
    "https://static.euronews.com/articles/stories/07/88/06/86/1200x675_cmsv2_3c5f007a-9345-5211-9b5d-a2d04af6c001-7880686.jpg",
  totalClients: 1800,
}, {
  name: "Hot Epic",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/2/24/Denice_K_%28cropped%29.jpg",
  totalClients: 10,
}, {
  name: "Eric_Dawg",
  image:
    "https://images.squarespace-cdn.com/content/v1/585832425016e17cbf7235be/1563133523404-O9W2FB1W0ZR1V74KS4U4/Dog+Man+feature.jpg",
  totalClients: 100,
}, {
  name: "-- Proud-Trell --",
  image:
    "https://static.euronews.com/articles/stories/07/88/06/86/1200x675_cmsv2_3c5f007a-9345-5211-9b5d-a2d04af6c001-7880686.jpg",
  totalClients: 1800,
}, {
  name: "Hot Epic",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/2/24/Denice_K_%28cropped%29.jpg",
  totalClients: 10,
}];
