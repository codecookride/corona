import React, {useEffect, useState} from 'react';
import axios from 'axios';



function StateOverview() {

      const [stateStats, setstateStats] = useState([{}]);
    //  const [stateCaseStats, setstateCaseStats] = useState([{}]);
 
    //  const myData = [].concat(stateStats)
   useEffect(() => {
     
    
 
    axios({
        "method":"GET",
        "url":"https://covidtracking.com/api/states",
      
        })
         .then((response)=>{
           console.log("states",response)
           const myData = [].concat(response.data)
             setstateStats(myData.sort((a, b) =>{
                 return b.death - a.death}))
            // setstateCaseStats(response.data.usa_cases_by_state)
         })
         .catch((error)=>{
           console.log(error)
         })
     }, []);
 
   return (
     <>


     <h1>All States</h1>
     <section className='section'>
       

        
        {stateStats.map(item => {
           return( 
             <div className="statediv" key= {item.state}>
               
           <h2>{item.state}</h2>
           <h4>Cases: {item.positive}</h4>
           <h4>Total deaths: <span>{item.death}</span></h4>
           <h4>Total test:{item.totalTestResults}</h4>
         
           
           </div>
           
             )
             
         })}
     </section>
    
     </>
   );
 }
 
 export default StateOverview;
 