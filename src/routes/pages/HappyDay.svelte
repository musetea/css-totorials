<script>
    import {onMount} from 'svelte'
    let eleContainer;
    const RANGE = 100;
    

    const circle = async() => {
        const amout = 100;
        let i = 0; 
        while(i < amout){
            if(eleContainer){
                let ele = document.createElement('i')
                eleContainer.appendChild(ele);
                //console.log(ele);

                let posX = Math.floor(Math.random() * eleContainer.innerWidth);
                ele.style.left = posX + 'px';

                let size = parseInt(Math.random() * 250);
                ele.style.width = `${(10 + size)}px`;
                ele.style.height = `${10 + size}px`;
                
               
            } 
            i++;
        }
    };
    const getStyle = (i) => {
        let size = parseInt(Math.random() * 250);
        let posX = Math.floor(Math.random() * eleContainer.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 10;
        let style =  `width:${(10 + size)}px;` + 
            `height:${10 + size}px;`  + 
            `left:${posX}px` + 
            `animationDelay:${delay}s` + 
            `animationDuration:${5 + duration}s` + 
            `webkitBoxShadow:0 30px 50px #0002`;
        return style;
    }

    $: innerWidth = 0;
    
    onMount(()=>{
       
    });


</script>
<svelte:window bind:innerWidth/>

<div class="container" bind:this={eleContainer}>
    <h2>
        Happy <br>
        Independence <br>
        Day
    </h2>
    {#each Array.from(Array(100+1).keys()).slice(1) as i }
        <i style={getStyle(i)}></i>                    
    {/each}
</div>

<style lang="scss">
    .container{
        position: relative;
        height: 100vh;
        overflow: hidden;
        background: #fff;

        h2{
            position: absolute;
            top: 50%;
            width: 100%;
            transform: translateY(-50%);
            font-size: 12vw;
            line-height: 1em;
            font-weight: 800;
            text-align: center;
            color: #333;
            text-transform: uppercase;

            
        }

        i{
            position: absolute;
            display: block;
            background: #000;
            border-radius: 50%;
            animation: animate 5s linear infinite;
        }
        i:nth-child(5n+1){
            background: #fff;
        }
        i:nth-child(5n+2){
            background: #ffb03c;
        }
        i:nth-child(5n+3){
            background: #fff;
            border: #ff9933;
        }
        i:nth-child(5n+4){
            background: #2bd11b;
            border: #ff9933;
        }
        i:nth-child(5n+5){
            background: #fff;
            border: #2bd11b;
        }
    }

    @keyframes animate {
        0%{
            transform: translateY(calc(100vh + 350px));
        }
        100%{
            transform: translateY(-300px);
        }
    }
</style>