import { shuffleArray } from "../../utils/shuffle.js";
import { getSongs } from "../../utils/api.js";

export const songsArray = await getSongs();

// export const songsArray = [
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24",
//     name: "Última Saudade - Ao Vivo",
//     duration: "2:30",
//     artist: "Henrique & Juliano",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3",
//     id: 1,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02af41105c5cd91b28f2cf219d",
//     name: "Xonei",
//     duration: "2:34",
//     artist: "Henrique & Juliano",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3",
//     id: 2,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02656f8291d741ad247ef330fe",
//     name: "Paredões",
//     duration: "2:55",
//     artist: "Henrique & Juliano",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3",
//     id: 3,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24",
//     name: "Amigo Da Minha Saudade - Ao Vivo",
//     duration: "2:30",
//     artist: "Henrique & Juliano",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3",
//     id: 4,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24",
//     name: "Seja Ex - Ao Vivo",
//     duration: "3:12",
//     artist: "Henrique & Juliano",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3",
//     id: 5,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0299c540c0f78793fcea84a920",
//     name: "De Trás Pra Frente - Ao Vivo",
//     duration: "2:43",
//     artist: "Henrique & Juliano",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3",
//     id: 6,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0299c540c0f78793fcea84a920",
//     name: "Aquela Pessoa - Ao Vivo",
//     duration: "2:46",
//     artist: "Henrique & Juliano",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3",
//     id: 7,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0299c540c0f78793fcea84a920",
//     name: "Meu Amor - Ao Vivo",
//     duration: "2:54",
//     artist: "Henrique & Juliano",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3",
//     id: 8,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e025bb6668a856035550a66fc31",
//     name: "Como É Que A Gente Fica - Ao Vivo",
//     duration: "2:43",
//     artist: "Henrique & Juliano",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3",
//     id: 9,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24",
//     name: "Romântico - Ao Vivo",
//     duration: "3:03",
//     artist: "Henrique & Juliano",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-saudade.mp3",
//     id: 10,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02d8bfb4567b1b5e5bc4da915b",
//     name: "Oh Garota Eu Quero Você Só Pra Mim",
//     duration: "2:46",
//     artist: "MC Tuto",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/barbie.mp3",
//     id: 11,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02f412f43fad4c3ffab163287c",
//     name: "Barbie",
//     duration: "3:12",
//     artist: "MC Tuto",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/barbie.mp3",
//     id: 12,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02905f574e927e59ada3fc2c97",
//     name: "Do Job",
//     duration: "3:13",
//     artist: "MC Tuto",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/barbie.mp3",
//     id: 13,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02dc16c0b3939b95e09076ec5e",
//     name: "A Danada Me Ligando",
//     duration: "4:43",
//     artist: "MC Tuto",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/barbie.mp3",
//     id: 14,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0299ca4be43858f41a3bad9728",
//     name: "2025",
//     duration: "2:52",
//     artist: "MC Tuto",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/barbie.mp3",
//     id: 15,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02a8e9382ce68ad5d8758bd998",
//     name: "E Aí Como Que Tá ?",
//     duration: "2:14",
//     artist: "MC Tuto",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/barbie.mp3",
//     id: 16,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e022d1affc39c1329a4e3138424",
//     name: "THE BOX MEDLEY FUNK 2",
//     duration: "4:26",
//     artist: "MC Tuto",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/barbie.mp3",
//     id: 17,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02320f4a08913b939a8637c301",
//     name: "Boy Besta",
//     duration: "7:04",
//     artist: "MC Tuto",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/barbie.mp3",
//     id: 18,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02700a3fcafbd8498c78f16cb0",
//     name: "Vida de Artista",
//     duration: "3:16",
//     artist: "MC Tuto",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/barbie.mp3",
//     id: 19,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0212d096992d1a94a34672ecd2",
//     name: "Mó Fita",
//     duration: "4:16",
//     artist: "MC Tuto",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/barbie.mp3",
//     id: 20,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02af41105c5cd91b28f2cf219d",
//     name: "Cantada Boba - Ao Vivo",
//     duration: "3:03",
//     artist: "Jorge & Mateus",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/cantada-boba.mp3",
//     id: 21,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02af41105c5cd91b28f2cf219d",
//     name: "Xonei",
//     duration: "2:34",
//     artist: "Jorge & Mateus",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/cantada-boba.mp3",
//     id: 22,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02af41105c5cd91b28f2cf219d",
//     name: "Haverá Sinais - Ao Vivo",
//     duration: "3:11",
//     artist: "Jorge & Mateus",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/cantada-boba.mp3",
//     id: 23,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02afcda189d3e44b4abefddecb",
//     name: "Logo Eu",
//     duration: "2:35",
//     artist: "Jorge & Mateus",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/cantada-boba.mp3",
//     id: 24,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e028aca7c95468481cf5411060e",
//     name: "Amo Noite E Dia - Live In Sao Paulo / 2010",
//     duration: "3:03",
//     artist: "Jorge & Mateus",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/cantada-boba.mp3",
//     id: 25,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02c0e0704dbc02116c26cfea45",
//     name: "Marca Evidente",
//     duration: "3:09",
//     artist: "Jorge & Mateus",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/cantada-boba.mp3",
//     id: 26,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02d50fbb2113e9d82d0677abce",
//     name: "Paredes - Ao Vivo",
//     duration: "3:04",
//     artist: "Jorge & Mateus",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/cantada-boba.mp3",
//     id: 27,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02047ad702243f8d6ff1318fe0",
//     name: "Anti Amor - Ao Vivo",
//     duration: "2:45",
//     artist: "Jorge & Mateus",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/cantada-boba.mp3",
//     id: 28,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02af41105c5cd91b28f2cf219d",
//     name: "Tem Amor, Tem Volta - Ao Vivo",
//     duration: "2:22",
//     artist: "Jorge & Mateus",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/cantada-boba.mp3",
//     id: 29,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02d50fbb2113e9d82d0677abce",
//     name: "Pra Sempre Com Você - Ao Vivo",
//     duration: "3:27",
//     artist: "Jorge & Mateus",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/cantada-boba.mp3",
//     id: 30,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0235bc4bc847696d28e2882b16",
//     name: "Última Noite",
//     duration: "2:37",
//     artist: "NATTAN",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-noite.mp3",
//     id: 31,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0231f12348a3c599711764f399",
//     name: "Fechando o Circo - Ao Vivo",
//     duration: "2:14",
//     artist: "NATTAN",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-noite.mp3",
//     id: 32,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02430015276203dca5020dab68",
//     name: "Amor Na Praia",
//     duration: "2:36",
//     artist: "NATTAN",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-noite.mp3",
//     id: 33,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0235bc4bc847696d28e2882b16",
//     name: "Pega Cabuloso - Ao Vivo em São Paulo",
//     duration: "2:17",
//     artist: "NATTAN",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-noite.mp3",
//     id: 34,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0235bc4bc847696d28e2882b16",
//     name: "Eu Vou Sentar - Ao Vivo em São Paulo",
//     duration: "2:34",
//     artist: "NATTAN",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-noite.mp3",
//     id: 35,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0274345b842e1757d896e17efc",
//     name: "Gata - Barbie",
//     duration: "3:05",
//     artist: "NATTAN",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-noite.mp3",
//     id: 36,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02d5356fc9a130d1aba8ed8529",
//     name: "Love Gostosinho - Ao Vivo",
//     duration: "2:43",
//     artist: "NATTAN",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-noite.mp3",
//     id: 37,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02e4393f87095008e8108c27aa",
//     name: "Morena",
//     duration: "2:59",
//     artist: "NATTAN",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-noite.mp3",
//     id: 38,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0233b914605980a1bd62e540a0",
//     name: "Medley Canoa - Putaria no Escuro / Menina do Job / Escada do Prédio / Mal Caminho / Pede Que eu Te Dou",
//     duration: "6:07",
//     artist: "NATTAN",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-noite.mp3",
//     id: 39,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0281311177234ecc9aa518cbcc",
//     name: "Copo Americano - Ao Vivo",
//     duration: "2:23",
//     artist: "NATTAN",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ultima-noite.mp3",
//     id: 40,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e025645e61562deebdda78755b6",
//     name: "Coração Partido (Corazón Partío) - Ao Vivo",
//     duration: "3:15",
//     artist: "Grupo Menos É Mais",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/adorei.mp3",
//     id: 41,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02d2fc1ee38f06c4c760380925",
//     name: "Nada Com Nada - Ao Vivo",
//     duration: "2:41",
//     artist: "Grupo Menos É Mais",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/adorei.mp3",
//     id: 42,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0251e655c934f5bed04f867335",
//     name: "Lapada Dela - Ao Vivo",
//     duration: "2:39",
//     artist: "Grupo Menos É Mais",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/adorei.mp3",
//     id: 43,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02bff274fbb1ae44381674a053",
//     name: "Vitamina C - Ao Vivo",
//     duration: "2:34",
//     artist: "Grupo Menos É Mais",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/adorei.mp3",
//     id: 44,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02625ae5aac6877af40cbe60a3",
//     name: "Amizade Com Ex - Ao Vivo",
//     duration: "2:54",
//     artist: "Grupo Menos É Mais",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/adorei.mp3",
//     id: 45,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e026610a107e9ea9ed0b1a496af",
//     name: "Matadinha De Saudade - Ao Vivo",
//     duration: "2:56",
//     artist: "Grupo Menos É Mais",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/adorei.mp3",
//     id: 46,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02b548a20a597a88b29932513b",
//     name: "Pot-Pourri: Melhor Eu Ir / Ligando Os Fatos / Sonho de Amor / Deixa Eu Te Querer - Ao Vivo",
//     duration: "8:41",
//     artist: "Grupo Menos É Mais",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/adorei.mp3",
//     id: 47,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0247955b951c6a89e1e5a6777a",
//     name: "Bebe e Vem Me Procurar / Quem Ama Sente Saudade (Ao Vivo)",
//     duration: "3:36",
//     artist: "Grupo Menos É Mais",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/adorei.mp3",
//     id: 48,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02f8d7d1ab89742bc023f6fe2f",
//     name: "Adorei",
//     duration: "2:59",
//     artist: "Grupo Menos É Mais",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/adorei.mp3",
//     id: 49,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e025645e61562deebdda78755b6",
//     name: "Jejum de Amor / Caixa Postal / Vida Vazia - Ao Vivo",
//     duration: "5:11",
//     artist: "Grupo Menos É Mais",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/adorei.mp3",
//     id: 50,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02625ae5aac6877af40cbe60a3",
//     name: "Amizade Com Ex - Ao Vivo",
//     duration: "2:54",
//     artist: "Zé Neto & Cristiano",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/amizade-com-ex.mp3",
//     id: 51,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0239833b5940945cf013e8406c",
//     name: "Barulho Do Foguete - Ao Vivo",
//     duration: "2:13",
//     artist: "Zé Neto & Cristiano",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/amizade-com-ex.mp3",
//     id: 52,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02c4796946a89b9ca6c525fd65",
//     name: "Pulando o Muro - Ao Vivo",
//     duration: "2:32",
//     artist: "Zé Neto & Cristiano",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/amizade-com-ex.mp3",
//     id: 53,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02a2248f44da4d5fa4cd2647dc",
//     name: "Sombra Desconhecida - Ao Vivo",
//     duration: "2:40",
//     artist: "Zé Neto & Cristiano",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/amizade-com-ex.mp3",
//     id: 54,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0273f044b863be0033982cd767",
//     name: "Deu Moral - Ao Vivo",
//     duration: "2:02",
//     artist: "Zé Neto & Cristiano",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/amizade-com-ex.mp3",
//     id: 55,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02ff93ff99ca25cbd3607247bb",
//     name: "Notificação Preferida - Ao Vivo",
//     duration: "3:02",
//     artist: "Zé Neto & Cristiano",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/amizade-com-ex.mp3",
//     id: 56,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0273f044b863be0033982cd767",
//     name: "Foi Intenso - Ao Vivo",
//     duration: "2:12",
//     artist: "Zé Neto & Cristiano",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/amizade-com-ex.mp3",
//     id: 57,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02ff93ff99ca25cbd3607247bb",
//     name: "Largado Às Traças - Ao Vivo",
//     duration: "3:54",
//     artist: "Zé Neto & Cristiano",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/amizade-com-ex.mp3",
//     id: 58,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02eb1117ed6a411587785d7ae4",
//     name: "Amigo Taxista",
//     duration: "3:17",
//     artist: "Zé Neto & Cristiano",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/amizade-com-ex.mp3",
//     id: 59,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0239833b5940945cf013e8406c",
//     name: "Oi Balde - Ao Vivo",
//     duration: "2:39",
//     artist: "Zé Neto & Cristiano",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/amizade-com-ex.mp3",
//     id: 60,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02489e68ca16ec1777e954bdb9",
//     name: "Universo",
//     duration: "3:10",
//     artist: "Matheus & Kauan",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/universo.mp3",
//     id: 61,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0213fd8e80d5b8fc0936cf9cc6",
//     name: "Cronômetro - Ao Vivo",
//     duration: "2:45",
//     artist: "Matheus & Kauan",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/universo.mp3",
//     id: 62,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02216f5c1f9c0923ed13f5b2c8",
//     name: "Triplex - Ao Vivo",
//     duration: "2:58",
//     artist: "Matheus & Kauan",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/universo.mp3",
//     id: 63,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02616d92fbae47d54b05897623",
//     name: "Me Ama Mesmo - Ao Vivo",
//     duration: "3:01",
//     artist: "Matheus & Kauan",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/universo.mp3",
//     id: 64,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0284bc28fabab28025e3d6a98c",
//     name: "Ilusão De Ótica - Ao Vivo",
//     duration: "2:59",
//     artist: "Matheus & Kauan",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/universo.mp3",
//     id: 65,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e029135c41b1da1eecd682c4dc6",
//     name: "Quarta Cadeira - Ao Vivo",
//     duration: "3:44",
//     artist: "Matheus & Kauan",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/universo.mp3",
//     id: 66,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e028a730a04d2bd719ebf688110",
//     name: "Aham - Ao Vivo",
//     duration: "2:29",
//     artist: "Matheus & Kauan",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/universo.mp3",
//     id: 67,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e029135c41b1da1eecd682c4dc6",
//     name: "Vou Ter Que Superar - Ao Vivo",
//     duration: "3:09",
//     artist: "Matheus & Kauan",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/universo.mp3",
//     id: 68,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e027d96c3456ae2572847148954",
//     name: "Decide Aí - Na Praia / Ao Vivo",
//     duration: "2:42",
//     artist: "Matheus & Kauan",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/universo.mp3",
//     id: 69,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02971d3cfd684cdda409b2fd0e",
//     name: "SOGRA - Ao Vivo",
//     duration: "2:47",
//     artist: "Matheus & Kauan",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/universo.mp3",
//     id: 70,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02d8bfb4567b1b5e5bc4da915b",
//     name: "Oh Garota Eu Quero Você Só Pra Mim",
//     duration: "2:46",
//     artist: "Oruam",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/oh-garota.mp3",
//     id: 71,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e022641dabf71490db793d28b40",
//     name: "Diz Aí Qual é o Plano?",
//     duration: "11:43",
//     artist: "Oruam",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/oh-garota.mp3",
//     id: 72,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02f860aaca835fcec2e6a79449",
//     name: "Rolé na Favela de Nave",
//     duration: "3:12",
//     artist: "Oruam",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/oh-garota.mp3",
//     id: 73,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02498d6200d0dc31e20ad696dd",
//     name: "Horas Iguais",
//     duration: "4:06",
//     artist: "Oruam",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/oh-garota.mp3",
//     id: 74,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e029fe1c4dea8fdbb452b66b271",
//     name: "Poesia Acústica 13",
//     duration: "10:28",
//     artist: "Oruam",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/oh-garota.mp3",
//     id: 75,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02e41fa5b33e0b7829d79f3a1a",
//     name: "Sereia",
//     duration: "4:54",
//     artist: "Oruam",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/oh-garota.mp3",
//     id: 76,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02d80ab0f7ef4e3f2b8d4666ae",
//     name: "Ninguém Deu Nada pra Nós",
//     duration: "3:12",
//     artist: "Oruam",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/oh-garota.mp3",
//     id: 77,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e029fe1c4dea8fdbb452b66b271",
//     name: "Poesia Acústica 15",
//     duration: "11:20",
//     artist: "Oruam",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/oh-garota.mp3",
//     id: 78,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02011ebdf7237a1ad220a23f13",
//     name: "Para de Mentir",
//     duration: "4:14",
//     artist: "Oruam",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/oh-garota.mp3",
//     id: 79,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02e466cf38272114ec6cb18c51",
//     name: "Papo de Agustinho",
//     duration: "2:53",
//     artist: "Oruam",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/oh-garota.mp3",
//     id: 80,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02758869a0a0c15010dae72426",
//     name: "Peça Íntima",
//     duration: "2:49",
//     artist: "Murilo Huff",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/peca-intima.mp3",
//     id: 81,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02c61b4691d0ba09631399ffd3",
//     name: "Me Caiu Tão Bem - Ao Vivo",
//     duration: "2:36",
//     artist: "Murilo Huff",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/peca-intima.mp3",
//     id: 82,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e024c8656adecdb34cdbd119617",
//     name: "Pula Fora - Ao Vivo",
//     duration: "2:29",
//     artist: "Murilo Huff",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/peca-intima.mp3",
//     id: 83,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e021b390eda1e4ed3e1528d8cb7",
//     name: "Se Eu Não Te Amasse Tanto Assim / Agora / Me Apaixonei Pela Pessoa Errada - Ao Vivo",
//     duration: "5:10",
//     artist: "Murilo Huff",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/peca-intima.mp3",
//     id: 84,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e021b390eda1e4ed3e1528d8cb7",
//     name: "Você Me Vira A Cabeça / Na Sua Estante / Ausência - Ao Vivo",
//     duration: "5:28",
//     artist: "Murilo Huff",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/peca-intima.mp3",
//     id: 85,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02f780a237b116b5decb468d75",
//     name: "Dois Enganados",
//     duration: "2:52",
//     artist: "Murilo Huff",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/peca-intima.mp3",
//     id: 86,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02e16b9a0cfbb3d7259ed01b27",
//     name: "Anestesiado - Ao Vivo",
//     duration: "2:52",
//     artist: "Murilo Huff",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/peca-intima.mp3",
//     id: 87,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e024f661bf90b04b29935a931a1",
//     name: "FALTA DE QUÊ?",
//     duration: "2:32",
//     artist: "Murilo Huff",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/peca-intima.mp3",
//     id: 88,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e021b390eda1e4ed3e1528d8cb7",
//     name: "Pior é Te Perder / Dois / Memórias - Ao Vivo",
//     duration: "5:16",
//     artist: "Murilo Huff",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/peca-intima.mp3",
//     id: 89,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02462239ad51bf390607c6854f",
//     name: "Disk Recaída - Ao Vivo",
//     duration: "2:37",
//     artist: "Murilo Huff",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/peca-intima.mp3",
//     id: 90,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02e295ee75598a12d933800298",
//     name: "Mentirosa - Ao Vivo",
//     duration: "2:45",
//     artist: "Hugo & Guilherme",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/mentirosa.mp3",
//     id: 91,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02cff9134ad2ce6516f50e8e31",
//     name: "Namora Ela - Ao Vivo",
//     duration: "2:37",
//     artist: "Hugo & Guilherme",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/mentirosa.mp3",
//     id: 92,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02cc97936e407973a912dd75cb",
//     name: "O Meu Coração Em Suas Mãos (Colgando en tu manos) - Ao Vivo",
//     duration: "3:24",
//     artist: "Hugo & Guilherme",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/mentirosa.mp3",
//     id: 93,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e024c8656adecdb34cdbd119617",
//     name: "Pula Fora - Ao Vivo",
//     duration: "2:29",
//     artist: "Hugo & Guilherme",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/mentirosa.mp3",
//     id: 94,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02ca0a5889a7c1110f9654607b",
//     name: "1 Minuto - Ao Vivo",
//     duration: "2:38",
//     artist: "Hugo & Guilherme",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/mentirosa.mp3",
//     id: 95,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0278b03b7534ce5a81046d36da",
//     name: "Morena De Goiânia - Ao Vivo",
//     duration: "2:46",
//     artist: "Hugo & Guilherme",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/mentirosa.mp3",
//     id: 96,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0278b03b7534ce5a81046d36da",
//     name: "Vazou Na Braquiara - Ao Vivo",
//     duration: "2:44",
//     artist: "Hugo & Guilherme",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/mentirosa.mp3",
//     id: 97,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02cc97936e407973a912dd75cb",
//     name: "Imagina - Ao Vivo",
//     duration: "3:19",
//     artist: "Hugo & Guilherme",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/mentirosa.mp3",
//     id: 98,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e021b390eda1e4ed3e1528d8cb7",
//     name: "Pior é Te Perder / Dois / Memórias - Ao Vivo",
//     duration: "5:16",
//     artist: "Hugo & Guilherme",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/mentirosa.mp3",
//     id: 99,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02589da421f5679c437c3f6b63",
//     name: "Mal Feito - Ao Vivo",
//     duration: "2:57",
//     artist: "Hugo & Guilherme",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/mentirosa.mp3",
//     id: 100,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e023c4401cf203d79e03976be97",
//     name: "Malvadinho",
//     duration: "2:00",
//     artist: "MC LUUKY",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/malvadinho.mp3",
//     id: 101,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e027bb613913eb23bdea44fe255",
//     name: "300 no 7",
//     duration: "3:15",
//     artist: "MC LUUKY",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/malvadinho.mp3",
//     id: 102,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0212d096992d1a94a34672ecd2",
//     name: "Mó Fita",
//     duration: "4:16",
//     artist: "MC LUUKY",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/malvadinho.mp3",
//     id: 103,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e023c4401cf203d79e03976be97",
//     name: "Nem Ligo Pro Amor",
//     duration: "2:44",
//     artist: "MC LUUKY",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/malvadinho.mp3",
//     id: 104,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02ae79921170b53d5ee1a6620f",
//     name: "Vou Passar Gelinho",
//     duration: "2:22",
//     artist: "MC LUUKY",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/malvadinho.mp3",
//     id: 105,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e023c4401cf203d79e03976be97",
//     name: "Sempre na Simplicidade",
//     duration: "5:00",
//     artist: "MC LUUKY",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/malvadinho.mp3",
//     id: 106,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e023c4401cf203d79e03976be97",
//     name: "Só Menina Linda",
//     duration: "8:10",
//     artist: "MC LUUKY",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/malvadinho.mp3",
//     id: 107,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e023c4401cf203d79e03976be97",
//     name: "Desacato",
//     duration: "7:18",
//     artist: "MC LUUKY",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/malvadinho.mp3",
//     id: 108,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e021caaf0b2d235f200990fc7ad",
//     name: "THE BOX MEDLEY FUNK 4",
//     duration: "4:54",
//     artist: "MC LUUKY",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/malvadinho.mp3",
//     id: 109,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02a6967475e3ee7d2ed48381fb",
//     name: "Deixa o Cavalo Correr",
//     duration: "6:29",
//     artist: "MC LUUKY",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/malvadinho.mp3",
//     id: 110,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02cadc0764596a80c6fd2c4b8c",
//     name: "Cópia Proibida",
//     duration: "2:39",
//     artist: "Léo Foguete",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/um-palmo.mp3",
//     id: 111,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02cadc0764596a80c6fd2c4b8c",
//     name: "Última Noite - Solo",
//     duration: "2:34",
//     artist: "Léo Foguete",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/um-palmo.mp3",
//     id: 112,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02971d3cfd684cdda409b2fd0e",
//     name: "UM PALMO - Ao Vivo",
//     duration: "2:18",
//     artist: "Léo Foguete",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/um-palmo.mp3",
//     id: 113,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0235bc4bc847696d28e2882b16",
//     name: "Última Noite",
//     duration: "2:37",
//     artist: "Léo Foguete",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/um-palmo.mp3",
//     id: 114,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02c654c27a61041f4ba5dc228e",
//     name: "Sem Você",
//     duration: "2:22",
//     artist: "Léo Foguete",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/um-palmo.mp3",
//     id: 115,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02cadc0764596a80c6fd2c4b8c",
//     name: "Inconfiável",
//     duration: "2:27",
//     artist: "Léo Foguete",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/um-palmo.mp3",
//     id: 116,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02cadc0764596a80c6fd2c4b8c",
//     name: "Cabelo de Sol",
//     duration: "2:56",
//     artist: "Léo Foguete",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/um-palmo.mp3",
//     id: 117,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02cadc0764596a80c6fd2c4b8c",
//     name: "Obrigado Deus",
//     duration: "2:25",
//     artist: "Léo Foguete",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/um-palmo.mp3",
//     id: 118,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02cadc0764596a80c6fd2c4b8c",
//     name: "Morena Avelã",
//     duration: "2:13",
//     artist: "Léo Foguete",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/um-palmo.mp3",
//     id: 119,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02cadc0764596a80c6fd2c4b8c",
//     name: "A Distância Tá Maltratando",
//     duration: "2:40",
//     artist: "Léo Foguete",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/um-palmo.mp3",
//     id: 120,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e028fb74b037de7c899f12ed199",
//     name: "A Noite (La Notte) - Ao Vivo",
//     duration: "3:21",
//     artist: "Gusttavo Lima",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/embaixador.mp3",
//     id: 121,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02376d7c9f79569d0a24db5c53",
//     name: "Embaixador (Mãe)",
//     duration: "3:07",
//     artist: "Gusttavo Lima",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/embaixador.mp3",
//     id: 122,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e028fb74b037de7c899f12ed199",
//     name: "Morar Nesse Motel",
//     duration: "3:07",
//     artist: "Gusttavo Lima",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/embaixador.mp3",
//     id: 123,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e025840f88453448723ce907a53",
//     name: "Balada - Ao Vivo",
//     duration: "3:21",
//     artist: "Gusttavo Lima",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/embaixador.mp3",
//     id: 124,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0200fdf13c7847364bc106a640",
//     name: "A Noite (feat. Gusttavo Lima)",
//     duration: "2:45",
//     artist: "Gusttavo Lima",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/embaixador.mp3",
//     id: 125,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0278a62cd11c719962d1d36aba",
//     name: "Canudinho - Ao Vivo",
//     duration: "2:04",
//     artist: "Gusttavo Lima",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/embaixador.mp3",
//     id: 126,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02a028f7cac4c091981f87e669",
//     name: "Desejo Imortal (It Must Have Been Love) - Ao Vivo",
//     duration: "3:04",
//     artist: "Gusttavo Lima",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/embaixador.mp3",
//     id: 127,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0249e34499a2fe0834f879ac18",
//     name: "Tocando Em Frente - Ao Vivo",
//     duration: "3:08",
//     artist: "Gusttavo Lima",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/embaixador.mp3",
//     id: 128,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0278a62cd11c719962d1d36aba",
//     name: "Mala dos Porta-Mala - Ao Vivo",
//     duration: "2:33",
//     artist: "Gusttavo Lima",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/embaixador.mp3",
//     id: 129,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02ab7c9976c44bfbe90f93dbdc",
//     name: "Termina Comigo Antes",
//     duration: "3:07",
//     artist: "Gusttavo Lima",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/embaixador.mp3",
//     id: 130,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0247cbd521916fc422be1a5c9a",
//     name: "Fui Mlk",
//     duration: "2:54",
//     artist: "Nilo",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/fui-mlk.mp3",
//     id: 131,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02c85fa2e60afc7883d372af4b",
//     name: "Pode Me Bloquear",
//     duration: "2:29",
//     artist: "Nilo",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/fui-mlk.mp3",
//     id: 132,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02a9e219620673d2538903ff42",
//     name: "Sorrisin De Puto",
//     duration: "1:46",
//     artist: "Nilo",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/fui-mlk.mp3",
//     id: 133,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0291283a0e9a7c6a329e768c50",
//     name: "MTG SEQUELEI - TOPO SESSIONS VOL. 3",
//     duration: "2:08",
//     artist: "Nilo",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/fui-mlk.mp3",
//     id: 134,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e023b4601ac40b3bf6208744093",
//     name: "Fui Muleque",
//     duration: "2:41",
//     artist: "Nilo",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/fui-mlk.mp3",
//     id: 135,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02cd79eddeee972fe633a1d70e",
//     name: "Whisky Importado",
//     duration: "3:27",
//     artist: "Nilo",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/fui-mlk.mp3",
//     id: 136,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02e9a953a49142cb530d6c3fed",
//     name: "Eu Nasci Assim",
//     duration: "3:41",
//     artist: "Nilo",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/fui-mlk.mp3",
//     id: 137,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02751391b4c3cd10e94aa648d5",
//     name: "MTG Pode Me Bloquear",
//     duration: "1:36",
//     artist: "Nilo",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/fui-mlk.mp3",
//     id: 138,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0245b867536aed4c0ade37adb3",
//     name: "Sorrisin de Puto",
//     duration: "2:17",
//     artist: "Nilo",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/fui-mlk.mp3",
//     id: 139,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02ddf45c5c53aec81dc3b18188",
//     name: "Mini Saia",
//     duration: "3:30",
//     artist: "Nilo",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/fui-mlk.mp3",
//     id: 140,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02971d3cfd684cdda409b2fd0e",
//     name: "UM PALMO - Ao Vivo",
//     duration: "2:18",
//     artist: "Luan Pereira",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/body-splash.mp3",
//     id: 141,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e025149293f9363bf98647d6636",
//     name: "Body Splash - Ao Vivo",
//     duration: "2:34",
//     artist: "Luan Pereira",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/body-splash.mp3",
//     id: 142,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e028918fa0c3cf355061519f67c",
//     name: "Saveiro",
//     duration: "2:24",
//     artist: "Luan Pereira",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/body-splash.mp3",
//     id: 143,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e027793aab53413a2d1c45179b3",
//     name: "Wi-Fi - Ao Vivo",
//     duration: "2:41",
//     artist: "Luan Pereira",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/body-splash.mp3",
//     id: 144,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02971d3cfd684cdda409b2fd0e",
//     name: "SOGRA - Ao Vivo",
//     duration: "2:47",
//     artist: "Luan Pereira",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/body-splash.mp3",
//     id: 145,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02462239ad51bf390607c6854f",
//     name: "Aceita Que Ela Tá Comigo - Ao Vivo",
//     duration: "2:33",
//     artist: "Luan Pereira",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/body-splash.mp3",
//     id: 146,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e024f661bf90b04b29935a931a1",
//     name: "FALTA DE QUÊ?",
//     duration: "2:32",
//     artist: "Luan Pereira",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/body-splash.mp3",
//     id: 147,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02674119092640472d8e59c2c8",
//     name: "DE ANTES PRA HOJE",
//     duration: "3:24",
//     artist: "Luan Pereira",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/body-splash.mp3",
//     id: 148,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02971d3cfd684cdda409b2fd0e",
//     name: "FAZENDEIRO - Ao Vivo",
//     duration: "2:11",
//     artist: "Luan Pereira",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/body-splash.mp3",
//     id: 149,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02f72284893884b5bb83353a3b",
//     name: "DEPOIS DO RODEIO",
//     duration: "2:45",
//     artist: "Luan Pereira",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/body-splash.mp3",
//     id: 150,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0265bf696c1df34686746b73c4",
//     name: "Sujeito Homem - Ao Vivo",
//     duration: "2:58",
//     artist: "Guilherme & Benuto",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/sujeito-homem.mp3",
//     id: 151,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0231f12348a3c599711764f399",
//     name: "Fechando o Circo - Ao Vivo",
//     duration: "2:14",
//     artist: "Guilherme & Benuto",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/sujeito-homem.mp3",
//     id: 152,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0268669c389be5d24e7d22f750",
//     name: "Manda um Oi - Ao Vivo",
//     duration: "2:46",
//     artist: "Guilherme & Benuto",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/sujeito-homem.mp3",
//     id: 153,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e021941a0bf9eab9be2ee17d4b0",
//     name: "Chorosa - Ao Vivo",
//     duration: "2:35",
//     artist: "Guilherme & Benuto",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/sujeito-homem.mp3",
//     id: 154,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02f5b0de3662611ca2985cae11",
//     name: "Duas Três",
//     duration: "2:36",
//     artist: "Guilherme & Benuto",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/sujeito-homem.mp3",
//     id: 155,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02c92447425bf70c686c93c514",
//     name: "Haja Colírio (feat. Hugo & Guilherme) - Ao Vivo",
//     duration: "2:53",
//     artist: "Guilherme & Benuto",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/sujeito-homem.mp3",
//     id: 156,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e021941a0bf9eab9be2ee17d4b0",
//     name: "Término Covarde - Ao Vivo",
//     duration: "2:33",
//     artist: "Guilherme & Benuto",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/sujeito-homem.mp3",
//     id: 157,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0269b7ad43c232770044b8e107",
//     name: "Torre Eiffel - Ao Vivo",
//     duration: "3:22",
//     artist: "Guilherme & Benuto",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/sujeito-homem.mp3",
//     id: 158,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0206592b394c38e8fc7c01ff61",
//     name: "Beijo Equivocado",
//     duration: "2:36",
//     artist: "Guilherme & Benuto",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/sujeito-homem.mp3",
//     id: 159,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02462d242561ae2ceac784fe18",
//     name: "Vestido Curto - Ao Vivo",
//     duration: "2:31",
//     artist: "Guilherme & Benuto",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/sujeito-homem.mp3",
//     id: 160,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02cca35237571dbce12a43fbb4",
//     name: "Leão",
//     duration: "2:46",
//     artist: "Marília Mendonça",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/dois-enganados.mp3",
//     id: 161,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02f780a237b116b5decb468d75",
//     name: "Dois Enganados",
//     duration: "2:52",
//     artist: "Marília Mendonça",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/dois-enganados.mp3",
//     id: 162,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e025eba99fd76c96ae206756326",
//     name: "Troca de Calçada",
//     duration: "3:23",
//     artist: "Marília Mendonça",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/dois-enganados.mp3",
//     id: 163,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e027b4293f65f8fe7003c29279c",
//     name: "Infiel - Ao Vivo",
//     duration: "3:21",
//     artist: "Marília Mendonça",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/dois-enganados.mp3",
//     id: 164,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e027b4293f65f8fe7003c29279c",
//     name: "Como Faz Com Ela - Ao Vivo",
//     duration: "2:30",
//     artist: "Marília Mendonça",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/dois-enganados.mp3",
//     id: 165,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e021e23e8a7efc947b1d7e5836e",
//     name: "Supera - Ao Vivo",
//     duration: "2:27",
//     artist: "Marília Mendonça",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/dois-enganados.mp3",
//     id: 166,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e021e8897179af39a4aaa591be7",
//     name: "De Quem É A Culpa?",
//     duration: "3:40",
//     artist: "Marília Mendonça",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/dois-enganados.mp3",
//     id: 167,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e023e31e22966bafac96b433824",
//     name: "Vai Lá Em Casa Hoje - Ao Vivo",
//     duration: "3:11",
//     artist: "Marília Mendonça",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/dois-enganados.mp3",
//     id: 168,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0292aaf0254618b4de33029ab1",
//     name: "Eu Sei de Cor - Ao Vivo",
//     duration: "3:05",
//     artist: "Marília Mendonça",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/dois-enganados.mp3",
//     id: 169,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e024ed454af2f9a6719f4155241",
//     name: "Esqueça-Me Se For Capaz",
//     duration: "2:49",
//     artist: "Marília Mendonça",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/dois-enganados.mp3",
//     id: 170,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0272f5ede1b025cf73249c83ce",
//     name: "PARECE - Ao Vivo",
//     duration: "2:24",
//     artist: "Luan Santana",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/parece.mp3",
//     id: 171,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0272f5ede1b025cf73249c83ce",
//     name: "CLONE - Ao Vivo",
//     duration: "2:44",
//     artist: "Luan Santana",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/parece.mp3",
//     id: 172,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0272f5ede1b025cf73249c83ce",
//     name: "CERTEZA - Ao Vivo",
//     duration: "3:08",
//     artist: "Luan Santana",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/parece.mp3",
//     id: 173,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0273f044b863be0033982cd767",
//     name: "Melação - Ao Vivo",
//     duration: "2:57",
//     artist: "Luan Santana",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/parece.mp3",
//     id: 174,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0282344e9572ebd4236160c6fb",
//     name: "EU SOU SENTIMENTO",
//     duration: "3:06",
//     artist: "Luan Santana",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/parece.mp3",
//     id: 175,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0293b7f0d53b20302ee6e28f13",
//     name: "Tudo Que Você Quiser - Ao Vivo",
//     duration: "4:09",
//     artist: "Luan Santana",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/parece.mp3",
//     id: 176,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e021711f153c860d22a47e70893",
//     name: "Eu, Você, O Mar e Ela",
//     duration: "3:07",
//     artist: "Luan Santana",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/parece.mp3",
//     id: 177,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02e035c09f33e2a896edef4bdb",
//     name: "DEJA VU",
//     duration: "3:19",
//     artist: "Luan Santana",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/parece.mp3",
//     id: 178,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02845b7e5dfb634d609b154e7a",
//     name: "MEIO TERMO - Ao Vivo",
//     duration: "2:55",
//     artist: "Luan Santana",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/parece.mp3",
//     id: 179,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02c847c97de21b491fc0daf8b5",
//     name: "Chuva de Arroz - Ao Vivo",
//     duration: "3:06",
//     artist: "Luan Santana",
//     audio: "https://jornada-fullstack.s3.us-east-2.amazonaws.com/parece.mp3",
//     id: 180,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02d2fc1ee38f06c4c760380925",
//     name: "Nada Com Nada - Ao Vivo",
//     duration: "2:41",
//     artist: "Gustavo Mioto",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/nada-com-nada.mp3",
//     id: 181,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02c61b4691d0ba09631399ffd3",
//     name: "Me Caiu Tão Bem - Ao Vivo",
//     duration: "2:36",
//     artist: "Gustavo Mioto",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/nada-com-nada.mp3",
//     id: 182,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0262af36bd5c8f7c12a5b0c6d8",
//     name: "Fronteira - Ao Vivo",
//     duration: "2:46",
//     artist: "Gustavo Mioto",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/nada-com-nada.mp3",
//     id: 183,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02047ad702243f8d6ff1318fe0",
//     name: "Anti Amor - Ao Vivo",
//     duration: "2:45",
//     artist: "Gustavo Mioto",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/nada-com-nada.mp3",
//     id: 184,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0219bb2fb697a42c1084d71f6c",
//     name: "Eu Gosto Assim - Ao Vivo",
//     duration: "2:28",
//     artist: "Gustavo Mioto",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/nada-com-nada.mp3",
//     id: 185,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e024abfa282f55d62fcf562de69",
//     name: "Solteiro Não Trai - Ao Vivo",
//     duration: "3:07",
//     artist: "Gustavo Mioto",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/nada-com-nada.mp3",
//     id: 186,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02ffd2d660deff5b892388b8db",
//     name: "Eu Fujo",
//     duration: "2:37",
//     artist: "Gustavo Mioto",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/nada-com-nada.mp3",
//     id: 187,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02047ad702243f8d6ff1318fe0",
//     name: "Contramão - Ao Vivo",
//     duration: "3:11",
//     artist: "Gustavo Mioto",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/nada-com-nada.mp3",
//     id: 188,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0247084e79f27e97b3b4f21ba0",
//     name: "Cama Embrasa",
//     duration: "2:58",
//     artist: "Gustavo Mioto",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/nada-com-nada.mp3",
//     id: 189,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0234be7f78f89236075cc69c56",
//     name: "Com Ou Sem Mim - Ao Vivo",
//     duration: "3:21",
//     artist: "Gustavo Mioto",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/nada-com-nada.mp3",
//     id: 190,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e028594dca64e3bb87aa620362e",
//     name: "Imã de Problema",
//     duration: "2:17",
//     artist: "Henry Freitas",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ima-de-problema.mp3",
//     id: 191,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02ae682a9f57cbb545e5d20a17",
//     name: "Tando",
//     duration: "3:32",
//     artist: "Henry Freitas",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ima-de-problema.mp3",
//     id: 192,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e023a4e35b91f953a8be1848c2e",
//     name: "Dia 1 - Versão Forró",
//     duration: "2:54",
//     artist: "Henry Freitas",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ima-de-problema.mp3",
//     id: 193,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e028594dca64e3bb87aa620362e",
//     name: "Toque de Romance (feat. Dodô Pressão) - Remix Forró",
//     duration: "3:37",
//     artist: "Henry Freitas",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ima-de-problema.mp3",
//     id: 194,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02606797e233df5f9099190dc9",
//     name: "Tem Café",
//     duration: "2:38",
//     artist: "Henry Freitas",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ima-de-problema.mp3",
//     id: 195,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e021f2dfab84eb482d552e15826",
//     name: "Barulho do Prazer",
//     duration: "2:30",
//     artist: "Henry Freitas",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ima-de-problema.mp3",
//     id: 196,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e029bb5775ce0dfc66b855f9bda",
//     name: "Eu Nem Lembro",
//     duration: "2:39",
//     artist: "Henry Freitas",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ima-de-problema.mp3",
//     id: 197,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e0276a4c1b1067d49c85c151351",
//     name: "Malvadinho (Sei Que Ela é do Job)",
//     duration: "3:13",
//     artist: "Henry Freitas",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ima-de-problema.mp3",
//     id: 198,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e02926e93b1e9507dc027ab7f90",
//     name: "Novinha Bandida",
//     duration: "2:46",
//     artist: "Henry Freitas",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ima-de-problema.mp3",
//     id: 199,
//   },
//   {
//     image: "https://i.scdn.co/image/ab67616d00001e021a28c191d45f61eb7b7af3b1",
//     name: "Match Perfeito",
//     duration: "1:47",
//     artist: "Henry Freitas",
//     audio:
//       "https://jornada-fullstack.s3.us-east-2.amazonaws.com/ima-de-problema.mp3",
//     id: 200,
//   },
// ];

export const songsIndexedByArtist = songsArray.reduce((acc, currentSong) => {
  const artist = currentSong.artist;
  if (artist in acc) {
    acc[artist].push(currentSong);
  } else {
    acc[artist] = [currentSong];
  }
  return acc;
}, {});

export const songsIndexedById = songsArray.reduce((acc, currentSong) => {
  const { _id } = currentSong;

  acc[_id] = currentSong;
  return acc;
}, {});

shuffleArray(songsArray);

console.log(songsIndexedById);


// 🚀 Resumo do que o código faz:
// Indexação das músicas por artista:

// Cria um objeto onde as chaves são os nomes dos artistas e os valores são arrays de músicas de cada artista.
// Indexação das músicas por ID:

// Cria um objeto onde as chaves são os IDs das músicas e os valores são as próprias músicas.
// Embaralha o array de músicas usando a função shuffleArray.

// Exibe no console as músicas indexadas por ID.