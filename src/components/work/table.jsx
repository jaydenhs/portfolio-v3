import React from "react"

export default function Table({ children }) {
  return (
    <table>
      <colgroup>
        <col className="w-1/3" />
        <col className="w-1/3" />
        <col className="w-1/3" />
      </colgroup>
      <thead>
        <tr>
          <th>Role</th>
          <th>Team</th>
          <th>Timeframe</th>
        </tr>
      </thead>
      <tbody>
        <tr>{children}</tr>
      </tbody>
    </table>
  )
}
