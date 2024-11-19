import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from '../../counter.js'
import {El} from '../../elmain.js'



const container = 
El({
        element:"div",
        className:"flex flex-col items-center gap-10 justify-center h-screen bg-zinc-50 ",
        children:[El({
            element:"img",
            src:"public/WallpaperDog-20534715 1.png",
            children:[],
        }),El({
            element:"h2",
            className:"relative text-2xl px-380 py-91 leading-none mb-3 font-inter",
            children:["Let’s fulfill your fashion  "]}),
            El({
            element:"h2",
            className:"realtive text-2xl px-380 py-91 leading-7  mb-3 leading-none font-inter",
            children:["needs with shoearight now!"]
        }),El({
            element:"button",
            children:["Get Started"],
            className:"relative items-center text-zinc-50 justify-center border-none rounded-3xl bg-zinc-600 px-20 py-2"
          })
    ]})
    document.querySelector('#app').append(container)