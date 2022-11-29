let bikeNome = document.querySelectorAll('.nameBike')
let valores = document.querySelectorAll('.valor')
let parcela = document.querySelectorAll('.parcelas')
let imgBikes = document.querySelectorAll('.bikes')



let bikes = [
    {
        foto:"../assets/image/comprarBike/e62e6e8ee6.webp",
        nome: "Blur C Kit S <br/> (Sram GX Eagle)",
        valor: "R$ 50.490,00",
        parcela: "<span>até</span> <strong>10x</strong>  <span>de</span> <strong>R$ 5.049,00</strong> <span>sem juros</span> <br/> <span>ou</span>  <strong>R$ 45.441,00</strong> <span>via Boleto Bancário</span>",
    },
    {
        foto:"/assets/image/comprarBike/1792610195fc87ea713.webp",
        nome: "Hightower CC Kit X01 (Sram X01 Eagle)",
        valor: "R$ 77.190,00",
        parcela: "<span>até</span> <strong>10x</strong> <span>de</span> <strong>R$ 7.719,00</strong> <span>sem juros</span> <br/> <span>ou</span> <strong> R$ 69.471,00 </strong> <span>via Boleto Bancário</span>",
    },
    {
        foto:"/assets/image/comprarBike/21238707f7.webp",
        nome: "Highball C Kit S <br/> (Sram GX Eagle)",
        valor: "R$ 41.890,00",
        parcela: "<span>até</span> <strong>10x</strong> <span>de</span> <strong>R$ 4.189,00</strong> <span>sem juros</span> <br/><span>ou </span> <strong>R$ 37.701,00</>  <span>via Boleto Bancário</span>",
    },
    {
        foto:"/assets/image/comprarBike/v10.webp",
        nome: "V10 CC MX Kit X01 com FOX DHX2 Factory SLS",
        valor: "R$ 85.490,00",
        parcela: "<span>até</span> <strong>10x</strong> <span>de</span> <strong>R$ 8.549,00</strong> <span>sem juros</span> <br/><span>ou </span> <strong>R$ 76.941,00</>  <span>via Boleto Bancário</span>",
    },
    {
        foto:"/assets/image/comprarBike/chameleon.webp",
        nome: "Chameleon Alumínio Kit D (Sram SX) 29 ou 27+",
        valor: "R$ 20.890,00",
        parcela: "<span>até</span> <strong>10x</strong> <span>de</span> <strong>R$ 2.089,00</strong> <span>sem juros</span> <br/><span>ou </span> <strong>R$ 18.801,00</>  <span>via Boleto Bancário</span>",
    },
    {
        foto:"/assets/image/comprarBike/Stigmata.webp",
        nome: "Stigmata CC Kit Force AXS (Sram 2-12v) com Rodas Reserve",
        valor: "R$ 20.890,00",
        parcela: "<span>até</span> <strong>10x</strong> <span>de</span> <strong>R$ 2.089,00</strong> <span>sem juros</span> <br/><span>ou </span> <strong>R$ 18.801,00</>  <span>via Boleto Bancário</span>",
    },
    {
        foto:"/assets/image/comprarBike/Heckler.webp",
        nome: "Heckler C Kit S <br/> (Sram GX AXS)",
        valor: "R$ 100.990,00",
        parcela: "<span>até</span> <strong>10x</strong> <span>de</span> <strong>R$ 10.099,00</strong> <span>sem juros</span> <br/><span>ou </span> <strong> R$ 90.891,00</>  <span>via Boleto Bancário</span>",
    },
    {
        foto:"/assets/image/comprarBike/Hecklercc.webp",
        nome: "Heckler CC Kit X01 (Sram X01 AXS) com Rodas de Carbono Reserve",
        valor: "R$ 128.790,00",
        parcela: "<span>até</span> <strong>10x</strong> <span>de</span> <strong>R$ 12.879,00</strong> <span>sem juros</span> <br/><span>ou </span> <strong> R$ 115.911,00</>  <span>via Boleto Bancário</span>",
    },
    {
        foto:"/assets/image/comprarBike/jackal.webp",
        nome: "Jackal",
        valor: "R$ 8.990,00",
        parcela: "<span>até</span> <strong>10x</strong> <span>de</span> <strong>R$ 899,00</strong> <span>sem juros</span> <br/><span>ou </span> <strong> R$ 8.091,00</>  <span>via Boleto Bancário</span>",
    },
]

bikes.map((bike, indice) => {
    imgBikes[indice].src = bike.foto
    bikeNome[indice].innerHTML = bike.nome
    valores[indice].innerHTML = bike.valor
    parcela[indice].innerHTML = bike.parcela
});


// Ativar barra lateral menu
document.querySelector(".hamburger").addEventListener("click", () => 
    document.querySelector(".container-menu").classList.toggle("show-menu")
);

