<template>
    <div id="upcoming">
        <div class="row p-v-30">
            <div class="col-6 the-head">
                <div class="title">
                    <h3 class="section-title-head default-color"> Exhibitions: </h3>
                </div>
            </div>
            <div class="col-6 text-right">
                <div class="btn default-color bg-transparent default-border-color"> Show all </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-6 text-center events-group" v-for="event in testEvents" :key="event.id">
                <div class="events-group-inner position-relative">
                    <img :src="event.imgUrl" class="img-fluid">
                    <div class="content">
                        <h5> Test Event </h5>
                        <div id="time" class="text-center">
                            <h5> 11 </h5>
                            <span> MAY </span> <br>
                            <span> 2020 </span>
                        </div>
                        <div class="content">
                            <div class="btn default-bg" @click="() => viewEvent(event)"> View Details </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row p-v-30">
            <div class="col-6 the-head">
                <div class="title">
                    <h3 class="section-title-head default-color"> Sports: </h3>
                </div>
            </div>
            <div class="col-6 text-right">
                <div class="btn default-color bg-transparent default-border-color"> Show all </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-6 text-center events-group" v-for="event in testEvents" :key="event.id">
                <div class="events-group-inner position-relative">
                    <img :src="event.imgUrl" class="img-fluid">
                    <div class="content">
                        <h5> Test Event </h5>
                        <div id="time" class="text-center">
                            <h5> 11 </h5>
                            <span> MAY </span> <br>
                            <span> 2020 </span>
                        </div>
                        <div class="content">
                            <div class="btn default-bg" @click="() => viewEvent(event)"> View Details </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row p-v-30">
            <div class="col-6 the-head">
                <div class="title">
                    <h3 class="section-title-head default-color"> Parties: </h3>
                </div>
            </div>
            <div class="col-6 text-right">
                <div class="btn default-color bg-transparent default-border-color"> Show all </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-6 text-center events-group" v-for="event in testEvents" :key="event.id">
                <div class="events-group-inner position-relative">
                    <img :src="event.imgUrl" class="img-fluid">
                    <div class="content">
                        <h5> Test Event </h5>
                        <div id="time" class="text-center">
                            <h5> 11 </h5>
                            <span> MAY </span> <br>
                            <span> 2020 </span>
                        </div>
                        <div class="content">
                            <div class="btn default-bg" @click="() => viewEvent(event)"> View Details </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row p-v-30">
            <div class="col-6 the-head">
                <div class="title">
                    <h3 class="section-title-head default-color"> Communities: </h3>
                </div>
            </div>
            <div class="col-6 text-right">
                <div class="btn default-color bg-transparent default-border-color"> Show all </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-6 text-center events-group" v-for="event in testEvents" :key="event.id">
                <div class="events-group-inner position-relative">
                    <img :src="event.imgUrl" class="img-fluid">
                    <div class="content">
                        <h5> Test Event </h5>
                        <div id="time" class="text-center">
                            <h5> 11 </h5>
                            <span> MAY </span> <br>
                            <span> 2020 </span>
                        </div>
                        <div class="content">
                            <div class="btn default-bg" @click="() => viewEvent(event)"> View Details </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row p-v-30">
            <div class="col-6 the-head">
                <div class="title">
                    <h3 class="section-title-head default-color"> Theaters: </h3>
                </div>
            </div>
            <div class="col-6 text-right">
                <div class="btn default-color bg-transparent default-border-color"> Show all </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-6 text-center events-group" v-for="event in testEvents" :key="event.id">
                <div class="events-group-inner position-relative">
                    <img :src="event.imgUrl" class="img-fluid">
                    <div class="content">
                        <h5> Test Event </h5>
                        <div id="time" class="text-center">
                            <h5> 11 </h5>
                            <span> MAY </span> <br>
                            <span> 2020 </span>
                        </div>
                        <div class="content">
                            <div class="btn default-bg" @click="() => viewEvent(event)"> View Details </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row p-v-30">
            <div class="col-6 the-head">
                <div class="title">
                    <h3 class="section-title-head default-color"> Concerts: </h3>
                </div>
            </div>
            <div class="col-6 text-right">
                <div class="btn default-color bg-transparent default-border-color"> Show all </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-6 text-center events-group" v-for="event in testEvents" :key="event.id">
                <div class="events-group-inner position-relative">
                    <img :src="event.imgUrl" class="img-fluid">
                    <div class="content">
                        <h5> Test Event </h5>
                        <div id="time" class="text-center">
                            <h5> 11 </h5>
                            <span> MAY </span> <br>
                            <span> 2020 </span>
                        </div>
                        <div class="content">
                            <div class="btn default-bg" @click="() => viewEvent(event)"> View Details </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row p-v-30">
            <div class="col-6 the-head">
                <div class="title">
                    <h3 class="section-title-head default-color"> Others: </h3>
                </div>
            </div>
            <div class="col-6 text-right">
                <div class="btn default-color bg-transparent default-border-color"> Show all </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-6 text-center events-group" v-for="event in testEvents" :key="event.id">
                <div class="events-group-inner position-relative">
                    <img :src="event.imgUrl" class="img-fluid">
                    <div class="content">
                        <h5> Test Event </h5>
                        <div id="time" class="text-center">
                            <h5> 11 </h5>
                            <span> MAY </span> <br>
                            <span> 2020 </span>
                        </div>
                        <div class="content">
                            <div class="btn default-bg" @click="() => viewEvent(event)"> View Details </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <transition name="slide">
            <Event v-if="eventComponent" :event="eventDetails" :closeEvent="closeEvent"></Event>
        </transition>
    </div>
</template>

<style lang="scss" scoped>
#upcoming {
    padding: 0 0 50px 0;
    .p-v-30 {padding-top: 30px; padding-bottom: 30px;}
    .events-group {margin-bottom: 30px;}
    
    .events-group-inner {
        img {width: 100%}
        .content {
            background-color: rgba(0,0,0,0.4);
            justify-content: left;
            align-items: flex-end;
            padding: 10px;
            h5 {
                max-width: 50%;
                max-height: 50%;
                color: #fff;
                font-family: 'Odibee Sans', ;
                font-size: 30px;
            }
            #time {
                position: absolute;
                top: 0;
                right: 7px;
                background-color: rgba(0,0,0,0.8);
                width: 70px;
                padding: 10px 0;
                h5 {margin: auto}
            }
            .content {
                justify-content: center;
                align-items: center;
                background: linear-gradient(to bottom right, rgba(205, 158, 108, 0.8), rgba(52, 58, 64, 0.8));
                background: -webkit-linear-gradient(to bottom right, rgba(205, 158, 108, 0.8), rgba(52, 58, 64, 0.8));
                background: -o-linear-gradient(to bottom right, rgba(205, 158, 108, 0.8), rgba(52, 58, 64, 0.8));
                background: -moz-linear-gradient(to bottom right, rgba(205, 158, 108, 0.8), rgba(52, 58, 64, 0.8));
                -webkit-transition: opacity ease-in-out 0.3s;
                   -moz-transition: opacity ease-in-out 0.3s;
                     -o-transition: opacity ease-in-out 0.3s;
                    -ms-transition: opacity ease-in-out 0.3s;
                        transition: opacity ease-in-out 0.3s;
                opacity: 0;
                .btn {
                    color: #fff;
                    -webkit-transform: translateY(10px);
                       -moz-transform: translateY(10px);
                         -o-transform: translateY(10px);
                        -ms-transform: translateY(10px);
                            transform: translateY(10px);
                    -webkit-transition: transform ease-in-out 0.3s;
                       -moz-transition: transform ease-in-out 0.3s;
                         -o-transition: transform ease-in-out 0.3s;
                        -ms-transition: transform ease-in-out 0.3s;
                            transition: transform ease-in-out 0.3s;
                }
            }
            .content:hover > .btn {
                -webkit-transform: translateY(0);
                   -moz-transform: translateY(0);
                     -o-transform: translateY(0);
                    -ms-transform: translateY(0);
                        transform: translateY(0);
            }
        }
        .content:hover > .content { opacity: 1 }
    }
}
</style>

<script>
import Event from './Event';
export default {
    data () {
        return {
            origin,
            eventComponent: false,
            eventDetails: null,
        }
    }, //End of data

    methods: {
        seed () { this.$store.commit('seed') },
        viewEvent (e) {
            this.eventDetails = e;
            this.eventComponent = true;
        }, //End of viewEvent
        closeEvent () {
            this.eventDetails = null;
            this.eventComponent = false;
        }, //End of closeEvent
    }, //End of methods

    computed: {
        testEvents () {
            return this.$store.getters.get4Events;
        }, //End of allEvents
    }, //End of computed

    mounted () {
        this.seed()
    }, //End of mounted

    components: { Event, },

}
</script>