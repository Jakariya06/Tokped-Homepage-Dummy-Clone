function clicked(){
    const menuBar = document.getElementById('menu-bar')
    const overlay = document.getElementById('overlay')

    menuBar.classList.toggle("menuBarActive")
    overlay.classList.toggle("overlayActive")
}

function category(){ 
    const ctgrVisible = document.getElementById('category')

    ctgrVisible.classList.toggle("ctgrActive")
}