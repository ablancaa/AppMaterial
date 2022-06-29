<template>
   <div class="container">
   <table>
        <tr>
            <td>Enero</td>
        </tr>
    <th>
        <tr>
            <td>Infermera</td>
            <td>Ubicación</td>
            <td>TCAE</td>
        </tr>
        <tr>
            <td>1</td>
            <td>{{ lugares[0].lloc }}</td>
            <td>1</td>
        </tr>
        <tr>
            <td>2</td>
            <td>{{ lugares[1].lloc }}</td>
            <td>2</td>
        </tr>
        <tr>
            <td>3</td>
            <td>{{ lugares[2].lloc }}</td>
            <td>3</td>
        </tr>
        <tr>
            <td>4</td>
            <td>{{ lugares[3].lloc }}</td>
            <td>4</td>
        </tr>
        <tr>
            <td>5</td>
            <td>{{ lugares[4].lloc }}</td>
            <td>5</td>
        </tr>
        <tr>
            <td>6</td>
            <td>{{ lugares[5].lloc }}</td>
            <td>6</td>
        </tr>
        <tr>
            <td>7</td>
            <td>{{ lugares[6].lloc }}</td>
            <td>7</td>
        </tr>
        <tr>
            <td>8</td>
            <td>{{ lugares[7].lloc }}</td>
            <td>8</td>
        </tr>
        <tr>
            <td>9</td>
            <td>{{ lugares[8].lloc }}</td>
            <td>9</td>
        </tr>
        <tr>
            <td>10</td>
            <td>{{ lugares[9].lloc }}</td>
            <td>10</td>
        </tr>
        <tr>
            <td>11</td>
            <td>{{ lugares[10].lloc }}</td>
            <td>11</td>
        </tr>
        <tr>
            <td>12</td>
            <td>{{ lugares[11].lloc }}</td>
            <td></td>
        </tr>
        <tr>
            <td>13</td>
            <td>{{ lugares[12].lloc }}</td>
            <td></td>
        </tr>
    </th>
   </table>
   </div>
</template>

<script>
export default {
    props: {
        lugares: Object,
    }
}
</script>

<style scoped>

</style>