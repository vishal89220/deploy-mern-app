import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { BsFillArchiveFill } from 'react-icons/bs';
import { IoArrowDownOutline, IoDocumentTextOutline, IoHome, IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import {LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Dashboard = () => {
 

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h5 className='text-black'>DASHBOARD</h5>
      </div>
      <div className='main-card'>
        <div className='card'>
        <div className='inner-cart'>
           <h3>97.5K</h3>
        </div>
        <p>Revenue Generated</p>
        <BsFillArchiveFill className='card-icon'/>
        </div>

         <div className='card'>
        <div className='inner-cart'>
           <h3>89.7K</h3>
        </div>
        <p>Revenue Generated</p>
        <BsFillArchiveFill className='card-icon'/>
        </div>

         <div className='card'>
        <div className='inner-cart'>
           <h3>67.6K</h3>
        </div>
        <p>Revenue Generated</p>
        <BsFillArchiveFill className='card-icon'/>
        </div>

         <div className='card'>
        <div className='inner-cart'>
           <h3>95.9K</h3>
        </div>
        <p>Revenue Generated</p>
        <BsFillArchiveFill className='card-icon'/>
        </div>
      </div>
      <div className='charts'>
 <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>



      <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>

      </div>
    </main>
  )
}

export default Dashboard
