"use client"

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card, CardHeader, CardContent, CardTitle } from "../ui/card"

const data = [
  { name: "Completed", value: 45 },
  { name: "Pending", value: 30 },
  { name: "In Progress", value: 25 },
]

const COLORS = ["#22c55e", "#eab308", "#3b82f6"]

const PieCharts = () => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Task Status Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export default PieCharts
