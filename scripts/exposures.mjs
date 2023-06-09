let dataProfile = JSON.parse(localStorage.getItem('name'));
const contentLogin = document.getElementById('login');
if (dataProfile) {
    contentLogin.textContent = dataProfile
}

const ListEvents = [
    {
        tittle: "Titulo 1",
        img: "/assets/imgbananaAbstrac.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dicta alias quae modi ad est,veniam cumque sint. Odio, quidem doloribus sit nostrum itaque delectus dolore pariatur magnamas periores voluptate? Omnis eveniet labore odit optio ullam doloremque ut vero repellendus necessitatibus. Praesentium dolore doloremque harum dignissimos quaerat maxime ex eligendi dolorem explicabo, odio autem, cumque modi quod debitis esse soluta! Minus nobis iure perspiciatis deleniti quae neque hic nesciunt et ad dicta dolores temporibus, vero molestias veniam sunt natus architecto necessitatibus ducimus. Nam quisquam ullam suscipit laborum, excepturi eaque. Eveniet?",
        date: "Miercoles 19/7/2023",
        hora: "16:00hs",
        href: "/pages/registro.html",
        class: 'mes conceptual'

    },
    {
        tittle: "Titulo 2",
        img: "/assets/imgcitycolors.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dicta alias quae modi ad est,veniam cumque sint. Odio, quidem doloribus sit nostrum itaque delectus dolore pariatur magnamas periores voluptate? Omnis eveniet labore odit optio ullam doloremque ut vero repellendus necessitatibus. Praesentium dolore doloremque harum dignissimos quaerat maxime ex eligendi dolorem explicabo, odio autem, cumque modi quod debitis esse soluta! Minus nobis iure perspiciatis deleniti quae neque hic nesciunt et ad dicta dolores temporibus, vero molestias veniam sunt natus architecto necessitatibus ducimus. Nam quisquam ullam suscipit laborum, excepturi eaque. Eveniet?",
        date: "Jueves 1/7/2023",
        hora: "16:00hs",
        href: "/pages/registro.html",
        class: 'mes pinturas',

    },
    {
        tittle: "Titulo 3",
        img: "/assets/imgcolorsart.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dicta alias quae modi ad est,veniam cumque sint. Odio, quidem doloribus sit nostrum itaque delectus dolore pariatur magnamas periores voluptate? Omnis eveniet labore odit optio ullam doloremque ut vero repellendus necessitatibus. Praesentium dolore doloremque harum dignissimos quaerat maxime ex eligendi dolorem explicabo, odio autem, cumque modi quod debitis esse soluta! Minus nobis iure perspiciatis deleniti quae neque hic nesciunt et ad dicta dolores temporibus, vero molestias veniam sunt natus architecto necessitatibus ducimus. Nam quisquam ullam suscipit laborum, excepturi eaque. Eveniet?",
        date: "Miercoles 28/6/2023",
        hora: "16:00hs",
        href: "/pages/registro.html",
        class: 'semana esculturas',

    },
    {
        tittle: "Titulo 4",
        img: "/assets/imgintrospection.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dicta alias quae modi ad est,veniam cumque sint. Odio, quidem doloribus sit nostrum itaque delectus dolore pariatur magnamas periores voluptate? Omnis eveniet labore odit optio ullam doloremque ut vero repellendus necessitatibus. Praesentium dolore doloremque harum dignissimos quaerat maxime ex eligendi dolorem explicabo, odio autem, cumque modi quod debitis esse soluta! Minus nobis iure perspiciatis deleniti quae neque hic nesciunt et ad dicta dolores temporibus, vero molestias veniam sunt natus architecto necessitatibus ducimus. Nam quisquam ullam suscipit laborum, excepturi eaque. Eveniet?",
        date: "Jueves 6/7/2023",
        hora: "16:00hs",
        href: "/pages/registro.html",
        class: 'sugerencias esculturas',

    },
    {
        tittle: "Titulo 5",
        img: "/assets/imgmaninfire.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dicta alias quae modi ad est,veniam cumque sint. Odio, quidem doloribus sit nostrum itaque delectus dolore pariatur magnamas periores voluptate? Omnis eveniet labore odit optio ullam doloremque ut vero repellendus necessitatibus. Praesentium dolore doloremque harum dignissimos quaerat maxime ex eligendi dolorem explicabo, odio autem, cumque modi quod debitis esse soluta! Minus nobis iure perspiciatis deleniti quae neque hic nesciunt et ad dicta dolores temporibus, vero molestias veniam sunt natus architecto necessitatibus ducimus. Nam quisquam ullam suscipit laborum, excepturi eaque. Eveniet?",
        date: "Sábado 10/6/2023",
        hora: "16:00hs",
        href: "/pages/registro.html",
        class: 'semana pinturas',
    },
    {
        tittle: "Titulo 6",
        img: "/assets/imgApple.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dicta alias quae modi ad est,veniam cumque sint. Odio, quidem doloribus sit nostrum itaque delectus dolore pariatur magnamas periores voluptate? Omnis eveniet labore odit optio ullam doloremque ut vero repellendus necessitatibus. Praesentium dolore doloremque harum dignissimos quaerat maxime ex eligendi dolorem explicabo, odio autem, cumque modi quod debitis esse soluta! Minus nobis iure perspiciatis deleniti quae neque hic nesciunt et ad dicta dolores temporibus, vero molestias veniam sunt natus architecto necessitatibus ducimus. Nam quisquam ullam suscipit laborum, excepturi eaque. Eveniet?",
        date: "Viernes 9/6/2023",
        hora: "16:00hs",
        href: "/pages/registro.html",
        class: 'sugerencias pinturas',

    }
];

const template = document.getElementById("templateEvents").content;
const exposures = document.querySelector(".exposuresTest");
const divPrueba = document.querySelector('#forFilters');
const fragmentExposures = document.createDocumentFragment()

ListEvents.forEach(element => {
    template.querySelector('.imgEvent').style.backgroundImage = `url('${element.img}')`;
    template.querySelector("h1").textContent = element.tittle;
    template.querySelector("p").textContent = element.text;
    template.querySelector("a").setAttribute("href", element.href);
    template.querySelector("h3").textContent = element.date;
    template.querySelector('article').setAttribute('class', `${element.class}`);
    template.querySelector('h4').textContent = element.hora;


    let cloneTemplate = document.importNode(template, true);
    fragmentExposures.appendChild(cloneTemplate);
});

divPrueba.appendChild(fragmentExposures);
divPrueba.classList.add('template');




const justEvents = exposures.querySelectorAll('article');
let containEvents = ""

justEvents.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        if (event.target === element.children[1].firstElementChild.firstElementChild) {
            containEvents += justEvents[index].innerHTML;
            localStorage.setItem('eventsData', JSON.stringify(containEvents));
        }

    })
})

const filterDate = document.getElementById('forDate');
const sugerencias = document.querySelectorAll('.sugerencias');
const mes = document.querySelectorAll('.mes');
const semana = document.querySelectorAll('.semana');

const filterCategory = document.getElementById('forCategory');
console.log(filterCategory)

filterDate.addEventListener('click', (event) => {
    if (event.target.value === 'mes') {
        sugerencias.forEach((element) => {
            element.classList.toggle('toggle')

        });
        semana.forEach((element) => {
            element.classList.toggle('toggle')
        });
    }

    if (event.target.value === 'semana') {
        sugerencias.forEach((element) => {
            element.classList.toggle('toggle')
        });

        mes.forEach((element) => {
            element.classList.toggle('toggle')
        });
    }

    if (event.target.value === 'sugerencias') {
        mes.forEach((element) => {
            element.classList.toggle('toggle')

        });
        semana.forEach((element) => {
            element.classList.toggle('toggle')
        });
    }

})

const pinturas = document.querySelectorAll('.pinturas');
const conceptual = document.querySelectorAll('.conceptual');
const esculturas = document.querySelectorAll('.esculturas');

filterCategory.addEventListener('change', (event) => {
    if (event.target.value === 'conceptual') {
        pinturas.forEach(element => {
            element.classList.toggle('toggle');
        });
        esculturas.forEach(element => {
            element.classList.toggle('toggle');
        });
    }
    if (event.target.value === 'pinturas') {
        conceptual.forEach(element => {
            element.classList.toggle('toggle');
        });
        esculturas.forEach(element => {
            element.classList.toggle('toggle');
        });
    }

    if (event.target.value === 'esculturas') {
        conceptual.forEach(element => {
            element.classList.toggle('toggle');
        });
        pinturas.forEach(element => {
            element.classList.toggle('toggle');
        });
    }

})












