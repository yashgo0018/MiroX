export default function () {
  return (
    <section
      className={"flex flex-col items-center justify-center h-screen p-[10%]"}
    >
      <img
        src="/404.webp"
        alt="Not Found"
        className={"motion-preset-seesaw-md"}
      />

      <h1
        className={"mt-4 font-bold text-6xl"}
      >
        404
      </h1>

      <h1 className={"text-center px-4 mt-6 text-base leading-5"}>
        We could not find what you were looking for.
      </h1>

      <a href="/" className={"mt-10"}>
        Go back home
      </a>
    </section>
  );
}
