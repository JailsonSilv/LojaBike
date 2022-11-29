let bikeNome = document.querySelectorAll('.nameBike')
let valores = document.querySelectorAll('.valor')
let parcela = document.querySelectorAll('.parcelas')
let imgBikes = document.querySelectorAll('.bikes')



let bikes = [
    {
        foto:"/assets/image/alugab1/bikecomum.png",
        status: "Disponível",
        valor:"R$ 10/Hora",
    },
    {
        foto:"/assets/image/alugab1/bikecomum2.png",
        status: "Disponível",
        valor:"R$ 10/Hora",
    },
    {
        foto:"/assets/image/alugab1/bikecommarcha.png",
        status: "Disponível",
        valor:"R$ 20/Hora",
    },
    {
        foto:"/assets/image/alugab1/bikecommarcha2.png",
        status: "Disponível",
        valor:"R$ 30/Hora",
    },
    {
        foto:"/assets/image/alugab1/bikebasedupla.png",
        status: "Disponível",
        valor:"R$ 20/Hora",
    },
    {
        foto:"/assets/image/alugab1/triclico.png",
        status: "Disponível",
        valor:"R$ 30/Hora",
    },
    {
        foto:"/assets/image/alugab1/triciclo2.png",
        status: "Disponível",
        valor:"R$ 15/Hora",
    },
    {
        foto:"/assets/image/alugab1/triciclo3.png",
        status: "Disponível",
        valor:"R$ 20/Hora",
    },
    {
        foto:"/assets/image/alugab1/bikecomum.png",
        status: "Disponível",
        valor:"R$ 10/Hora",
    },
]

bikes.map((bike, indice) => {
    imgBikes[indice].src = bike.foto
    bikeNome[indice].innerHTML = bike.status
    valores[indice].innerHTML = bike.valor
});


// Ativar barra lateral menu
document.querySelector(".hamburger").addEventListener("click", () => 
    document.querySelector(".container-menu").classList.toggle("show-menu")
);

