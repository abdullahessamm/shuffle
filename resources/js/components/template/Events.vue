<template>
    <div id="events" class="margin-nav">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 navigator">
                    <nav class="nav nav-pills nav-justified">
                        <router-link to="/events" active-class="active" class="nav-item nav-link" exact>Upcoming Events</router-link>
                        <router-link to="/events/past" active-class="active" class="nav-item nav-link">Past Events</router-link>
                        <router-link to="/events/schedules" active-class="active" class="nav-item nav-link">Events Schedules</router-link>
                    </nav>
                </div>
            </div>
            <transition name="fade">
                <router-view></router-view>
            </transition>
        
        </div>
    </div>
</template>

<style lang="scss" scoped>
#events {
    .navigator {
        padding-top: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
        a {
            color: #cd9e6c; border-radius: 100px;
            font-size: 18px;
            -webkit-transition: ease background-color 0.3s;
            -moz-transition: ease background-color 0.3s;
            -o-transition: ease background-color 0.3s;
            -ms-transition: ease background-color 0.3s;
            transition: ease background-color 0.3s;
        }
        .active {background-color: #cd9e6c; color: #fff}
    }
    .events {
        padding-top: 20px;
        padding-bottom: 20px;
    }
}
</style>

<script>
export default {

}
</script>