
import imgTiburon from '../assets/ImagenesNews/longimanus.jpg'
import imgOrca from '../assets/ImagenesNews/orca.jpg'
import imgCoral from '../assets/ImagenesNews/coral.jpg'
import imgDelfin from '../assets/ImagenesNews/delfin.jpg'

export const noticiasFaunaMarina = [
  {
    id: 1,
    title: "Investigadores descubren nueva especie de tiburón en el océano Índico",
    summary: "Un equipo de científicos ha identificado una nueva especie de tiburón en aguas del océano Índico. El tiburón, bautizado como 'Carcharhinus oceanicus', presenta características únicas en su morfología y comportamiento.",
    date: "2024-04-16",
    source: "Journal of Marine Biology",
    link: "https://www.ngenespanol.com/animales/descubren-una-nueva-especie-de-tiburon-en-las-aguas-profundas-de-australia/",
    image: imgTiburon
  },
  {
    id: 2,
    title: "Orca avistada en aguas inusuales cerca de la Antártida",
    summary: "Una orca ha sido avistada en aguas inusuales cerca de la Antártida, sorprendiendo a los investigadores que estudian la migración de estas majestuosas criaturas. Este avistamiento podría indicar cambios en los patrones de alimentación o migración de las orcas.",
    date: "2024-04-15",
    source: "Antarctic Marine Wildlife Research Institute",
    link: "https://www.lavanguardia.com/natural/20180124/44253904493/orcas-antartida-ataque-grupo-coordinado.html",
    image:   imgOrca
  },
  {
    id: 3,
    title: "Descubierta nueva especie de coral en el arrecife de la Gran Barrera",
    summary: "Una expedición científica ha descubierto una nueva especie de coral en el arrecife de la Gran Barrera, ampliando la diversidad biológica de este ecosistema único. El coral, denominado 'Acropora barrerensis', presenta colores vibrantes y estructuras morfológicas distintivas.",
    date: "2024-04-14",
    source: "Marine Ecology Progress Series",
    link: "https://www.eltiempo.com/mundo/latinoamerica/nuevo-hallazgo-descubren-dos-nuevos-arrecifes-de-coral-en-aguas-frias-y-profundas-820264",
    image: imgCoral
  },
  {
    id:4,
    title: "Científicos documentan comportamiento inusual de delfines en el Golfo de México",
    summary: "Investigadores han documentado un comportamiento inusual de delfines en el Golfo de México, donde se observa una mayor cooperación entre grupos y una frecuencia inusual de saltos acrobáticos. Este fenómeno podría estar relacionado con cambios en la disponibilidad de presas o factores ambientales.",
    date: "2024-04-13",
    source: "Gulf Marine Research Institute",
    link: "https://www.rcnradio.com/estilo-de-vida/medio-ambiente/video-imponente-avistamiento-de-una-manada-de-mas-de-50-delfines",
    image: imgDelfin
  }
];

console.log(noticiasFaunaMarina);
