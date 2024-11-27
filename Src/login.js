import '../style.css'
import {El} from '../elmain.js'
import { router } from './navigo.js';
console.log("arash");
function Login(){
    return El({
    element:"div",
    className:"flex flex-col items-center gap-10 justify-center h-screen w-auto bg-zinc-50 ",
    children:[
      El({
      element: "img",
      className: "relative items-center justify-center bg-zinc-50 px-6 py-6 mt-20",
      src:"public/logo.png"}),
      El({
        element:"h2",
        children:["Login To Your Account"],
        className:"relative items-center justify-center text-zinc-950 "}),
        
        El({
          element:"div",
          className:"flex flex-col items-center gap-5 justify-center h-screen bg-zinc-50",
          children:[
         El({
          element:"input",
          id:"username",
          children:["Username"],
          placeholder:"Email",
          className:"relative items-center text-gray-500 justify-center border-none rounded px-8 py-2 bg-stone-200"
        }),El({
          element:"input",
          type:"password",
          id:"password",
          children:["Password"],
          placeholder:"Password",
          className:"relative items-center text-gray-500 justify-center border-none rounded px-8 py-2 bg-stone-200 mt-0.3"})
          ,El({
            element:"div",
            className:"flex",
            children:[El({
              element:"input",
              type:"checkbox",
              children:[""],
              className:"relative items-center text-zinc-950 justify-center border-none rounded px-8 py-2 bg-zinc-50 mt-0.3"
            }),El({
              element:"span",
              children:["Remember me?"]
             
            })]
          })
          ,El({
            element:"button",
            children:["Sign in"],
            className:"relative items-center text-zinc-50 justify-center border-none rounded-3xl bg-zinc-600 px-20 py-2"
            ,eventListener:[{event:"click",callback:()=>onclick()}]
          })
                   ]})
                  ]})
                  function onclick(){
                 
                    const email = document.getElementById('username').value;  
                    const password = document.getElementById('password').value;  
    
          
                    localStorage.setItem('email', email);  
                    localStorage.setItem('password', password);  
    
                   
                    alert(' saved!'); 
                    router.navigate("/home")
                    
                   }
                  
                   

                }
  

  export default Login;