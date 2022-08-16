<script>
    import { onMount, tick} from 'svelte';

    const TIMES = [1,2,3,4,5,6,7,8,9,10,11,12];
    const COLORS = ['#04FC43', '#fee800', '#ff2972'];
    let cirHour;
    let cirMin;
    let cirSec;

    let hour = 0;
    let minute = 0;
    let second = 0;
    let ap = 'AP'



    

    onMount(()=>{
        console.log(cirHour);
        console.log(cirMin);
        console.log(cirSec);

        setInterval(async () => {
            await initCircle();
            initTime();
        }, 1000);

    })

    async function initCircle(){
        const day = new Date();
        let h = day.getHours() * 30;
        let m = day.getMinutes() * 6;
        let s = day.getSeconds() * 6;
        
        if(cirHour) {
            cirHour.style.transform = `rotateZ(${h + (m/12)}deg)`
        }
        if(cirMin) {
            cirMin.style.transform = `rotateZ(${m}deg)`
        }    
        if(cirSec){
            cirSec.style.transform = `rotateZ(${s}deg)`
        } 

    };

    const initTime = async()=>{
        const day = new Date();
        let h = day.getHours();
        ap = getAmPm(h);
        
        if( h > 12){
            h = h -12;
        }
        
        hour = checkZeroTime(h);

        let m = day.getMinutes();
        minute = checkZeroTime(m);

        let s = day.getSeconds();
        second = checkZeroTime(s);
    }

    const checkZeroTime = (num) =>{
        return  (num < 10) ? "0" + num : num;
    }
    const getAmPm = (h) => {
        return h >= 12 ? "PM" : "AM";
    }

</script>


<div class="container">
    <!-- 아날로그 -->
    <div class="clock">
        <!-- CIRCLE -->
        <div class="circle" style={`--clr:${COLORS[0]}`} 
            bind:this={cirSec} >
            <i></i>
        </div>
        <div class="circle" style={`--clr:${COLORS[1]}`} 
            bind:this={cirMin} >
            <i></i>
        </div>
        <div class="circle" style={`--clr:${COLORS[2]}`} 
            bind:this={cirHour} >
            <i></i>
        </div>

        <!-- 시간 -->
        {#each TIMES as t (t)}
            <span style={`--i:${t};`}>
                <b>{t}</b>
            </span>
        {/each}
    </div>
    <!-- 디지탈 -->
    <div class="time">
        <div class="hour" style={`--clr:${COLORS[2]}`}>{hour}</div>
        <div class="min" style={`--clr:${COLORS[1]}`}>{minute}</div>
        <div class="sec" style={`--clr:${COLORS[0]}`}>{second}</div>
        <div class="ap">{ap}</div>
    </div>
</div>


<style lang="scss">
    $--bg-color: #2f363e;

    .container{
        position: relative;
        background: $--bg-color;
        // min-height: 500px;
        border-radius: 20px;
        border-top-left-radius: 225px;  // 450 / 2
        border-top-right-radius: 225px; // 450 / 2
        box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.75), 
                10px 50px 70px rgba(0, 0, 0, 0.25), 
                inset 5px 5px 10px rgba(0, 0, 0, 0.5),
                inset 5px 5px 20px rgba(255,255,255, 0.2), 
                inset -5px -5px 15px rgba(0, 0, 0, 0.75);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        // 
        .clock  {
            position: relative;
            width: 450px;
            height: 450px;
            margin-bottom: 30px;
            border-radius: 50%;
            background: $--bg-color;
            box-shadow: 10px 50px 70px rgba(0, 0, 0, 0.25), 
                inset 5px 5px 10px rgba(0, 0, 0, 0.5),
                inset 5px 5px 20px rgba(255,255,255, 0.2), 
                inset -5px -5px 15px rgba(0, 0, 0, 0.75);
                display: flex;
                justify-content: center;
                align-items: center;

            // click pointer
            &::before{
                content: '';
                position: absolute;
                width: 8px;
                height: 8px;
                background: $--bg-color;
                border: 3px solid #fff;
                border-radius: 50%;
                z-index: 100;
            }

            // Click Times
            span{
                position: absolute;
                inset: 20px;
                color: #fff;
                text-align: center;
                // 360/ 12 = 30deg
                transform: rotate(calc(30deg * var(--i)));

                b{
                    font-size: 2em;
                    opacity: 0.25;
                    font-weight: 600;
                    display: inline-block;
                    transform: rotate(calc(-30deg * var(--i)));
                }
            }

            // CIRCLE
            .circle{
                position: absolute;
                width: 300px;
                height: 300px;
                border: 2px solid rgba(0,0,0, 0.25);
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: flex-start;
                z-index: 10;

                // before
                &::before{
                    content: '';
                    position: absolute;
                    top: -8.5px;
                    width: 15px;
                    height: 15px;
                    border-radius: 50%;
                    background: var(--clr);
                    box-shadow: 0 0 20px var(--clr),
                        0 0 60px var(--clr);
                }

                i{
                    position: absolute;
                    width: 2px;
                    height: 50%;
                    background: var(--clr);
                    opacity: 0.75;
                    transform-origin: bottom;
                    transform: scaleY(0.5);
                }
            }
            .circle:nth-child(2){
                width: 240px;
                height: 240px;
                z-index: 9;
                i{
                    width: 4px;
                }
            }
            .circle:nth-child(3){
                width: 180px;
                height: 180px;
                z-index: 8;
                i{
                    width: 6px;
                }
            }
        }

        // 시계
        .time{
            margin-bottom: 40px;
            padding: 10px 20px;
            font-size: 2em;
            font-weight: 600;
            border: 2px solid rgba(0,0,0, 0.5);
            border-radius: 40px;
            display: flex;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5),
                inset 5px 5px 20px rgba(255,255,255,0.2),
                inset -5px -5px 15px rgba(0, 0, 0, 0.75);


            div{
                position: relative;
                width: 60px;
                text-align: center;
                font-weight: 500;
                color: var(--clr);
            }

            div:nth-child(1)::after,
            div:nth-child(2)::after{
                content: ':';
                position: absolute;
                right: -4px;
            }

            div:nth-child(2)::after{
                animation: animate 1s steps(1) infinite;
            }

            div:last-child{
                font-size: 0.5em;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
            }
        }

        @keyframes animate {
            0%{
                opacity: 1;
            }
            50%{
                opacity: 0;
            }
        }
    }

</style>
