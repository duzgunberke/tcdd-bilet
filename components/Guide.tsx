import Image from 'next/image'
import React from 'react'
import SeferSorgula from './Tcdd'

const Guide = () => {
  return (
    <section id="guide" className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/train.svg" alt="train" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Sizin için buradayız
        </p>
        <div className="flex flex-wrap justify-between gap-8 lg:gap-2">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[590px]">Sizin için uygun boş koltuğu bulmaya çalışalım</h2>
          <div >
              <SeferSorgula />
          </div>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image 
          src="/railway.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Nereye</p>
                <p className="bold-16 text-green-50">🛤️🚄</p>
              </div>
              <p className="bold-20 mt-2">İzmit</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Nereden</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Konya (Selçuklu)</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide