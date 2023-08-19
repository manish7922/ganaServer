const loginData=[]


const musicData=[
    {
        id:1,
        imgSrc:"https://pagalnew.com/coverimages/Chandni-Sachet-Tandon-500-500.jpg",
        songName:"Chandni",
        src:"../musicSongs/songs/Chandni.mp3",
        singer:["Sachet Tandon", "Parampara Tandon"]

    },
    {
        id:2,
        imgSrc:"https://pagalnew.com/coverimages/dil-bechara-neha-kakkar-500-500.jpg",
        songName:"Dil Bechara",
        src:"../musicSongs/songs/Dil Bechara.mp3",
        singer:["Neha Kakkar", "Rohanpreet Singh"]

    },
    {
        id:3,
        imgSrc:"https://pagalnew.com/coverimages/ve-kamleya-rocky-aur-rani-kii-prem-kahaani-500-500.jpg",
        songName:"Ve Kamleya",
        src:"../musicSongs/songs/VeKamleya.mp3",
        singer:["Arijit Singh", "Shreya Ghoshal", "Shadab Faridi", "Altamash Faridi"]

    },
    {
        id:4,
        imgSrc:"https://pagalnew.com/coverimages/dil-se-dil-tak-bawaal-500-500.jpg",
        songName:"Dil Se Dil Tak",
        src:"../musicSongs/songs/DilSeDilTak.mp3",
        singer:["Laqshay Kapoor", "Akashdeep Sengupta", "Suvarna Tiwari"]

    },
    {
        id:5,
        imgSrc:"https://pagalnew.com/coverimages/Ek-Tu-Hi-Hai-Tanishk-Bagchi-500-500.jpg",
        songName:"Ek Tu Hi Hai",
        src:"../musicSongs/songs/EkTuHiHai.mp3",
        singer:["Akshay Anand", "Aditi Budhathoki"]

    },
    {
        id:6,
        imgSrc:"https://pagalnew.com/coverimages/Raatan-Kaaliyan-Ayushmann-Khurrana-500-500.jpg",
        songName:"Raatan Kaaliyan",
        src:"../musicSongs/songs/RaatanKaaliyan.mp3",
        singer:["Ayushmann Khurrana"]

    },
    {
        id:7,
        imgSrc:"https://pagalnew.com/coverimages/tum-kya-mile-rocky-aur-rani-kii-prem-kahaani-500-500.jpg",
        songName:"Tum Kya Mile",
        src:"../musicSongs/songs/TumKyaMile.mp3",
        singer:["Arijit Singh", "Shreya Ghoshal"]

    },
    {
        id:8,
        imgSrc:"https://pagalnew.com/coverimages/sun-sajni-satyaprem-ki-katha-500-500.jpg",
        songName:"Sun Sajni",
        src:"../musicSongs/songs/SunSajni.mp3",
        singer:["Parampara Tandon", "Piyush Mehroliyaa"]

    },
    {
        id:9,
        imgSrc:"https://pagalnew.com/coverimages/dhindhora-baje-re-rocky-aur-rani-kii-prem-kahaani-500-500.jpg",
        songName:"Dhindhora Baje Re",
        src:"../musicSongs/songs/DhindhoraBajeRe.mp3",
        singer:["Darshan Raval", "Bhoomi Trivedi"]

    },
    {
        id:10,
        imgSrc:"https://pagalnew.com/coverimages/dilon-ki-doriyan-bawaal-500-500.jpg",
        songName:"Dilon Ki Doriyan",
           src:"../musicSongs/songs/DilonKiDoriyan.mp3",
        singer:["Vishal Mishra", "Zahrah S Khan"]

    },
    {
        id:11,
        imgSrc:"https://pagalnew.com/coverimages/what-jhumka-rocky-aur-rani-kii-prem-kahaani-500-500.jpg",
        songName:"What Jhumka",
           src:"../musicSongs/songs/WhatJhumka.mp3",
        singer:["Arijit Singh", "Jonita Gandhi", "Ranveer Singh"]

    },
    {
        id:12,
        imgSrc:"https://pagalnew.com/coverimages/tumhe-kitna-pyaar-karte-bawaal-500-500.jpg",
        songName:"Tumhe Kitna Pyaar Karte",
           src:"../musicSongs/songs/TumheKitnaPyaarKarte.mp3",
        singer:["Arijit Singh"]

    },
    {
        id:13,
        imgSrc:"https://pagalnew.com/coverimages/Yaar-Ka-Sataya-Hua-Hai-Jaani-500-500.jpg",
        songName:"Yaar Ka Sataya Hua Hai",
           src:"../musicSongs/songs/YaarKaSatayaHuaHai.mp3",
        singer:["B Praak"]
    },
    {
        id:14,
        imgSrc:"https://pagalnew.com/coverimages/pasoori-nu-satyaprem-ki-katha-500-500.jpg",
        songName:"Pasoori Nu",
           src:"../musicSongs/songs/PasooriNu.mp3",
        singer:["Arijit Singh"]

    },
    {
        id:15,
        imgSrc:"https://pagalnew.com/coverimages/Pehli-Baarish-Mein-Jubin-Nautiyal-500-500.jpg",
        songName:"Pehli Baarish Mein",
           src:"../musicSongs/songs/PehliBaarishMein.mp3",
        singer:["Jubin Nautiyal"]

    },
    {
        id:16,
        imgSrc:"https://pagalnew.com/coverimages/har-har-mahadev-omg-2-500-500.jpg",
        songName:"Har Har Mahadev",
           src:"../musicSongs/songs/HarHarMahadev.mp3",
        singer:["Vikram Montrose"]

    },
    {
        id:17,
        imgSrc:"https://pagalnew.com/coverimages/oonchi-oonchi-waadi-omg-2-500-500.jpg",
        songName:"Oonchi Oonchi Waadi",
           src:"../musicSongs/songs/OonchiOonchiWaadi.mp3",
        singer:["Hansraj Raghuwanshi"]

    },
    {
        id:18,
        imgSrc:"https://pagalnew.com/coverimages/khairiyat-gadar-2-500-500.jpg",
        songName:"Khairiyat",
           src:"../musicSongs/songs/Khairiyat.mp3",
        singer:["Arijit Singh"]
    },
    {
        id:19,
        imgSrc:"https://pagalnew.com/coverimages/main-nikla-gaddi-leke-gadar-2-500-500.jpg",
        songName:"Main Nikla Gaddi Leke",
           src:"../musicSongs/songs/MainNiklaGaddiLeke.mp3",
        singer:["Udit Narayan", "Aditya Narayan", "Mithoon"]

    },
    {
        id:20,
        imgSrc:"https://pagalnew.com/coverimages/Udd-Jaa-Kaale-Kaava-Gadar-2-500-500.jpg",
        songName:"Udd Jaa Kaale Kaava",
           src:"../musicSongs/songs/UddJaaKaaleKaava.mp3",
        singer:["Udit Narayan", "Alka Yagnik"]

    },
    {
        id:21,
        imgSrc:"https://pagalnew.com/coverimages/Cham-Cham-Hommie-Dilliwala-500-500.jpg",
        songName:"Cham Cham",
           src:"../musicSongs/songs/ChamCham.mp3",
        singer:["Hommie Dilliwala"]

    },
    {
        id:22,
        imgSrc:"https://pagalnew.com/coverimages/Sangdi-Sangdi-Amrinder-Bhangu-500-500.jpg",
        songName:"Sangdi Sangd",
           src:"../musicSongs/songs/SangdiSangd.mp3",
        singer:["Amrinder Bhangu"]

    },
    {
        id:23,
        imgSrc:"https://pagalnew.com/coverimages/Hadh-Maar-Gye-Babbu-Maan-500-500.jpg",
        songName:"Hadh Maar Gye",
           src:"../musicSongs/songs/HadhMaarGye.mp3",
        singer:["Babbu Maan"]

    },
    {
        id:24,
        imgSrc:"https://pagalnew.com/coverimages/Maahi-Dekhle-Sid-Paul-500-500.jpg",
        songName:"Maahi Dekhle",
           src:"../musicSongs/songs/MaahiDekhle.mp3",
        singer:["Sid Paul", "Akanksha Bhandari"]

    },
    {
        id:25,
        imgSrc:"https://pagalnew.com/coverimages/Dil-De-Tukde-Sandeep-Aulakh-500-500.jpg",
        songName:"Dil De Tukde",
           src:"../musicSongs/songs/DilDeTukde.mp3",
        singer:["Sandeep Aulakh"]

    },
    {
        id:26,
        imgSrc:"https://pagalnew.com/coverimages/Kali-Fortuner-Makk-Makk-500-500.jpg",
        songName:"Kali Fortuner",
           src:"../musicSongs/songs/KaliFortuner.mp3",
        singer:["Makk Makk, Rinku Chautala"]

    },
    {
        id:27,
        imgSrc:"https://pagalnew.com/coverimages/Albadi-Hood-Billa-Sonipat-Ala-500-500.jpg",
        songName:"Albadi Hood",
        src:"../musicSongs/songs/A1.mp3",
        singer:["Billa Sonipat Ala", "Prince Jamba", "Irshad Khan"]

    },
    {
        id:28,
        imgSrc:"https://pagalnew.com/coverimages/Saans-2-Lofi-Vikram-Pannu-500-500.jpg",
        songName:"Saans 2 Lofi",
           src:"../musicSongs/songs/Saans2Lofi.mp3",
        singer:["Vikram Pannu", "Shanky Goswami", "Fiza Chaudhary"]

    },
    {
        id:29,
        imgSrc:"https://pagalnew.com/coverimages/Khare-Aadmi-RPS-Amar-Vikal-500-500.jpg",
        songName:"Khare Aadmi",
           src:"../musicSongs/songs/KhareAadmi.mp3",
        singer:["RPS Amar Vikal"]

    },
    {
        id:30,
        imgSrc:"https://pagalnew.com/coverimages/zinda-banda-jawan-500-500.jpg",
        songName:"Zinda Banda",
           src:"../musicSongs/songs/ZindaBanda.mp3",
        singer:["Anirudh Ravichander"]

    },
    // {
    //     id:"29",
    //     img   src:"../musicSongs/songs/SunSajni.mp3",
    //     songName:"",
    //        src:"../musicSongs/songs/SunSajni.mp3",
    //     singer:""

    // },
    // {
    //     id:"",
    //     img   src:"../musicSongs/songs/SunSajni.mp3",
    //     songName:"",
    //        src:"../musicSongs/songs/SunSajni.mp3",
    //     singer:""

    // },

  

]

const featureArstist=[
    {
        name:"Pritam",
        imgSrc:"	https://a10.gaanacdn.com/gn_img/artists/zLp36PvbrG/Lp36AR0KrG/size_m_1516707336.webp"
    },
    {
        name:"Arijit Singh",
        imgSrc:"https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_m_1638898900.webp"
    },
    {
        name:"Badshah",
        imgSrc:"https://a10.gaanacdn.com/gn_img/artists/9MAWe7KyJe/MAWe9lBGWy/size_m_1516185303.webp"
    },
    {
        name:"B Praak",
        imgSrc:"https://a10.gaanacdn.com/gn_img/artists/6Zxb2r7b9w/Zxb2xp0w39/size_m.jpg"
    },
    {
        name:"Tony Kakkar",
        imgSrc:"https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNgP763B/size_m_1595857138.webp"
    },
    {
        name:"Alka Yagnik",
        imgSrc:"https://a10.gaanacdn.com/gn_img/artists/DwPKOBbqVZ/DwPKOBbqVZ/size_m_1516104380.webp"
    },
    {
        name:"Neha Kakkar",
        imgSrc:"https://a10.gaanacdn.com/gn_img/artists/Rz4W87v3xD/Rz4W8ppWxD/size_m_1638817418.webp"
    },
    {
        name:" Tanishk Bagchi",
        imgSrc:"https://a10.gaanacdn.com/gn_img/artists/21GWwrR3pk/1GWwYz4DKp/size_m_1567610470.webp"
    },
    {
        name:"udit-narayan",
        imgSrc:"https://a10.gaanacdn.com/gn_img/artists/w4MKPObojg/w4MKPObojg/size_m_1516799177.webp"
    },

]

const radioData = [
    {
        title: "Love Hits",
        link: "/gaanaradio/love-hits-1",
        image: "https://a10.gaanacdn.com/gn_img/g_radio_circle/kGxbnw0Ky4/kGxbnxJ3y4/size_m_1643619328.webp"
    },
    {
        title: "Party Non Stop",
        link: "/gaanaradio/party-non-stop-1",
        image: "https://a10.gaanacdn.com/gn_img/g_radio_circle/DwPKOxB3qV/DwPKOwkKqV/size_m_1643620296.webp"
    },
    {
        title: "90s & 2000s (Bollywood)",
        link: "/gaanaradio/90s-2000s-bollywood",
        image: "https://a10.gaanacdn.com/gn_img/g_radio_circle/2lV3dl13Rg/2lV3dGZKRg/size_m_1643700049.webp"
    },
    {
        title: 'Morning Mix',
        image: 'https://a10.gaanacdn.com/gn_img/g_radio_circle/10q3ZR1352/10q3Zm2K52/size_m_1643619359.webp',
        link: '/gaanaradio/morning-mix-1',
      },
    {
        title: "90's Ki Cassette Radio",
        image: "https://a10.gaanacdn.com/gn_img/g_radio_circle/4Z9bqZoKyQ/4Z9bqNPKyQ/size_m_1643617195.webp",
        link: "/gaanaradio/90s-ki-cassette-radio-1"
      },
      {
        title: "90s & 2000s Hits",
        image: "https://a10.gaanacdn.com/gn_img/g_radio_circle/R7vKXr6Wmr/R7vKX1v3mr/size_m_1643620138.webp",
        link: "/gaanaradio/90s-2000s-hits-1"
      },
    {
        title: "Bhakti",
        image: "https://a10.gaanacdn.com/gn_img/g_radio_circle/qaLKY623pO/qaLKYgwWpO/size_m_1643694440.webp",
        link: "/gaanaradio/bhakti-1"
      },
      {
        title: "International Retro",
        image: "https://a10.gaanacdn.com/gn_img/g_radio_circle/qa4WEqqWP1/qa4WEm5WP1/size_m_1643620030.webp",
        link: "/gaanaradio/international-retro-1"
      },
      {
        title: "Riya's Retro Radio",
        image: "https://a10.gaanacdn.com/gn_img/g_radio_circle/R7vKXr6Wmr/R7vKXNxWmr/size_m_1643617279.webp",
        link: "/gaanaradio/riyas-retro-radio-1"
      },
      {
        title: "Hip Hop & RnB",
        image: "https://a10.gaanacdn.com/gn_img/g_radio_circle/DwPKOkBKqV/DwPKOR0bqV/size_m_1643618507.webp",
        link: "/gaanaradio/hip-hop-rnb"
      },
      {
        title: "Classic Retro (Hindi)",
        image: "https://a10.gaanacdn.com/gn_img/g_radio_circle/ogNWkLDbmX/ogNWk7pWmX/size_m_1643700170.webp",
        link: "/gaanaradio/classic-retro-hindi-1"
      },
      {
        title: 'International Rock',
        image: 'https://a10.gaanacdn.com/gn_img/g_radio_circle/Rz4W87v3xD/Rz4W8R6KxD/size_m_1643786924.webp',
        link: '/gaanaradio/international-rock-1',
      },
      {
        title: 'Party Non-Stop',
        image: 'https://a10.gaanacdn.com/gn_img/g_radio_circle/g4w3vwrWjJ/g4w3vjj3jJ/size_m_1643619179.webp',
        link: '/gaanaradio/party-non-stop',
      },
      {
        title: 'International Hits',
        image: 'https://a10.gaanacdn.com/gn_img/g_radio_circle/lJvKa63DV9/lJvKa54KDV/size_m_1643620384.webp',
        link: '/gaanaradio/international-hits',
      },
      {
        title: 'Sukoon Ke Pal',
        image: 'https://a10.gaanacdn.com/gn_img/g_radio_circle/P7m3GvNKqx/P7m3Gw63qx/size_m_1584715867.webp',
        link: '/gaanaradio/sukoon-ke-pal-1',
      },

];

module.exports={loginData,musicData,featureArstist,radioData}





