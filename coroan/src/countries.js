import React, {useEffect, useState} from 'react';
import axios from 'axios';


function Countries() {

    const [countryStats, setCountryStats] = useState([{}]);
 
     
   useEffect(() => {
     
 
 
     axios({
         "method":"GET",
         "url":"https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
         "headers":{
         "content-type":"application/octet-stream",
         "x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com",
         "x-rapidapi-key":"c0dba4d6a3msh6c39589aa21d903p1b6ce4jsn8b41b9308353"
         }
         })
         .then((response)=>{
           console.log(response.data.countries_stat)
           setCountryStats(response.data.countries_stat)
         })
         .catch((error)=>{
           console.log(error)
         })
     }, []);
 
   return (
     <>
     <h1>Stats by Country</h1>
     <div className= "section">
       
       {countryStats.map(item => {
           return( 
             <div className= "card" key= {item.country_name}>
               
           <h2>{item.country_name}</h2>
           <h3>Total cases: {item.cases}</h3>
           <h4>Total deaths</h4>
           <h4><span>{item.deaths}</span></h4>
           <h4>Total recovered</h4>
           <h4 className="life">{item.total_recovered}</h4>
           <h4>24hr Deaths: {item.new_deaths}</h4>
           <h4>New cases: {item.new_cases}</h4>
           
           </div>
           
             )
             
         })}
     </div>
     </>
   );
 }
 
 export default Countries;
 