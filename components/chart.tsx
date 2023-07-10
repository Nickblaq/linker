"use client"
import { cn } from '@/lib/utils';
import * as React from 'react'
const COLORSArray = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
import { Pie, PieChart, Tooltip, ResponsiveContainer, Sector, Cell} from "recharts"
  const COLORS = COLORSArray
const timeTable = [
  {
    name: "Allocated",
    color: 'rgb(0,196,159)',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Current",
    color: 'rgb(255,187,40)',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Interest",
    color: 'rgb(255,128,66)',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
]


export default function ChartPie() {
  // const [activeIndex, setActiveIndex] = React.useState(0)
  const [data, _] = React.useState(timeTable)
  


  const bg = (color) => {
    if (typeof color === 'string') {
       console.log(color);
      } else {
       console.log('Invalid color');
       }
  };
  const renderLabel = (entry) => entry.name;
  
  return (
    <>
     <ResponsiveContainer width="100%" height='100%'>
      <PieChart width={200} height={200}>
     <Pie data={data}
          nameKey="name"
          dataKey="total" 
          fill="#8884d8" 
          // cx={120} // commented this out based on a stackoverflow answer. It was a wow moment!
          cy={200}
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          label={renderLabel}>
          {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
          </Pie>
        <Tooltip />
     
      </PieChart>
      
    </ResponsiveContainer>
    <div className='flex justify-center text-center w-full mx-auto'>
    {data.map((entry, index) => (
    <div key={`cell-${index}`} 
    className='space-y-2'
    // className={`bg-[${COLORSArray[index % COLORSArray.length]}]`}
    >
      <span className={`h-4 w-4 border px-6`}>{entry.total}
      </span>
      <p className={`text-sm font-normal`}>{entry.name}</p>
    </div>
  ))}
    </div>
   
    </>
  )
}










