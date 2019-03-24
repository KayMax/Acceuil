Vue.component('section-header', {
    template: '<div class="section-header"><span>{{ title }}</span></div>',
    data: function () {
        return {
            title: 'WANG CHAO'
        }
    }
});
Vue.component('page-lists', {
    template: '<div class="page-lists">' +
        '<div class="page-lists-item" v-for="(item,key) in page_list" :key="key" :class="{\'no-margin\':key%6==0}">' +
        '<a class="item-box" :href="item.href" target="_blank">' +
        '<div class="item-box-inner">' +
        '<span class="item-box-inner-part logo"></span>' +
        '<span class="item-box-inner-part description"><span>{{ item.name }}</span></span>' +
        '</div>' +
        '</a>' +
        '</div>' +
        '</div>',
    data: function () {
        return {
            page_list: [{
                name: "Pissenlit",
                icon: "",
                des: "",
                href: "https://kaymax.github.io/pissenlit/",
            },{
                name: "En boucle",
                icon: "",
                des: "",
                href: "https://kaymax.github.io/En-boucle/",
            },{
                name: "notitle",
                icon: "",
                des: "",
                href: "https://google.com",
            },{
                name: "notitle",
                icon: "",
                des: "",
                href: "https://google.com",
            },{
                name: "notitle",
                icon: "",
                des: "",
                href: "https://google.com",
            },{
                name: "notitle",
                icon: "",
                des: "",
                href: "https://google.com",
            },{
                name: "notitle",
                icon: "",
                des: "",
                href: "https://google.com",
            },{
                name: "notitle",
                icon: "",
                des: "",
                href: "https://google.com",
            },{
                name: "notitle",
                icon: "",
                des: "",
                href: "https://google.com",
            },{
                name: "notitle",
                icon: "",
                des: "",
                href: "https://google.com",
            },{
                name: "notitle",
                icon: "",
                des: "",
                href: "https://google.com",
            },{
                name: "notitle",
                icon: "",
                des: "",
                href: "https://google.com",
            },{
                name: "notitle",
                icon: "",
                des: "",
                href: "https://google.com",
            },{
                name: "notitle",
                icon: "",
                des: "",
                href: "https://google.com",
            },{
                name: "notitle",
                icon: "",
                des: "",
                href: "https://google.com",
            },{
                name: "notitle",
                icon: "",
                des: "",
                href: "https://google.com",
            },{
                name: "notitle",
                icon: "",
                des: "",
                href: "https://google.com",
            },{
                name: "notitle",
                icon: "",
                des: "",
                href: "https://google.com",
            }]
        }
    }
});
Vue.component('section-footer', {
    template: '<div class="section-footer"><a :href="href" target="_blank"><u>{{ title }}</u></a></div>',
    data: function () {
        return {
            title: 'Bio/contact',
            href: "#"
        }
    }
});