function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
    
        
    // pegar a tag da img
    const img = document.querySelector("#profile img")
   
    // substituir a img
    if(html.classList.contains('light')) {
   
        //se tiver em ligth mode, adiciona imagem light
        img.setAttribute("src", "./assets/assets/Lara-light-avatar.png")
    } else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/assets/Lara-dark-avatar.png')
}

}