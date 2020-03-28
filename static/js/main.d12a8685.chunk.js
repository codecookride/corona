(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{25:function(e,a,t){e.exports=t(54)},30:function(e,a,t){},48:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(22),s=t.n(l),o=(t(30),t(2)),r=t.n(o),m=t(6),i=t(7),u=(t(48),t(1));var h=function(){var e=Object(n.useState)([{}]),a=Object(u.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){r()({method:"GET",url:"https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",headers:{"content-type":"application/octet-stream","x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":"c0dba4d6a3msh6c39589aa21d903p1b6ce4jsn8b41b9308353"}}).then((function(e){console.log(e.data.countries_stat),l(e.data.countries_stat)})).catch((function(e){console.log(e)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Stats by Country"),c.a.createElement("div",{className:"section"},t.map((function(e){return c.a.createElement("div",{className:"card",key:e.country_name},c.a.createElement("h2",null,e.country_name),c.a.createElement("h3",null,"Total cases: ",e.cases),c.a.createElement("h4",null,"Total deaths"),c.a.createElement("h4",null,c.a.createElement("span",null,e.deaths)),c.a.createElement("h4",null,"Total recovered"),c.a.createElement("h4",{className:"life"},e.total_recovered),c.a.createElement("h4",null,"24hr Deaths: ",e.new_deaths),c.a.createElement("h4",null,"New cases: ",e.new_cases))}))))};var p=function(){var e=Object(n.useState)([{}]),a=Object(u.a)(e,2),t=a[0],l=a[1],s=Object(n.useState)([{}]),o=Object(u.a)(s,2),m=o[0],i=o[1];return Object(n.useEffect)((function(){r()({method:"GET",url:"https://coronavirus-monitor.p.rapidapi.com/coronavirus/johns_hopkins_united_states_latest.php",headers:{"content-type":"application/octet-stream","x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":"c0dba4d6a3msh6c39589aa21d903p1b6ce4jsn8b41b9308353"},params:{state:"oregon"}}).then((function(e){console.log("states",e.data),l(e.data.usa_deaths),i(e.data.usa_cases_by_state)})).catch((function(e){console.log(e)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Deaths in Oregon"),c.a.createElement("section",null,t.map((function(e){return c.a.createElement("div",{className:"smalldiv",key:e.state_name},c.a.createElement("h2",null,e.state_name),c.a.createElement("h3",null,"Total deaths: ",c.a.createElement("span",null,e.death_cases)))}))),c.a.createElement("h1",null,"Cases in Oregon"),c.a.createElement("section",null,m.map((function(e){return c.a.createElement("div",{className:"smalldiv",key:e.state_name},c.a.createElement("h2",null,e.state_name),c.a.createElement("h3",null,"Total cases: ",e.cases_number))}))))};var d=function(){var e=Object(n.useState)([{}]),a=Object(u.a)(e,2),t=a[0],l=a[1],s=Object(n.useState)([{}]),o=Object(u.a)(s,2),m=o[0],i=o[1];return Object(n.useEffect)((function(){r()({method:"GET",url:"https://coronavirus-monitor.p.rapidapi.com/coronavirus/johns_hopkins_united_states_latest.php",headers:{"content-type":"application/octet-stream","x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":"c0dba4d6a3msh6c39589aa21d903p1b6ce4jsn8b41b9308353"},params:{state:"Idaho"}}).then((function(e){console.log("states",e.data),l(e.data.usa_deaths),i(e.data.usa_cases_by_state)})).catch((function(e){console.log(e)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Deaths in Idaho"),c.a.createElement("section",null,t.map((function(e){return c.a.createElement("div",{className:"smalldiv",key:e.state_name},c.a.createElement("h2",null,e.state_name),c.a.createElement("h3",null,"Total deaths: ",c.a.createElement("span",null,e.death_cases)))}))),c.a.createElement("h1",null,"Cases in Idaho"),c.a.createElement("section",null,m.map((function(e){return c.a.createElement("div",{className:"smalldiv",key:e.state_name},c.a.createElement("h2",null,e.state_name),c.a.createElement("h3",null,"Total cases: ",e.cases_number))}))))};var E=function(){var e=Object(n.useState)([{}]),a=Object(u.a)(e,2),t=a[0],l=a[1],s=Object(n.useState)([{}]),o=Object(u.a)(s,2),m=o[0],i=o[1];return Object(n.useEffect)((function(){r()({method:"GET",url:"https://coronavirus-monitor.p.rapidapi.com/coronavirus/johns_hopkins_united_states_latest.php",headers:{"content-type":"application/octet-stream","x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":"c0dba4d6a3msh6c39589aa21d903p1b6ce4jsn8b41b9308353"},params:{state:"massachusetts"}}).then((function(e){console.log("states",e.data),l(e.data.usa_deaths),i(e.data.usa_cases_by_state)})).catch((function(e){console.log(e)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Deaths in massachusetts"),c.a.createElement("section",null,t.map((function(e){return c.a.createElement("div",{className:"smalldiv",key:e.state_name},c.a.createElement("h2",null,e.state_name),c.a.createElement("h3",null,"Total deaths: ",c.a.createElement("span",null,e.death_cases)))}))),c.a.createElement("h1",null,"Cases in massachusetts"),c.a.createElement("section",null,m.map((function(e){return c.a.createElement("div",{className:"smalldiv",key:e.state_name},c.a.createElement("h2",null,e.state_name),c.a.createElement("h3",null,"Total cases: ",e.cases_number))}))))};var _=function(){var e=Object(n.useState)([{}]),a=Object(u.a)(e,2),t=a[0],l=a[1],s=Object(n.useState)([{}]),o=Object(u.a)(s,2),m=o[0],i=o[1];return Object(n.useEffect)((function(){r()({method:"GET",url:"https://coronavirus-monitor.p.rapidapi.com/coronavirus/johns_hopkins_united_states_latest.php",headers:{"content-type":"application/octet-stream","x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":"c0dba4d6a3msh6c39589aa21d903p1b6ce4jsn8b41b9308353"},params:{state:"california"}}).then((function(e){console.log("states",e.data),l(e.data.usa_deaths),i(e.data.usa_cases_by_state)})).catch((function(e){console.log(e)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Deaths in California"),c.a.createElement("section",null,t.map((function(e){return c.a.createElement("div",{className:"smalldiv",key:e.state_name},c.a.createElement("h2",null,e.state_name),c.a.createElement("h3",null,"Total deaths: ",c.a.createElement("span",null,e.death_cases)))}))),c.a.createElement("h1",null,"Cases in California"),c.a.createElement("section",null,m.map((function(e){return c.a.createElement("div",{className:"smalldiv",key:e.state_name},c.a.createElement("h2",null,e.state_name),c.a.createElement("h3",null,"Total cases: ",e.cases_number))}))))};var b=function(){var e=Object(n.useState)([{}]),a=Object(u.a)(e,2),t=a[0],l=a[1],s=Object(n.useState)([{}]),o=Object(u.a)(s,2),m=o[0],i=o[1];return Object(n.useEffect)((function(){r()({method:"GET",url:"https://coronavirus-monitor.p.rapidapi.com/coronavirus/johns_hopkins_united_states_latest.php",headers:{"content-type":"application/octet-stream","x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":"c0dba4d6a3msh6c39589aa21d903p1b6ce4jsn8b41b9308353"},params:{state:"hawaii"}}).then((function(e){console.log("states",e.data),l(e.data.usa_deaths),i(e.data.usa_cases_by_state)})).catch((function(e){console.log(e)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Deaths in hawaii"),c.a.createElement("section",null,t.map((function(e){return c.a.createElement("div",{className:"smalldiv",key:e.state_name},c.a.createElement("h2",null,e.state_name),c.a.createElement("h3",null,"Total deaths: ",c.a.createElement("span",null,e.death_cases)))}))),c.a.createElement("h1",null,"Cases in hawaii"),c.a.createElement("section",null,m.map((function(e){return c.a.createElement("div",{className:"smalldiv",key:e.state_name},c.a.createElement("h2",null,e.state_name),c.a.createElement("h3",null,"Total cases: ",e.cases_number))}))))};var f=function(){var e=Object(n.useState)([{}]),a=Object(u.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){r()({method:"GET",url:"https://covidtracking.com/api/states"}).then((function(e){console.log("states",e);var a=[].concat(e.data);l(a.sort((function(e,a){return a.death-e.death})))})).catch((function(e){console.log(e)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"All States"),c.a.createElement("section",{className:"section"},t.map((function(e){return c.a.createElement("div",{className:"statediv",key:e.state},c.a.createElement("h2",null,e.state),c.a.createElement("h4",null,"Cases: ",e.positive),c.a.createElement("h4",null,"Total deaths: ",c.a.createElement("span",null,e.death)),c.a.createElement("h4",null,"Total test:",e.totalTestResults))}))))};var v=function(){var e=Object(n.useState)([{}]),a=Object(u.a)(e,2),t=a[0],l=a[1],s=Object(n.useState)([{}]),o=Object(u.a)(s,2),m=o[0],i=o[1];return Object(n.useEffect)((function(){r()({method:"GET",url:"https://coronavirus-monitor.p.rapidapi.com/coronavirus/johns_hopkins_united_states_latest.php",headers:{"content-type":"application/octet-stream","x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":"c0dba4d6a3msh6c39589aa21d903p1b6ce4jsn8b41b9308353"},params:{state:"montana"}}).then((function(e){console.log("states",e.data),l(e.data.usa_deaths),i(e.data.usa_cases_by_state)})).catch((function(e){console.log(e)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Deaths in Montana"),c.a.createElement("section",null,t.map((function(e){return c.a.createElement("div",{className:"smalldiv",key:e.state_name},c.a.createElement("h2",null,e.state_name),c.a.createElement("h3",null,"Total deaths: ",c.a.createElement("span",null,e.death_cases)))}))),c.a.createElement("h1",null,"Cases in Montana"),c.a.createElement("section",null,m.map((function(e){return c.a.createElement("div",{className:"smalldiv",key:e.state_name},c.a.createElement("h2",null,e.state_name),c.a.createElement("h3",null,"Total cases: ",e.cases_number))}))))};var j=function(){var e=Object(n.useState)({}),a=Object(u.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){r()({method:"GET",url:"https://covidtracking.com/api/us"}).then((function(e){console.log(e),l(e.data[0])})).catch((function(e){console.log(e)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Overview"),c.a.createElement("p",null,"Welcome to a colection of data for My family and myself. I wanted to keep all of the most important info in an easy to access format."),c.a.createElement("div",{className:"section"},c.a.createElement("div",{className:"card"},c.a.createElement("h2",null,"Total USA"),c.a.createElement("h3",null,"Cases "),c.a.createElement("h3",null,t.positive),c.a.createElement("h3",null,"Deaths"),c.a.createElement("h3",null,c.a.createElement("span",null,t.death)))))};var y=function(){return c.a.createElement("div",null,c.a.createElement("nav",null,c.a.createElement(m.b,{to:"/oregon"},"Oregon"),c.a.createElement(m.b,{to:"/idaho"},"Idaho"),c.a.createElement(m.b,{to:"/california"},"Cali"),c.a.createElement(m.b,{to:"/massachusetts"},"Mass"),c.a.createElement(m.b,{to:"/hawaii"},"Hawaii"),c.a.createElement(m.b,{to:"/montana"},"Montana"),c.a.createElement(m.b,{to:"/countries"},"World"),c.a.createElement(m.b,{to:"/stateoverview"},"States")),c.a.createElement(i.a,{exact:!0,path:"/corona",component:j}),c.a.createElement(i.a,{path:"/countries",component:h}),c.a.createElement(i.a,{path:"/oregon",component:p}),c.a.createElement(i.a,{path:"/idaho",component:d}),c.a.createElement(i.a,{path:"/massachusetts",component:E}),c.a.createElement(i.a,{path:"/california",component:_}),c.a.createElement(i.a,{path:"/hawaii",component:b}),c.a.createElement(i.a,{path:"/montana",component:v}),c.a.createElement(i.a,{path:"/stateoverview",component:f}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m.a,null,c.a.createElement(y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.d12a8685.chunk.js.map