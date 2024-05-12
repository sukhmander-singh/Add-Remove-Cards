
const container = document.querySelector('.container');
const addCard = document.querySelector('.add-card');

let count = 1;
addCard.addEventListener('click', () => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerText = count++;
    container.append(card)
    card.addEventListener('click', () => {
        card.remove();
    })
})





























