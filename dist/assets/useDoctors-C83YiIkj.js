import{r as t,H as c}from"./index-DA7c_E-X.js";import{a as e}from"./axiosService-Cn-l7JZq.js";const u=()=>{const[r,s]=t.useState([]);return t.useEffect(()=>{e.get(c+"/doctors").then(({data:o})=>{console.log(o),s(o.doctors)}).catch(o=>console.log(o))},[s]),{doctors:r,setDoctors:s}};export{u};