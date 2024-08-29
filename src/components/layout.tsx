import React from "react";
import { Providers } from "../providers";
import NavBar from "../components/navbar";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <main
      style={{ minHeight: "100vh", backgroundImage: "url('/background.webp')" }}
      className="dark text-foreground bg-yellow"
    >
      <Providers>
        <NavBar />
        <div>{children}</div>
      </Providers>
    </main>
  );
}
