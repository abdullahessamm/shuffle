<template>
    <div id="event-details" :class="[language, 'w-100']">
        <div class="container-fluid">
            <div class="row margin-bottom">
                <div class="col-12">
                    <div class="close" v-on:click="closeEvent"> <i class="fas fa-times"></i> </div>
                </div>
            </div>
            <div class="row details">
                <div class="col-lg-5">
                    <img :src="event.imgUrl" class="w-100">
                </div>
                <div class="col-lg-7">
                    <h2 class="default-color"> {{lang === 'ar' ? event.titleInArabic : event.title}} </h2>
                    <div class="details-container">
                        <span class="date soft-color"> <i class="far fa-clock" style="color:#555"></i> {{ getDate.day }} {{getDate.month}}, {{getDate.year}} </span> <br>
                        <span class="location soft-color"> <i class="fas fa-map-marker-alt" style="color:#555"></i> {{ lang === 'ar' ? event.locationInArabic : event.location }} </span>
                        <p class="lead"> {{ lang === 'ar' ? event.descriptionInArabic : event.description}} </p>
                        <div class="devider"></div>
                        <span class="tickets-available soft-color"> {{event.ticket.count}} tickets avialable! <i class="far fa-smile-beam"></i> </span>
                        <div class="require-order">
                            <input type="number" min="1" :max="event.ticket.count" v-model="requiredTicketsCount">
                            <div class="btn default-bg" style="color:#fff;"> Get {{ 2 > requiredTicketsCount ? 'ticket' : requiredTicketsCount +  ' tickets'}} for {{ event.ticket.unitPrice * requiredTicketsCount }}$ </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .devider {border-bottom: 1px solid #ccc}
    
    #event-details {
        position: fixed;
        top: 67.3906px;
        left: 0px;
        background-color: #fff;
        z-index: 999;
        overflow-x: hidden;
        overflow-y: auto;
        padding: 20px 0;
        box-shadow: 0px 1px 70px #000;

        .details {
            h2 {font-family: 'Odibee Sans', ; font-size: 37px}
            .details-container {margin-left: 10px;}
            span.soft-color { color: #888 }
            p {margin-top: 10px; color: #555}
            .tickets-available { margin: 10px 0; display: block }
        }

        .margin-bottom { margin-bottom: 30px }
    }
</style>

<script>
export default {
    
    props: ['event', 'closeEvent'], //End of porps
    data () {
        return {
            origin,
            lang,
            groupName: 'upcoming',
            language: { dRTL: false, "text-right" : false }, //End of pageClasses

            //Tickets
            requiredTicketsCount: 1,

        }
    }, //End of data

    computed: {
        getDate () { return this.$store.getters.translateStamps(this.event.id) }, //end of getDate
    }, //End of computed


    mounted () {
        $('body').css('overflow-y', 'hidden');
        function setHeight () {
            let windowHeight = window.innerHeight;
            $('#event-details').innerHeight(windowHeight);
        }

        setHeight();
        $(window).on('resize', setHeight);

        //set language
        if (lang === 'ar') {
            this.language.dRTL = true;
            this.language["text-right"] = true;
        }
        
    }, //End of mounted
    beforeDestroy () {
        $('body').css('overflow-y', 'auto');
        $(window).off('resize');
    }, //End of beforeDestroy
}
</script>