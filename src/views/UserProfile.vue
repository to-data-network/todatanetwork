<template>
    <div>
       

        <div class="container-fluid mt--7">
            <div> 
                <hr>
                <hr>
                <hr>
                <hr>
            </div>
            <div class="row">
                <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">

                    <div class="card card-profile shadow">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img src="img/theme/team-4-800x800.jpg" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                            
                        </div>
                        <div class="card-body pt-0 pt-md-4">
                            <div class="row">
                                <div class="col">
                                    <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                                        <div>
                                            <span class="heading">5</span>
                                            <span class="description">Consultas</span>
                                        </div>
                                        <div>
                                            <span class="heading">1</span>
                                            <span class="description">Nota</span>
                                        </div>
                                        <div>
                                            <span class="heading">1</span>
                                            <span class="description">Comentario</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <h3>
                                    Jessica Jones<span class="font-weight-light">, 27</span>
                                </h3>
                                <div class="h5 font-weight-300">
                                    <i class="ni location_pin mr-2"></i>Bucharest, Colombia
                                </div>
                                <div class="h5 mt-4">
                                    <i class="ni business_briefcase-24 mr-2"></i>Oficinista
                                </div>
                                <div>
                                    <i class="ni education_hat mr-2"></i>Universidad Nacional de Colombia
                                </div>
                                <hr class="my-4" />
                                <p>Alergica al Allerpen.</p>
                                <a href="#">Ver mas</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-8 order-xl-1">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Usuario</h3>
                                </div>
                                
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">Información</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Cedula"
                                                        placeholder="Cedula"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.cedula"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Email "
                                                        placeholder="ejemplo@example.com"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.email"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="nombres"
                                                        placeholder="Nombre/s"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.firstName"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Apellidos"
                                                        placeholder="Apellido/s"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.lastName"
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="EPS"
                                                        placeholder="EPS"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.esp"
                                            />
                                        </div>
                                         <div class="col-lg-2">
                                            <base-input alternative=""
                                                        label="Genero"
                                                        placeholder="Genero"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.genero"
                                            />
                                        </div>
                                        <div class="col-lg-2">
                                            <base-input alternative=""
                                                        label="Edad"
                                                        placeholder="Edad"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.edad"
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Ocupación"
                                                        placeholder="Ocupación"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.ocupacion"
                                            />
                                        </div>
                                    </div>
                                </div>
                                 <h6 class="heading-small text-muted mb-4">Información de contacto</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <base-input alternative=""
                                                        label="Dirección"
                                                        placeholder="Sitio de residencia"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.address"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Ciudad"
                                                        placeholder="Ciudad"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.city"
                                            />
                                        </div>
                                        <div class="col-lg-3">
                                            <base-input alternative=""
                                                        label="Pais"
                                                        placeholder="Pais"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.country"
                                            />
                                        </div>
                                        <div class="col-lg-3">
                                            <base-input alternative=""
                                                        label="Codigo postal"
                                                        placeholder="Codigo postal"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.zipCode"
                                            />
                                        </div>
                                        <div class="col-lg-2">
                                            <base-input alternative=""
                                                        label="Telefono"
                                                        placeholder="Telefono"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.telefono"
                                            />
                                        </div>
                                    
                                    </div>
                                </div>
                                <hr class="my-4" />
                               
                            </form>
                        </template>
                        
                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">Información familiar</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Cedula"
                                                        placeholder="Cedula"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.cedula"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Email "
                                                        placeholder="ejemplo@example.com"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.email"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="nombres"
                                                        placeholder="Nombre/s"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.firstName"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Apellidos"
                                                        placeholder="Apellido/s"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.lastName"
                                            />
                                        </div>
                                        
                                         <div class="col-lg-2">
                                            <base-input alternative=""
                                                        label="Genero"
                                                        placeholder="Genero"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.genero"
                                            />
                                        </div>
                                        <div class="col-lg-2">
                                            <base-input alternative=""
                                                        label="Edad"
                                                        placeholder="Edad"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.edad"
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Parentesco"
                                                        placeholder="Parentesco"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.parentesco"
                                            />
                                        </div>
                                    </div>
                                </div>
                                 <h6 class="heading-small text-muted mb-4">Información de contacto familiar</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <base-input alternative=""
                                                        label="Dirección"
                                                        placeholder="Sitio de residencia"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.address"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Ciudad"
                                                        placeholder="Ciudad"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.city"
                                            />
                                        </div>
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Pais"
                                                        placeholder="Pais"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.country"
                                            />
                                        </div>
                                       
                                        <div class="col-lg-4">
                                            <base-input alternative=""
                                                        label="Telefono"
                                                        placeholder="Telefono"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.telefono"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input alternative=""
                                                        label="Email"
                                                        placeholder="Email"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.email"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                
                               
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'user-profile',
    data() {
      return {
        model: {
          username: '',
          email: '',
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          country: '',
          zipCode: '',
          about: '',
        }
      }
    },
  };
</script>
<style></style>
