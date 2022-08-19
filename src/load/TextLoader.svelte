<script>
    const _loading = ['L','O','A','D','I','N','G','.'];
</script>

<div class="container">
    <div class="loader">
        {#each _loading as char }
            <span>{char}</span>
        {/each}
    </div>
</div>

<style lang="scss">
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;

        .loader{
            position: relative;
            display: flex;

            span:nth-child(1){
                animation-delay: 0s;
            }
            span:nth-child(2){
                animation-delay: 0.2s;
            }
            span:nth-child(3){
                animation-delay: 0.4s;
            }
            span:nth-child(4){
                animation-delay: 0.6s;
            }
            span:nth-child(5){
                animation-delay: 0.8s;
            }
            span:nth-child(6){
                animation-delay: 1s;
            }
            span:nth-child(7){
                animation-delay: 1.2s;
            }
            span:nth-child(8){
                animation-delay: 1.4s;
            }

            span{
                color: #fff;
                margin: 0 15px;
                font-size: 8em;
                font-weight: 700;
                font-family: sans-serif;
                animation: animate 2.4s linear infinite;
            }
        }
    }

    @keyframes animate{
        0%{
            text-shadow: 0 0 10px rgba(0,0,0,0);
            transform: scale(1);
        }
        40%{
            text-shadow: 0 10px 20px rgba(0,0,0,002);
            transform: scale(1.4);
        }
        80%, 100%{
            text-shadow: 0 0 10px rgba(0,0,0,0);
            transform: scale(1);
        }
    }
</style>
