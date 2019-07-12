
<template>
<div>
      <base-header type="gradient-success" class="pb-6 pb-10 pt-5 pt-md-8">
            <div class="row">
                
                <p>En el presente es un listado que comprende las actividades que se realizan a nivel  local, señale el ítem correspondiente a la actividad que la persona realiza en el espacio correspondiente a la frecuencia con la que puede realizarla, y al nivel de satisfacción de la persona al realizarla </p>
                <b-table class="table-bordered" striped hover :items="tipo"></b-table>
            </div>
        </base-header>
  
        <b-container style="width:150%">
            <table class="table table-bordered">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Actividades</th>
              <th scope="col">Frecuencia</th>
              <th scope="col">Nivel de Satisfacción</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Ver televisión</th>
              <td> </td>
              <td> </td>
              
            </tr>
            <tr>
              <th scope="row">Manejar redes sociales</th>
              <td> </td>
              <td> </td>
              
            </tr>
            <tr>
              <th scope="row">Cocinar</th>
              <td> </td>
              <td> </td>              
            </tr>
            <tr>
              <th scope="row">Ir a cine</th>
              <td> </td>
              <td> </td>              
            </tr>
            <tr>
              <th scope="row">Leer periódico</th>
              <td> </td>
              <td> </td>              
            </tr>
            <tr>
              <th scope="row">Leer libros</th>
              <td> </td>
              <td> </td>              
            </tr>
            <tr>
              <th scope="row">Escuchar mu'sica</th>
              <td> </td>
              <td> </td>              
            </tr>
            <tr>
              <th scope="row">Realizar pasatiempos (sopas de letras, sudoku, etc)</th>
              <td> </td>
              <td> </td>              
            </tr>
            <tr>
              <th scope="row">Jugar juegos de mesa</th>
              <td> </td>
              <td> </td>              
            </tr>
            <tr>
              <th scope="row">Hacer manualidades</th>
              <td> </td>
              <td> </td>              
            </tr>
            <tr>
              <th scope="row">Arreglar electrodomesticos</th>
              <td> </td>
              <td> </td>              
            </tr>
            <tr>
              <th scope="row">Pintar</th>
              <td> </td>
              <td> </td>              
            </tr>
            <tr>
              <th scope="row">Dibujar</th>
              <td> </td>
              <td> </td>              
            </tr>
            <tr>
              <th scope="row">Escribir</th>
              <td> </td>
              <td> </td>              
            </tr>
            <tr>
              <th scope="row">Tocar algun instrumento/cantar</th>
              <td> </td>
              <td> </td>              
            </tr>
            <tr>
              <th scope="row">Bailar</th>
              <td> </td>
              <td> </td>              
            </tr>
            <tr>
              <th scope="row">Participar de grupos de inter'es (lectura, religioso, etc)</th>
              <td> </td>
              <td> </td>              
            </tr>
            <tr>
              <th scope="row">Visitar museos</th>
              <td> </td>
              <td> </td>              
            </tr>
            <tr>
              <th scope="row">Caminar</th>
              <td> </td>
              <td> </td>              
            </tr>
            <tr>
              <th scope="row">Practicar un deporte/ hacer ejercicio</th>
              <td> </td>
              <td> </td>              
            </tr>
            <tr>
              <th scope="row">Cuidar de una mascota</th>
              <td> </td>
              <td> </td>              
            </tr>
            <tr>
              <th scope="row">Cuidar ni'nos o personas</th>
              <td> </td>
              <td> </td>              
            </tr>
            <tr>
              <th scope="row">Asistir a la iglesia</th>
              <td> </td>
              <td> </td>              
            </tr>
            <tr>
              <th scope="row">Participar en juntas comunitarias</th>
              <td> </td>
              <td> </td>              
            </tr>
            <tr>
              <th scope="row">Ir al spa o centro de belleza</th>
              <td> </td>
              <td> </td>              
            </tr>
            <tr>
              <th scope="row">Hablar con amigos</th>
              <td> </td>
              <td> </td>              
            </tr>
            <tr>
              <th scope="row">Salir con la familia</th>
              <td> </td>
              <td> </td>              
            </tr>
            <tr>
              <th scope="row">Hacer compras</th>
              <td> </td>
              <td> </td>              
            </tr>
            <tr>
              <th scope="row">aaa</th>
              <td> </td>
              <td> </td>              
            </tr>

          </tbody>
        </table>
        <br>
        <div class="input-group t-5 b-5">
  <div class="input-group-prepend">
    <span class="input-group-text">With textarea</span>
  </div>
  <textarea class="form-control " rows="5" aria-label="With textarea"></textarea>
    
</div>
      <hr>
        </b-container> 


            
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


.bg-gradient-success {
	background: linear-gradient(52deg, #2dceb9b9 0, #2da8ced0 100%) !important;
}
</style>

