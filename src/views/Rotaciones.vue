<template>
    <h1>Rotaciones</h1>
    <div class="inf">
        <table>
            <tr>
                <td>DUE</td>
            </tr> 
            <tr v-for="items in arrayDue">
                <td> {{items.inf}}</td>
            </tr>
        </table>
    </div>
    <div class="lugares">
        <table>
            <tr>
                <td>Lugar</td>
            </tr>
            <tr v-for="items in lugares">
                <td > {{items.lloc}}</td>
            </tr>
        </table>
    </div>
    <div class="tcae">
        <table>
            <tr>
                <td>TCAE</td>
            </tr>
            <tr v-for="items in arrayTCAE">
                <td > {{items.tcae}}</td>
            </tr>
        </table>
    </div> 
    <div>
        <h1>pruebas</h1>
        <button @click="ordenaDUE()">OrdenaDue</button>
    <div id="orden">

        <table>
            <tr>
                <td>DUE</td>
            </tr>
            <tr v-for="items in arrayTotal">
                <td> {{items.inf}}</td>
            </tr>
        </table>
    </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    
    name: 'Rotaciones',
    setup (props, context) {

        let arrayTotal = [];



        let arrayDue = [
            {num: 1 ,inf: 'Irene'}, 
            {num: 2, inf: 'Marta'}, 
            {num: 3, inf: 'Iñaki'}, 
            {num: 4, inf: 'Mireia'}, 
            {num: 5, inf: 'David'},
            {num: 6, inf: 'Clara'},
            {num: 7, inf: 'Jony'},
            {num: 8, inf: 'Lorena'},
            {num: 9, inf: 'Miriam'},
            {num: 10, inf: 'Eva'},
            {num: 11, inf: 'Pol'},
            {num: 12, inf: 'Laura G'},
            {num: 13, inf: 'Mª José'}
        ];

        let arrayTCAE = [
        {num: 1, tcae: 'Miriam'}, 
        {num: 2, tcae: 'Maite'}, 
        {num: 3, tcae: 'Pilar. M'}, 
        {num: 4, tcae: 'Vanesa'}, 
        {num: 5, tcae: 'Montse. G'},
        {num: 6, tcae: 'Pilar. S'},
        {num: 7, tcae: 'Alberto'},
        {num: 8, tcae: 'Mª Luz'},
        {num: 9, tcae: 'Lourdes'},
        {num: 10, tcae: 'Elena'},
        {num: 11, tcae: 'Sandra / Dalila'},
        ];

        let lugares =[
            {lloc: 'CR 1-2'},
            {lloc: 'CR 11-12'},
            {lloc: 'CR 03-04'},
            {lloc: 'SOPORTE'},
            {lloc: 'COR P'},
            {lloc: 'CR 13-14'},
            {lloc: 'H DIA'},
            {lloc: 'CR 05-06'},
            {lloc: 'CR 15-16'},
            {lloc: 'CR 07-08'},
            {lloc: 'SOPORTE'},
            {lloc: 'CR 09-10'},
            {lloc: 'COR G'},];
        
        let meses = [
            {mes: 'Enero'},
            {mes: 'Febrero'},
            {mes: 'Marzo'},
            {mes: 'Abril'},
            {mes: 'Mayo'},
            {mes: 'Junio'},
            {mes: 'Julio'},
            {mes: 'Agosto'},
            {mes: 'Septiembre'},
            {mes: 'Octubre'},
            {mes: 'Noviembre'},
            {mes: 'Diciembre'},
        ];

            function ordenaDUE (){
                let i = 0;
                let posicion = arrayDue[0];
                for(i; i < arrayDue.length; i++){
                    arrayTotal[i] = arrayDue[i+1];
                };
                arrayTotal[i] = posicion;
                console.log(arrayTotal[i].inf);
                return arrayTotal = arrayDue;
            }

            function ordenaTCAE (array){
                for (let i=0; array.length-1; i++){
                    let posicion = array[array.length-1];
                    array[i] = array[i-1] ;
               }
               array[i] = posicion; 
               return arrayTotal = array;
            }
        return {arrayDue, arrayTCAE, lugares, meses, arrayTotal, ordenaDUE, ordenaTCAE }
    }
}
</script>

<style scoped>
table{
    border: solid 1px;
    width: 150px;
}
td{
    padding: 0,5rem;
}
.inf{
    float:left;
    margin-left: 5px;

}
.tcae {
    float: left;
    margin-left: 5px;
}
#content {
    height: 650px;
}
.lugares {
    float: left;
    margin-left: 5px;

}

</style>