<template>
    <h1>Rotaciones</h1>
    
    <Rotacion :mix="arrayFinal"/> 

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
import { reactive, ref } from 'vue';
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

        let mix = ref([
            {
                id: 'Enero',
                due: arrayDue,
                place: arrayLugares,
                tcae: arrayTCAE,
                total: {},
            },
            {
                id: 'Febrero',
                due: arrayDue,
                place: arrayLugares,
                tcae: arrayTCAE,
                total: {},
            },
            {
                id: 'Marzo',
                due: {},
                place: {},
                tcae: {},
                total: {},
            },
            {
               id: 'Abril',
               due: {},
               place: {},
               tcae: {},
               total: {},
            },
            {
               id: 'Mayo',
               due: {},
               place: {},
               tcae: {},
               total: {},
            },
            {
                id: 'Junio',
                due: {},
                place: {},
                tcae: {},
                total: {},
            },
            {
               id: 'Julio',
               due: {},
               place: '',
               tcae: {},
               total: {},
            },
            {
               id: 'Agosto',
               due: {},
               place: '',
               tcae: {},
               total: {},
            },
            {
               id: 'Septiembre',
               due: {},
               place: '',
               tcae: {},
               total: {},
            },
            {
               id: 'Octubre',
               due: {},
               place: '',
               tcae: {},
               total: {},
            },
            {
               id: 'Noviembre',
               due: {},
               place: '',
               tcae: {},
               total: {},
            },
            {
               id: 'Diciembre',
               due: {},
               place: '',
               tcae: {},
               total: {},
            },
        ]);

        let mix2 = reactive([
            {
                id: 'Enero',
                due: {},
                place: {},
                tcae: {},
                total: arrayFinal,
            },
            {
                id: 'Febrero',
                due: {},
                place: {},
                tcae: {},
                total: {},
            },
            {
                id: 'Marzo',
                due: {},
                place: {},
                tcae: {},
                total: {},
            },
            {
               id: 'Abril',
               due: {},
               place: {},
               tcae: {},
               total: {},
            },
            {
               id: 'Mayo',
               due: {},
               place: {},
               tcae: {},
               total: {},
            },
            {
                id: 'Junio',
                due: {},
                place: {},
                tcae: {},
                total: {},
            },
            {
               id: 'Julio',
               due: {},
               place: '',
               tcae: {},
               total: {},
            },
            {
               id: 'Agosto',
               due: {},
               place: '',
               tcae: {},
               total: {},
            },
            {
               id: 'Septiembre',
               due: {},
               place: '',
               tcae: {},
               total: {},
            },
            {
               id: 'Octubre',
               due: {},
               place: '',
               tcae: {},
               total: {},
            },
            {
               id: 'Noviembre',
               due: {},
               place: '',
               tcae: {},
               total: {},
            },
            {
               id: 'Diciembre',
               due: {},
               place: '',
               tcae: {},
               total: {},
            },
        ]);

      let arrayMesos = new Array(11);
        for (let i = 0; i < arrayMesos.length; i++) {
            arrayMesos[i] = new Array(3);
        }
        //copia de los arrays para operar con ellos
        let enfermeras = arrayDue.slice();
        let auxiliares = arrayTCAE.slice();
        let comodin = "";
        let salto = false;
        //array tridimensional
        var arrayFinal = reactive(new Array(12));
        //Metemos un array en cada posición
        for (let i = 0; i < arrayFinal.length; i++) {
            arrayFinal[i] = new Array(13);
        }
        //Volvemos a recorrer los arrays para la 3ª dimensión
        //Recorremos el primer array
        for (let i = 0; i < arrayFinal.length; i++) {
            //Recorremos el array de cada posición i
            for (var j = 0; j < arrayFinal[i].length; j++) {
                //Creamos un array en cada posición
                arrayFinal[i][j] = new Array(3);
            }
        }
        for (let i = 0; i < arrayFinal.length; i++) {
            let g = 0;
            for (let j = 0; j < arrayFinal[i].length; j++) {
                for (var k = 0; k < arrayFinal[i][j].length; k++) {
                    //g = j;
                    arrayFinal[i][j][0] = arrayLugares[j];
                    arrayFinal[i][j][1] = enfermeras[j];
                    if (arrayLugares[j].lloc === "SOPORTE G" || arrayLugares[j].lloc === "SOPORTE P") {
                        arrayFinal[i][j][2] = "NULL";
                        salto = true;
                        //console.log("If de bucle para null" + salto);
                    } else {                    
                        arrayFinal[i][j][2] = auxiliares[g];
                        //console.log("Else de bucle para null: " + salto);
                    }
                }
                if (salto) {
                    g--;
                    salto = false;
                }
                let size = arrayFinal[i][j].length;
                arrayFinal[i][j].push(arrayMeses[size]);
                g++;
            }
            
            mueve_enfermeras();
            mueve_auxiliares();
        }
        function mueve_enfermeras() {
            comodin = enfermeras.shift(); //elimino el primer elemento y lo guardo
            enfermeras.push(comodin);//lo pongo al final                    
        }
        function mueve_auxiliares() {
            comodin = auxiliares.pop(); //elimino el ultimo elemento y lo guardo
            auxiliares.unshift(comodin); //lo pongo al principio.
        }
        return {
            arrayDue, arrayTCAE, arrayLugares, arrayMeses, arrayMesos, mix, arrayFinal
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