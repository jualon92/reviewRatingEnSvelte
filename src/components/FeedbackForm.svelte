<script>
    import { v4 as uuidv4 } from "uuid";

    import { FeedbackStore } from "../stores";
    import Card from "./Card.svelte";
    import Button from "./Button.svelte";
    import RatingSelect from "./RatingSelect.svelte";

    let text = "";
    let btnDisabled = true;
    let min = 10;
    let mensaje = "";
    let rating = 10;

    const handleInput = () => {
        if (text.trim().length <= min) {
            mensaje = `Mensaje de al menos ${min} caracteres`;
            btnDisabled = true;
        } else {
            btnDisabled = false;
            mensaje = null;
        }
    };

    const handleSelect = (e) => {
        rating = e.detail;
    };

    const handleSubmit = () => {
        if (text.trim().length > min) {
            const nuevoFeedback = {
                id: uuidv4(), //custom id random
                text,
                rating: rating, //unary operator
            };

            FeedbackStore.update((currentFeedback) => {
                return [nuevoFeedback, ...currentFeedback];
            });
            text = ""; //borrar texto cuando se envia
        }
    };
</script>

<Card>
    <header>Como calificarias nuestro servicio?</header>
    <form on:submit|preventDefault={handleSubmit}>
        <RatingSelect on:rating-select={handleSelect} />
        <!--me das parametro, y trabajo aca. -->
        <!--Rating select-->
        <div class="input-group">
            <input
                type="text"
                on:input={handleInput}
                bind:value={text}
                placeholder="Cuentanos que te gusto"
            />
            <Button disabled={btnDisabled} type="submit">Enviar</Button>
        </div>
        {#if mensaje}
            <div class="message">
                {mensaje}
            </div>
        {/if}
    </form>
</Card>

<style>
    header {
        max-width: 400px;
        margin: auto;
    }
   
    .input-group {
        display: flex;
        flex-direction: row;
        border: 1px solid #ccc;
        padding: 8px 10px;
        border-radius: 8px;
        margin-top: 15px;
    }
    input {
        flex-grow: 2;
        border: none;
        font-size: 16px;
    }
    input:focus {
        outline: none;
    }
    .message {
        padding-top: 10px;
        text-align: center;
        color: rebeccapurple;
    }
</style>
