import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from '../../counter.js'
import {El} from '../../elmain.js'



const container = El({
        element:"div",
        className:"flex flex-col items-center gap-10 justify-center h-screen bg-zinc-50 ",
        children:[
            El({
                element:"img",
                src:"public/Vector 1.png",
                className:"relative px-6 py-5 bg-zinc-950 border-none rounded-full",
                children:[]}),
                El
                ({
                    element:"h1",
                    children:["Shoea"],
                    className:"relative   text-zinc-950 font-bold px-6 py-6 text-5xl"
                })
                ,El
                ({
                element:"img",
                src:"public/spinner-atom.png",
                children:[],
                className:"relative px-1 py-1 justify-center top-40 items-center bg-zinc-50",
                })
        
        
        ]})
        document.querySelector('#app').append(container)