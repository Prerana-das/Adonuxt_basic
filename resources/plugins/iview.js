// mixins for using iview common methods
import Vue from 'vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import locale from 'iview/dist/locale/en-US';
Vue.use(iView, { locale })
Vue.mixin({

  methods: {
    i(msg, i = 'Hey!') {
      this.$Notice.info({
        title: msg,
        desc: ""
      })
    },
    s(msg, i = 'Great!') {
      this.$Notice.success({
        title: msg,
        desc: ""
      })
    },
    w(msg, i = 'Oops!') {
      this.$Notice.warning({
        title: msg,
        desc: ""
      })
    },
    e(msg, i = 'Oops!') {
      this.$Notice.error({
        title: msg,
        desc: ""

      })
    },
    swr() {
      this.$Notice.error({
        title: 'Something went wrong, please try again later',
        desc: ''
      })
    },

    // message

    ns(title) {
      this.$Message.success(title)
    },
    ni(title) {
      this.$Message.info(title)
    },
    nw(title) {
      this.$Message.warning(title)
    },
    ne(title) {
      this.$Message.error(title)
    },
    nswr() {
      this.$Message.error('Something went wrong, please try again later')
    }
  }
})
