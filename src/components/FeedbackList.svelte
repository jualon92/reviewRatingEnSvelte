<script>
  import { FeedbackStore } from "../stores";
  import { fade, scale } from "svelte/transition";
  import { onMount } from "svelte";
  import FeedbackItem from "./FeedbackItem.svelte";
  import Http from "../http.js";

  const procesarData = (listaJSON) => {
    let lista = [];
    listaJSON.forEach((eleDB) => {
      const nuevoEle = {
        id: eleDB.id,
        rating: Number(eleDB.rating),
        text: eleDB.text,
      };

      lista.push(nuevoEle);
    });

    //quiero lista de menor antiguedad a mayor, doy vuelta
    lista.reverse();
    return lista;
  };

  onMount(async () => {
    const items = await Http.getItems();
    document.querySelector(".contenedor-preloader").style.display = "none";

    const data = procesarData(items);
    console.log("Data procesada", data);
    FeedbackStore.set(data);
  });


</script>

<div class="contenedor-preloader">
  <div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle" />
      </div>
      <div class="gap-patch">
        <div class="circle" />
      </div>
      <div class="circle-clipper right">
        <div class="circle" />
      </div>
    </div>
  </div>
</div>

{#each $FeedbackStore as fb (fb.id)}
  <div in:scale out:fade={{ duration: 500 }}>
    <FeedbackItem item={fb} />
  </div>
{/each}

<style>
  .contenedor-preloader {
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }
</style>
