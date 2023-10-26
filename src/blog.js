const previews = document.querySelector('.preview').querySelectorAll('article');
const articles = document.querySelector('.articles');

const holydays=[];
var xhr = new XMLHttpRequest();
var url = "https://date.nager.at/api/v2/publicholidays/2020/US";

xhr.open('GET', url, true);

    
xhr.onload = function() {
    var data = JSON.parse(this.response);

    for (let i = 0; i < data.length; i ++) {
        const { date, localName } = data[i];
        holydays.push({ date, localName });
    }
    console.log('FUNC1', holydays.length)
}
console.log('FUNC', holydays.length)
xhr.send()

const holydaysTemplate = (holydays) => {
    console.log(holydays.length, holydays)
    let holyHtml = '<ul>';
    for (let i = 0; i < holydays.length; i++) {
        console.log(i)
        holyHtml += `<li><p>${holydays[i].localName}</p><p>when: ${holydays[i].date}</p></li>`;
    }
    holyHtml += '</ul>';
    return holyHtml;
}

previews.forEach((preview) => preview.addEventListener('click', e =>{
    e.preventDefault();
    let name = preview.getAttribute('name');
    
    const current = articles.querySelector('.selected')
    current.classList.remove('selected');
    current.classList.add('not-selected');
    newSelected = articles.querySelector(`[name=${name}]`);
    newSelected.classList.remove('not-selected');
    newSelected.classList.add('selected');
    if (name === 'holydays') {
        newSelected.innerHTML += holydaysTemplate(holydays);
    }
    newSelected.reset();
}))
