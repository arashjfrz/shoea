
import {loading} from "./loading/loading";
import {Welcome} from "./loading/loading1";
import loading2 from "./loading/loading2";
import Navigo from "navigo";
import loading3 from "./loading/loading3";
import loading4 from "./loading/loading4";
import  landing  from "./landing";
import Login from "./login";

export const router = new Navigo("/");

export const changePages = (target) => {
const root = document.getElementById("rootsEl");
console.log(target);
root.innerHTML = "";
root.append(target())
};

export const changePages2 = (target, item)=>{

target(item).then((res)=> {

const root = document.getElementById("rootsEl");
root.innerHTML = "";
root.append(res);
})
}


router
.on("/", ()=> {
changePages(loading);
})
.on("/welcome", ()=>{
changePages(Welcome);
})
.on("/slideOne", ()=>{
changePages(loading2);
})
// .on("/slideTwo", ()=>{
// changePages(loading3);
// })
// .on("/slideThree", ()=>{
// changePages(loading4);
// })
// // .on("/login", ()=>{
// // changePages(Login);
// // })
.on("/home", ()=>{
changePages(landing);
})


