<template>
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
                <div class="card bg-secondary shadow border-0">
                   
                    <div class="card-body px-lg-5 py-lg-5">
                        <div class="text-center text-muted mb-4">
                            <small>Conectate</small>
                        </div>
                        <form role="form">
                            <base-input class="input-group-alternative mb-3"
                                        placeholder="Cedula"
                                        addon-left-icon="ni ni-badge"
                                        v-model="model.cedula">
                            </base-input>

                            <base-input class="input-group-alternative"
                                        placeholder="Contrasena"
                                        type="password"
                                        addon-left-icon="ni ni-lock-circle-open"
                                        v-model="model.password">
                            </base-input>

                            <base-checkbox class="custom-control-alternative">
                                <span class="text-muted">Recuerdame</span>
                            </base-checkbox>
                            <div class="text-center">
                                <base-button type="primary" class="my-4">Iniciar sesión</base-button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-6">
                        <a href="#" class="text-light"><small>Olvidaste tu contrasena?</small></a>
                    </div>
                    <div class="col-6 text-right">
                        <router-link to="/register" class="text-light"><small>Crear nueva cuenta</small></router-link>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
  export default {
    name: 'login',
    data() {
      return {
        model: {
          cedula: '',
          password: ''
        }
      }
    }
  }
</script>
<style>
</style>
