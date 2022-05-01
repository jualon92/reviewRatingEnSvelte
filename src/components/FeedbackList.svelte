<script>
    import { FeedbackStore } from "../stores";
    import { fade, scale } from "svelte/transition";
    import FeedbackItem from "./FeedbackItem.svelte";
</script>
 
<div class="contenedor-preloader">
    <div class="preloader-wrapper big active">
        <div class="spinner-layer spinner-blue-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
            <div class="circle"></div>
          </div><div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
</div>


{#each $FeedbackStore as fb (fb.id) } 
<div in:scale out:fade="{{duration: 500}}">  
    <FeedbackItem item={fb} />
</div>
{/each}

<style>
    .contenedor-preloader{
        display:flex;
        justify-content: center;
        margin-top:60px;
    }
</style>
