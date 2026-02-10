<template>
  <Navbar :border="!isHomepage" />
  <div class="main-header grid-background">
    <div class="left">
      <img src="../../../public/logo.png" alt="Neo-Vue Logo" width="200" height="200" />
      <h1 class="ma-1">Neo-VUE</h1>
      <h4>Vue 3 <i class="accent">neobrutalism</i> UI library</h4>
      <div class="actions d-flex align-center gap-20">
        <neo-button rounded="high" href="https://github.com/ThomasLeconte/neo-vue">
          <template v-slot:prepend>
            <neo-profile img="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" :shadow="false" border="none"></neo-profile>
          </template>
          <h3>Github</h3>
        </neo-button>
        <neo-card rounded="high" padding="31px">
          <div class="d-flex align-center gap-20">
            <code>npm i neo-vue</code>
            <neo-icon name="clipboard" style="cursor: pointer;" @click="copyToClipboard()"/>
          </div>
          <neo-alert v-if="showAlertClipboard" level="success" class="ma-0" style="font-size: 1rem;" :icon="false">Copied to clipboard!</neo-alert>
        </neo-card>
      </div>
    </div>

    <div class="right">
      <div class="example">
        <div class="d-flex align-start gap-20 my-5">
          <neo-textfield label="Username" rounded autocomplete="off"></neo-textfield>
          <neo-textfield label="Password" type="password" rounded></neo-textfield>
          <span class="d-flex flex-column gap-10">
            <neo-radio label="Hey"></neo-radio>
            <neo-checkbox label="Hey"></neo-checkbox>
          </span>
          <neo-select label="Gender" :options="[{key: 'none', value: 'Oh nooo, please.'}, {key: 'Helicopter', value: 'I\'m a F35'}]" rounded shadow="none"/>
        </div>
        <div class="d-flex align-start gap-20 my-5">
          <neo-alert level="success">This UI library is fantastic !</neo-alert>
          <neo-alert level="warning" rounded="high">Lorem ipsum ...</neo-alert>
          <neo-alert level="info">I'm really proud of this</neo-alert>
        </div>
        <div class="d-flex align-start gap-20 my-5">
          <neo-card padding="20px" width="50%" rounded>
            <div class="d-flex justify-between align-start">
              <neo-profile class="mb-10" img="../../profile.png" width="50px" height="50px" border="none" shadow="none" rounded="circle" />
              <neo-button rounded="round" shadow="none">Edit profile</neo-button>
            </div>
            <div class="d-flex flex-column">
              <h3 class="ma-0">John Doe</h3>
              <p class="ma-0">My name is John doe !</p>
            </div>
          </neo-card>
          <neo-table :headers="tableHeaders" :items="tableItems" background-color="white" border shadow />
        </div>
        <div class="d-flex align-start justify-start gap-20 my-5">
          <neo-tabs v-model="tabChoosen" :options="[{key: 'users', value: 'Users'}, {key: 'products', value: 'Products'}]" background-color="white">
            <template #users>
              <h1>Hey John Doe!</h1>
            </template>
            <template #products>
              <h1>Foo bar</h1>
            </template>
          </neo-tabs>
          <neo-dropdown title="Ohh, check it out!">
            Surprise.
          </neo-dropdown>
          <div class="d-flex flex-column gap-15">
            <neo-button rounded>Send</neo-button>
            <neo-button border="high" shadow="bold">Me</neo-button>
            <neo-button rounded="round" border="lite" shadow="none" backgroundColor="error">COFFEE</neo-button>
          </div>
        </div>
      </div>

<!--      <neo-card :width="isMobile ? '80dvw' : '400px'" height="400px" rounded="high" backgroundColor="rgb(231 225 225)" title="Get started">-->
<!--        <div class="pa-5">-->
<!--          <h1>Get started</h1>-->
<!--          <DocCode value="npm install neo-vue" lang="shell" />-->
<!--          <neo-button rounded="high" class="mt-50" to="/docs/get-started">-->
<!--            <h3>Learn more ➡️</h3>-->
<!--          </neo-button>-->
<!--        </div>-->
<!--      </neo-card>-->
<!--      <neo-profile img="../logo.jpg" background-color="#210934" shadow="bold" rounded="circle" padding="30px" :width="isMobile ? '100px' : '400px'" :height="isMobile ? '100px' : '400px'"/>-->
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '../../components/Navbar.vue'
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useTheme } from '@neo-vue/neo-ui';


const route = useRoute();

onMounted(() => {
  const { theme } = useTheme();
  //theme.value.borderColor = 'yellow';
})

const tabChoosen = ref('users');
const showAlertClipboard = ref(false);

const isHomepage = computed(() => {
  return route.name === 'home';
})

const tableHeaders = [
  { key: 'name', title: 'Name' },
  { key: 'age', title: 'Age' }
]

const tableItems = [
  { name: 'John Doe', age: 25 },
  { name: 'Jane Doe', age: 22 }
]

function copyToClipboard() {
  const text = 'npm i neo-vue';
  navigator.clipboard.writeText(text)
    .then(() => {
      showAlertClipboard.value = true;
      setTimeout(() => {
        showAlertClipboard.value = false;
      }, 2000);
    })
    .catch(err => {
    console.error('Failed to copy: ', err);
  });
}

</script>

<style>
.main-header {
  min-height: 100vh;
  /*background-color: cadetblue;
  //background-color: #5F9EA0;
  //background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%235F9EA0' stroke-width='0.1' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(23.55) translate(-957.54 -718.15)'%3E%3Cuse fill='%2365a1a2' href='%23s' y='2'/%3E%3Cuse fill='%2365a1a2' href='%23s' x='1' y='2'/%3E%3Cuse fill='%236aa3a5' href='%23s' x='2' y='2'/%3E%3Cuse fill='%236aa3a5' href='%23s'/%3E%3Cuse fill='%236fa5a7' href='%23s' x='2'/%3E%3Cuse fill='%236fa5a7' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(23.55) translate(-957.54 -718.15)'%3E%3Cg fill='%2374a8aa'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(23.55) translate(-957.54 -718.15)'%3E%3Cg fill='%2374a8aa'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(23.55) translate(-957.54 -718.15)'%3E%3Cg fill='%2379aaac'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(23.55) translate(-957.54 -718.15)'%3E%3Cg fill='%235F9EA0'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%237dadae'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(23.55) translate(-957.54 -718.15)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(23.55) translate(-957.54 -718.15)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(23.55) translate(-957.54 -718.15)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
  //background-attachment: fixed;
  //background-size: cover;*/
  background-color: #e7e1e1;
  display: flex;
  flex-wrap: wrap;
  font-weight: bold;
}

.paper-texture {
  background-image:
    radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.08) 1px, transparent 0),
    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.02) 2px, rgba(0, 0, 0, 0.02) 4px),
    repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 0, 0, 0.02) 2px, rgba(0, 0, 0, 0.02) 4px);
  background-size: 8px 8px, 32px 32px, 32px 32px;
}

.grid-background {
  background-image:
    linear-gradient(to right, #d9d2d2 1px, transparent 1px),
    linear-gradient(to bottom, #d9d2d2 1px, transparent 1px);
  background-size: 50px 50px;
}

.main-header .left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: white;
  text-shadow: 1px 3px 2px black;
}

.main-header .left h1 {
  margin: 0;
  font-size: 3rem;
  color: #333333;
}

.main-header .left .actions {
  font-size: 1rem;
  text-shadow: none;
}

.main-header .left .accent {
  color: #333333;
  text-shadow: none;
}

.main-header .right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  transform: perspective(75em) rotateY(-10deg) rotateZ(-10deg);
}

@media (max-width: 1024px) {
  .main-header .right .example {
    transform: perspective(75em) rotateY(-10deg) rotateZ(-0deg) scale(0.8);
  }
}

@media (max-width: 768px) {
  .main-header {
    margin-top: 10dvh;
    display: block;
    min-height: fit-content;
  }

  .main-header .left, .main-header .right {
    width: 100dvw;
    height: fit-content;
  }

  .main-header .left {
    position: sticky;
    box-shadow: 0 50px 50px 50px #e7e1e1;
    z-index: 100;
    min-height: 50dvh;
  }

  .main-header .right {
    overflow: hidden;
    position: relative;
    transform: none;
    min-height: 50dvh;
  }

  .main-header .right .example {
    position: absolute;
    transform: perspective(75em) rotateY(-10deg) rotateZ(-10deg) scale(1);
    margin-top: 20dvw;
    margin-left: 10dvw;
  }

  .main-header .left h4 {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .main-header .right .example {
    margin-left: -20dvw;
  }
}
</style>
