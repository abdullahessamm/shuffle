export default {
    state: {
        all: [],
        upcoming: [],
        past: [],
        seeded: false,
    }, //End of state

    getters: {
        get4Events (state) {
            return state.all.slice(0,4);
        }, //End of get 4 Events
        translateStamps (state) {
            return (id=null) => {
                try {
                    let stamps  = state.all.find(event => event.id === id).timeStamps,
                        theDate = new Date(stamps),
                        months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                    return {
                        day: theDate.getDate(),
                        month: months[theDate.getMonth()],
                        year: theDate.getFullYear()
                    };
                } catch (e) {
                    throw new Error('(vuex) An error in parameters in translateStamps');
                }
            }
        }, //End of translateStamps

    }, //End of getters

    mutations: {
        seed (state) {
            let testData = {
                title: 'Just Test Event',
                titleInArabic: 'حدث تجريبى',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex esse eius voluptas, assumenda harum quasi ab maxime consequatur! Ex commodi perferendis hic cum vero ipsam laudantium minus maiores quos veritatis!',
                descriptionInArabic: 'هذا محتوى تجريبى, هذا محتوى تجريبى, هذا محتوى تجريبى, هذا محتوى تجريبى, هذا محتوى تجريبى, هذا محتوى تجريبى, هذا محتوى تجريبى, هذا محتوى تجريبى, هذا محتوى تجريبى, هذا محتوى تجريبى, هذا محتوى تجريبى, هذا محتوى تجريبى, ',
                timeStamps: 1582743115998,
                location: 'ryiad',
                locationInArabic: 'الرياض',
            };
            
            let counter = 0,
                otherCounter = 0;

            if (!state.seeded) {
                for (let x=1; x<=28; x++) {
                    let pic = [
                        'bs33-390x280.jpg',
                        'f7a1c6d52f622bc3b1527a0783bed92a-390x280.jpeg',
                        'nba-cool-wallpaper-390x280.jpg',
                    ];
                    let type = ['exhibitions', 'sports', 'parties', 'communities', 'theaters', 'concerts', 'others'];
                    let data = {
                        type: type[otherCounter],
                        id: x,
                        imgUrl: `${origin}/img/events/${pic[counter]}`,
                        ticket: {
                            count: Math.floor(Math.random() * 1000),
                            unitPrice: Math.floor(Math.random() * 1000),
                            oldPrice: null,
                        },
                        ...testData
                    };
                    counter < 2 ? counter++ : counter = 0;
                    otherCounter < 6 ? otherCounter++ : otherCounter = 0;
                    state.all.push(data);
                    state.upcoming.push(data);
                    state.past.push(data);
                } //End of for
                state.seeded = true;
            }
        }, //End of seed
    }, //End of mutations
};