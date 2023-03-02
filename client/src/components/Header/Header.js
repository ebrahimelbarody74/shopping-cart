import React from 'react'
import "../../css/Header/Header.css"
import  { words } from "../../words"

export default function Header() {
  return (
    <header>
        {words.headerContent}
    </header>
  )
}
