<template>
  <div class="hello">
    <h1 :class="titleClass">{{ msg }}</h1>
    <button @click="count++">count is: {{ count }}</button>
    <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  </div>
</template>

<script>
import style9 from 'style9';

const styles = style9.create({
  blue: {
    color: 'blue',
  },
  red: {
    color: 'red'
  }
});

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    titleClass() {
      return styles('blue', this.count % 2 && 'red');
    }
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
