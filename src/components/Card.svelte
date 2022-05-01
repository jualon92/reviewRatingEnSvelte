<div class="card">
    <slot />
</div>

<style>
    .card {
        background-color: white;
        border-radius: 15px;
        padding: 40px 50px;

        position: relative;
        color: #333;
        margin: 20px 0px;
    }
    @media (max-width: 480px) {
        .card {
            padding: 40px 15px;
        }
    }

   
</style>
