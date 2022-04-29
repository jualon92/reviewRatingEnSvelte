<script>
    import {FeedbackStore} from "../stores";

    $: count = $FeedbackStore.length;
    $: acum =  $FeedbackStore.reduce((a, { rating }) => a + parseInt(rating), 0)
    $: avg = getDisplay(acum / count)
    
    //si no es entero que tenga una cifra signf ej:9.5, si es entero que sea sin 9.0
    const esEntero = (nro) => (nro % 1) === 0
    const getDisplay = (nro) => esEntero(nro) ? parseInt(nro) : nro.toFixed(1)

</script>

<div class="feedback-stats">
    <h4>{count} Reviews</h4>
    <h4>Rating Promedio: {isNaN(avg) ? 0 : avg}</h4>
</div>

<style>
    .feedback-stats {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
