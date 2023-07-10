import React from "react"

const NumberedList = ({ data, className }) => {
  return (
    <div className={`space-y-8 ${className}`}>
      {data.map(({ title, description }, index) => (
        <div key={index}>
          <div className="flex space-x-6 items-start">
            <div className="flex flex-col items-center">
              <span
                className="flex items-center w-16 h-16 rounded-full"
                style={{ background: "var(--primaryLL)" }}
              >
                <span className="mx-auto text-2xl">
                  {`${index + 1}`.padStart(2, "0")}
                </span>
              </span>
            </div>
            <div className="space-y-2">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NumberedList
