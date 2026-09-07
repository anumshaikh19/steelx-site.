import * as React from "react";
import { createRoot } from "react-dom/client";
import { createPortal } from "react-dom";
import { App } from "./main";
import { KarateLibrary } from "./KarateLibrary";
import "./styles.css";

function LibraryMount() {
  const [target, setTarget] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    const main = document.querySelector("main");
    if (main) setTarget(main);
  }, []);

  return target ? createPortal(<KarateLibrary />, target) : null;
}

function Root() {
  return (
    <>
      <App />
      <LibraryMount />
    </>
  );
}

createRoot(document.getElementById("root")!).render(<Root />);
