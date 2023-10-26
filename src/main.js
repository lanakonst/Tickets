const seats = document.querySelectorAll('.seat');
const chosenDiv = document.querySelector('.seats');
const confirm = document.querySelector('.confirm');
const cancell = document.querySelector('.cancell');

let chosenSeats = [];

const clear = () => {
    seats.forEach((seat) => seat.classList.remove('chosen'));
    chosenSeats = [];
    chosenDiv.innerHTML = '<span>Seats: </span>';
}


seats.forEach((seat) => seat.addEventListener('click', (e) => {
    e.preventDefault();
    chosenDiv.innerHTML = '<span>Seats: </span>';
    if (seat.classList.contains('chosen')) {
        seat.classList.remove('chosen');
        chosenSeats = chosenSeats.filter((chosenSeat) => chosenSeat !== seat.id)
    } else {
        seat.classList.add('chosen');
        chosenSeats.push(seat.id);
    }
    for (let i = 0; i < chosenSeats.length; i++) {
        chosenDiv.innerHTML += `<span>${chosenSeats[i]} </span>`
    }
}))

confirm.addEventListener('click', (e) => {
    if (chosenSeats.length === 0) {
        alert('Choose seats please');
    } else {
        alert('Successful');
    }
    clear();
})

cancell.addEventListener('click', (e) => {
    clear();
})
