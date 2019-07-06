import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  
  routes: [
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "demo" */ './views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "demo" */ './views/Register.vue')
        },
        {
          path: '/politicadatos',
          name: 'politica de datos',
          component: () => import(/* webpackChunkName: "demo" */ './views/PoliticaDatos.vue')
        }
      ]
    },
    {
      path: '/',
      
      component: DashboardLayout,
      children: [
        {
          path: '/agenda',
          name: 'agenda',
          component: () => import(/* webpackChunkName: "demo" */ './views/Agenda.vue')
        }
        ,
        {
          path: '/icons',
          name: 'icons',
          component: () => import(/* webpackChunkName: "demo" */ './views/Icons.vue')
        },
        {
          path: '/profile',
          name: 'perfil usuario',
          component: () => import(/* webpackChunkName: "demo" */ './views/UserProfile.vue')
        },
        
        {
          path: '/tables',
          name: 'tables',
          component: () => import(/* webpackChunkName: "demo" */ './views/Tables.vue')
        },
        {
          path: '/agregar',
          name: 'agregar paciente',
          component: () => import(/* webpackChunkName: "demo" */ './views/AgregarPaciente.vue')
        },
        {
          path: '/resumen',
          name: 'resumen',
          component: () => import(/* webpackChunkName: "demo" */ './views/Resumen.vue')
        }
        ,
        {
          path: '/progresofim',
          name: 'progreso fim',
          component: () => import(/* webpackChunkName: "demo" */ './views/ProgresoFim.vue')
        }
        ,
        {
          path: '/progresoactividades',
          name: 'progreso por actividades',
          component: () => import(/* webpackChunkName: "demo" */ './views/ProgresoActividades.vue')
        }
        ,
        {
          path: '/usuario',
          name: 'elegir usuario',
          component: () => import(/* webpackChunkName: "demo" */ './views/Usuario.vue')
        }
        ,
        {
          path: '/historiaocupacional',
          name: 'historia ocupacional',
          component: () => import(/* webpackChunkName: "demo" */ './views/HistoriaOcupacional.vue')
        },
        {
          path: '/listadointereses',
          name: 'listado de intereses',
          component: () => import(/* webpackChunkName: "demo" */ './views/ListadoIntereses.vue')
        }
        ,
        {
          path: '/notasevolucion',
          name: 'notas de volucion',
          component: () => import(/* webpackChunkName: "demo" */ './views/NotaEvolucion.vue')
        }
        ,
        {
          path: '/notafinalizacion',
          name: 'nota de finalizacion',
          component: () => import(/* webpackChunkName: "demo" */ './views/NotaFinalizacion.vue')
        },
        {
          path: '/estadisticas',
          name: 'estadisticas bascicas',
          component: () => import(/* webpackChunkName: "demo" */ './views/Estadisticas.vue')
        }
        ,
        {
          path: '/procedencia',
          name: 'estadistica de procedencia',
          component: () => import(/* webpackChunkName: "demo" */ './views/Procedencia.vue')
        }
        ,
        {
          path: '/eficienciafim',
          name: 'estadistica de eficiencia fim',
          component: () => import(/* webpackChunkName: "demo" */ './views/EficienciaFim.vue')
        }
        ,
        {
          path: '/ingreso',
          name: 'estadistica de ingreso',
          component: () => import(/* webpackChunkName: "demo" */ './views/Ingreso.vue')
        },
        {
          path: '/exportar',
          name: 'exportar',
          component: () => import(/* webpackChunkName: "demo" */ './views/Exportar.vue')
        }
      ]
    }
  ]
})