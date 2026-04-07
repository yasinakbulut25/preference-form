"use client";

import { HeroUIProvider } from "@heroui/react";

export default function ClientProvider({ children }) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
