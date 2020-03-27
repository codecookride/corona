import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';
import './App.css';
import Countries from "./countries"
import States from "./states"
import Idaho from "./idaho"
import Massachusetts from "./massachusetts"
import California from "./california"
import Hawaii from "./hawaii"
import StateOverview from "./stateoverview"
import Home from "./home"

function App() {

  return(
<div>
  <nav>
  
  <Link to="/oregon">Oregon</Link>
  <Link to="/idaho">Idaho</Link>
  <Link to="/california">Cali</Link>
  <Link to="/massachusetts">Mass</Link>
  <Link to="/hawaii">Hawaii</Link>
  <Link to="/countries">World</Link>
  <Link to="/stateoverview">States</Link>

  
  </nav>
  <Route exact path ="/" component= {Home}/>
  <Route path = '/countries' component = {Countries}/>
  <Route  path = '/oregon' component = {States}/>
  <Route  path = '/idaho' component = {Idaho}/>
  <Route  path = '/massachusetts' component = {Massachusetts}/>
  <Route  path = '/california' component = {California}/>
  <Route  path = '/hawaii' component = {Hawaii}/>
  <Route  path = '/stateoverview' component = {StateOverview}/>
  </div>
  )
}

export default App;


// country_name: "China"
// cases: "81,285"
// deaths: "3,287"
// region: ""
// total_recovered: "74,051"
// new_deaths: "6"
// new_cases: "67"
// serious_critical: "1,235"
// active_cases: "3,947"
// total_cases_per_1m_population: "56"