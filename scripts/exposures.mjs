const ListEvents = [
    {
        tittle: "Titulo 1",
        img: "/assets/imgbananaAbstrac.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dicta alias quae modi ad est,veniam cumque sint. Odio, quidem doloribus sit nostrum itaque delectus dolore pariatur magnamas periores voluptate? Omnis eveniet labore odit optio ullam doloremque ut vero repellendus necessitatibus. Praesentium dolore doloremque harum dignissimos quaerat maxime ex eligendi dolorem explicabo, odio autem, cumque modi quod debitis esse soluta! Minus nobis iure perspiciatis deleniti quae neque hic nesciunt et ad dicta dolores temporibus, vero molestias veniam sunt natus architecto necessitatibus ducimus. Nam quisquam ullam suscipit laborum, excepturi eaque. Eveniet?",
        date: "una fecha",
        href: "/pages/registro.html"
    },
    {
        tittle: "Titulo 2",
        img: "/assets/imgcitycolors.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dicta alias quae modi ad est,veniam cumque sint. Odio, quidem doloribus sit nostrum itaque delectus dolore pariatur magnamas periores voluptate? Omnis eveniet labore odit optio ullam doloremque ut vero repellendus necessitatibus. Praesentium dolore doloremque harum dignissimos quaerat maxime ex eligendi dolorem explicabo, odio autem, cumque modi quod debitis esse soluta! Minus nobis iure perspiciatis deleniti quae neque hic nesciunt et ad dicta dolores temporibus, vero molestias veniam sunt natus architecto necessitatibus ducimus. Nam quisquam ullam suscipit laborum, excepturi eaque. Eveniet?",
        date: "una fecha",
        href: "/pages/registro.html"
    },
    {
        tittle: "Titulo 3",
        img: "/assets/imgcolorsart.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dicta alias quae modi ad est,veniam cumque sint. Odio, quidem doloribus sit nostrum itaque delectus dolore pariatur magnamas periores voluptate? Omnis eveniet labore odit optio ullam doloremque ut vero repellendus necessitatibus. Praesentium dolore doloremque harum dignissimos quaerat maxime ex eligendi dolorem explicabo, odio autem, cumque modi quod debitis esse soluta! Minus nobis iure perspiciatis deleniti quae neque hic nesciunt et ad dicta dolores temporibus, vero molestias veniam sunt natus architecto necessitatibus ducimus. Nam quisquam ullam suscipit laborum, excepturi eaque. Eveniet?",
        date: "una fecha",
        href: "/pages/registro.html"

    },
    {
        tittle: "Titulo 4",
        img: "/assets/imgintrospection.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dicta alias quae modi ad est,veniam cumque sint. Odio, quidem doloribus sit nostrum itaque delectus dolore pariatur magnamas periores voluptate? Omnis eveniet labore odit optio ullam doloremque ut vero repellendus necessitatibus. Praesentium dolore doloremque harum dignissimos quaerat maxime ex eligendi dolorem explicabo, odio autem, cumque modi quod debitis esse soluta! Minus nobis iure perspiciatis deleniti quae neque hic nesciunt et ad dicta dolores temporibus, vero molestias veniam sunt natus architecto necessitatibus ducimus. Nam quisquam ullam suscipit laborum, excepturi eaque. Eveniet?",
        date: "una fecha",
        href: "/pages/registro.html"

    },
    {
        tittle: "Titulo 5",
        img: "/assets/imgmaninfire.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dicta alias quae modi ad est,veniam cumque sint. Odio, quidem doloribus sit nostrum itaque delectus dolore pariatur magnamas periores voluptate? Omnis eveniet labore odit optio ullam doloremque ut vero repellendus necessitatibus. Praesentium dolore doloremque harum dignissimos quaerat maxime ex eligendi dolorem explicabo, odio autem, cumque modi quod debitis esse soluta! Minus nobis iure perspiciatis deleniti quae neque hic nesciunt et ad dicta dolores temporibus, vero molestias veniam sunt natus architecto necessitatibus ducimus. Nam quisquam ullam suscipit laborum, excepturi eaque. Eveniet?",
        date: "una fecha",
        href: "/pages/registro.html"
    }

];


const template = document.getElementById("templateEvents").content;
const exposures = document.querySelector(".exposuresTest");
const fragmentExposures = document.createDocumentFragment()


ListEvents.forEach(element => {
    template.querySelector('.imgEvent').style.backgroundImage = `url('${element.img}')`
    template.querySelector("h1").textContent = element.tittle;
    template.querySelector("p").textContent = element.text;
    template.querySelector("a").setAttribute("href", element.href);
    template.querySelector("h3").textContent = element.date;
 
    let cloneTemplate = document.importNode(template, true);
    fragmentExposures.appendChild(cloneTemplate);
});

exposures.appendChild(fragmentExposures);
exposures.classList.add('template');



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










