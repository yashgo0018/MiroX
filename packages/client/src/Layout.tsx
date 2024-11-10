import Navigation from "./shared/components/Navigation.tsx";
import type { Children } from "./shared/types/utils.d.ts";
import { useLocation } from "preact-iso";

export default function Layout(props: { children: Children }) {
  const location = useLocation();

  return (
    <>
      {!["/login"].includes(location.path) && <Navigation />}
      {props.children}
    </>
  );
}
