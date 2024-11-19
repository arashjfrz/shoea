import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from '../../counter.js'
import {El} from '../../elmain.js'


const container = El({element:"div",
    className:"flex flex-col items-center gap-10 justify-center h-screen bg-zinc-50 ",
    children:[El({
        element:"img",
        src:"public/onboarding page 2.png",
        className:"absolute items-center justify-center h-screen bg-zinc-50 " })
    ]})
    
document.querySelector('#app').append(container)