<script>
    import { onMount } from 'svelte/internal';
    import VanillaTilt from 'vanilla-tilt';

    const _displays = ['C', '/', '*', '7', '8', '9', '-', '4', '5', '6', '+',
    '1', '2', '3', '0', '00', '.', '='];
    let _values = '';
    let _container;

    const onClick = (e) => {
        if(!e.target.innerText) return;
        const v = e.target.innerText;
        if(_values === ""){
            if(v == "/" || v === "*" || v === "-" || v === "+" || v === "="){
                return;
            }
        }

        switch(e.target.innerText)
        {
            case "C":  _values = ''; break;
            case "=": _values = eval(_values); break;
            default: _values += e.target.innerText; break;
        }
    };

    onMount(()=>{
        VanillaTilt.init(_container, {
            max:25,
            speed: 400,
            glare:false,
            "max-glare": 0.5,
        });
    })

</script>

<div class="container" bind:this={_container}>
    <form action="" class="calc" name="calc">
        <input type="text" readonly class="value" name="value" bind:value={_values}>
        {#each _displays as d}
            <span class="num" 
                class:clear = {d === "C" ? "clear" : "" }
                class:plus = { d === "+" ? "plus" :  "" }
                class:equal = { d === "=" ? "equal" : "" }
                on:click={onClick}
            >
                <i>{d}</i>
            </span>
        {/each}
    </form>
</div>


<style lang="scss">
    .container{
        position: relative;
        background: rgba(255,255,255,0.05);
        border-radius: 6px;
        overflow: hidden;
        z-index: 10;
        backdrop-filter: blur(15px);
        border-top: 1px solid rgba(255,255,255, 0.2);
        border-left: 1px solid rgba(255,255,255, 0.2);
        box-shadow: 5px 5px 30px rgba(255,255,255, 0.2);
        .calc{
            position: relative;
            display: grid;

            // INPUT.value
            .value{
                grid-column: span 4; // 4컬럼
                height: 140px;
                width: 300px;
                text-align: right;
                border: none;
                outline: none;
                padding: 10px;
                font-size: 30px;
                background: transparent;
                color: #fff;
                border-right: 1px solid rgba(255,255,255, 0.05);
                border-bottom: 1px solid rgba(255,255,255, 0.05);
            }

            span{
                display: grid;
                place-items: center;
                height: 75px;
                width: 75px;
                color: #fff;
                font-weight: 400;
                cursor: pointer;
                user-select: none;
                border-right: 1px solid rgba(255,255,255, 0.05);
                border-bottom: 1px solid rgba(255,255,255, 0.05);
                transition: 0.3s;

                &:hover{
                    transition: 0s;
                    background: rgba(255,255,255, 0.05);
                }

                &:active{
                    background: #14ff47;
                    color: #192f00;
                    font-size: 24px;
                    font-weight: 500;
                }

                &.clear{
                    grid-column: span 2;
                    width: 150px;
                    background: rgba(255,255,255, 0.05);
                }

                &.plus{
                    grid-row: span 2;
                    height: 150px;
                }

                
            }

            .equal{
                background: rgba(255,255,255, 0.05);
            }
        }
    }
</style>