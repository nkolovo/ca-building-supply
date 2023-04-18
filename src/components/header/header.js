import React from "react"

import Title from "../../../pages/title"
import Tabs from "../../../pages/tabs"

export default function Header() {
    return (
        <div className="row justify-content-around" style={{ margin: "30px 60px 0px 60px" }}>
            <div className="col-xl-5 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <Title />
            </div>
            <div className="col" style={{ margin: "auto" }}>
                <Tabs />
            </div>
        </div>
    )
}