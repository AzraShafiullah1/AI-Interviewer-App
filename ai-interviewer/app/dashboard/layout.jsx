import React from 'react'
import Header from "@/dashboard/_components/Header";

function Dashboardlayout({children}) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}
export default Dashboardlayout