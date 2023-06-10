import styles from "./ViewPort.module.css"
import { useState, useEffect } from "react"

const ScreenWidth = () => {
  const [ width, setWidth ] = useState(0)

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <p className={ styles.ViewPort }>: { width } px</p>
}

export default ScreenWidth
