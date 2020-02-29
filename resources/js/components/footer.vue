<template>
    <footer id="footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4">
                    <div class="footer-content">
                        <div class="logo">
                            <router-link :to="{name:'home'}" tag="h3" class="default-color noselect"> SHUFFLE </router-link>
                        </div>
                        <div class="devider"><span></span></div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem modi molestiae quia illum. Facilis vitae reprehenderit ex quas dicta, distinctio tenetur ullam sequi labore quod modi voluptates corporis laboriosam numquam.
                        </p>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="footer-content">
                        <router-link :to="{name:'home'}" tag="h3" class="default-color noselect"> Home </router-link>
                        <div class="devider"><span></span></div>
                        <ul>
                            <li>
                                <router-link :to="{name: 'blog'}" tag="span"> Blog </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'gallery'}" tag="span"> Gallery </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'about'}" tag="span"> About </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'contact'}" tag="span"> Contact </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="footer-content">
                        <router-link :to="{name:'home'}" tag="h3" class="default-color noselect"> Events </router-link>
                        <div class="devider"><span></span></div>
                        <ul>
                            <li>
                                <router-link :to="{name: 'blog'}" tag="span"> Upcoming Events </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'gallery'}" tag="span"> Past Events </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'about'}" tag="span"> Events schedules </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'contact'}" tag="span"> Exhibitions </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="footer-content">
                        <router-link :to="{name:'home'}" tag="h3" class="default-color noselect"> Contact </router-link>
                        <div class="devider"><span></span></div>
                        <div> <i class="fas fa-home"></i> Gadda, Saudi Arabia </div>
                        <div> <i class="fas fa-envelope"></i> info@example.com </div>
                        <div> <i class="fas fa-phone"></i> +201234567890 </div>
                        <div> <i class="fas fa-print mr-3"></i> +201234567890 </div>
                    </div>
                </div>
            </div>
            <div class="super-devider"></div>
            <div class="row social">
                <div class="col-md-6">
                    <span class="lead"> SOCIAL </span>
                </div>
                <div class="col-md-6 text-right">
                    <a href="#" class="icon">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="icon">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="icon">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#" class="icon">
                        <i class="fab fa-youtube"></i>
                    </a>
                    <a href="#" class="icon">
                        <i class="fas fa-cloud"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="lower">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 text-center">
                        <i class="far fa-copyright"></i> 2020 Copyright | 
                        <span>
                            Designed & Developed by 
                            <a href="https://microband.co/">
                                <img :src="`${origin}/img/logos/mb.png`" alt="microband">
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer#footer {
    padding-top: 20px;
    background-color: #343a40;
    color: #aaa;
    bottom: 0;
    .footer-content {
        h3 {cursor: pointer;}
        .logo {
            h3 {font-family: 'Trade Winds', ;}
        }
        .devider {
            span {border-bottom: 2px solid #cd9e6c; display: inline-block; width: 120px}
        }
        p, ul {margin-top: 10px; list-style: none; padding: 0 !important;}
        span {cursor: pointer}
        span:hover {color: #eee}
    }
    .super-devider {
        border-bottom: 1px solid #666;
    }

    .social {
        margin: 16px 0;

        a.icon {
            text-decoration: none;
            color: #fff;
            display: inline-flex;
            background-color: #cd9e6c;
            font-size: 20px;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            margin-left: 5px;
        }
    }

    .lower {
        span {color: #fff}
    }

}
</style>

<script>
export default {
    data () {
        return {
            origin
        }
    }, //End of data
}
</script>