import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Phone = () => {

    const [phones,setPhones]=useState([]);

    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res=>res.json())
    // .then(data=>setPhones(data.data))

    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')

        .then(data=>{
            const phoneData= data.data.data;
            const phoneWithFakeData = phoneData.map(phone=>{
                const obj ={
                    name:phone.phone_name,
                    price:parseInt(phone.slug.split('-')[1])
                }

                return obj;
            })
            console.log(phoneWithFakeData);
            setPhones(phoneWithFakeData);
        })
     

    },[])
      
  
    return (
        <div>
            <h2>Phone quantity:{phones.length}</h2>

            <BarChart width={850} height={540} data={phones}>
          <Bar dataKey={'price'}  fill="#8884d8" />
          <XAxis dataKey='name'></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
        </div>
    );
};

export default Phone;