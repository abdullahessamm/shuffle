<template>
    <div id="past">
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
            <div class="col-md-3 text-center" v-for="event in testEvents" :key="event.id">
                <div class="events-group-inner">
                    <img :src="event.imgUrl" class="img-fluid">
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
            <div class="col-md-3 text-center" v-for="event in testEvents" :key="event.id">
                <div class="events-group-inner">
                    <img :src="event.imgUrl" class="img-fluid">
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
            <div class="col-md-3 text-center" v-for="event in testEvents" :key="event.id">
                <div class="events-group-inner">
                    <img :src="event.imgUrl" class="img-fluid">
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
            <div class="col-md-3 text-center" v-for="event in testEvents" :key="event.id">
                <div class="events-group-inner">
                    <img :src="event.imgUrl" class="img-fluid">
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
            <div class="col-md-3 text-center" v-for="event in testEvents" :key="event.id">
                <div class="events-group-inner">
                    <img :src="event.imgUrl" class="img-fluid">
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
            <div class="col-md-3 text-center" v-for="event in testEvents" :key="event.id">
                <div class="events-group-inner">
                    <img :src="event.imgUrl" class="img-fluid">
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
            <div class="col-md-3 text-center" v-for="event in testEvents" :key="event.id">
                <div class="events-group-inner">
                    <img :src="event.imgUrl" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#past {
    padding: 0 0 50px 0;
    .p-v-30 {padding-top: 30px; padding-bottom: 30px;}
    .events-group {
        overflow-x: hidden;
        
    }
}
</style>

<script>
export default {
    data () {
        return {
            origin,
        }
    }, //End of data

    methods: {
        seed () { this.$store.commit('seed') },
    }, //End of methods

    computed: {
        testEvents () {
            return this.$store.getters.get4Events;
        }, //End of allEvents
    }, //End of computed

    mounted () {
        this.seed()
    }, //End of mounted
}
</script>