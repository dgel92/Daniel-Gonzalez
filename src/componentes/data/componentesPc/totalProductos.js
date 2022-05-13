const totalProductos =[
    {
        id: 1,
        tittle: "DISCO DURO HDD 1TB SEAGATE BARRACUDA SATA III",
        imgUrl: "https://www.venex.com.ar/products_images/1586464173_disc1.jpg",
        categoria: ["HDD", "discosMecanicos", "componentesPC"],
        portada: true,
        stock: 5,
        price: 5820,
    },
    {
        id: 2,
        tittle: "DISCO DURO HDD 1 TB WESTERN DIGITAL WD BLUE",
        imgUrl: "https://www.venex.com.ar/products_images/1586464610_disc3.jpg",
        categoria: ["almacenamiento", "discosMecanicos", "componentesPC"],
        portada: false,
        stock: 8,
        price: 6040,
    },
    {
        id: 3,
        tittle: "DISCO DURO HDD 1 TB WESTERN DIGITAL WD SATA III 64MB/S PURPLE",
        imgUrl: "https://www.venex.com.ar/products_images/1586464823_disc5.jpg",
        categoria: ["almacenamiento", "discosMecanicos", "componentesPC"],
        portada: false,
        stock: 10,
        price: 6790,
    },
    


    {
        id: 4,
        tittle: "DISCO SOLIDO SSD 120GB ADATA SATA III SU650",
        imgUrl: "https://www.venex.com.ar/products_images/1576699630_asu650ss120gtr.jpg",
        categoria: ["almacenamiento","discosSolidos","componentesPC"],
        portada: false,
        stock: 5,
        price: 3095,
    },
    {
        id: 5,
        tittle: "DISCO SOLIDO SSD 120GB GIGABYTE SATA III GP-GSTF",
        imgUrl: "https://www.venex.com.ar/products_images/1537278903_2018070417395493_big.png",
        categoria: ["almacenamiento","discosSolidos","componentesPC"],
        portada: true,
        stock: 8,
        price: 3199,
    },
    {
        id: 6,
        tittle: "DISCO SOLIDO SSD 240GB ADATA M2 SATA ASU650",
        imgUrl: "https://www.venex.com.ar/products_images/1612471859_productgallery7028.jpg",
        categoria: ["almacenamiento","discosSolidos","componentesPC"],
        portada: false,
        stock: 10,
        price: 4899,
    },


    {
        id: 7,
        tittle: "FUENTE GIGABYTE 450W P450W 80+ BRONZE",
        imgUrl: "https://www.venex.com.ar/products_images/1613753649_concepto-4628218.png",
        categoria: ["fuentesDePoder", "componentesPC"],
        portada: false,
        stock: 5,
        price: 7490,
    },
    {
        id: 8,
        tittle: "FUENTE AEROCOOL DORADO 750W 80+ GOLD ARGB",
        imgUrl: "https://www.venex.com.ar/products_images/1638552320_fuente.png",
        categoria: ["fuentesDePoder", "componentesPC"],
        portada: false,
        stock: 8,
        price: 15490,
    },
    {
        id: 9,
        tittle: "FUENTE CORSAIR CX750F 750W FULL MODULAR RGB 80+ BRONZE",
        imgUrl: "https://www.venex.com.ar/products_images/1630702216_-base-cxf-rgb-blk-psu-2020-config-gallery-cx750pl,f-rgb-black-01.png",
        categoria: ["fuentesDePoder", "componentesPC"],
        portada: true,
        stock: 10,
        price: 21990,
    },
    


    {
        id: 10,
        tittle: "GABINETE CORSAIR ICUE 4000X RGB TG BLACK",
        imgUrl: "https://www.venex.com.ar/products_images/1640625716_1.png",
        categoria: ["gabinetes","componentesPC"],
        portada: false,
        stock: 5,
        price: 22490,
    },
    {
        id: 11,
        tittle: "GABINETE CORSAIR 5000D TG WHITE",
        imgUrl: "https://www.venex.com.ar/products_images/1649182836_sdfgsdgfdfg.png",
        categoria: ["gabinetes","componentesPC"],
        portada: false,
        stock: 8,
        price: 27999,
    },
    {
        id: 12,
        tittle: "GABINETE AEROCOOL ATOMIC",
        imgUrl: "https://www.venex.com.ar/products_images/1648655727_hfghfgh.png,",
        categoria: ["gabinetes","componentesPC"],
        portada: false,
        stock: 10,
        price: 6599,
    },
    {
        id: 13,
        tittle: "GABINETE AEROCOOL BIONIC G BK V2",
        imgUrl: "https://www.venex.com.ar/products_images/1622142301_newproject-2021-01-17t200604-1697851.png",
        categoria: ["gabinetes","componentesPC"],
        portada: true,
        stock: 10,
        price: 8019,
    },


    {
        id: 14,
        tittle: "MEMORIA RAM DDR4 16GB 3600MHZ PATRIOT VIPER 4 BLACKOUT CL18 2X8",
        imgUrl: "https://www.venex.com.ar/products_images/1607618144_viper_4_blackout_b_web.jpg",
        categoria: ["memoriasRam", "componentesPC"],
        portada: false,
        stock: 5,
        price: 12490,
    },
    {
        id: 15,
        tittle: "MEMORIA RAM KINGSTON FURY BEAST DDR4 8GB 2666MHZ RGB",
        imgUrl: "https://www.venex.com.ar/products_images/1627495976_1626977867_1.jpg",
        categoria: ["memoriasRam", "componentesPC"],
        portada: false,
        stock: 8,
        price: 6990,
    },
    {
        id: 16,
        tittle: "MEMORIA RAM DDR4 8GB 3600MHZ ADATA XPG SPECTRIX D50G RGB",
        imgUrl: "https://www.venex.com.ar/products_images/1613754208_ax4u360038g18a-st50-2.jpg",
        categoria: ["memoriasRam", "componentesPC"],
        portada: true,
        stock: 10,
        price: 7590,
    },


    {
        id: 17,
        tittle: "MOTHERBOARD MSI B560M BAZOOKA S1200 11VA",
        imgUrl: "https://www.venex.com.ar/products_images/1647887819_product_16137221929d03ba04ccd3b5e76140a5533301abcd.png",
        categoria: ["motherBoard","componentesPC"],
        portada: false,
        stock: 5,
        price: 20499,
    },
    {
        id: 18,
        tittle: "MOTHERBOARD MSI A320M PRO-VH AM4",
        imgUrl: "https://www.venex.com.ar/products_images/1647884239_product_8_20200915102556_5f6026344bdda.png",
        categoria: ["motherBoard","componentesPC"],
        portada: false,
        stock: 8,
        price: 6999,
    },
    {
        id: 19,
        tittle: "MOTHERBOAD ASUS A320M-K AM4",
        imgUrl: "https://www.venex.com.ar/products_images/1585334513_asus_a320mk_am4.jpg",
        categoria: ["motherBoard","componentesPC"],
        portada: true,
        stock: 10,
        price: 8379,
    },
    {
        id: 20,
        tittle: "MOTHERBOARD ASUS PRIME B550M-K AM4",
        imgUrl: "https://www.venex.com.ar/products_images/1602010489_p_setting_fff_1_90_end_600.jpg",
        categoria: ["motherBoard","componentesPC"],
        portada: false,
        stock: 10,
        price: 16499,
    },


    {
        id: 21,
        tittle: "PLACA DE RED USB TP-LINK TL-WN725N NANO WIFI 150M",
        imgUrl: "https://www.venex.com.ar/products_images/a.jpg",
        categoria: ["placasDeRed","conectividad","componentesPC"],
        portada: false,
        stock: 5,
        price: 1149,
    },
    {
        id: 22,
        tittle: "PLACA DE RED TP-LINK WIRELESS USB WN821N 300MBPS",
        imgUrl: "https://www.venex.com.ar/products_images/placaderedtplinkwirelessusbwn821n300mbps.jpg",
        categoria: ["placasDeRed","conectividad","componentesPC"],
        portada: true,
        stock: 8,
        price: 1419,
    },
    {
        id: 23,
        tittle: "PLACA DE RED PCI-E TP-LINK TL-WN881ND",
        imgUrl: "https://www.venex.com.ar/products_images/1623270974_tl-wn881nd_un_2.0_01_large_1507530821899a.jpg",
        categoria: ["placasDeRed","conectividad","componentesPC"],
        portada: false,
        stock: 10,
        price: 7290,
    },
    {
        id: 24,
        tittle: "FAN COOLER CPU COOLER MASTER H410R RGB",
        imgUrl: "https://www.venex.com.ar/products_images/1607786561_rrh41020pcr1_2.jpg",
        categoria: ["placasDeRed","conectividad","componentesPC"],
        portada: false,
        stock: 10,
        price: 2199,
    },
    {
        id: 25,
        tittle: "PLACA DE RED USB TP-LINK TL-WN822N",
        imgUrl: "https://www.venex.com.ar/products_images/1647627937_dklfgkdfg.png",
        categoria: ["placasDeRed","conectividad","componentesPC"],
        portada: true,
        stock: 10,
        price: 1859,
    },


    {
        id: 26,
        tittle: "PLACA DE VIDEO PALIT NVIDIA GEFORCE RTX 2060 SUPER DUAL 8GB",
        imgUrl: "https://www.venex.com.ar/products_images/1621431412_placa-de-video-palit-nvidia-geforce-rtx-2060-super-dual-8gb.jpg",
        categoria: ["placasDeVideo","graficos","componentesPC"],
        portada: false,
        stock: 5,
        price: 114999,
    },
    {
        id: 27,
        tittle: "PLACA DE VIDEO SAPPHIRE RADEON RX 6500 XT PULSE 4GB",
        imgUrl: "https://www.venex.com.ar/products_images/1645468575_rx6500_pulse_lite_box_card.jpg",
        categoria: ["placasDeVideo","graficos","componentesPC"],
        portada: false,
        stock: 8,
        price: 46999,
    },
    {
        id: 28,
        tittle: "PLACA DE VIDEO ASUS TUF RADEON RX 6500 XT O4G",
        imgUrl: "https://www.venex.com.ar/products_images/1648655727_hfghfgh.png,",
        categoria: ["placasDeVideo","graficos","componentesPC"],
        portada: true,
        stock: 10,
        price: 58499,
    },
    {
        id: 29,
        tittle: "PLACA DE VIDEO ASROCK RADEON RX 6900 XT PHANTOM GAMING D 16GB",
        imgUrl: "https://www.venex.com.ar/products_images/1645212338_1.png",
        categoria: ["placasDeVideo","graficos","componentesPC"],
        portada: false,
        stock: 10,
        price: 239999,
    },


    {
        id: 30,
        tittle: "MICROPROCESADOR INTEL CORE I7 10700F COMETLAKE 4.8GHZ S/GRAFICOS",
        imgUrl: "https://www.venex.com.ar/products_images/1626718395_microprocesador-intel-core-i7-10700f-cometlake-4.8ghz-sgraficos.jpg",
        categoria: ["procesadores","componentesPC"],
        portada: false,
        stock: 5,
        price: 42999,
    },
    {
        id: 31,
        tittle: "MICROPROCESADOR INTEL CORE I5 11400 ROCKET LAKE 6/12 4.4GHZ S1200",
        imgUrl: "https://www.venex.com.ar/products_images/1617039528_1010815-1139517-800.jpg",
        categoria: ["procesadores","componentesPC"],
        portada: false,
        stock: 8,
        price: 35490,
    },
    {
        id: 32,
        tittle: "MICROPROCESADOR INTEL CORE I5 10400F COMETLAKE 6/12 4.3GHZ 12MB S1200",
        imgUrl: "https://www.venex.com.ar/products_images/1617202625_1019-producto-i5i5-system-linq-enumerabletakeiteratord-251system-char.png",
        categoria: ["procesadores","componentesPC"],
        portada: true,
        stock: 10,
        price: 29237,
    },
    {
        id: 33,
        tittle: "MICROPROCESADOR AMD RYZEN 5 5600X 6/12 4.6GHZ S/G ZEN3",
        imgUrl: "https://www.venex.com.ar/products_images/1605015483_microprocesadoramdryzen55600x.jpg",
        categoria: ["procesadores","componentesPC"],
        portada: false,
        stock: 10,
        price: 30000,
    },
    {
        id: 34,
        tittle: "MICROPROCESADOR AMD RYZEN 5600G 4.4 GHZ AM4",
        imgUrl: "https://www.venex.com.ar/products_images/1638466775_sdfdgfeshsd.jpg",
        categoria: ["procesadores","componentesPC"],
        portada: false,
        stock: 10,
        price: 34095,
    },
    {
        id: 35,
        tittle: "MICROPROCESADOR AMD RYZEN 5 4650G PRO AM4 OEM BULK",
        imgUrl: "https://www.venex.com.ar/products_images/1630950844_d564fghd.jpg",
        categoria: ["procesadores","componentesPC"],
        portada: false,
        stock: 10,
        price: 30990,
    },


    {
        id: 36,
        tittle: "FAN COOLER GABINETE GENERICO (VER COMPATIBILIDAD)",
        imgUrl: "https://www.venex.com.ar/products_images/1639072859_fan.png",
        categoria: ["refrigeracion","componentesPC"],
        portada: false,
        stock: 5,
        price: 929,
    },
    {
        id: 37,
        tittle: "FAN COOLER COOLER MASTER SICKLEFLOW 120 RGB",
        imgUrl: "https://www.venex.com.ar/products_images/1611169953_sickleflow-120-rgb-gallery-1-zoom.png",
        categoria: ["refrigeracion","componentesPC"],
        portada: true,
        stock: 8,
        price: 4490,
    },
    {
        id: 38,
        tittle: "FAN COOLER CPU AEROCOOL MIRAGE 5 ARGB 5P",
        imgUrl: "https://www.venex.com.ar/products_images/1614001079_mirage-5-infographic700x700-01-1.png",
        categoria: ["refrigeracion","componentesPC"],
        portada: false,
        stock: 10,
        price: 7290,
    },
    {
        id: 39,
        tittle: "FAN COOLER CPU COOLER MASTER H410R RGB",
        imgUrl: "https://www.venex.com.ar/products_images/1607786561_rrh41020pcr1_2.jpg",
        categoria: ["refrigeracion","componentesPC"],
        portada: false,
        stock: 10,
        price: 8490,
    },
    {
        id: 5,
        tittle: "FAN COOLER COOLER MASTER MA410M ARGB",
        imgUrl: "https://www.venex.com.ar/products_images/1647627937_dklfgkdfg.png",
        categoria: ["refrigeracion","componentesPC"],
        portada: false,
        stock: 10,
        price: 14499,
    },

]
    export default totalProductos;