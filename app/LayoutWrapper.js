"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Components/Navbar";

export default function LayoutWrapper({ children }) {
    const pathname = usePathname();
    const hideNavbarAndFooter = pathname?.startsWith("/packersmovers");

    return (
        <>
            {!hideNavbarAndFooter && <Navbar />}
            {children}
        </>
    );
}
