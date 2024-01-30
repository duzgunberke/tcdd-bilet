export interface SeferSorgulamaKriterWSDVO {
    satisKanali?: number | undefined;
    binisIstasyonu: string;
    binisIstasyonu_isHaritaGosterimi?: boolean | undefined;
    inisIstasyonu: string;
    inisIstasyonu_isHaritaGosterimi?: boolean | undefined;
    seyahatTuru?: number | undefined;
    gidisTarih: string;
    bolgeselGelsin?: boolean | undefined;
    islemTipi?: number | undefined;
    yolcuSayisi: number;
    aktarmalarGelsin?: boolean | undefined;
    binisIstasyonId?: number | undefined;
    inisIstasyonId?: number | undefined;
  }
  export interface Istasyon {
    istasyonId: number;
    istasyonAdi: string;
    toStationIds: number[];
  }
  // Headers
export interface RequestHeaders {
    'Accept': string;
    'Accept-Encoding': string;
    'Accept-Language': string;
    'Authorization': string;
    'Connection': string;
    'Content-Length': number;
    'Content-Type': string;
    'Host': string;
    'Origin': string;
    'Referer': string;
    'Sec-Fetch-Dest': string;
    'Sec-Fetch-Mode': string;
    'Sec-Fetch-Site': string;
    'User-Agent': string;
    'sec-ch-ua': string;
    'sec-ch-ua-mobile': string;
    'sec-ch-ua-platform': string;
  }