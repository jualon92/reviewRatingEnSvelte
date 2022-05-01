<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    let selected = 10;

    const onChange = (e) => {
        let valor = e.currentTarget.value;

        selected = valor;

        dispatch("rating-select", selected);
    };
</script>

 
<ul class="rating">
    <div class="rating-row">
        <li>
            <input   
                type="radio"
                id="num1"
                name="rating"
                value="1"
                on:change={onChange}
                checked={selected === 1}
            />
            <label for="num1"  class="waves-effect waves-light" >1</label>
            
        </li>
        <li>
            <input
                type="radio"
                id="num2"
                name="rating"
                value="2"
                on:change={onChange}
                checked={selected === 2}
            />
            <label for="num2" class="waves-effect waves-light" >2</label>
        </li>
        <li>
            <input
                type="radio"
                id="num3"
                name="rating"
                value="3"
                on:change={onChange}
                checked={selected === 3}
            />
            <label for="num3" class="waves-effect waves-light" >3</label>
        </li>
        <li>
            <input
                type="radio"
                id="num4"
                name="rating"
                value="4"
                on:change={onChange}
                checked={selected === 4}
            />
            <label for="num4" class="waves-effect waves-light" >4</label>
        </li>
        <li>
            <input
                type="radio"
                id="num5"
                name="rating"
                value="5"
                on:change={onChange}
                checked={selected === 5}
            />
            <label for="num5" class="waves-effect waves-light" >5</label>
        </li>
    </div>
    <div class="rating-row">
        <li>
            <input
                type="radio"
                id="num6"
                name="rating"
                value="6"
                on:change={onChange}
                checked={selected === 6}
            />
            <label for="num6" class="waves-effect waves-light" >6</label>
        </li>
        <li>
            <input
                type="radio"
                id="num7"
                name="rating"
                value="7"
                on:change={onChange}
                checked={selected === 7}
            />
            <label for="num7" class="waves-effect waves-light" >7</label>
        </li>
        <li>
            <input
                type="radio"
                id="num8"
                name="rating"
                value="8"
                on:change={onChange}
                checked={selected === 8}
            />
            <label for="num8" class="waves-effect waves-light" >8</label>
        </li>
        <li>
            <input
                type="radio"
                id="num9"
                name="rating"
                value="9"
                on:change={onChange}
                checked={selected === 9}
            />
            <label for="num9" class="waves-effect waves-light" >9</label>
        </li>
        <li>
            <input
                type="radio"
                id="num10"
                name="rating"
                value="10"
                on:change={onChange}
                checked={selected === 10}
            />
            <label for="num10" class="waves-effect waves-light" >10</label>
        </li>
    </div>
</ul>

<style>
    .rating {
        display: flex;
        align-items: center;

        margin-bottom: 30px;
        margin-top: 30px;
        justify-content: center;
        gap:7px;
    }
    .rating li {
        position: relative;
        background: #f4f4f4;
        width: 50px;
        height: 50px;
        padding: 10px;
        text-align: center;
        border-radius: 50%;
        font-size: 19px;
        border: 1px #eee solid;
        transition: 0.3s;
    }

    .rating-row {
        display: flex;
        gap: 7px;
    }
    .rating li label {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50px;
        height: 50px;
        padding: 10px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
        font-size:unset;
    }
    .rating li:hover {
        background: #ff6a95;
        color: #fff;
    }
    /* Make actual radio select invisible */
    [type="radio"] {
        opacity: 0;
    }
    /* Use the sibling select */
    [type="radio"]:checked ~ label {
        background: #ff6a95;
        color: #fff;
    }

    @media (max-width: 700px) {
        .rating {
            flex-wrap: wrap;

            column-gap: 2px;

            gap: 6px;
            margin-bottom: 30px;
            margin-top: 30px;

            justify-content: center;
        }
    }
</style>
