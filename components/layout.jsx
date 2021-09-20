import Navbar from "./Navbar"
import { useState } from "react";

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )
}

export default Layout;