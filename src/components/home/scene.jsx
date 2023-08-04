import React, { useRef, useState, useEffect } from "react"
import { useFrame } from "react-three-fiber"

const Scene = ({ activeScene, name, children }) => {
  const meshRef = useRef()
  const [positionY, setPositionY] = useState(-4)

  // Function to smoothly animate the cube's position from y = -4 to y = 0
  const animatePositionY = () => {
    if (positionY < 0 && activeScene === name) {
      setPositionY(prevY => Math.min(prevY + 0.2, 0))
    }
    if (positionY > -4 && activeScene !== name) {
      setPositionY(prevY => Math.min(prevY - 0.2, 0))
    }
  }

  // Use the useFrame hook to update the cube's position on each frame
  useFrame(() => {
    animatePositionY()
    meshRef.current.position.y = positionY
  })

  return (
    <group ref={meshRef} position={[0, positionY, 0]}>
      {children}
    </group>
  )
}

export default Scene
