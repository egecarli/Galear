const backgroudSlide = ["https://images.unsplash.com/photo-1613206468203-fa00870edf79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
    "https://images.unsplash.com/photo-1627909477137-dfef12d46d47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=482&q=80",
    "https://images.unsplash.com/photo-1614924287937-b445a5dad0b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=461&q=80",
    "https://images.unsplash.com/flagged/photo-1585324853527-1c567d53bb72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=624&q=80",
]

const slideIMG = document.getElementById("slideIMG");
let contador = 0

const backgraoundChange = () => {
    slideIMG.style.backgroundImage = `url(${backgroudSlide[contador]})`
    if (contador < backgroudSlide.length -1) {
        contador++
    }
    else {
        contador = 0
    }
}

setInterval(backgraoundChange, 5000)