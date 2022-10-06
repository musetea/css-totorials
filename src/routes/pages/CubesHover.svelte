<script>
    const arr_i = [3,2,1];
    const arr_x = [-1,0,1];
</script>


<div class="container">
    <div class="cubes">
        <div class="cube">
            {#each arr_x as x }
            <div style:--x={x} style:--y={0}>
                {#each arr_i as idx }
                    <span style:--i={idx}></span>
                {/each}
            </div>
            {/each}
        </div>
        <!--  -->
        <div class="cube">
            {#each arr_x as x }
            <div style:--x={x} style:--y={0}>
                {#each arr_i as idx }
                    <span style:--i={idx}></span>
                {/each}
            </div>
            {/each}
        </div>
        <!--  -->
        <div class="cube">
            {#each arr_x as x }
            <div style:--x={x} style:--y={0}>
                {#each arr_i as idx }
                    <span style:--i={idx}></span>
                {/each}
            </div>
            {/each}
        </div>
    </div>
</div>


<style lang="scss">
    .container{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height:100vh;
        background-color: #25335b;
        animation: animate 5s linear infinite;
    }
    @keyframes animate{
        0%{
            filter: hue-rotate(0deg);
        }
        100%{
            filter: hue-rotate(360deg);
        }
    }

    .cubes{
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        top: -80px;
        transform: skewY(-20deg);
    }

    .cube{
        z-index: 2;
        position: relative;

        &:nth-child(2){
            z-index: 1;
            translate: -60px -60px;
        }
        &:nth-child(3){
            z-index: 3;
            translate: 60px 60px;
        }
    }

    .cube div{
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 30px;
        translate: calc(-70px * var(--x)) calc(-60px * var(--y));

        span{
            position: relative;
            display: inline-block;
            width: 50px;
            height: 50px;
            background-color: #dcdcdc;
            z-index: calc(1 * var(--i));
            transition: 1.5s;

            &:hover{
                transition: 0s;
                background-color: #ef4149;
                filter: drop-shadow(0 0 30px #ef4149);

                &::before{
                    transition: 0s;
                    background-color: #f75d64;
                }

                &::after{
                    transition: 0s;
                    background-color: #f14e55;
                }
            }

            &::before{
                content: '';
                position: absolute;
                left: -40px;
                width: 40px;
                height: 100%;
                background-color: #fff;
                transform-origin: right;
                transform: skewY(45deg);
                transition: 1.5s;
            }

            &::after{
                content: '';
                position: absolute;
                top: -40px;
                left: 0;
                width: 100%;
                height: 40px;
                background-color: #f2f2f2;
                transform-origin: bottom;
                transform: skewX(45deg);
            }
        }
    }
</style>