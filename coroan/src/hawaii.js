import React, {useEffect, useState} from 'react';
import axios from 'axios';


function Hawaii() {

     const [stateStats, setstateStats] = useState([{}]);
     const [stateCaseStats, setstateCaseStats] = useState([{}]);
 
     
   useEffect(() => {
     
 
 
    axios({
        "method":"GET",
        "url":"https://coronavirus-monitor.p.rapidapi.com/coronavirus/johns_hopkins_united_states_latest.php",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key":"c0dba4d6a3msh6c39589aa21d903p1b6ce4jsn8b41b9308353"
        },"params":{
        "state":"hawaii"
        }
        })
         .then((response)=>{
           console.log("states",response.data)
            setstateStats(response.data.usa_deaths)
            setstateCaseStats(response.data.usa_cases_by_state)
         })
         .catch((error)=>{
           console.log(error)
         })
     }, []);
 
   return (
     <>
     <h1>Deaths in hawaii</h1>
     <section>
       
       {stateStats.map(item => {
           return( 
             <div className="smalldiv" key= {item.state_name}>
               
           <h2>{item.state_name}</h2>
           <h3>Total deaths: <span>{item.death_cases}</span></h3>
         
           
           </div>
           
             )
             
         })}
     </section>
     <h1>Cases in hawaii</h1>
     <section>
       
       {stateCaseStats.map(item => {
           return( 
             <div className="smalldiv" key= {item.state_name}>
               
           <h2>{item.state_name}</h2>
           <h3>Total cases: {item.cases_number}</h3>
         
           
           </div>
           
             )
             
         })}
     </section>
     </>
   );
 }
 
 export default Hawaii;
 