<template>
    <h1>Rotaciones</h1>
    
    <Rotacion :mix="mix"/>
    <Cuadrante/>
    <div>
        <h1>Vista Rotaciones</h1>
    <div id="orden">
        <label>Número de DUE:_</label>
        <input v-model="numDUE" type="number"/>
        <br/>
        <label>Número de TCAE: </label>
        <input v-model="numTCAE" type="number"/>
    </div>
    <br/>
    <button @click="setUpRotation()">Generar Rotación</button>
    </div>
</template>

<script>
import { ref } from 'vue';
import Cuadrante from '@/components/CuadranteUbicaciones.vue'
import Rotacion from '@/components/RotacionList.vue'
export default {
    
    name: 'Rotaciones',
    components: {
        Cuadrante,
        Rotacion: Rotacion,
    },
    setup (props, context) {

        let numDUE = ref();
        let numTCAE = ref();
        let arrayDue = [
            { num: 1 ,inf: 'Irene' }, 
            { num: 2, inf: 'Marta' }, 
            { num: 3, inf: 'Iñaki' }, 
            { num: 4, inf: 'Mireia' }, 
            { num: 5, inf: 'David' },
            { num: 6, inf: 'Clara' },
            { num: 7, inf: 'Jony' },
            { num: 8, inf: 'Lorena' },
            { num: 9, inf: 'Miriam' },
            { num: 10, inf: 'Eva' },
            { num: 11, inf: 'Pol' },
            { num: 12, inf: 'Laura G' },
            { num: 13, inf: 'Mª José' }
        ];

        let arrayTCAE = [
            { num: 1, tcae: 'Miriam' }, 
            { num: 2, tcae: 'Maite'}, 
            { num: 3, tcae: 'Pilar. M' }, 
            { num: 4, tcae: 'Vanesa' }, 
            { num: 5, tcae: 'Montse. G' },
            { num: 6, tcae: 'Pilar. S' },
            { num: 7, tcae: 'Alberto' },
            { num: 8, tcae: 'Mª Luz' },
            { num: 9, tcae: 'Lourdes' },
            { num: 10, tcae: 'Elena' },
            { num: 11, tcae: 'Sandra / Dalila' },
        ];

        let arrayLugares = [
            { lloc: 'CR 1-2' },
            { lloc: 'CR 11-12' },
            { lloc: 'CR 03-04' },
            { lloc: 'SOPORTE G' },
            { lloc: 'COR P' },
            { lloc: 'CR 13-14' },
            { lloc: 'H DIA' },
            { lloc: 'CR 05-06' },
            { lloc: 'CR 15-16' },
            { lloc: 'CR 07-08' },
            { lloc: 'SOPORTE P' },
            { lloc: 'CR 09-10' },
            { lloc: 'COR G' }
        ];
        
        let arrayMeses = [
            { mes: 'Enero' },
            { mes: 'Febrero' },
            { mes: 'Marzo' },
            { mes: 'Abril' },
            { mes: 'Mayo' },
            { mes: 'Junio' },
            { mes: 'Julio' },
            { mes: 'Agosto' },
            { mes: 'Septiembre' },
            { mes: 'Octubre' },
            { mes: 'Noviembre' },
            { mes: 'Diciembre' },
        ];

        let array

        let mix = ref([
            {
                id: 'Enero',
                due: arrayDue,
                place: arrayLugares,
                tcae: arrayTCAE,
            },
            {
                id: 'Febrero',
                due: arrayDue,
                place: arrayLugares,
                tcae: arrayTCAE
            },
            {
                id: 'Marzo',
                due: {},
                place: {},
                tcae: {}
            },
            {
               id: 'Abril',
               due: {},
               place: {},
                tcae: {}
            },
            {
               id: 'Mayo',
               due: {},
               place: {},
               tcae: {}
            },
            {
                id: 'Junio',
                due: {},
                place: {},
                tcae: {}
            },
            {
               id: 'Julio',
               due: {},
               place: '',
               tcae: {},
            },
            {
               id: 'Agosto',
               due: {},
               place: '',
               tcae: {},
            },
            {
               id: 'Septiembre',
               due: {},
               place: '',
               tcae: {},
            },
            {
               id: 'Octubre',
               due: {},
               place: '',
               tcae: {},
            },
            {
               id: 'Noviembre',
               due: {},
               place: '',
               tcae: {},
            },
            {
               id: 'Diciembre',
               due: {},
               place: '',
               tcae: {},
            },
        ]);

        let arrayMesos = new Array(13);
        for (let i = 0; i < arrayMesos.length; i++) {
            arrayMesos[i] = new Array(3);
        }
        //copia de los arrays para operar con ellos
        let enfermeras = arrayDue.slice();
        let auxiliares = arrayTCAE.slice();
        let comodin = "";
        let salto = false;

        //array tridimensional
var arrayFinal = new Array(12);
//Metemos un array en cada posición
for (var i = 0; i < arrayFinal.length; i++) {
    arrayFinal[i] = new Array(13);
}

        return {
            arrayDue, arrayTCAE, arrayLugares, arrayMeses, mix
        }
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