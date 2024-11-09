import { useState } from "preact/hooks";
import FlexSeparator from "../../shared/components/FlexSeparator.tsx";
import Icon from "../../shared/components/Icon.tsx";

export default function () {
  const [imgUrl, setImgUrl] = useState("");

  return (
    <div className={"p-page flex flex-col items-center"}>
      <div className="flex self-stretch">
        <button className={"btn-icon"}>
          <Icon name="ArrowLeft" />
        </button>

        <FlexSeparator size="full" />

        <button className={"btn-icon"}>
          <Icon name="House" />
        </button>
      </div>

      <h1 className={"mt-4 text-foreground/70"}>
        Become an Asset Manager on{" "}
        <span className={"font-semibold"}>MiroX</span>
      </h1>

      <FlexSeparator size="lg" />

      <img
        src={imgUrl}
        //@ts-ignore: stfu
        onError={(e) => e.target.src = "/logo.png"}
        alt="photo"
        className={"rounded-full aspect-square bg-muted/50 object-cover w-1/3 border"}
      />

      <FlexSeparator size="lg" />

      <input
        type="url"
        required
        placeholder={"Enter Image URL"}
        name="image"
        id="img"
        //@ts-ignore: stfu
        onChange={(e) => setImgUrl(e?.target?.value)}
      />

      <FlexSeparator size="lg" />

      <input type="text" name="name" id="name" placeholder={"Choose a name"} />

      <FlexSeparator size="lg" />

      <textarea
        name="bio"
        id="bio"
        placeholder={"Bio (Tell us a little about yourself)"}
        className={"muted rounded-lg w-full h-[20vh] p-3 resize-none"}
      />

      <FlexSeparator size="lg" />

      <button className={"btn primary active:scale-90 duration-150"}>
        Register
      </button>
    </div>
  );
}
