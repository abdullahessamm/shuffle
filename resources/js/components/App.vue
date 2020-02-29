<template>
    <div class="App">
        <div id="body" v-if="render">
            <Header></Header>
            <div id="page">
              <transition name="fade">
                <router-view></router-view>
              </transition>
            </div>
            <Footer></Footer>
        </div>
        <div id="loading" v-if="!render">
            <div class="spinner">
                <div class="cube1"></div>
                <div class="cube2"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

body, html {scroll-behavior: smooth}

*{outline: none}

/* Reset background of inputs */
input:-webkit-autofill {
  -webkit-box-shadow:200px 200px 100px white inset !important; 
  box-shadow:200px 200px 100px white inset !important;
}

//Global classes
.dRTL {direction: rtl}
.allChildRTL * {text-align: right}
.margin-nav {margin-top: 67.3906px;}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
}
.bg-transparent {background-color: transparent;}
.default-color { color: #cd9e6c }
.default-bg { background-color: #cd9e6c }
.default-border-color { border-color: #cd9e6c }
.bg-transparent.default-border-color:hover {background-color: #cd9e6c !important; color: #fff}
.radius-button {border-radius: 100px;}
.fire {color: orange}
.container-fluid {
  padding-right: 3% !important;
  padding-left: 3% !important;
}
nav.navbar.cover-nav {
    background-color: rgba($color:#343a40 , $alpha: 0) !important;
}

.content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #eee;
}

.title {
  .section-title-head {
      font-family: 'Odibee Sans', ;
      font-size: 40px;
  }
  p {
      max-width: 75%;
      padding-left: 30px;
      color: #a0590c
  }
}

.p-v-50 {padding-top: 50px; padding-bottom: 50px}
//// Animations ////
//Loading animation
#loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
}
.spinner {
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
}

.cube1, .cube2 {
  background-color: #cd9e6c;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  left: 0;
  
  -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;
  animation: sk-cubemove 1.8s infinite ease-in-out;
}

.cube2 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

@-webkit-keyframes sk-cubemove {
  25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }
  50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }
  75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }
  100% { -webkit-transform: rotate(-360deg) }
}

@keyframes sk-cubemove {
  25% { 
    transform: translateX(42px) rotate(-90deg) scale(0.5);
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
  } 50% { 
    transform: translateX(42px) translateY(42px) rotate(-179deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
  } 50.1% { 
    transform: translateX(42px) translateY(42px) rotate(-180deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
  } 75% { 
    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
  } 100% { 
    transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
  }
}
//End of loading animation

// fade transition
.fade-enter-active, .fade-leave-active {    
    -webkit-transition: opacity ease 0.3s;
    -moz-transition: opacity ease 0.3s;
    -o-transition: opacity ease 0.3s;
    -ms-transition: opacity ease 0.3s;
    transition: opacity ease 0.3s;
}
.fade-enter, .fade-leave-to {opacity: 0;}
.fade-enter-to, .fade-leave {
      opacity: 1;
      -webkit-transition-delay: 0.3s;
      -moz-transition-delay: 0.3s;
      -o-transition-delay: 0.3s;
      -ms-transition-delay: 0.3s;
      transition-delay: 0.3s;
  }

//slide transition
.slide-enter-active, .slide-leave-active {
  -webkit-transition: transform ease 0.4s;
    -moz-transition: transform ease 0.4s;
    -o-transition: transform ease 0.4s;
    -ms-transition: transform ease 0.4s;
    transition: transform ease 0.4s;
}
.slide-enter, .slide-leave-to {
    -webkit-transform: translateY(100%);
    -moz-transform: translateY(100%);
    -o-transform: translateY(100%);
    -ms-transform: translateY(100%);
    transform: translateY(100%);
}
.slide-enter-to, .slide-leave {
    -webkit-transform: translateY(0px);
    -moz-transform: translateY(0px);
    -o-transform: translateY(0px);
    -ms-transform: translateY(0px);
    transform: translateY(0px);
}

</style>

<script>
    import Header from './Header';
    import Footer from './footer';

    export default {

        methods: {
          toogleFooterPosition () {
            let footer = $('footer#footer');
                if ($('body').innerHeight() <= $(window).innerHeight()) {
                  footer.addClass('position-fixed');
                } else {
                  footer.removeClass('position-fixed');
                }
          }, //End of toogleFooterPosition
        }, //End of methods

        computed: {
            render () { return this.$store.getters.render },
        }, //End of computed

        watch: {
          //scroll to top of page on route change
          $route (to, from) { $(window).scrollTop(0) }, //End of route
        }, //End of watch

        components: {
            Header, Footer
        }, //End of components
    }
</script>
