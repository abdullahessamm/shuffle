<template>
    <div class="navigation-bar">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <router-link tag="a" :to="{name: 'home'}" class="navbar-brand" href="#">
                <img :src="`${origin}/img/logo/Shuffle-Logo.png`" alt="Logo" title="SHUFFLE" class="img-fluid">
            </router-link>
            <button class="navbar-toggler" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul :class="lang === 'ar' ? 'navbar-nav m-auto dir-rtl' : 'navbar-nav m-auto'">
                <router-link :to="{name:'home'}" tag="li" active-class="active" class="nav-item" exact>
                    <a class="nav-link">{{Sentences.navbar.home}} <span class="sr-only">(current)</span></a>
                </router-link>
                <router-link tag="li" to="/events" active-class="active" class="nav-item events">
                    <a class="nav-link">{{Sentences.navbar.events}} <i class="fas fa-sort-down"></i></a>
                    <span class="menu-container">
                        <ul class="menu">
                            <li class="mr-bottom text-center">
                                <router-link tag="a" to="/events"> {{Sentences.navbar.upcoming_events}} </router-link>
                            </li>
                            <li class="mr-bottom text-center">
                                <router-link tag="a" to="/events/past"> {{Sentences.navbar.past_events}} </router-link>
                            </li>
                            <li class="mr-bottom text-center">
                                <router-link tag="a" to="/events/schedules"> {{Sentences.navbar.events_schedules}} </router-link>
                            </li>
                            <li class="mr-bottom text-center">
                                <router-link tag="a" to="/events/exhibitions"> {{Sentences.navbar.exhibitions}} </router-link>
                            </li>
                        </ul>
                    </span>
                </router-link>
                <router-link tag="li" :to="{name: 'blog'}" active-class="active" class="nav-item">
                    <a class="nav-link">{{Sentences.navbar.blog}}</a>
                </router-link>
                <router-link tag="li" :to="{name: 'gallery'}" active-class="active" class="nav-item">
                    <a class="nav-link">{{Sentences.navbar.gallery}}</a>
                </router-link>
                <router-link tag="li" :to="{name: 'about'}" active-class="active" class="nav-item">
                    <a class="nav-link">{{Sentences.navbar.about}}</a>
                </router-link>
                <router-link tag="li" :to="{name: 'contact'}" active-class="active" class="nav-item">
                    <a class="nav-link">{{Sentences.navbar.contact}}</a>
                </router-link>
                </ul>
                <router-link :to="{name: 'login'}" tag="div" class="btn login m-r"> {{Sentences.navbar.login}} </router-link>
                <router-link :to="{name: 'register'}" tag="div" class="btn signup m-r"> {{Sentences.navbar.register}} </router-link>
                <span :class="lang === 'ar' ? 'lang m-r dir-rtl' : 'lang m-r'">
                    {{Sentences.navbar.language}} <i class="fas fa-sort-down"></i>
                    <span class="menu langs">
                        <div id="lang-arabic" class="language text-center" style="border-bottom:1px solid #555;padding-bottom:5px">{{Sentences.navbar.arabic}}</div>
                        <div id="lang-english" class="language text-center" style="padding-top:5px">{{Sentences.navbar.english}}</div>
                    </span>    
                </span>
                <span class="cart">
                    <i class="fas fa-shopping-cart"></i>
                </span>
            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
    .dir-rtl {direction: rtl}
    
    .navigation-bar {
        position: fixed;
        z-index: 9999;
        top: 0;
        left:0;
        width: 100%;
        height: 63px;
        nav.navbar {
            padding: 0 3% !important;

            .navbar-brand {
            img {width: 150px}
            }
            .navbar-nav .nav-item {
                position: relative;
                transition: background-color ease 0.5s;
                border-radius: 20px;
                padding: 0 5px;
                margin: 0 2px;
                .menu-container {
                    display: none;
                    position: absolute;
                    top:39px;
                    ul.menu {
                        list-style: none;
                        background-color: #343a40;
                        color: #eee;
                        width: 150px;
                        padding: 10px 16px 10px 16px;
                        margin-top: 16px;
                        border-radius: 10px;

                        li {
                            border-bottom: #555 1px solid;
                            a {
                                text-decoration: none;
                                color: rgba(255,255,255,0.8);
                            }
                            a:hover {color: #cd9e6c}
                        }
                        li:last-of-type {border: 0}
                    }

                }
            }
            .events:hover .menu-container {display: block}
            .navbar-nav .active {background-color: #cd9e6c}
        }

        .btn.login {
            border: 1px solid #cd9e6c;
            background-color: #cd9e6c;
            color: #eee;
        }
        .btn.signup {
            border: 1px solid #cd9e6c;
            color: #cd9e6c;
        }
        span.lang {
            color: #aaa;
            cursor: default;
            position: relative;
            .menu {
                position: absolute;
                background-color: #343a40;
                bottom: -78px;
                right: 0;
                width: 100px;
                padding: 10px 0;
                color: #eee;
                display: none;
                .language {cursor: pointer}
            }
        }
        span.lang:hover .menu {display: inline-block;}
        span.cart {
            color: #ddd;
            font-size: 19px;
        }
        .m-r {margin-right: 20px}
        .mr-bottom {padding: 5px 0}
    }
</style>

<script>
export default {
    data() {
        return {
            origin: window.origin,
            lang
        }
    }, //End of data
    computed: {
        Sentences () {
            return this.$store.getters.getSentences;
        }, //End of sentences
    }, //End of computed

    mounted () {
        let changeLanguage = lang => {window.location.href = `${origin}/lang/${lang}`};
        document.querySelector('#lang-english').onclick = () => changeLanguage('en');
        document.querySelector('#lang-arabic').onclick =  () => changeLanguage('ar');
    }, //End of mounted
}
</script>