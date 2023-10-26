const cities = document.querySelector('.cities');

const locations = {
    belgrade: ` <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45296.62119722605!2d20.438871824498257!3d44.800397397573825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a707415b95113%3A0x207a768406d8de98!2zVnJhxI1hciwg0JHQtdC70LPRgNCw0LQ!5e0!3m2!1sru!2srs!4v1698250401594!5m2!1sru!2srs" 
    style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    bristol: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2484.56956315997!2d-2.624759473437959!3d51.48441476238229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2srs!4v1698252598888!5m2!1sru!2srs" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    london: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9929.233107787577!2d-0.10263127708586817!3d51.525905349256114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b4e8657c577%3A0xd9b77485108f2822!2z0KTQuNC90YHQsdC10YDQuCwg0JvQvtC90LTQvtC9LCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sru!2srs!4v1698252654534!5m2!1sru!2srs" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    moscow: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4366.940125206813!2d37.53613895461363!3d55.80602539374801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b549dacb773cad%3A0x2b08726b157a8699!2z0JHQuNC30L3QtdGBLdGG0LXQvdGC0YAg0JDQstC40LDRgtC-0YA!5e0!3m2!1sru!2srs!4v1698252709327!5m2!1sru!2srs" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    newyork: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24157.12557804301!2d-73.94669650000004!3d40.813888750000025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f66dafa34965%3A0x87363933858ae440!2z0KHQtdC90YLRgNCw0Lsg0JPQsNGA0LvQtdC8LCDQndGM0Y4t0JnQvtGA0LosINCh0KjQkA!5e0!3m2!1sru!2srs!4v1698252752230!5m2!1sru!2srs" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
}



cities.addEventListener('change', (e) => {
    e.preventDefault();
    const currentIframe = cities.querySelector('iframe');
    currentIframe.remove();
    cities.innerHTML += locations[e.target.value];
    console.log(cities);
})
