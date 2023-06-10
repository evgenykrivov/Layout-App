import styles from "./ViewPort.module.css"
import { useState, useEffect } from "react"

const ViewPort = () => {
  const [ width, setWidth ] = useState(0)

  const handleResize = () => {
    setWidth(window.innerWidth)
    console.log("handleResize")
  }

  const onLoadHandler = () => {
    window.addEventListener("resize", handleResize)
  }

  const onUnloadHandler = () => {
    window.removeEventListener("resize", handleResize)
  }

  useEffect(() => {
      handleResize()
      onLoadHandler()
      return onUnloadHandler
    },
    [])

  return <p className={ styles.ViewPort }>: { width } px</p>
}

export default ViewPort
