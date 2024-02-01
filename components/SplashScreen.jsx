import React, { useState } from 'react'
import anime from 'animejs'
import Image from 'next/image'

const SplashScreen=({finishLoading})=> {
    const [isMounted,setIsMounted]=useState(false);
    const animate = ()=>{
        const loader = anime.timeline({
            complete:()=> finishLoading(),
        })
        loader.add({})
    }
  return (
    <div>
      Splash Screen
    </div>
  )
}

export default SplashScreen
