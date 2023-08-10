import './App.css'
import Homepage from "./pages/Homepage.jsx"
import ComingSoon from "./pages/ComingSoon.jsx"
import { useState } from "react"
export default function App() {
  const [ page, setPage ] = useState(0)
  return (
    <div>
      { (page == 0) ? <ComingSoon /> : ((page == 1) ? <Homepage></Homepage> : "")}
    </div>
  )
}
