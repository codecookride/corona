import React, {useEffect, useState} from 'react';
import axios from 'axios';


function Home() {

     const [countryStats, setCountryStats] = useState({});
 
     
   useEffect(() => {
     
 
 
    axios({
        "method":"GET",
        "url":"https://covidtracking.com/api/us",
     
        
        })
         .then((response)=>{
           console.log(response)
            setCountryStats(response.data[0])
         })
         .catch((error)=>{
           console.log(error)
         })
     }, []);
 
   return (
     <>
     <h1>Overview</h1>
     <p>Welcome to a colection of data for My family and myself. I wanted to keep all of the most important info in an easy to access format.</p>
     <div className= "section">
   
             <div className= "card">
               
           <h2>Total USA</h2>
           <h3>Cases </h3>
           <h3>{countryStats.positive}</h3>
           <h3>Deaths</h3>
           <h3><span>{countryStats.death}</span></h3>
           
           </div>
           
        
             
    
     </div>
     </>
   );
 }
 
 export default Home;
 

//  total_cases: "1,629"
// total_deaths: "41"
// state_reported_cases: "47 (46 states and District of Columbia)"
// travel_related_cases: "138"
// person_to_person_spread_cases: "129"
// under_investigation: "1,362"