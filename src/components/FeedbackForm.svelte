<script>
    import { v4 as uuidv4 } from "uuid";
    import Http from "../http.js"
    import { FeedbackStore } from "../stores";
    import Card from "./Card.svelte";
    import Button from "./Button.svelte";
    import RatingSelect from "./RatingSelect.svelte";
    import  recognition  from "../reconocimientoVoz.js"
    
    $: text = "";
    let btnDisabled = true;
    let min = 10;
    let mensaje = "";
    let rating = 10;
    let estadoVoz = "Voz a Texto";
    let mensajeMediante = "Pulsa para enviar";
    let actividad = "";
    let estadoBarra = "none"

    recognition.onresult = (event) => {
        let current = event.resultIndex;
        let transcript = event.results[current][0].transcript;
        console.log(transcript);
        text += transcript;
        handleInput()
    };

    
    const handleVoice =  (e) => {
        if (estadoVoz === mensajeMediante) {
 
            recognition.stop();
            estadoVoz = "Voz a Texto"
            document.querySelector(".btn-voz").style = "background-color:#26A69A"
            estadoBarra = "none"
        } else {
            text = ""
            estadoVoz = mensajeMediante;
            document.querySelector(".btn-voz").style = "background-color:orange"
            estadoBarra = "block"
            M.toast({html: ` 
             Grabando.. ` })

            recognition.start();
        }
    };

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

    const handleSubmit = async () => {
        M.toast({
            html: "Comentario enviado!",
            displayLength: 2000,
            outDuration: 800,
        });

        //refactor, feo.
        if (text.trim().length > min) {
            const nuevoFeedback = {
                id: uuidv4(), //custom id random
                text,
                rating: rating, //unary operator
            };
            
            Http.postItem(nuevoFeedback)
          
            FeedbackStore.update((currentFeedback) => {
                return [nuevoFeedback, ...currentFeedback];
            });

            text = ""; //borrar texto cuando se envia
        }
    };
</script>

<Card>
    <header class="rating-header flow-text">Como calificarias nuestro servicio?</header>
    <form class="form-rating d" on:submit|preventDefault={handleSubmit}>
        <RatingSelect on:rating-select={handleSelect} />
        <!--me das parametro, y trabajo aca. -->
        <!--Rating select-->
        <div class="input-group">
            <input
                type="text"
                contenteditable=true
                on:input={handleInput}
                on:keyup={handleInput}
                bind:value={text}
               
                placeholder="Cuentanos que te gusto"

            />
            <button
                class="btn-enviar waves-effect waves-light btn"
                disabled={btnDisabled}
                type="submit">Enviar</button
            >
        </div>
        <div class="progress" style="display:{estadoBarra};">
            <div class="indeterminate"></div>
        </div>
        <form class="form-voz" on:submit|preventDefault={handleVoice}>
            <p>{actividad}</p>
            <button class="btn-voz waves-effect waves-light btn " type="submit"
                >{estadoVoz} <i class="material-icons">keyboard_voice</i></button
            >
           
        </form>
        
        {#if mensaje}
            <div class="message">
                {mensaje}
            </div>
        {/if}
    </form>
</Card>

<style>
    .rating-header{
        margin-bottom: 20px;
    }
    .form-rating{
        display:flex;
        flex-direction: column;
        gap: 2rem;
    }
    .progress{
        display:none;
        margin: 0.5rem 0 0.5rem 0;
      
    }
    .message{
        
    }
    .form-voz {
        display: flex;
        justify-content: space-between;

      
    }

    .btn-voz {
        border-radius: 8px;
        display: flex;
    }
    header {
        max-width: 400px;
        margin: auto;
        text-align: center;
    }
    .btn-enviar {
        border-radius: 8px;
        align-self: center;
        text-align: center;
        margin-bottom: 5px;
        display: flex;
        justify-content: center;
    }
    .input-group {
        gap: 5px;
        display: flex;
        flex-direction: row;
        border: 1px solid #ccc;
        padding: 8px 10px;
        border-radius: 8px;
        
    }
    input {
        flex-grow: 2;
        border: none;
        font-size: 16px;
    }

    @media (max-width: 390px) {
        input {
            margin-left: -5px;
        }
    }

    input:focus {
        outline: none;
    }
    .message {
        
        text-align: center;
        color: rebeccapurple;
    }
</style>
