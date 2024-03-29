'use client'
import { SeferSorgulamaKriterWSDVO } from '@/models/TrainRequest';
import { SeferSorgulamaResponse } from '@/models/TrainRespons';
import { useEffect, useState } from 'react';
import Switch from "react-switch";
import Datepicker from "react-tailwindcss-datepicker";
import stations from "@/constants/stations.json"


const SeferSorgula = () => {
  const [isLoading, setIsLoading] = useState(false);
  const[sw,setSw]=useState(false);
  const [kalkisIstasyonu, setKalkisIstasyonu] = useState<string>('');
  const [varisIstasyonu, setVarisIstasyonu] = useState<string>('');
  const [varisIstasyonlari, setVarisIstasyonlari] = useState<string[]>([]);
  const [dateValue, setDateValue] = useState({
    startDate: new Date(),
    endDate: new Date() // endDate'yi Date tipinde tutuyoruz
  });
  const handleDateValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    setDateValue(newValue);
    formValues.gidisTarih = dateValue.startDate.toString();
  };

  const handleSwChange = (checked: boolean) => {
    setSw(checked);
    setFormValues((prevValues) => ({
      ...prevValues,
      engelliKoltugu: checked,
    }));
  };
  
  
  const kalkisIstasyonuDegisti = (secilenKalkis:string) => {
    setKalkisIstasyonu(secilenKalkis);
    setVarisIstasyonu('');
    setVarisIstasyonlari([]);
  };
  const [formValues, setFormValues] = useState({
    binisIstasyonu: '',
    inisIstasyonu: '',
    binisIstasyonId: 0,
    inisIstasyonId: 0,
    gidisTarih: '',
    yolcuSayisi: 1,
  });
 
  useEffect(() => {
    const secilenKalkisIstasyonu = stations.find(
       (istasyon) => istasyon.istasyonAdi === kalkisIstasyonu
    );
 
    if (secilenKalkisIstasyonu) {
       setVarisIstasyonlari(secilenKalkisIstasyonu.toStationIds.map(id => {
          const varisIstasyonu = stations.find(istasyon => istasyon.istasyonId === id);
          formValues.binisIstasyonId = secilenKalkisIstasyonu!.istasyonId;
          formValues.inisIstasyonId = varisIstasyonu!.istasyonId;
          formValues.binisIstasyonu=secilenKalkisIstasyonu.istasyonAdi;
          formValues.inisIstasyonu=varisIstasyonu!.istasyonAdi;
          return varisIstasyonu ? varisIstasyonu.istasyonAdi : '';
       }));
    }
 }, [kalkisIstasyonu]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const fetchData = async () => {
    setIsLoading(true);

    const apiEndpoint = "https://api-yebsp.tcddtasimacilik.gov.tr/sefer/seferSorgula";
    const headers = {
      "Accept": "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
      "Authorization": "Basic ZGl0cmF2b3llYnNwOmRpdHJhMzQhdm8u",
      "Connection": "keep-alive",
      "Content-Type": "application/json",
      "Host": "api-yebsp.tcddtasimacilik.gov.tr",
      "Origin": "https://bilet.tcdd.gov.tr",
      "Referer": "https://bilet.tcdd.gov.tr/",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "cross-site",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      "sec-ch-ua": '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "Windows",
    };

    const fixedValues: Partial<SeferSorgulamaKriterWSDVO> = {
      satisKanali: 3,
      binisIstasyonu_isHaritaGosterimi: false,
      inisIstasyonu_isHaritaGosterimi: false,
      seyahatTuru: 1,
      bolgeselGelsin: false,
      islemTipi: 0,
      aktarmalarGelsin: true,
    };

    const requestData: SeferSorgulamaKriterWSDVO = {
      ...formValues,
      ...fixedValues,
    };
    
    console.log(requestData);
    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          kanalKodu: 3,
          dil: 0,
          seferSorgulamaKriterWSDVO: requestData,
        }),
      });

      if (response.ok) {
        const responseData: SeferSorgulamaResponse = await response.json();
        // Handle the response data as needed
        console.log(responseData);
      } else {
        // Handle errors
        console.error('Error fetching data:', response.statusText);
      }
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
  <form className="w-full max-w-2xl mx-auto">
    <div className="flex flex-wrap -mx-3 mb-6">
      {/* BİNİŞ ISTASYONU */}
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          Biniş İstasyonu
        </label>
        <div className="relative">
        <select
          className="block appearance-none w-full md:w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={kalkisIstasyonu}
          onChange={(e) => kalkisIstasyonuDegisti(e.target.value)}
        >
          <option value="">Kalkış İstasyonu Seçin</option>
          {stations.map((istasyon) => (
              <option key={istasyon.istasyonId} value={istasyon.istasyonAdi}>
                {istasyon.istasyonAdi}
              </option>
          ))}
        </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>    
      </div>
      {/* VARIŞ ISTASYONU */}
      <div className="w-full md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          Varış İstasyonu
        </label>
        <div className="relative">
        <select
          className="block appearance-none w-full md:w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={varisIstasyonu}
          onChange={(e) => setVarisIstasyonu(e.target.value)}
        >
          <option value="">Varış İstasyonu Seçin</option>
          {varisIstasyonlari.map((istasyon) => (
              <option key={istasyon} value={istasyon}>
                {istasyon}
              </option>
          ))}
        </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>    
      </div>
    </div>
      {/* TREN TARIHI */}
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
            Tren Tarihi
          </label>
          <div className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <Datepicker primaryColor={"green"} displayFormat={"MM/DD/YYYY"} placeholder='Tren Tarihi' asSingle={true} useRange={false} value={dateValue} onChange={handleDateValueChange} />
          </div>
      </div>
      {/* YOLCU SAYISI */}
      <div className="w-full md:w-1/3 px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          Yolcu Sayısı
        </label>
        <input
          name="yolcuSayisi"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-zip"
          type="number"
          value={formValues.yolcuSayisi}
          onChange={handleChange}
        />
      </div>
      {/* ENGELLI KOLTUĞU */}
      <div className="w-full md:w-1/3 px-3 ">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          Engelli Koltuğu
        </label> 
        <div className='relative py-3 px-3'>
        <Switch
          name="engelliKoltugu"
          onChange={handleSwChange}
          checked={sw}
          width={65}
          height={30}
          className=""
        />
        </div>
      </div>
    </div>

    <div className="flex flex-wrap  mb-2">
    <button
      disabled={isLoading}
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      onClick={fetchData}
    >
      {isLoading ? 'Loading...' : 'Bilet Aramaya Başla'}
    </button>
    </div>
  </form>

  );
};

export default SeferSorgula;
