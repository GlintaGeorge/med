import{r as l,u as p,j as e,H as u}from"./index-DA7c_E-X.js";import{a as x}from"./axiosService-Cn-l7JZq.js";import{A as h}from"./Header-DTWCZNIh.js";import{A as f}from"./Sidebar-BuSkWbNm.js";import{s as r}from"./toaster-CDKtkdIq.js";import{A as b}from"./index-Dbgn26G4.js";import"./axios-B6xwUs71.js";import"./index-VWaDGczM.js";import"./logout-N69Hl7hh.js";import"./Set_Get-jfIHgayU.js";import"./index-CAQ6KIhw.js";import"./iconBase-0wn4fA3J.js";const F=()=>{const[o,i]=l.useState(""),n=p(),c=async a=>{var m,d;a.preventDefault();try{(await x.post(`${u}/addDepartment`,{departmentName:o})).data.success?(r("Department added successfully!","success"),n("/admin/department")):r("Failed to add department","error")}catch(t){let s="An error occurred while adding the department";t instanceof b&&(s=((d=(m=t.response)==null?void 0:m.data)==null?void 0:d.message)||s),r(s,"error"),console.error("Error adding department:",t)}};return e.jsxs("div",{className:"flex h-screen",children:[e.jsx(f,{}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx(h,{}),e.jsxs("div",{className:"p-6",children:[e.jsx("h1",{className:"text-2xl font-bold mb-4 text-center text-fuchsia-950",children:"Add Department"}),e.jsxs("form",{onSubmit:c,className:"max-w-lg mx-auto",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"departmentName",className:"block text-fuchsia-700 text-sm font-bold mb-2",children:"Department Name"}),e.jsx("input",{type:"text",id:"departmentName",value:o,onChange:a=>i(a.target.value),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("button",{type:"submit",className:"px-4 py-2 bg-fuchsia-950 text-white rounded hover:bg-fuchsia-600",children:"Add Department"}),e.jsx("button",{type:"button",onClick:()=>n("/admin/department"),className:"px-4 py-2 bg-fuchsia-300 text-gray-700 rounded hover:bg-fuchsia-400",children:"Cancel"})]})]})]})]})]})};export{F as default};