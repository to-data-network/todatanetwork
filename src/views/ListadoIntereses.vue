
<template>
<div>
      <base-header type="gradient-success" class="pb-6 pb-6 pt-5 pt-md-8">
            <div class="row">
                
                <p>En el presente es un listado que comprende las actividades que se realizan a nivel  local, señale el ítem correspondiente a la actividad que la persona realiza en el espacio correspondiente a la frecuencia con la que puede realizarla, y al nivel de satisfacción de la persona al realizarla </p>
                <b-table striped hover :items="tipo"></b-table>
            </div>
        </base-header>

         <div class="container-fluid mt--7">
             <h2>hola</h2>
           <b-table striped hover :items="items"></b-table>
           <h1>holaaaa</h1>
           <b-form-input id="range-1" v-model="value" type="range" min="1" max="5"></b-form-input>
           <div class="mt-2">Value: {{ value }}</div>
            </div>
            
  </div>
</template>
<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
  export default {
    data() {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ],
        tipo: [
          { frecuencia: 'Siempre (S): 4 o más días por semana.', nivel_satisfaccion: 'Muy Satisfactoria (MS)' },
          { frecuencia: 'Frecuentemente (F): 1 vez cada quince días.', nivel_satisfaccion: 'Satisfactoria (S)'},
          { frecuencia: 'A veces (AV): 1 vez por mes', nivel_satisfaccion: 'Agradable (A)' },
          { frecuencia: 'Rara vez (R): 2 o 3 veces al año ', nivel_satisfaccion: 'Poco agradable (PA)' }
        ],
        value: '2'
      }
      
    }
  }
</script>

<style scoped>
.table {
	width: 100%;
	margin-bottom: 1rem;
	color: #525f7f;
	background-color: #81464600;
    border: 1px solid #dee2e6;
}
</style>

