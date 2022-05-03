<script>
  import { FeedbackStore } from "../stores";
  import Http from "../http.js"
  import Card from "./Card.svelte";
  export let item;
  
  const handleDelete = (itemID) => {
    M.toast({
      html: "Comentario borrado!",
      displayLength: 1000,
      outDuration: 800,
    });

    //back, podria ir una clase http.get o http.delete
    Http.deleteItemByID(itemID)
    

    // d();
    console.log(itemID);
    //client side
    FeedbackStore.update((currentFeedback) => {
      return currentFeedback.filter((item) => item.id != itemID); //lista sin parametro
    });
  };
</script>

<Card>
  <div class="num-display">
    {item.rating}
  </div>
  <button class="close" on:click={() => handleDelete(item.id)}>
    <i class="material-icons">clear</i></button
  >
  <p class="text-display flow-text">
    {item.text}
  </p>
  <p /></Card
>

<style>
  .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background: #ff6a95;
    color: #fff;
    border: 1px #eee solid;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
    background: none;
    border: none;
  }

  .text-display {
    line-break: auto;
  }

  
</style>
