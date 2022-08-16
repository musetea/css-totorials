<script>
    const displays = ['C', '/', '*', '7', '8', '9', '-', '4', '5', '6', '+',
        '1', '2', '3', '0', '00', '.', '='];

    let values='';

    const onClick = (e) => {
        if(!e.target.innerText) return;
        const v = e.target.innerText;
        if(values === ""){
            if(v == "/" || v === "*" || v === "-" || v === "+" || v === "="){
                return;
            }
        }

        switch(e.target.innerText)
        {
            case "C":  values = ''; break;
            case "=": values = eval(values); break;
            default: values += e.target.innerText; break;
        }
    };

    

</script>

<div class="container">
    <div class="calculator">
        <form action="" class="calc" name="calc">
            <input type="text" name="txt" class="value" readonly bind:value={values}>
            {#each displays as d}
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
</div>


<style lang="scss">
    $--bg-color: #333;
    $--value-color: #a7af7c;
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: $--bg-color;

        // .calculator
        .calculator{
            position: relative;
            min-width: 300px;
            min-height: 400px;
            padding: 40px 30px 30px;
            border-radius: 20px;
            background: $--bg-color;
            box-shadow: 25px 25px 75px rgba(0,0,0, 0.25),
                10px 10px 70px rgba(0,0,0, 0.25),
                inset -5px -5px 15px rgba(0,0,0, 0.5),
                inset 5px 5px 15px rgba(0,0,0, 0.5);


            // FORM.calc
            .calc{
                position: relative;
                display: grid;

                // INPUT.value
                .value{
                    position: relative;
                    grid-column: span 4;  // 4칸설정
                    height: 100px;
                    width: calc(100% - 20px);
                    left: 10px;
                    border: none;
                    outline: none;
                    background: $--value-color;
                    margin-bottom: 10px;
                    border-radius: 10px;
                    box-shadow: 0 0 0 2px rgba(0,0,0, 0.75);
                    text-align: right;
                    padding: 10px;
                    font-size: 2em;
                }

                // SPAN
                span{
                    position: relative;
                    display: grid;
                    place-items: center;
                    width: 80px;
                    height: 80px;
                    margin: 8px;
                    background: linear-gradient(180deg, #2f2f2f, #3f3f3f);
                    color: #fff;
                    box-shadow: inset -8px 0 8px rgba(0,0,0,0.15),
                        0 -8px 8px rgba(0,0,0, 0.25),
                        0 0 0 2px rgba(0,0,0, 0.75),
                        10px 20px 25px rgba(0,0,0, 0.4);
                    user-select: none;
                    cursor: pointer;
                    font-weight: 400;
                    border-radius: 10px;

                    &.clear {
                        grid-column: span 2;
                        width: 180px;
                        background: #f00;

                        &::before {
                            background: linear-gradient(90deg, #d20000, #ffffff5c);
                            border-top: 1px solid #fff4;
                            border-left: 1px solid #fff4;
                            border-bottom: 1px solid #fff4;
                        }
                    }
                    &.plus {
                        grid-row: span 2;
                        height: 180px;
                    }

                    &.equal {
                        background: #2196f3;

                        &::before {
                            background: linear-gradient(90deg, #1479c9, #ffffff5c);
                            border-top: 1px solid #fff4;
                            border-left: 1px solid #fff4;
                            border-bottom: 1px solid #fff4;
                        }
                    }

                    &::before{
                        content: '';
                        position: absolute;
                        top: 3px;
                        left: 4px;
                        right: 12px;
                        bottom: 14px;
                        background: linear-gradient(90deg, #2e2e2e, #4d4d4d);
                        border-radius: 10px;
                        box-shadow: -5px -5px 15px rgba(0,0,0, 0.1),
                            10px 5px 10px rgba(0,0,0, 0.15);
                        border-top: 1px solid #0009;
                        border-left: 1px solid #0004;
                        border-bottom: 1px solid #0004;
                    }

                    &:active{
                        filter: brightness(1.5);
                    }

                    i{
                        position: relative;
                        font-style: normal;
                        font-size: 1.5em;
                        text-transform: uppercase;

                        
                    }
                }
            }
        }
    }
</style>