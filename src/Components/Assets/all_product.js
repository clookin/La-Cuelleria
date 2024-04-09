import p1_img from './Cuelleria/cuello1.png'
import p2_img from './Cuelleria/cuello2.png'
import p3_img from './Cuelleria/cuello3.png'
import p4_img from './Cuelleria/cuello4.png'
import p5_img from "./Cuelleria/balaclava_6.png";
import p6_img from "./Cuelleria/balaclava_7.png";
import p7_img from "./Cuelleria/balaclava_9.png";
import p8_img from "./Cuelleria/balaclava_s_8.png";
import p9_img from "./Cuelleria/cuello_1.png";
import p10_img from "./Cuelleria/cuello_2.png";
import p11_img from "./Cuelleria/cuello_3.png";
import p12_img from "./Cuelleria/cuello_4.png";
import p13_img from "./Cuelleria/cuello_5.png";
import p14_img from "./Cuelleria/cuello_6.png";
import p15_img from "./Cuelleria/cuello_7.png";
import p16_img from "./Cuelleria/cuello_8.png";
import p17_img from "./Cuelleria/accesorio_1.png";
import p18_img from "./Cuelleria/accesorio_2.png";
import p19_img from "./Cuelleria/accesorio_3.png";
import p20_img from "./Cuelleria/accesorio_4.png";
import p21_img from "./Cuelleria/accesorio_5.png";
import p22_img from "./Cuelleria/accesorio_6.png";
import p23_img from "./Cuelleria/accesorio_7.png";
import p24_img from "./Cuelleria/accesorio_8.png";
import p25_img from "./Cuelleria/accesorio_9.png";
import p26_img from "./Cuelleria/accesorio_10.png";
import p27_img from "./Cuelleria/accesorio_11.png";
import p28_img from "./Cuelleria/accesorio_12.png";
import p29_img from "./Cuelleria/accesorio_13.png";
import p30_img from "./Cuelleria/accesorio_14.png";
import p31_img from "./Cuelleria/accesorio_15.png";
import p32_img from "./Cuelleria/accesorio_19.png";
import p33_img from "./Cuelleria/accesorio_20.png";
import p34_img from "./Cuelleria/accesorio_21.png";
import p35_img from "./Cuelleria/accesorio_22.png";
import p36_img from "./Cuelleria/accesorio_23.png";
import p37_img from "./Cuelleria/accesorio_24.png";

let all_product = [
  {
    id: 1,
    name: "Balaclava Bumper / UnderNeo",
    category: "balaclava",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 2,
    name: "Balaclava Rokie ",
    category: "balaclava",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 3,
    name: "Balaclava Demolish",
    category: "balaclava",
    image: p3_img,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 4,
    name: "Pack Duo Balaclava Demolish",
    category: "balaclava",
    image: p4_img,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 5,
    name: "Balaclava Sport XDA",
    category: "balaclava",
    image: p5_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 6,
    name: "Balaclava Sport Wild",
    category: "balaclava",
    image: p6_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 7,
    name: "Balaclava BitC",
    category: "balaclava",
    image: p7_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 8,
    name: "Balaclava Double",
    category: "balaclava",
    image: p8_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 9,
    name: "Cuello Basic",
    category: "cuello",
    image: p9_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 10,
    name: "Cuello Print Glow",
    category: "cuello",
    image: p10_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 11,
    name: "Cuello Print Basic",
    category: "cuello",
    image: p11_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 12,
    name: "Cuello Print Basic",
    category: "cuello",
    image: p12_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 13,
    name: "Cuello Lite basic ",
    category: "cuello",
    image: p13_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 14,
    name: "Cuello Print Lite",
    category: "cuello",
    image: p14_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 15,
    name: "Cuello Print Lite",
    category: "cuello",
    image: p15_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 16,
    name: "Cuello Print Lite",
    category: "cuello",
    image: p16_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 17,
    name: "Llavero Design",
    category: "accesorio",
    image: p17_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 18,
    name: "Guante Pro",
    category: "accesorio",
    image: p18_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 19,
    name: "Guante Reki",
    category: "accesorio",
    image: p19_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 20,
    name: "Guante LeM",
    category: "accesorio",
    image: p20_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 21,
    name: "Guante Protect Rm",
    category: "accesorio",
    image: p21_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 22,
    name: "Guante Lite RF",
    category: "accesorio",
    image: p22_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 23,
    name: "Guante Racer",
    category: "accesorio",
    image: p23_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 24,
    name: "Impermeable TP",
    category: "accesorio",
    image: p24_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 25,
    name: "Botas Impermeables Altas",
    category: "accesorio",
    image: p25_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 26,
    name: "Botas Impermeables Cortas",
    category: "accesorio",
    image: p26_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 27,
    name: "Guante Coquette",
    category: "accesorio",
    image: p27_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 28,
    name: "Guante Sport Revel",
    category: "accesorio",
    image: p28_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 29,
    name: "Guante Sport Rivle",
    category: "accesorio",
    image: p29_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 30,
    name: "Guante Sport PinkLer",
    category: "accesorio",
    image: p30_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 31,
    name: "Guante Sport Reflect",
    category: "accesorio",
    image: p31_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 32,
    name: "Bomba Bicicleta",
    category: "accesorio",
    image: p32_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 33,
    name: "Guaya Alarma Force",
    category: "accesorio",
    image: p33_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 34,
    name: "Kit Reparacion",
    category: "accesorio",
    image: p34_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 35,
    name: "Luz Led Tracera",
    category: "accesorio",
    image: p35_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 36,
    name: "Luz Led Eco Tracera",
    category: "accesorio",
    image: p36_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 37,
    name: "Luz Led Frontal",
    category: "accesorio",
    image: p37_img,
    new_price: 85.0,
    old_price: 120.5,
  },
];

export default all_product;
