<template>
    <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
            <div class="card bg-secondary shadow border-0">
                
                <div class="card-body px-lg-5 py-lg-5">
                    <div class="text-center text-muted mb-4">
                        <small>Registrate con tu cedula</small>
                    </div>
                    <form role="form">

                        <base-input class="input-group-alternative mb-3"
                                    placeholder="Nombres"
                                    addon-left-icon="ni ni-single-02"
                                    v-model="model.name">
                        </base-input>
                        <base-input class="input-group-alternative mb-3"
                                    placeholder="Apellidos"
                                    addon-left-icon="ni ni-circle-08 text-blue"
                                    v-model="model.name">
                        </base-input>
                        <base-input class="input-group-alternative mb-3"
                                        placeholder="Cedula"
                                        addon-left-icon="ni ni-badge text-blue"
                                        v-model="model.cedula">
                            </base-input>
                            <base-input class="input-group-alternative mb-3"
                                        placeholder="Telefono"
                                        addon-left-icon="ni ni-mobile-button"
                                        v-model="model.cedula">
                            </base-input>
                        <base-input class="input-group-alternative mb-3"
                                    placeholder="Email"
                                    addon-left-icon="ni ni-email-83 text-blue"
                                    v-model="model.email">
                        </base-input>
                        <base-input class="input-group-alternative mb-3"
                                    placeholder="Confirmar Email"
                                    addon-left-icon="ni ni-email-83"
                                    v-model="model.email">
                        </base-input>
                        <base-input class="input-group-alternative"
                                    placeholder="Contrasena"
                                    type="password"
                                    addon-left-icon="ni ni-lock-circle-open text-blue"
                                    v-model="model.password">
                        </base-input>
                        <base-input class="input-group-alternative"
                                    placeholder="Confirmar contrasena"
                                    type="password"
                                    addon-left-icon="ni ni-lock-circle-open"
                                    v-model="model.password">
                        </base-input>
                        <div class="text-muted font-italic">
                            <small>password strength: <span class="text-success font-weight-700">strong</span></small>
                        </div>

                        <div class="row my-4">
                            <div class="col-12">
                                <base-checkbox class="custom-control-alternative">
                                    <span class="text-muted">Acepto la <a href="/politicadatos">Política de Privacidad</a></span>
                                </base-checkbox>
                            </div>
                        </div>
                         <div class="text-center">
                                <router-link class="nav-link nav-link-icon" to="/dashboard">                            
                            <base-button type="primary" class="my-4">Crear cuenta</base-button>
                        </router-link>
                         </div>
                    </form>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-6">
                    <a href="#" class="text-light">
                        <small>Olvide la contrasena?</small>
                    </a>
                </div>
                <div class="col-6 text-right">
                    <router-link to="/login" class="text-light">
                        <small>Inicie sesión en su cuenta</small>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'register',
    data() {
      return {
        model: {
          name: '',
          email: '',
          password: ''
        }
      }
    }
  }
</script>
<style>
</style>
