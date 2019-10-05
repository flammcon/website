<template>
  <div class="countdown">
    <h1>{{ countdown }}</h1>
    <h1 v-if="this.done">Done!</h1>
  </div>
</template>

<script>
export default {
  name: 'Countdown',
  props: {
    date: {
      type: String,
      required: true
    },
  },
  data() { 
    return {
      now: 0,
      done: false,
      interval: null
    }
  },
  computed: {
    targetDate() { return new Date(this.date).getTime() },
    delta() { 
      const diff = this.targetDate - this.now;
      return diff < 0 ? 0 : diff;
    },
    days() { return Math.floor(this.delta / (1000 * 60 * 60 * 24)) },
    hours() { return Math.floor((this.delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) },
    minutes() { return Math.floor((this.delta % (1000 * 60 * 60)) / (1000 * 60)) },
    seconds() { return Math.floor((this.delta % (1000 * 60)) / 1000) },
    countdown() { return `${this.days}d ${this.hours}h ${this.minutes}m ${this.seconds}s`},
  },
  methods: {
    updateNow() {
      this.now = new Date().getTime();

      if (this.delta === 0) {
        clearInterval(this.interval);
        this.done = true;
      }
    }
  },
  created() {
    this.now = new Date().getTime();
  },
  mounted() {
    this.interval = setInterval(this.updateNow.bind(this), 1000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
