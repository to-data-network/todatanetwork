<template>
    <div class="daut main-content bg-default">
        
        <base-nav class="navbar-top navbar-horizontal navbar-dark"
                  containerClasses="px-4 container"
                  expand>
            <router-link slot="brand" class="navbar-brand" to="/">
            
                 
                 <h2>Hun</h2>
            </router-link>

            <template v-slot="{closeMenu}">
                
                <div class="navbar-collapse-header d-md-none">
                    <div class="row">
                        <div class="col-6 collapse-brand">
                            <router-link to="/">
                                <img src="img/brand/green.png">
                            </router-link>
                        </div>
                        <div class="col-6 collapse-close">
                            <button type="button"
                                    @click="closeMenu"
                                    class="navbar-toggler"
                                    aria-label="Toggle sidenav">
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
                
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link nav-link-icon" to="/register">
                            <i class="ni ni-circle-08"></i>
                            <span class="nav-link-inner--text">Registrarse</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link nav-link-icon" to="/login">
                            <i class="ni ni-key-25"></i>
                            <span class="nav-link-inner--text">Iniciar Sesión </span>
                        </router-link>
                    </li>
                    
                </ul>
            </template>
        </base-nav>
        
        <div class="header bg-gradient py-7 py-lg-8">
            <div class="container">
                <div class="header-body text-center mb-7">
                    <div class="row justify-content-center">
                        <div class="col-lg-5 col-md-6">
                            <h1 class="text-white">¡Te damos la bienvenida!</h1>
                            <p class="text-lead text-white">TO data network.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="separator separator-bottom separator-skew zindex-100">
                <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
                     xmlns="http://www.w3.org/2000/svg">
                    <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
        </div>
        
        <div class="container mt--8 pb-5">
            <slide-y-up-transition mode="out-in" origin="center top">
                <router-view></router-view>
            </slide-y-up-transition>
        </div>
        <footer class="py-5">
            <div class="container">
                <div class="row align-items-center justify-content-xl-between">
                    <div class="col-xl-6">
                        <div class="copyright text-center text-xl-left text-muted">
                            &copy; {{year}} <a href="https://github.com/to-data-network/todatanetwork" class="font-weight-bold ml-1"
                                               target="_blank">TO data network</a>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <ul class="nav nav-footer justify-content-center justify-content-xl-end">
                            <li class="nav-item">
                                <a href="https://tenkuru.com" class="nav-link" target="_blank">Tenkuru</a>
                            </li>
                            <li class="nav-item">
                                <a href="https://github.com/to-data-network/todatanetwork" class="nav-link" target="_blank">Sobre nosotros</a>
                            </li>
                            <li class="nav-item">
                                <a href="https://unal.edu.co" class="nav-link" target="_blank">Universidad Nacional de Colombia</a>
                            </li>
                            <li class="nav-item">
                                <a href="http://www.hun.edu.co/"
                                   class="nav-link" target="_blank">HUN</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
  import { SlideYUpTransition } from 'vue2-transitions'

  export default {
    name: 'auth-layout',
    components: {
      SlideYUpTransition
    },
    data() {
      return {
        year: new Date().getFullYear(),
        showMenu: false
      }
    }
  }
</script>
<style scoped>

.bg-gradient {
	background: linear-gradient(87deg, #2dc9ce 0, #2dcecc 100%) !important;
}

</style>
