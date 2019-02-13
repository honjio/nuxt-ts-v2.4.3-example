<template>
  <section tabindex="-1" class="container">
    <div>
      <Logo />
      <h1 class="title">
        Nuxt＆TypeScript
      </h1>
      <h2 class="subtitle">
        Press the enter key to next page
      </h2>
      <div class="links">
        <n-link
          ref="button"
          to="/example"
          class="button--green"
          tabindex="-1"
        >
          Go to test page
        </n-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
// @ts-ignore resolve ide error
import Logo from '~/components/Logo.vue';
import { Component, Vue } from 'vue-property-decorator';


@Component({
  components: {
    Logo,
  },
})

// @ts-ignore resolve ide error
class Index extends Vue {
  private log: string = 'hello world';

  public mounted() {
    console.log(this.log);
    console.log(this.$refs.button);
    const btnComponent: any = this.$refs.button;
    btnComponent.$el.focus();
    btnComponent.$el.addEventListener('keydown', (e: any) => {
      console.log(e.keyCode);
      switch (e.keyCode) {
        case 13: {
          this.$router.push('example');
          break;
        }
        default:
          break;
      }
    });
  }
}

// https://github.com/tc39/proposal-decorators/issues/69
export default Index;
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
