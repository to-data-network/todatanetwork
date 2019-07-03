
import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  /* mode: 'history'
  base: process.env.BASE_URL, */
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
        }
      ]
    },
    {
      path: '/',
      
      component: DashboardLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue')
        },
        {
          path: '/icons',
          name: 'icons',
          component: () => import(/* webpackChunkName: "demo" */ './views/Icons.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import(/* webpackChunkName: "demo" */ './views/UserProfile.vue')
        },
        {
          path: '/maps',
          name: 'maps',
          component: () => import(/* webpackChunkName: "demo" */ './views/Maps.vue')
        },
        {
          path: '/tables',
          name: 'tables',
          component: () => import(/* webpackChunkName: "demo" */ './views/Tables.vue')
        },
        {
          path: '/agenda',
          name: 'agenda',
          component: () => import(/* webpackChunkName: "demo" */ './views/Agenda.vue')
        }
        ,
        {
          path: '/resumen',
          name: 'resumen',
          component: () => import(/* webpackChunkName: "demo" */ './views/Resumen.vue')
        }
        ,
        {
          path: '/progresofim',
          name: 'progresofim',
          component: () => import(/* webpackChunkName: "demo" */ './views/ProgresoFim.vue')
        }
        ,
        {
          path: '/progresoactividades',
          name: 'progresoactividades',
          component: () => import(/* webpackChunkName: "demo" */ './views/ProgresoActividades.vue')
        }
        ,
        {
          path: '/paciente',
          name: 'paciente',
          component: () => import(/* webpackChunkName: "demo" */ './views/Paciente.vue')
        }
        ,
        {
          path: '/historiaocupacional',
          name: 'historiaocupacional',
          component: () => import(/* webpackChunkName: "demo" */ './views/HistoriaOcupacional.vue')
        },
        {
          path: '/listadointereses',
          name: 'listadointereses',
          component: () => import(/* webpackChunkName: "demo" */ './views/ListadoIntereses.vue')
        }
        ,
        {
          path: '/notasevolucion',
          name: 'notasevolucion',
          component: () => import(/* webpackChunkName: "demo" */ './views/NotaEvolucion.vue')
        }
        ,
        {
          path: '/notafinalizacion',
          name: 'notafinalizacion',
          component: () => import(/* webpackChunkName: "demo" */ './views/NotaFinalizacion.vue')
        },
        {
          path: '/estadisticas',
          name: 'estadisticas',
          component: () => import(/* webpackChunkName: "demo" */ './views/Estadisticas.vue')
        }
        ,
        {
          path: '/procedencia',
          name: 'procedencia',
          component: () => import(/* webpackChunkName: "demo" */ './views/Procedencia.vue')
        }
        ,
        {
          path: '/eficienciafim',
          name: 'eficienciafim',
          component: () => import(/* webpackChunkName: "demo" */ './views/EficienciaFim.vue')
        }
        ,
        {
          path: '/ingreso',
          name: 'ingreso',
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