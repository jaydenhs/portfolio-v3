// import React from "react"

// import App from "../components/app"
// import ModelCanvas from "../components/home/model-canvas"

// export default function AboutPage() {
//   return (
//     <App>
//       <ModelCanvas
//         position={[12, 8, 12]}
//         className={"h-scr`een"}
//         currentScene={"typing"}
//       />
//     </App>
//   )
// }

import React from "react"
import App from "../components/app"
import Image from "../components/image"
import RoomObject from "../components/about/room-object"
import styled from "styled-components"
import Svg from "../components/svg"
import tw from "twin.macro"
import { fadeIn } from "../styles/animations"
import { motion } from "framer-motion"

const About = () => {
  return (
    <App>
      <motion.div className="reading-grid" {...fadeIn}>
        <h1 className="mb-1.5">About Me</h1>
        <p className="text-xl mb-8">
          Welcome to my room — hover over any of the glowing dots to learn more
          about me!
        </p>
        {/* <Scene /> */}
        <div className="wide">
          <div className="relative">
            <Svg src={"walls.svg"} />
            <RoomObject
              src={"diploma.svg"}
              svg={true}
              tooltip={true}
              width={10}
              left={8.647}
              top={32.9}
            >
              <Tooltip_Img src="diploma_tooltip.jpg" />I am part of University
              of Waterloo's Systems Design Engineering Class of 2024 🔧 - 92
              brilliant, innovative students who inspire me to do my best
              everyday! 🎉
            </RoomObject>
            <RoomObject src="bed.svg" width={36.38} left={27.12} top={27.82} />
            <RoomObject
              src="shelf.svg"
              width={12.59}
              left={28.64}
              top={19.38}
            />
            <RoomObject
              src="camera.svg"
              tooltip={true}
              width={4.41}
              left={34.23}
              top={19}
            >
              <Tooltip_Img src="camera_tooltip.jpg" />
              Whether it be landscape 🍃, digital manipulation 💻, or fine art
              🎨, photography has always been one of my favourite methods of
              artistic expression! 📷
            </RoomObject>
            <RoomObject
              src="window.svg"
              tooltip={true}
              width={10.77}
              left={65.1}
              top={21.41}
            >
              <Tooltip_Img src="window_tooltip.jpg" />I have always loved this
              final panel from Calvin and Hobbes 📚 - ever since I read it as a
              child, I've tried to apply this same curiosity to explore myself,
              my work, and the world around me! 🌎
            </RoomObject>
            <RoomObject src="lamp.svg" width={6.087} left={75.37} top={36.98} />

            <RoomObject
              src="shelf_side.svg"
              width={4.472}
              left={80.84}
              top={32.5}
            />
            <RoomObject
              src="shelf_shadow.svg"
              width={9.83}
              left={81.49}
              top={63.61}
            />
            <RoomObject
              src="shelf_level.svg"
              width={12.63}
              left={81.96}
              top={59.79}
            />
            <RoomObject
              src="chest.svg"
              tooltip={true}
              width={7.836}
              left={82.35}
              top={56.67}
            >
              <Tooltip_Img src="chest_tooltip.jpg" />
              Whether it be planning a checkmate in chess ♟️, crafting the
              perfect deck in Dominion ⚔️, or monopolizing the sheep trade in
              Catan 🐑, one of my favourite ways to have fun is through board
              games!
            </RoomObject>
            <RoomObject
              src="shelf_level.svg"
              width={12.63}
              left={81.96}
              top={51.18}
            />
            <RoomObject
              src="books.svg"
              tooltip={true}
              width={4.31}
              left={82.81}
              top={47.29}
            >
              <Tooltip_Img src="books_tooltip.jpeg" />I love reading! My
              favourite book is the poignant comedy Anxious People by Fredrik
              Backman.
            </RoomObject>
            <RoomObject
              src="shelf_level.svg"
              width={12.63}
              left={81.96}
              top={42.56}
            />
            <RoomObject
              src="trophy.svg"
              tooltip={true}
              width={4.06}
              left={83.19}
              top={38.99}
            >
              <Tooltip_Img src="trophy_tooltip.jpg" />I always try my best to
              excel in everything that I do!
              <ul>
                <li>
                  <b>Best Pitch</b> - StarterHacks 2020 💬
                </li>
                <li>
                  <b>First Place</b> - UXperience 2020 Designathon 💻
                </li>
                <li>
                  <b>First Class Honours</b> - Grade 10 Piano Practical Exam 🎹
                </li>
              </ul>
            </RoomObject>
            <RoomObject
              src="shelf_level.svg"
              width={12.63}
              left={81.96}
              top={33.94}
            />
            <RoomObject
              src="shelf_side.svg"
              width={4.472}
              left={91.29}
              top={39.23}
            />

            <RoomObject
              src="keyboard.svg"
              tooltip={true}
              width={22.77}
              left={59.88}
              top={61.47}
            >
              <Tooltip_Img src="keyboard_tooltip.jpg" />I absolutely love music!
              You can often find me jamming out on the piano 🎹, improvising on
              the saxophone 🎷, or performing acapella on-campus! 🎤
            </RoomObject>

            <RoomObject
              src={["jayden_body.svg", "jayden_arms.svg"]}
              tooltip={true}
              width={[11.72, 9.63]}
              left={[26.88, 26.54]}
              top={[45.903, 52.1]}
              className={["", "z-10"]}
            >
              <Tooltip_Img src="jayden_tooltip.jpg" />
              Hi, I'm Jayden! 👋🏽 As a product designer 📱, I strive to improve
              the lives of others through the skills that I have been blessed
              with! Thanks for checking out my portfolio! 😊
            </RoomObject>
            <RoomObject
              src="table.svg"
              width={22.36}
              left={17.067}
              top={54.91}
            />
            <RoomObject
              src="sushi.svg"
              tooltip={true}
              width={7.76}
              left={29.35}
              top={63.14}
            >
              <Tooltip_Img src="sushi_tooltip.jpg" />
              Some of my most treasured memories revolve around food! 😋 So let
              me know if you know any good restaurants, especially for sushi! 🍣
            </RoomObject>
            <RoomObject
              src={["laptop_bottom.svg", "laptop_top.svg"]}
              tooltip={true}
              width={[8.95, 6.32]}
              left={[24.11, 22.81]}
              top={[57.08, 55.24]}
              className={["", "z-20"]}
            >
              <Tooltip_Img src="laptop_tooltip.jpg" />I believe that designers
              should understand the technical functionality of the products they
              are designing for. 💭 From C++ to C#, ReactJS to GraphQL, I am
              equipped to adapt and optimize my designs! ⚙️
            </RoomObject>

            <RoomObject
              src="large_plant.svg"
              width={17.84}
              left={35.89}
              top={60.726}
            />
          </div>
        </div>
      </motion.div>
    </App>
  )
}

const Tooltip_Img = styled(Image)`
  ${tw`mb-4 object-contain`}
`

export default About
