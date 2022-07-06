<template>
   <div class="container">
    <br/>
    <div>
    <h4></h4>
    </div>
   <table class="izq">
	<tbody>
        <tr>
            <td class="titulo"></td>
        </tr>
    <th>
        <tr >
            <td>UBICACIÓ</td>
            <td>DUE</td>
            <td>TCAES</td>
        </tr>
        <tr>
            <td> {{ lista[0][0].lloc }} </td>
            <td >{{ lista[0][1].inf }} </td>    
            <td> {{ lista[0][2].tcae }} </td>
        </tr>
        <tr>
            <td> {{ lista[1][0].lloc }} </td>
            <td >{{ lista[1][1].inf }} </td> 
            <td> {{ lista[1][2].tcae }} </td>
        </tr>
        <tr>
            <td> {{ lista[2][0].lloc }} </td>
            <td >{{ lista[2][1].inf }} </td> 
            <td> {{ lista[2][2].tcae }} </td>
        </tr>
        <tr>
            <td> {{ lista[3][0].lloc }} </td>
            <td >{{ lista[3][1].inf }} </td> 
            <td> {{ lista[3][2].tcae }} </td>
        </tr>
        <tr>
            <td> {{ lista[4][0].lloc }} </td>
            <td >{{ lista[4][1].inf }} </td> 
            <td> {{ lista[4][2].tcae }} </td>
        </tr>
        <tr>
            <td> {{ lista[5][0].lloc }} </td>
            <td >{{ lista[5][1].inf }} </td> 
            <td> {{ lista[5][2].tcae }} </td>
        </tr>
        <tr>
            <td> {{ lista[6][0].lloc }} </td>
            <td >{{ lista[6][1].inf }} </td> 
            <td> {{ lista[6][2].tcae }} </td>
        </tr>
        <tr>
            <td> {{ lista[7][0].lloc }} </td>
            <td >{{ lista[7][1].inf }} </td> 
            <td> {{ lista[7][2].tcae }} </td>
        </tr>
        <tr>
            <td> {{ lista[8][0].lloc }} </td>
            <td >{{ lista[8][1].inf }} </td> 
            <td> {{ lista[8][2].tcae }} </td>
        </tr>
        <tr>
            <td> {{ lista[9][0].lloc }} </td>
            <td >{{ lista[9][1].inf }} </td> 
            <td> {{ lista[9][2].tcae }} </td>
        </tr>
        <tr>
            <td> {{ lista[10][0].lloc }} </td>
            <td >{{ lista[10][1].inf }} </td> 
            <td> {{ lista[10][2].tcae }} </td>
        </tr>
        <tr>
            <td> {{ lista[11][0].lloc }} </td>
            <td >{{ lista[11][1].inf }} </td> 
            <td> {{ lista[11][2].tcae }} </td>
        </tr>
        <tr>
            <td> {{ lista[12][0].lloc }} </td>
            <td >{{ lista[12][1].inf }} </td> 
            <td> {{ lista[12][2].tcae }} </td>
        </tr>
    </th>
	</tbody>
</table>
   </div>
</template>

<script>
import { reactive, computed } from 'vue';
export default {
    name: 'Cuadrante',
    props: {
        listado: {
            type: Object,
        },
        mes: {
            type: Array,
        }, 
        mix: {
            type: Object
        }
    },
    setup(props, context) { 

        //let lista = props.listado;
        let lista = reactive(props.listado);
      

        return { lista }
    }

}
</script>

<style scoped>
.titulo {
    font-size: 16px;
}
.izq{
    float: left;
}
table {
    border: white solid 1px;
    float: left;
}
td {
     border: white solid 1px;
    /* padding: 1.5px;*/
}
</style>