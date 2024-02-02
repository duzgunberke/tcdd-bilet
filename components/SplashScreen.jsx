"use client"
import React, { useEffect, useState } from 'react'
import anime from 'animejs'
import Image from 'next/image'

const SplashScreen=({finishLoading})=> {
    const [ismounted,setIsmounted]=useState(false);
    const animate = ()=>{
        const loader = anime.timeline({
            complete:()=> finishLoading(),
        })
        loader.add({
          targets:"#logo",
          delay:0,
          scale:1,
          duration:500,
          easing:"easeInOutExpo"
        }).add({
          targets:"#logo",
          delay:0,
          scale:1.5,
          duration:500,
          easing:"easeInOutExpo"
        }).add({
          targets:"#logo",
          delay:0,
          scale:1,
          duration:500,
          easing:"easeInOutExpo"
        }).add({
          targets:"#logo",
          delay:0,
          scale:1.5,
          duration:500,
          easing:"easeInOutExpo"
        })
    }
    useEffect(()=>{
      const timeout=setTimeout(()=>setIsmounted(true),10)
      animate()
      return ()=>clearTimeout(timeout)
    },[])
  return (
    <div 
      className="flex h-screen items-center justify-center"
      isMounted={ismounted}
    >
      <Image id="logo" src="/icon.png" alt="TCDD Bilet Bul" width={60} height={60}/>
    </div>
  )
}

export default SplashScreen
