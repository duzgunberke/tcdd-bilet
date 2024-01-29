
export interface VagonListesi {
  seferTeskilatId: number;
  seferBaslikId: number;
  vagonBaslikId: number;
  vagonSiraNo: number;
  baslangicIstasyonId: number;
  bitisIstasyonId: number;
  aktif: boolean;
  baslangicIstasyonAdi: string;
  bitisIstasyonAdi: string;
  bosYer: number;
}

export interface VagonTipleriBosYerUcret {
  vagonTipId: number;
  vagonTip: string;
  mevkiNo: number;
  kalanSayi: number;
  hesapliBiletFiyati: number;
  standartBiletFiyati: number;
  esnekBiletFiyati: number;
  vagonListesi: VagonListesi[];
  ubsKodu: number;
  gosterimArtiUcret: number;
  kalanEngelliKoltukSayisi: number;
  kalanYatakSayisi: number;
}

export interface SeferSorgulamaSonuc {
  aktarmaNo: number;
  aktarmaSiraNo: number;
  seyahatTuru: number;
  trenId: number;
  trenAdi: string;
  trenTipi: string;
  trenKodu: string;
  trenTuruTktId: number;
  seferAdi: string;
  seferId: number;
  binisTarih: string;
  inisTarih: string;
  vagonTipleriBosYerUcret: VagonTipleriBosYerUcret[];
  satisDurum: number;
  rezDurum: number;
  binisIstasyonu: string;
  inisIstasyonu: string;
  seferGosterimDVO: {
    seciliBiletTipi: number;
  };
  vagonHaritasindanKoltukSecimi: number;
  rezUcretOrani: number;
  rezUcretTutari: number;
  bolgeselTren: boolean;
  binisIstasyonId: number;
  inisIstasyonId: number;
  seferVagonListesi: VagonListesi[];
  hesapliBiletIade: boolean;
  hesapliBiletDegisiklik: boolean;
  standartBiletIade: boolean;
  standartBiletDegisiklik: boolean;
  esnekBiletIade: boolean;
  esnekBiletDegisiklik: boolean;
  tersTren: boolean;
  minimumTasimaUcreti: number;
  gunNotu: string;
  hesapliBiletAcigaCevirme: boolean;
  standartBiletAcigaCevirme: boolean;
  esnekBiletAcigaCevirme: boolean;
  hesapliBiletDegisiklikHakki: number;
  standartBiletDegisiklikHakki: number;
  esnekBiletDegisiklikHakki: number;
  captcha: boolean;
  durusTablosu: any;
  iliskiTipi: any;
  kirilimOrtakVagonlarDVOs: any;
  bolgeselTrenKalanBiletSayisi: any;
}

export interface SeferSorgulamaResponse {
  cevapBilgileri: {
    cevapKodu: string;
    cevapMsj: string;
    detay: any;
  };
  sayi: any;
  seferSorgulamaSonucList: SeferSorgulamaSonuc[];
}

