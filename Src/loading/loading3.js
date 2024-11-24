import {El} from '../../elmain.js'


function jaytwo(){
const container = 
El({
        element:"div",
        className:"flex flex-col items-center gap-10 justify-center h-screen bg-zinc-50 ",
        children:[El({
            element:"img",
            src:"public/WallpaperDog-20397673 1.png",
            children:[],
        }),El({
            element:"h2",
            className:"relative text-2xl px-380 py-91 leading-none mb-3 font-inter",
            children:["Your satisfaction is "]}),
            El({
            element:"h2",
            className:"realtive text-2xl px-380 py-91 leading-7  mb-3 leading-none font-inter",
            children:["our number one periority"]
        }),El({
            element:"button",
            children:["Next"],
            className:"relative items-center text-zinc-50 justify-center border-none rounded-3xl bg-zinc-600 px-20 py-2"
            ,eventListener:[{event:"click",callback:()=>router.navigate("/slideOne")}]
          })
           
    ]})
    return container;
}

    export default container;