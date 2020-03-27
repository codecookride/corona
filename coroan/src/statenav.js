import React, {useEffect, useState} from 'react';
import axios from 'axios';
import States from "./states"
import Idaho from "./idaho"
import Massachusetts from "./massachusetts"
import California from "./california"
import Hawaii from "./hawaii"
import {Route, Link} from 'react-router-dom';
import StateOverview from './stateoverview';


function StateNav() {

    return(
        <>
<nav>
<Link to="statenav/">Oregon</Link>
<Link to="statenav/idaho">Idaho</Link>
<Link to="statenav/california">Cali</Link>
<Link to="statenav/massachusetts">Mass</Link>
<Link to="statenav/hawaii">Hawaii</Link>
<Link to="statenav/stateoverview">all States</Link>
</nav>
<div>

</div>
</>
    )

}

export default StateNav;