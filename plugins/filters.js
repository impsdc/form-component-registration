import Vue from 'vue'

Vue.filter('excerptify', function(text, length, suffix) {
    return text.length > length ? text.substring(0, length) + suffix : text
})