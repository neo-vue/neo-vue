<template>
  <neo-navbar backgroundColor="#ffedd1" :shadow="false" :items="navItems" class="mb-5" fixed>
    <template v-slot:title>
      <h3>Neo Vue</h3>
    </template>

    <template v-slot:right-items>
      <neo-button label="Login" color="black" class="mx-3" rounded="lite" />
      <neo-button label="Register" color="black" class="mx-3" />
    </template>
  </neo-navbar>

  <neo-dropdown title="Neo Accordion example" width="300px" class="ma-10" padding="10px" backgroundColor="#ffdcad" rounded="high">
    <div class="pa-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ipsa similique sunt voluptates tempora velit adipisci nobis assumenda ipsum facilis minima quia impedit. Eum, incidunt ipsum quasi corrupti alias eius?</div>
  </neo-dropdown>

  <div class="d-flex flex-wrap align-start">
    <neo-card class="flex-2 ma-10" rounded>
      <h3>Card example</h3>

      <div class="d-flex justify-around align-center">
        <neo-profile img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" padding="0" backgroundColor="#ffedd1" width="50px" height="50px" />
        <neo-profile class="mt-2" initials="TL" backgroundColor="#ffedd1" width="50px" height="50px" />
        <neo-profile class="mt-20" rounded="circle" padding="5px" backgroundColor="#ffedd1" width="50px" height="50px" />
      </div>

      <template v-slot:footer>
        <div class="d-flex justify-end mt-40">
          <neo-button label="Follow" color="black" rounded="high" />
        </div>
      </template>
    </neo-card>

    <neo-card class="flex-2 ma-10" rounded>
      <h3>Forms</h3>

      <neo-button class="ma-3" label="Click here" color="black" shadow="2px" />
      <neo-checkbox class="ma-3" label="Checkboox" v-model="checkbox" />
      <neo-textfield class="ma-3" color="black" key="tata" v-model="textfield" border="lite" />
      <neo-radio class="ma-3" label="Radio" v-model="radio"/>
      <neo-radio class="ma-3" label="Radio" />
      <neo-select class="ma-3" label="Select field" :options="items" width="150px" rounded="high" v-model="itemChoosen"/>
      <neo-dialog class="ma-3" title="My dialog" rounded width="500px">
        <neo-radio class="ma-3" label="Radio" />
        <neo-textfield class="ma-2" color="black" key="toto" />
      </neo-dialog>

      <neo-drawer class="ma-3" :items="drawerItems" backgroundColor="#ffedd1" persistent>
        <template v-slot:activator="{show, open}">
          <neo-button :label="'Open drawerrr' + show" @click="open()" />
        </template>
      </neo-drawer>

      <template v-slot:footer>
        <div class="d-flex justify-end mt-40">
          <neo-button label="Follow" color="black" rounded="high" />
        </div>
      </template>
    </neo-card>

    <div class="d-flex flex-wrap mt-5">
      <div>
        <neo-alert class="ma-5" level="info" title="Info alert" color="black" width="300px" backgroundColor="#d2eefa" rounded>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus iste est esse excepturi nostrum quisquam obcaecati neque tempore voluptate, doloremque suscipit atque earum corporis assumenda optio accusantium! Optio, odio nobis?
        </neo-alert>

        <neo-alert class="ma-5" level="success" title="Success alert" color="black" width="300px" backgroundColor="#e1fad2" :rounded="false">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus iste est esse excepturi nostrum quisquam obcaecati neque tempore voluptate, doloremque suscipit atque earum corporis assumenda optio accusantium! Optio, odio nobis?
        </neo-alert>
      </div>

      <div>
        <neo-alert class="ma-5" level="warning" title="Warning alert" color="black" width="300px" backgroundColor="#ffdcad" rounded="high">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus iste est esse excepturi nostrum quisquam obcaecati neque tempore voluptate, doloremque suscipit atque earum corporis assumenda optio accusantium! Optio, odio nobis?
        </neo-alert>
        <neo-alert class="ma-5" level="error" title="Error alert" color="black" width="300px" backgroundColor="#fad2d2" rounded>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus iste est esse excepturi nostrum quisquam obcaecati neque tempore voluptate, doloremque suscipit atque earum corporis assumenda optio accusantium! Optio, odio nobis?
        </neo-alert>
      </div>
    </div>
  </div>

  <div class="d-flex">
    <neo-tabs :options="tabsItems" v-model="tabChoosen" background-color="#e7e7e7" active-background-color="black" active-color="white" header-position="center">
      <template #tab1>
        <div class="d-flex justify-center">
          <h3>Tab 1</h3>
        </div>
      </template>
      <template #tab2>
        <h3>Tab 2</h3>
      </template>
      <template #tab3>
        <h3>Tab 3</h3>
      </template>
    </neo-tabs>
  </div>

  <div class="d-flex" style="border: 1px solid red">
    <neo-sidebar :items="sidebarItems" backgroundColor="#ffedd1" title="Sidebar" height="100dvh" />
    <div style="border: 2px solid green;height:100%">
      <h3>Fake doc</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from "vue";

export default defineComponent({
  name: "Neo",
  data(){
    return {
      textfield: null,
      items: [{key: 1, value: "Item 1"}, {key: 2, value: "Item 2"}, {key: 3, value: "Item 3"}],
      itemChoosen: null,
      tabChoosen: 'tab1',
      checkbox: true,
      radio: true,
      navItems: [
        { label: "Home", to: "/neo", position: "left", color: "black" },
        { label: "About", to: "Presentation", position: "left", color: "black" },
        { label: "Contact", to: "/about", position: "left", color: "black" }
      ],
      drawerItems: [
        { label: "Home", to: "/neo", position: "left", color: "black", category: 'category1' },
        { label: "About", to: "/neo/presentation", position: "left", color: "black", category: 'category1' },
        { label: "Contact", to: "/about", position: "left", color: "black", category: 'category2' }
      ],
      sidebarItems: [
        { label: 'Home', category: 'Category 1', to: '/home' },
        { label: 'About', category: 'Category 1', to: '/about' },
        { label: 'Contact', category: 'Category 2', to: '/contact' }
      ],
      tabsItems: [
        { key: 'tab1', value: 'Tab 1' },
        { key: 'tab2', value: 'Tab 2' },
        { key: 'tab3', value: 'Tab 3' }
      ]
    }
  }
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@400;500&family=PT+Serif:wght@700&display=swap');
* {
  font-family: 'Darker Grotesque', sans-serif;
  font-family: 'PT Serif', serif;
  /* backgroundColor: #d3ffd7 */
}
</style>
