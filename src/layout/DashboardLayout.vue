<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="To-data"
      title="To-data"
    >
     
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Agenda',
            icon: 'ni ni-calendar-grid-58 text-primary',
            path: '/agenda'
          }"
        />
        <base-dropdown>
        
    <base-button slot="title" block type="secondary" class="dropdown-toggle" icon= "ni ni-zoom-split-in text-blue" :link="{ path: '/resumen'}" >
                Resumen Paciente
    </base-button>     
            <sidebar-item :link="{name: 'Resumen paciente', icon: 'ni ni-zoom-split-in text-info', path: '/profile'}"/>
            <sidebar-item :link="{name: 'Progreso FIM', icon: 'ni ni-controller text-info', path: '/progresofim'}"/>
            <sidebar-item :link="{name: 'Progreso por actividades', icon: 'ni ni-html5 text-info', path: '/progresoactividades'}"/>          
  </base-dropdown>
        
        <sidebar-item :link="{name: 'Elegir paciente', icon: 'ni ni-single-02 text-blue', path: '/paciente'}"/>
        <base-dropdown>
         <base-button slot="title" block type="secondary" class="dropdown-toggle" icon= "ni ni ni-single-copy-04 text-blue" :link="{ path: '/profile'}" >
                Notas      
    </base-button>        
            <sidebar-item :link="{name: 'Historia Ocupacional', icon: 'ni ni-zoom-split-in text-info', path: '/historiaocupacional'}"/>
            <sidebar-item :link="{name: 'Listado de intereses', icon: 'ni ni-controller text-info', path: '/listadointereses'}"/>          
            <sidebar-item :link="{name: 'Notas de evolución', icon: 'ni ni-controller text-info', path: '/notasevolucion'}"/>          
            <sidebar-item :link="{name: 'Nota de finalización', icon: 'ni ni-controller text-info', path: '/notafinalizacion'}"/>  
  </base-dropdown>
  <base-dropdown>
         <base-button slot="title" block type="secondary" class="dropdown-toggle" icon= "ni ni-chart-pie-35 text-blue" :link="{ path: '/profile'}" >
                Estadísticas     
    </base-button>        
            <sidebar-item :link="{name: 'Datos Basicos', icon: 'ni ni-zoom-split-in text-info', path: '/estadisticas'}"/>
            <sidebar-item :link="{name: 'Procedencia', icon: 'ni ni-controller text-info', path: '/procedencia'}"/>          
            <sidebar-item :link="{name: 'Eficiencia FIM', icon: 'ni ni-controller text-info', path: '/eficienciafim'}"/>          
            <sidebar-item :link="{name: 'Ingreso', icon: 'ni ni-controller text-info', path: '/notafinalizacion'}"/>  
  </base-dropdown>
        <sidebar-item :link="{name: 'Exportar', icon: 'ni ni-cloud-download-95 text-blue', path: '/ingreso'}"/>
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
  import { FadeTransition } from 'vue2-transitions';
  export default {
    components: {
      DashboardNavbar,
      
      FadeTransition, 
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
<style scoped>
  .btn-secondary {
	color: rgba(0, 0, 0, 0.5);
  background-color: inherit;
	font-weight: inherit;
	box-shadow: 0 4px 6px rgba(255, 255, 255, 0.11), 0 1px 3px rgba(255, 255, 255, 0.08); 
  text-align: inherit;
  min-width: 2.25rem;
}
.navbar-light .navbar-nav .nav-link {
	color: rgba(0, 0, 0, 0.5);
}
</style>