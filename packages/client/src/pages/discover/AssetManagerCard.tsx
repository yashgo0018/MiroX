import FlexSeparator from "../../shared/components/FlexSeparator.tsx";
import Icon from "../../shared/components/Icon.tsx";
import { Avatar } from "../../shared/components/radix.ts";

interface IAssetManagerCardProps {
  thumbnail: string;
  managerName: string;
}

export default function AssetManagerCard(props: IAssetManagerCardProps) {
  return (
    <div className={"border p-2 rounded"}>
      <div className="flex">
        <Avatar.Root>
          <Avatar.Image
            className={"size-10 object-cover primary rounded"}
            src={props.thumbnail}
            alt={props.managerName}
          />
        </Avatar.Root>

        <FlexSeparator size="sm" />

        <div className="">
          <p className={"font-medium tracking-tight"}>{props.managerName}</p>
          <span>
            <Icon name="User" />
          </span>
        </div>
      </div>
    </div>
  );
}
