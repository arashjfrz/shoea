


import {El} from '../../elmain.js'
import { router } from '../navigo.js';

export function Welcome(){
const container = El({element:"div",
    className:"flex flex-col items-center gap-10 justify-center h-screen bg-zinc-50 ",
    children:[El({
        element:"img",
        src:"public/onboarding page 2.png",
        className:"absolute items-center justify-center h-screen bg-zinc-50 " })
    ],eventListener:[{event:"click",callback:()=>router.navigate("/slideOne")}]
})
    return container;
}
