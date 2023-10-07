import React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

function Chart() {

  const data = [
    { year: 2548, cases: 0 },
    { year: 2549, cases: 1 },
    { year: 2550, cases: 0 },
    { year: 2551, cases: 4 },
    { year: 2552, cases: 4 },
    { year: 2553, cases: 10 },
    { year: 2554, cases: 9 },
    { year: 2555, cases: 5 },
    { year: 2556, cases: 2 },
    { year: 2557, cases: 51 },
    { year: 2558, cases: 32 },
    { year: 2559, cases: 15 },
    { year: 2560, cases: 14 },
    { year: 2561, cases: 0 },
    { year: 2562, cases: 0 },
    { year: 2563, cases: 35 },
    { year: 2564, cases: 79 },
  ]

  return (
    <ResponsiveContainer width="90%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 39,
          right: 40,
        }}
      >
        <XAxis
          dataKey="year"
          label={{
            value: "ปี",
            position: "insideTopRight",
            offset: -30,
            dy: 25,
            fontSize: 14,
          }}
        />
        <YAxis
          dataKey="cases"
          label={{
            value: "จำนวนคดี",
            position: "insideTopLeft",
            offset: 10,
            dy: -40,
            fontSize: 14,
          }}
        />
        <Tooltip />
        <Bar dataKey="cases" fill="black" barSize={12} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default Chart
