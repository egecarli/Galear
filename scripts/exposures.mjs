const ListEvents = [
    {
        tittle: "Titulo 1",
        img: "/assets/arteymemescinco.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dicta alias quae modi ad est,veniam cumque sint. Odio, quidem doloribus sit nostrum itaque delectus dolore pariatur magnamas periores voluptate? Omnis eveniet labore odit optio ullam doloremque ut vero repellendus necessitatibus. Praesentium dolore doloremque harum dignissimos quaerat maxime ex eligendi dolorem explicabo, odio autem, cumque modi quod debitis esse soluta! Minus nobis iure perspiciatis deleniti quae neque hic nesciunt et ad dicta dolores temporibus, vero molestias veniam sunt natus architecto necessitatibus ducimus. Nam quisquam ullam suscipit laborum, excepturi eaque. Eveniet?",
        date: "una fecha",
        href: "/pages/registro.html"
    },
    {
        tittle: "Titulo 2",
        img: "/assets/arteymemesuno.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dicta alias quae modi ad est,veniam cumque sint. Odio, quidem doloribus sit nostrum itaque delectus dolore pariatur magnamas periores voluptate? Omnis eveniet labore odit optio ullam doloremque ut vero repellendus necessitatibus. Praesentium dolore doloremque harum dignissimos quaerat maxime ex eligendi dolorem explicabo, odio autem, cumque modi quod debitis esse soluta! Minus nobis iure perspiciatis deleniti quae neque hic nesciunt et ad dicta dolores temporibus, vero molestias veniam sunt natus architecto necessitatibus ducimus. Nam quisquam ullam suscipit laborum, excepturi eaque. Eveniet?",
        date: "una fecha",
        href: "/pages/registro.html"
    },
    {
        tittle: "Titulo 3",
        img: "/assets/arteymemestres.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dicta alias quae modi ad est,veniam cumque sint. Odio, quidem doloribus sit nostrum itaque delectus dolore pariatur magnamas periores voluptate? Omnis eveniet labore odit optio ullam doloremque ut vero repellendus necessitatibus. Praesentium dolore doloremque harum dignissimos quaerat maxime ex eligendi dolorem explicabo, odio autem, cumque modi quod debitis esse soluta! Minus nobis iure perspiciatis deleniti quae neque hic nesciunt et ad dicta dolores temporibus, vero molestias veniam sunt natus architecto necessitatibus ducimus. Nam quisquam ullam suscipit laborum, excepturi eaque. Eveniet?",
        date: "una fecha",
        href: "/pages/registro.html"

    },
    {
        tittle: "Titulo 4",
        img: "/assets/arteymemesdos.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dicta alias quae modi ad est,veniam cumque sint. Odio, quidem doloribus sit nostrum itaque delectus dolore pariatur magnamas periores voluptate? Omnis eveniet labore odit optio ullam doloremque ut vero repellendus necessitatibus. Praesentium dolore doloremque harum dignissimos quaerat maxime ex eligendi dolorem explicabo, odio autem, cumque modi quod debitis esse soluta! Minus nobis iure perspiciatis deleniti quae neque hic nesciunt et ad dicta dolores temporibus, vero molestias veniam sunt natus architecto necessitatibus ducimus. Nam quisquam ullam suscipit laborum, excepturi eaque. Eveniet?",
        date: "una fecha",
        href: "/pages/registro.html"

    }
];


const template = document.getElementById("testTemplate").content;
const exposures = document.querySelector(".exposuresTest");
const fragmentExposures = document.createDocumentFragment()


ListEvents.forEach(element => {
    template.querySelector("img").setAttribute("src", element.img);
    template.querySelector('img').setAttribute('alt', 'memes')
    template.querySelector("h1").textContent = element.tittle;
    template.querySelector("p").textContent = element.text;
    template.querySelector("a").setAttribute("href", element.href);
    template.querySelector("h3").textContent = element.date;

    template.querySelector('img').classList.add('imgExposure')

    let cloneTemplate = document.importNode(template, true);
    fragmentExposures.appendChild(cloneTemplate);
});

exposures.appendChild(fragmentExposures);
exposures.classList.add("template")


const justEvents = exposures.querySelectorAll('article');
let containEvents = ""

justEvents.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        if (event.target === element.firstElementChild.firstElementChild) {
            containEvents += justEvents[index].innerHTML
            localStorage.setItem('exposureSelect', JSON.stringify(justEvents[index].innerHTML))
        }
    })
})










