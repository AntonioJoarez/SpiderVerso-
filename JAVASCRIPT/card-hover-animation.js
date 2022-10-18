function handleMouseEnter() {
    this.classList.add('s-card--hovered')
    document.body.id = `${this.id}-hovered`
}

function handleMouseLeav() {
    this.classList.remove('s-card--hovered')
    document.body.id = ''
        
    
}


function addEventListenersToCard() {
    const cardElements = document.getElementsByClassName('s-card')

    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index];
        card.addEventListener('mouseenter', handleMouseEnter)
        card.addEventListener('mouseleave', handleMouseLeav)
        
    }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCard, false)