import React, {useEffect, useState} from 'react';
import axios from 'axios';


function Countries() {

     const [countryStats, setCountryStats] = useState([]);
 
     
   useEffect(() => {
     
 
 
    axios({
      "method":"GET",
      "url":"https://covid-193.p.rapidapi.com/statistics",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"covid-193.p.rapidapi.com",
      "x-rapidapi-key":"c0dba4d6a3msh6c39589aa21d903p1b6ce4jsn8b41b9308353"
      }
      })
         .then((response)=>{
           console.log(response.data.response)
           const myData = [].concat(response.data.response)
             setCountryStats(myData.sort((a, b) =>{
                 return b.deaths.total - a.deaths.total}))


            // setCountryStats(response.data.response)
         })
         .catch((error)=>{
           console.log(error)
         })
     }, []);
 
   return (
     <>
     <h1>Stats by Country</h1>
     <div className= "chartTop">
         <h2 className="chartOne">country</h2>
         <h2 className="chartOne">Total cases</h2>
         <h2 className="chartOne">total deaths</h2>
         <h2 className="chartOne"> Recovered</h2>
         <h2 className="chartOne"> New deaths</h2>
         <h2 className="chartOne"> New cases</h2>
         </div>
     <div className= "section">

      
       
       
       {countryStats.map(item => {
    
           return(
             
             <div className= "card" >
           <h2 className="chart">{item.country}</h2>
           <h3 className ="chart">{item.cases.total} </h3>
           
           <h3 className ="chart"><span>{item.deaths.total}</span></h3>
           
           <h3 className ="chart">{item.cases.recovered}</h3>
           <h3 className ="chart">{item.deaths.new}</h3>
           <h3 className ="chart">{item.cases.new}</h3>
           
           </div>
           
             )
             
         })}
     </div>
     </>
   );
 }
 
 export default Countries;
 