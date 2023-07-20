import React from "react"
import Image from "../image"

export default function BeforeAndAfter({ title, src }) {
  return (
    <div className="wide space-y-8 pt-20">
      <h2 className="text-center">{title}</h2>
      <div className="grid md:grid-cols-2 gap-x-8">
        <div className="space-y-6">
          <h3 className="text-right mr-4">Before</h3>
          <Image src={src[0]} />
        </div>
        <div className="space-y-6">
          <h3 className="ml-4">After</h3>
          <Image src={src[1]} />
        </div>
      </div>
    </div>
  )
}
