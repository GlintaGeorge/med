import{g as b,r as u,u as O,j as e,U as f}from"./index-AyN6017N.js";import{F as B}from"./Footer-CyZoeMUy.js";import{a as v}from"./axiosService-WCFtW8_u.js";import{s as N}from"./toaster-BZcZoKtN.js";import{N as I}from"./Navbar-tIQjwYHW.js";import"./axios-B6xwUs71.js";import"./index-VWaDGczM.js";import"./logout-BbMCICVU.js";import"./Set_Get-jfIHgayU.js";import"./logo-CI8ZzsgX.js";import"./iconBase-CLBn-FAW.js";var S="https://js.stripe.com/v3",D=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,w="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",M=function(){for(var t=document.querySelectorAll('script[src^="'.concat(S,'"]')),n=0;n<t.length;n++){var s=t[n];if(D.test(s.src))return s}return null},y=function(t){var n="",s=document.createElement("script");s.src="".concat(S).concat(n);var a=document.head||document.body;if(!a)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return a.appendChild(s),s},F=function(t,n){!t||!t._registerWrapper||t._registerWrapper({name:"stripe-js",version:"3.4.1",startTime:n})},d=null,h=null,p=null,R=function(t){return function(){t(new Error("Failed to load Stripe.js"))}},T=function(t,n){return function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))}},A=function(t){return d!==null?d:(d=new Promise(function(n,s){if(typeof window>"u"||typeof document>"u"){n(null);return}if(window.Stripe&&t&&console.warn(w),window.Stripe){n(window.Stripe);return}try{var a=M();if(a&&t)console.warn(w);else if(!a)a=y(t);else if(a&&p!==null&&h!==null){var c;a.removeEventListener("load",p),a.removeEventListener("error",h),(c=a.parentNode)===null||c===void 0||c.removeChild(a),a=y(t)}p=T(n,s),h=R(s),a.addEventListener("load",p),a.addEventListener("error",h)}catch(i){s(i);return}}),d.catch(function(n){return d=null,Promise.reject(n)}))},U=function(t,n,s){if(t===null)return null;var a=t.apply(void 0,n);return F(a,s),a},m,P=!1,E=function(){return m||(m=A(null).catch(function(t){return m=null,Promise.reject(t)}),m)};Promise.resolve().then(function(){return E()}).catch(function(r){P||console.warn(r)});var V=function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];P=!0;var a=Date.now();return E().then(function(c){return U(c,n,a)})};const _=()=>{const r=b(l=>l.appointment),t=b(l=>l.UserSlice.id),[n,s]=u.useState(!1),[a,c]=u.useState(0),[i,j]=u.useState("Online"),W=O();console.log(t,"userid in the checkout page getting "),u.useEffect(()=>{(async()=>{try{const o=await v.get(`${f}/fetchWallet/${t}`);c(o.data.getWallet.balance)}catch(o){console.error("Error fetching wallet balance:",o)}})()},[t]);const g=l=>{l==="Wallet"&&j("Wallet"),l==="Online"&&j("Online")},C=async()=>{try{const l=await V("pk_test_51PSbs6K4DaQ8xohLNzirCpJFF6po1DfJaNjBQHljcyRkVWMNBvutVh1WUMBNVQFP5de2880Up2dDSbI75VhRDJn200aMuJkkrm");console.log(r),console.log(i);const o=await v.post(`${f}/appointments`,{...r,userId:t,paymentMethod:i});if(o.data.id){const x=await l;await(x==null?void 0:x.redirectToCheckout({sessionId:o.data.id}))}else N(o.data.message,"error")}catch(l){console.log("Error in creating order",l)}},k=async()=>{try{console.log(r),console.log(i);const l=await v.post(`${f}/walletPayment`,{...r,userId:t,paymentMethod:i});if(l.data.success){const o=l.data.createBooking._id;W(`/payment_status/${o}?success=true`)}else N(l.data.message,"error")}catch{console.log("error in wallet payment")}},L=()=>{s(!0)};return e.jsx("div",{className:"container mx-auto p-4",children:r&&e.jsxs("div",{className:"border p-4 rounded shadow-lg grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"text-sm text-gray-700 mb-4",children:[e.jsxs("div",{className:"border p-4 rounded mb-4",children:[e.jsx("img",{src:r.doctorImage,alt:"doctor image",className:"w-64 h-64 object-cover rounded-md mb-4"}),e.jsxs("h1",{className:"text-2xl font-bold mb-4",children:["Dr. ",r.doctorName]}),e.jsxs("p",{className:"text-xl",children:[e.jsx("strong",{children:"Amount:"})," ₹",r.fee]}),e.jsxs("p",{className:"text-xl",children:[e.jsx("strong",{children:"Date:"})," ",r.date]}),e.jsxs("p",{className:"text-xl",children:[e.jsx("strong",{children:"Time:"})," ",r.timeSlot]})]}),e.jsx("div",{className:"text-sm text-gray-900 mb-4",children:e.jsx("div",{className:"border p-4 rounded mb-4",children:e.jsxs("p",{className:"text-xl",children:[e.jsx("strong",{children:"Wallet Balance:"})," ₹",a||0]})})})]}),e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"border p-4 rounded mb-4",children:[e.jsx("h2",{className:"text-xl font-bold mb-2",children:"Patients Details"}),e.jsxs("div",{className:"grid gap-4",children:[e.jsx("div",{className:"flex flex-col",children:e.jsxs("h1",{children:["Patient Name  :  ",r.patientName]})}),e.jsx("div",{className:"flex flex-col",children:e.jsxs("h1",{children:["Patient Age  :  ",r.patientAge]})}),e.jsx("div",{className:"flex flex-col",children:e.jsxs("h1",{children:["Patient Number  :  ",r.patientNumber]})}),e.jsx("div",{className:"flex flex-col",children:e.jsxs("h1",{children:["Patient Problem  :  ",r.patientProblem]})})]})]}),e.jsxs("div",{className:"border p-4 rounded mb-4",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Payment"}),e.jsxs("div",{className:"p-2",children:[e.jsx("label",{className:"block mb-2 text-sm font-semibold text-gray-900",children:"Payment Method"}),e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"mb-2 flex items-center",children:[e.jsx("input",{className:"mr-2 h-5 w-5",type:"radio",name:"paymentMethod",id:"Online",value:"Online",defaultChecked:!0,onChange:()=>g("Online")}),e.jsx("label",{className:"hover:cursor-pointer",htmlFor:"Online",children:"Online"})]}),e.jsxs("div",{className:"mb-2 flex items-center",children:[e.jsx("input",{className:"mr-2 h-5 w-5",type:"radio",name:"paymentMethod",id:"Wallet",value:"Wallet",onChange:()=>g("Wallet")}),e.jsx("label",{className:"hover:cursor-pointer",htmlFor:"Wallet",children:"Wallet"})]}),e.jsx("div",{className:"text-right",children:e.jsx("button",{className:"bg-blue-500 text-white py-2 px-4 rounded",onClick:L,children:"Proceed to Payment"})})]}),n&&i==="Online"&&e.jsx("div",{className:"mt-4",children:e.jsx("button",{onClick:C,className:"bg-cyan-950 px-4 py-2 rounded-md shadow-md mt-4 ml-2",children:e.jsx("p",{className:"text-white",children:"Stripe Online Payment"})})}),n&&i==="Wallet"&&e.jsx("div",{className:"mt-4",children:e.jsx("button",{onClick:k,className:"bg-green-500 px-4 py-2 rounded-md shadow-md mt-4 ml-2",children:e.jsx("p",{className:"text-white",children:"Wallet Payment"})})})]})]})]})]})})};function ee(){return e.jsxs("div",{children:[e.jsx(I,{}),e.jsx(_,{}),e.jsx(B,{})]})}export{ee as default};