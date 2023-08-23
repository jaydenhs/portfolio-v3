import React, { useRef, useState, useEffect } from "react"
import { useFrame } from "react-three-fiber"

const Scene = ({ activeScene, name, children }) => {
  const meshRef = useRef()
  const [positionY, setPositionY] = useState(-8)

  useEffect(() => {
    const animatePositionY = () => {
      if (positionY < 0 && activeScene === name) {
        setPositionY(prevY => Math.min(prevY + 0.001, 0))
      }
      if (positionY > -8 && activeScene !== name) {
        setPositionY(prevY => Math.min(prevY - 0.001, 0))
      }
    }

    animatePositionY()
  }, [positionY, activeScene])

  useFrame(() => {
    meshRef.current.position.y = positionY
  })

  return (
    <group ref={meshRef} position={[0, positionY, 0]}>
      {children}
    </group>
  )
}

export default Scene
