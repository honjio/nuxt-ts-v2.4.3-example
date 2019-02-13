<template>
  <section class="container">
    <h1>example hello world</h1>
  </section>
</template>

<script lang="ts">
// @ts-ignore resolve ide error
import { Vue } from 'vue-property-decorator';

// @ts-ignore resolve ide error
class Example extends Vue {
  private log: string = 'hello world';

  mounted(): void {
    console.log(this.log);
    const hoge = () => 'aaa';
    hoge();
  }
}

export default Example;
</script>
