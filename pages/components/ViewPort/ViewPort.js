import styles from "./ViewPort.module.css"
import React from "react"

const ViewPort = () => {
  const [ width, setWidth ] = React.useState(0)

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  const onLoadHandler = () => {
    window.addEventListener("resize", handleResize)
  }

  const onUnloadHandler = () => {
    window.removeEventListener("resize", handleResize)
  }

  React.useEffect(() => {
      handleResize()
      onLoadHandler()
      return onUnloadHandler
    }, [])

  return <p className={ styles.ViewPort }>: { width } px</p>
}

export default ViewPort
