import React from "react";
import {logoItems} from "./data/images"
import "./Header.css"

export default function Header(){
    return (
        <div className="header">
            {logoItems.lgGalloAcoustics}
            {logoItems.lgPultIcon}
        </div>
    )
}