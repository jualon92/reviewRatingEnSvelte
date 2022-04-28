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

    @media (max-width: 700px) {
        .card {
            padding-left: 1.2rem;
            padding-right: 1.2rem;
        }
    }
</style>
