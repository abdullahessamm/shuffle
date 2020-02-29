import Home from '../components/template/Home.vue';
import NotFound from '../components/errors/404.vue';
import Events from '../components/template/Events.vue';
import Blog from '../components/template/Blog.vue';
import About from '../components/template/About.vue';
import Contact from '../components/template/Contact.vue';
import Gallery from '../components/template/Gallery.vue';
import Login from '../components/template/Login.vue';
import Register from '../components/template/Register.vue';
import upcomingEvents from '../components/template/events/Upcoming.vue';
import pastEvents from '../components/template/events/Past.vue';
import eventsSchedules from '../components/template/events/Schedules.vue';


export default [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/events',
        component: Events,
        children: [
            {
                path: '',
                name: 'events',
                component: upcomingEvents
            },
            {
                path: 'past',
                component: pastEvents
            },
            {
                path: 'schedules',
                component: eventsSchedules
            }
        ],
    },
    {
        path: '/blog',
        name: 'blog',
        component: Blog
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: Gallery
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '*',
        component: NotFound,
        name: 'notfound',
    }
];