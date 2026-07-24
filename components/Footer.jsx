"use client";

import { usePathname } from "next/navigation";
import CompactFooter from "./CompactFooter";

export default function Footer() {
  const pathname = usePathname();

  // The home page renders this component directly at the end of its content.
  if (pathname === "/") return null;

  return <CompactFooter />;
}
