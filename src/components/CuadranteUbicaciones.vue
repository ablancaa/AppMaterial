<template>
   <div class="container">
   <!-- <table> -->
        <!-- <tr> -->
            <!-- <td>{{ listado.id }}</td> -->
        <!-- </tr> -->
    <!-- <th> -->
        <!-- <tr> -->
            <!-- <td>Infermera</td> -->
            <!-- <td>Ubicación</td> -->
            <!-- <td>TCAE</td> -->
        <!-- </tr> -->
        <!-- <tr v-for="inf in listado.due" :key="inf"> -->
            <!-- <td v-for="inf in listado.due" :key="inf">{{ inf.inf }}</td> -->
            <!-- <td>{{ inf.inf }}</td> -->
            <!-- <td>{{ inf.place }}</td> -->
        <!-- </tr> -->
    <!-- </th> -->
   <!-- </table> -->
   <br/>
   <table>
	<tbody>
        <tr>
            <td class="titulo">{{ lista.id }}</td>
        </tr>
    <th>
        <tr >
            <td>UBICACIÓ</td>
            <td v-for="dato in lista.place" :key="dato">{{ dato.lloc }} </td>
        </tr>
		<tr>
            <td>DUE</td>
            <td v-for="dato in lista.due" :key="dato.num">{{ dato.num }} - {{ dato.inf }} </td>    
        </tr>
        <tr>
            <td>TCAES</td>
            <td v-for="dato in lista.tcae" :key="dato.num">{{ dato.num }} - {{ dato.tcae }} </td>
        </tr>
    </th>
	</tbody>
</table>
   </div>
</template>

<script>
export default {
    name: 'Cuadrante',
    props: {
        listado: {
            type: Object,
        },
    },
    setup(props, context) { 

        let lista = props.listado;
        // [{
            // id: props.listado,
            // due: props.listado.due,
            // place: props.listado.place,
            // tcae: props.listado.tcae,

        // }];
        return { lista }
    }

}
</script>

<style scoped>
.titulo {
    font-size: 16px;
}
table {
    border: white solid 1px;
}
td {
     border: white solid 1px;
    /* padding: 1.5px;*/
}
</style>