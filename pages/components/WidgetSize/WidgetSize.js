import styles from "./WidgetSize.module.css"
import { useState, useEffect } from "react"

const ScreenWidth = () => {
  const [ width, setWidth ] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <p className={ styles.components }>: { width } px</p>
}

export default ScreenWidth
