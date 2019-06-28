<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Argon"
      title="Argon"
    >
     
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Agenda',
            icon: 'ni ni-calendar-grid-58 text-primary',
            path: '/agenda'
          }"
        />
        
        
        <sidebar-item :link="{name: 'Elegir paciente', icon: 'ni ni-single-02 text-blue', path: '/icons'}"/>
        <sidebar-item :link="{name: 'Resumen paciente', icon: 'ni ni-zoom-split-in text-blue', path: '/profile'}"/>
        <sidebar-item :link="{name: 'Notas', icon: 'ni ni ni-single-copy-04 text-info', path: '/tables'}"/>
        <sidebar-item :link="{name: 'Estadisticas', icon: 'ni ni-chart-pie-35 text-info', path: '/login'}"/>

      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';
  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      FadeTransition
    },
    data() {
      return {
        sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
      };
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
<style lang="scss">
</style>