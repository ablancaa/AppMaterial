<template>
    <h1>Rotaciones</h1>
    <!--
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
    -->
    <!-- <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>  -->
    <div>
        <h1>pruebas</h1>
        
    <div id="orden">
        <p v-for="items in arrayFinal" :key="items">{{mes}} {{lloc}}</p>
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
export default {
    
    name: 'Rotaciones',
    setup (props, context) {

        let numDUE = ref();
        let numTCAE = ref();

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

        let arrayLugares = [
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
        
        let arrayMeses = [
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

        let infermeras = ref(arrayDue);
        let tcaes = ref(arrayTCAE);

        numTCAE.value = numTCAE.value - 1;
        numDUE.value = numDUE.value - 1;

        for (let i = 0; i < infermeras.value.lenght; i++) {
            infermeras.value[i] = arrayDue[numDUE];
                if (numDUE >= arrayDue.length - 1) {
                    numDUE = -1;
                }
            numDUE++;
        }
        for (let i = 0; i < tcaes.value; i++) {
            tcaes.value[i] = arrayTCAE[numTCAE];
                if (numTCAE >= arrayTCAE.length - 1) {
                    numTCAE = -1;
                }
            numTCAE++;
        }

        let arrayFinal = ref({
            mes: arrayMeses,
            lugares: arrayLugares,
            infermeras: {},
            tcaes: {},
        });

    function setUpRotation() { 
        numTCAE.value = numTCAE.value - 1;
        numDUE.value = numDUE.value - 1;

        for (let i = 0; i < infermeras.value.lenght; i++) {
            infermeras.value[i] = arrayDue[numDUE];
                if (numDUE >= arrayDue.length - 1) {
                    numDUE = -1;
                }
            numDUE++;
        }

        for (let i = 0; i < tcaes.value; i++) {
            tcaes.value[i] = arrayTCAE[numTCAE];
                if (numTCAE >= arrayTCAE.length - 1) {
                    numTCAE = -1;
                }
            numTCAE++;
        }

        //console.log("DUE: " + numDUE.value);
        //console.log("TCAE: " + numTCAE.value);

        //console.log(infermeras.value);
        //console.log(tcaes.value);
        muestraRotacion();
        }//FIN setUpRotation
function esIgual(valor) {
    return valor.lloc === 'SOPORTE';
}
        function muestraRotacion() {
            for (let i = 0; i < 12; i++) {
                let g = 0;
                for (let j = 0; j < 13; j++) {
                    arrayFinal.value.lugares = arrayLugares[j];
                    arrayFinal.value.infermeras = infermeras[j];
                    if (arrayLugares.find(esIgual())) {
                        arrayFinal.value.lugares = "NULL";
                    } else {
                        arrayFinal.value.tcaes = tcaes[g];
                        g++;
                    }
                }
                //System.out.println();
               console.log(arrayMeses[i]);
                console.log("Habitacio\tEnfermera\tAuxiliar");
                for (let k = 0; k < arrayFinal.value.length; k++) {
                    for (let j = 0; j < 3; j++) {
                        console.log(arrayFinal[k][j] + "\t\t");
                    }
                    System.out.println();
                }
                //System.out.println();
                //rotarI(enfermeras);
                //rotarD(auxiliares);
            }
        }

        function ordenaDUE(array) {
            let i = 0;
            let posicion = arrayDue[0];
            for(i; i < infermeras.value.length-1; i++){
                array[i] = array[i + 1];
            };
            array[i] = posicion;
            return array;
        }

        function ordenaTCAE (array){
            for (let i=0; array.length-1; i++){
                let posicion = array[array.length-1];
                array[i] = array[i-1] ;
            }
            array[i] = posicion; 
            return arrayTotal = array;
        }

        return {
            arrayDue, arrayTCAE, arrayLugares, arrayMeses,
            arrayFinal, infermeras, tcaes, numTCAE, numDUE, muestraRotacion,
            setUpRotation, ordenaDUE, ordenaTCAE
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