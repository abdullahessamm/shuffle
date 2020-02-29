<template>
    <div id="home">
        <section id="cover">
            <img :src="`${origin}/img/covers/1019390_Arab-Health-exhibition.jpg`" alt="Cover">
            <div id="content" class="content">
                <div class="content-inner text-center noselect">
                    <h2> {{sentences.home_page.welcome.toUpperCase()}} <span class="default-color">{{sentences.title.toUpperCase()}}</span> </h2>
                    <h1> {{sentences.navbar.events}} <span class="default-color">{{lang === 'ar' ? 'و' : '&'}}</span> {{sentences.navbar.exhibitions}} </h1>
                    <router-link tag="div" :to="{name: 'events'}" class="button"> {{sentences.home_page.view_events.toUpperCase()}} </router-link>
                </div>
            </div>
        </section>
        <section id="hot-events" class="p-v-50">
            <div class="container-fluid">
                <div class="title">
                    <h3 class="section-title-head"> <span class="fire"><i class="fas fa-fire"></i></span> Hot Events </h3>
                    <p class="lead">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque tempore eveniet, nulla impedit commodi modi soluta at aut qui omnis cumque alias hic, illo voluptatem facere natus deleniti deserunt explicabo.
                    </p>
                </div>
                <div class="container">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img :src="`${origin}/img/covers/events/79e35e7dc6e4dcd529b12c459e2a42f6.jpg`" class="d-block w-100" alt="event1">
                                <div class="content">
                                    <div class="content-inner text-center">
                                        <h2> Football Event </h2>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae placeat et a iure deserunt! Exercitationem veniam iste sed! Fuga iusto labore quia. Ea, vel. Laudantium alias sint labore aut error.
                                        </p>
                                        <div class="btn"> Show details </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img :src="`${origin}/img/covers/events/1019390_Arab-Health-exhibition.jpg`" class="d-block w-100" alt="event2">
                                <div class="content">
                                    <div class="content-inner text-center">
                                        <h2> Party Event </h2>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae placeat et a iure deserunt! Exercitationem veniam iste sed! Fuga iusto labore quia. Ea, vel. Laudantium alias sint labore aut error.
                                        </p>
                                        <div class="btn"> Show details </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img :src="`${origin}/img/covers/events/Cover-March-28-2019.jpg`" class="d-block w-100" alt="event3">
                                <div class="content">
                                    <div class="content-inner text-center">
                                        <h2> Theater Event </h2>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae placeat et a iure deserunt! Exercitationem veniam iste sed! Fuga iusto labore quia. Ea, vel. Laudantium alias sint labore aut error.
                                        </p>
                                        <div class="btn"> Show details </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="upcoming-events" class="p-v-50">
            <div class="container-fluid">
                <div class="row title">
                    <div class="col-8">
                        <h3 class="section-title-head mobile-h"> <span class="fire"> <i class="fas fa-stopwatch"></i> </span> Upcoming Events </h3>
                    </div>
                    <div class="col-4 text-right">
                        <div class="btn default-border-color bg-transparent default-color radius-button"> Show All </div>
                    </div>
                </div>
                <div class="row upcoming-event">
                    <div class="col-md-6 col-12">
                        <img :src="`${origin}/img/covers/events/upcoming/bs33-390x280.jpg`" alt="" class="w-100">
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="event-description">
                            <h4 class="default-color"> Test Event </h4>
                            <span class="date"> At 1/4/2020 </span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi est magni sequi hic? Eaque obcaecati id provident ipsum, repellat, numquam adipisci iusto voluptatum omnis voluptas doloribus optio, ex voluptatibus vitae!
                            </p>
                            <div class="button">
                                <div class="btn default-bg radius-button" style="color: #fff"> Book Ticket Now! </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="row upcoming-event">
                    <div class="col-md-6 col-12 d-none d-md-block">
                        <div class="event-description">
                            <h4 class="default-color"> Test Event </h4>
                            <span class="date"> At 1/4/2020 </span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi est magni sequi hic? Eaque obcaecati id provident ipsum, repellat, numquam adipisci iusto voluptatum omnis voluptas doloribus optio, ex voluptatibus vitae!
                            </p>
                            <div class="button">
                                <div class="btn default-bg radius-button" style="color: #fff"> Book Ticket Now! </div>
                            </div>
                        </div> 
                    </div>
                    <div class="col-md-6 col-12 text-right">
                        <img :src="`${origin}/img/covers/events/upcoming/f7a1c6d52f622bc3b1527a0783bed92a-390x280.jpeg`" alt="" class="w-100">
                    </div>
                    <div class="col-md-6 col-12 d-block d-md-none">
                        <div class="event-description">
                            <h4 class="default-color"> Test Event </h4>
                            <span class="date"> At 1/4/2020 </span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi est magni sequi hic? Eaque obcaecati id provident ipsum, repellat, numquam adipisci iusto voluptatum omnis voluptas doloribus optio, ex voluptatibus vitae!
                            </p>
                            <div class="button">
                                <div class="btn default-bg radius-button" style="color: #fff"> Book Ticket Now! </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="row upcoming-event last">
                    <div class="col-md-6 col-12">
                        <img :src="`${origin}/img/covers/events/upcoming/nba-cool-wallpaper-390x280.jpg`" alt="" class="w-100">
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="event-description">
                            <h4 class="default-color"> Test Event </h4>
                            <span class="date"> At 1/4/2020 </span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi est magni sequi hic? Eaque obcaecati id provident ipsum, repellat, numquam adipisci iusto voluptatum omnis voluptas doloribus optio, ex voluptatibus vitae!
                            </p>
                            <div class="button">
                                <div class="btn default-bg radius-button" style="color: #fff"> Book Ticket Now! </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
        <section id="statistics">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4 text-center">
                        <div class="statistic">
                            <div>
                                <i class="far fa-calendar-alt fa-4x"></i>
                            </div>
                            <h4> EVENTS ORGANIZED </h4>
                            <h4> {{counters.events}} </h4>
                        </div>
                    </div>
                    <div class="col-md-4 text-center">
                        <div class="statistic">
                            <div>
                                <i class="fas fa-users fa-4x"></i>
                            </div>
                            <h4> ACTIVE USERS </h4>
                            <h4> {{counters.users}} </h4>
                        </div>
                    </div>
                    <div class="col-md-4 text-center">
                        <div class="statistic">
                            <div>
                                <i class="fas fa-ticket-alt fa-4x"></i>
                            </div>
                            <h4> TICKETS SOLD </h4>
                            <h4> {{counters.tickets}} </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="latest-news" class="p-v-50">
            <div class="container-fluid">
                <div class="row title">
                    <div class="col-8">
                        <h3 class="section-title-head mobile-h"> <span class="fire"> <i class="fas fa-newspaper"></i> </span> Latest posts </h3>
                    </div>
                    <div class="col-4 text-right">
                        <div class="btn default-border-color bg-transparent default-color radius-button"> Show All </div>
                    </div>
                </div>
                    <div class="row post">
                        <div class="col-12 col-md-4">
                            <img :src="`${origin}/img/covers/events/upcoming/nba-cool-wallpaper-390x280.jpg`" class="w-100">
                        </div>
                        <div class="col-12 col-md-8">
                            <div class="post-inner">
                                <h3 class="default-color noselect"> Testing post </h3>
                                <span class="time-and-auther noselect"> 20feb 2020 | by maneger </span>
                                <p class="description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio rerum sapiente accusantium sequi! Corporis nesciunt dicta laudantium atque assumenda, facilis labore adipisci sed quasi ad ea, unde iusto numquam.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row post">
                        <div class="col-12 col-md-4">
                            <img :src="`${origin}/img/covers/events/upcoming/f7a1c6d52f622bc3b1527a0783bed92a-390x280.jpeg`" class="w-100">
                        </div>
                        <div class="col-12 col-md-8">
                            <div class="post-inner">
                                <div class="post-inner">
                                    <h3 class="default-color noselect"> Testing post </h3>
                                    <span class="time-and-auther noselect"> 20feb 2020 | by maneger </span>
                                    <p class="description">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio rerum sapiente accusantium sequi! Corporis nesciunt dicta laudantium atque assumenda, facilis labore adipisci sed quasi ad ea, unde iusto numquam.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row post">
                        <div class="col-12 col-md-4">
                            <img :src="`${origin}/img/covers/events/upcoming/bs33-390x280.jpg`" class="w-100">
                        </div>
                        <div class="col-12 col-md-8">
                            <div class="post-inner">
                                <div class="post-inner">
                                    <h3 class="default-color noselect"> Testing post </h3>
                                    <span class="time-and-auther noselect"> 20feb 2020 | by maneger </span>
                                    <p class="description">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio rerum sapiente accusantium sequi! Corporis nesciunt dicta laudantium atque assumenda, facilis labore adipisci sed quasi ad ea, unde iusto numquam.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
        <section id="feedback" class="p-v-50">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 class="text-center"> Help us to improve our services </h3>
                    </div>
                </div>
                <form @submit.prevent :action="`${origin}/api/feedback/msg`" method="post" autocomplete="off">
                    <div class="row">
                            <div class="col-md-6 m-b">
                                <input type="text" name="firstname" placeholder="First name..." class="w-100">
                            </div>
                            <div class="col-md-6 m-b">
                                <input type="text" name="lastname" placeholder="Last name..." class="w-100">
                            </div>
                            <div class="col-12 m-b">
                                <input type="email" name="email" placeholder="Your email..." class="w-100 nofill">
                            </div>
                            <div class="col-12 m-b">
                                <input type="text" name="title" placeholder="Title..." class="w-100">
                            </div>
                            <div class="col-12 m-b">
                                <textarea name="subject" cols="30" rows="10" placeholder="Subject..." class="w-100" maxlength="255"></textarea>
                            </div>
                            <div class="col-12 text-center">
                                <button class="btn btn-warning" type="submit"> Send feedback </button>
                            </div>
                    </div>
                </form>
            </div>
        </section>
        <section id="our-clients" class="p-v-50">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3 col-12 client text-center">
                        <img :src="`${origin}/img/logos/linkedinlogo.png`" alt="" class="img-fluid">
                    </div>
                    <div class="col-md-3 col-12 client text-center">
                        <img :src="`${origin}/img/logos/microsoft-vector-logo.png`" alt="" class="img-fluid">
                    </div>
                    <div class="col-md-3 col-12 client text-center">
                        <img :src="`${origin}/img/logos/6764948_preview.png`" alt="" class="img-fluid">
                    </div>
                    <div class="col-md-3 col-12 client text-center">
                        <img :src="`${origin}/img/logos/128-1280162_github-logo-png-cat-transparent-png.png`" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
        </section>
        <div id="wanna-ticket" v-if="wannaTicket">
            <div class="inner">
                <div class="close" @click="wannaTicket=false"> <i class="fas fa-times"></i> </div>
                <h3 class="default-color text-center"> Wanna book ticket? </h3>
                <p class="lead"> Join Shuffle Now and Book your Ticket in Few Steps! </p>
                <div class="text-center">
                    <router-link tag="div" :to="{name:'register'}" class="btn"> Register Now! </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#cover {
    width: 100%;
    position: relative;
    overflow-x: hidden;
    
    img {
        width: 100%;
        height: 100%;
    }
    #content {

        background-color: rgba($color:#343a40 , $alpha: 0.9);

        .content-inner {
            h1 {font-family: 'Trade Winds', ; margin-top: 40px;}
            h2 {font-family: 'Krona One', ;}
            .button {
                margin-top: 20%;
                background-color: #cd9e6c;
                display: inline-block;
                padding: 10px 20px;
                font-size: 20px;
                border-radius: 50px;
                cursor: pointer;
                -webkit-transition: box-shadow ease-in-out 0.3s, transform ease-in-out 0.3s;
                -moz-transition: box-shadow ease-in-out 0.3s, transform ease-in-out 0.3s;
                -o-transition: box-shadow ease-in-out 0.3s, transform ease-in-out 0.3s;
                transition: box-shadow ease-in-out 0.3s, transform ease-in-out 0.3s;
            }
            .button:hover {
                box-shadow: 0px 1px 10px #000;
                transform: scale(1.05);
            }
        }

    }
}
section#hot-events{
    
    .title {margin-bottom: 40px;}
    .carousel {
        height: 450px;
        overflow: hidden;
        .carousel-inner {
            height: 100%;

            .carousel-item {
                height: 100%;
                img {height: 100%}
                .content {
                    background-color: rgba($color:#343a40 , $alpha: 0.5);

                    h2 {
                        color: #cd9e6c;
                        font-family: 'Krona One', ;
                        margin-bottom: 20px;
                    }

                    p {
                        max-width: 70%;
                        margin: auto;
                        color: #bbb;
                        font-size: 18px;
                    }

                    .btn {
                        color: #fff !important;
                        background-color: #cd9e6c;
                        border-radius: 20px;
                        margin-top: 30px;
                        font-size: 18px;
                    }
                }
            }
        }
    }
}

section#upcoming-events {
    background-color: #fff;

    .title { margin-bottom: 30px; }
    .upcoming-event {
        margin-bottom: 70px;

        .event-description {
            padding: 20px 0;
            h4 {
                font-size: 30px;
                font-family: 'Anton', ;
                margin-bottom: 20px;
            }
            p {
                font-size: 18px;
                color: #555;
            }
        }
    }
}

section#statistics {
    background: url('/img/stats.jpg') no-repeat center center;

    .container-fluid {
        background-color: rgba($color:#343a40 , $alpha: 0.8);
        padding-top: 80px;
        padding-bottom: 80px;
        color: #fff;

        .statistic {
            div {
                color: #cd9e6c;
                margin-bottom: 20px;
            }
            h4 { color: #999 }
        }
    }
}

section#latest-news {
    .title {margin-bottom: 30px}

    .post {
        margin-bottom: 20px;
        .post-inner {
            padding: 10px 5px;
            h3 {
                font-size: 27px;
                font-family: "Anton";
                margin-bottom: 13px;
            }
            span.time-and-auther {
                color: #777;
                display: inline-block;
                margin-bottom: 30px;
            }
            p.description {
                color: #555;
                font-size: 16px;
            }
        }
    }
}
section#feedback {
    background: linear-gradient(to bottom right, #cd9e6c, #343a40);
    background: -webkit-linear-gradient(to bottom right, #cd9e6c, #343a40);
    background: -o-linear-gradient(to bottom right, #cd9e6c, #343a40);
    background: -moz-linear-gradient(to bottom right, #cd9e6c, #343a40);

    h3 {
        color: #fff;
        font-family: 'Trade Winds',;
        margin-bottom: 30px;
    }

    form {
        max-width: 635px !important;
        margin: auto;


        .m-b {margin-bottom: 7px;}

        input, textarea {
            background-color: #343a40 !important;
            color: #fff;
            border: 1px solid #cd9e6c;
            padding: 5px 10px;
            border-radius: 10px;
            color: #cd9e6c;
        }
        textarea {resize: none; border-radius: 20px;}

        .btn {
            background-color: #cd9e6c;
            border-color: #cd9e6c;
            width: 100%;
            border-radius: 30px;
            font-size: 16px;
            color: #fff;
        }

    }

}

section#our-clients {
    img {
        height: 100px;
    }
}

div#wanna-ticket {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99999999;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba($color:#343a40 , $alpha: 0.9);

    .inner {
        background-color: #fff;
        padding: 30px 50px;
        position: relative;

        h3 {margin-bottom: 16px; font-family: 'Odibee Sans', ; font-size: 35px;}
        .btn {
            color: #fff;
            background-color: #cd9e6c;
            margin-top: 30px;
        }

    }
    
}

//media query
@media (max-width: 576px) {
    .mobile-h {font-size: 35px !important}

}
    
</style>

<script>
export default {

    data () {
        return {
            origin,
            lang,
            wannaTicket: false,
            openedOneTime: false,
            counters: {
                events: 598,
                users: 16173,
                tickets: 136874
            }
        }
    },//End of data
    
    computed: {
        sentences: function () {
            return this.$store.state.sentences;
        },
    },

    methods: {
        setDimentions () {
            let cover = $('#cover'),
                windowHeight = window.innerHeight;
            cover.innerHeight(windowHeight)
        }, //End of setDimentions
        toggleWannaTicket () {
            if ($(window).scrollTop() >= $('.upcoming-event.last').offset().top && !this.openedOneTime) {
                this.wannaTicket = true;
                this.openedOneTime = true;
            }
        }, //End of toggleWannaTicket
        
    }, //End of methods

    mounted () {
        this.setDimentions();
        window.addEventListener('resize', this.setDimentions);
        $('nav.navbar').addClass('cover-nav');
        $(window).on('scroll', () => {
            $(window).scrollTop() === 0 && document.querySelector('#cover') ? $('nav.navbar').addClass('cover-nav'): $('nav.navbar').removeClass('cover-nav');
            this.toggleWannaTicket();
        });
    }, //End of created

    beforeDestroy () {
        $('nav.navbar').removeClass('cover-nav');
        $(window).off('scroll');
    } //End of beforeDestroy

}
</script>