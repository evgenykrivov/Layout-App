import styles from "../../../styles/WidgetSize.module.css"
import { useState, useEffect } from "react";

const ScreenWidth = () => {
  const [ width, setWidth ] = useState(0);
  const [ text, setText ] = useState("")

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
      const width = window.innerWidth
      if ( width <= 768 ) {
        setText("S Width");
      } else if ( width <= 1024 ) {
        setText("M Width");
      } else {
        setText("L Width");
      }
    }
    handleResize();
    window.addEventListener('resize', () => {
      handleResize()
    })

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return <p className={ styles.components }>{ text }: { width }px</p>
}

export default ScreenWidth