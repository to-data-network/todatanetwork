
<template>
<div>
      <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <div class="row">
                
                <p>En el presente es un listado que comprende las actividades que se realizan a nivel  local, señale el ítem correspondiente a la actividad que la persona realiza en el espacio correspondiente a la frecuencia con la que puede realizarla, y al nivel de satisfacción de la persona al realizarla </p>
                <b-table striped hover :items="tipo"></b-table>
            </div>
        </base-header>

         <div class="container-fluid mt--7">
           
           
           <b-form-group label="Selection mode:" label-cols-md="4">
      <b-form-select v-model="selectMode" :options="modes" class="mb-3"></b-form-select>
    </b-form-group>

    <b-table
      selectable
      :select-mode="selectMode"
      selectedVariant="success"
      :items="items"
      :fields="fields"
      @row-selected="rowSelected"
    >
      <!-- Example scoped slot for illustrative purposes only -->
      <template slot="selected" slot-scope="{ rowSelected }">
        <span v-if="rowSelected">✔</span>
      </template>
    </b-table>

    {{ selected }} 
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
        modes: ['multi', 'single', 'range'],
        fields: ['selected', 'isActive', 'age', 'first_name', 'last_name'],
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ],
        selectMode: 'multi',
        selected: []
      }
    },
    methods: {
      rowSelected(items) {
        this.selected = items
      }
    }
  }
</script>

<style scoped>

</style>

