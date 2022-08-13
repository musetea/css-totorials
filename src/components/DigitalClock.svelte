<script>
    import { onMount } from 'svelte';
    const MAX_CIRCLE = 440;
    let hour="00";
    let minute = "00";
    let second  ="00";
    let ap= "AM";

    let eleHour;
    let eleMinute;
    let eleSecond;
    let eleAp;

    let circleColors = ["#ff2972","#fee800","#04fc43"];

    let eleHourDot;
    let eleMinuteDot;
    let eleSecondDot;
    

    onMount(()=> {
        

        setInterval(() => {
            // 시간
            let h = new Date().getHours();
            if(h > 12){
                h -= 12;
            }
            hour = checkZeroTime(h);
            eleHour.style.strokeDashoffset = MAX_CIRCLE - (MAX_CIRCLE * h ) / 12;
            eleHourDot.style.transform = `rotate(${h * 30}deg)`;  // 360/12=30

            let  m = new Date().getMinutes();
            minute = checkZeroTime(m);
            eleMinute.style.strokeDashoffset = MAX_CIRCLE - (MAX_CIRCLE * m ) / 60;
            eleMinuteDot.style.transform = `rotate(${m * 6}deg)`;  // 360/60=6

            let s = new Date().getSeconds();
            second = checkZeroTime(s);
            eleSecond.style.strokeDashoffset = MAX_CIRCLE - (MAX_CIRCLE * s) / 60;
            eleSecondDot.style.transform = `rotate(${s * 6}deg)`;  // 360/60=6

            ap = hour >= 12 ? "PM" : "AM";
            
        }, (1000));
    })

    const checkZeroTime = (num) =>{
        return  (num < 10) ? "0" + num : num;
    }
</script>

<div class="container">
    <div id="time">
        <div class="circle" style={`--clr:${circleColors[0]}`}>
            <div class="dots hour" bind:this={eleHourDot}></div>
            <svg>
                <circle cx=70 cy=70 r=70></circle>
                <circle bind:this={eleHour} cx=70 cy=70 r=70></circle>
            </svg>
            <div id="hour">
                {hour}
                <br>
                <span>Hours</span>
            </div>
        </div>
        <div class="circle" style={`--clr:${circleColors[1]}`}>
            <div class="dots minute" bind:this={eleMinuteDot}></div>
            <svg>
                <circle cx=70 cy=70 r=70></circle>
                <circle bind:this={eleMinute} cx=70 cy=70 r=70></circle>
            </svg>
            <div id="minute">
                {minute}
                <br>
                <span>Minutes</span>
            </div>
        </div>
        <div class="circle" style={`--clr:${circleColors[2]}`}>
            <div class="dots second" bind:this={eleSecondDot}></div>
            <svg>
                <circle cx=70 cy=70 r=70></circle>
                <circle bind:this={eleSecond} cx=70 cy=70 r=70></circle>
            </svg>
            <div id="second" >
                {second}
                <br>
                <span>Seconds</span>
            </div>
        </div>
        <div class="ap">
            <div id="ampm" bind:this={eleAp}>{ap}</div>
        </div>
    </div>
</div>


<style lang="scss">
    $--bg-color: #2f363e;
    $--stroke-color:#191919;
    $--circle-color: #f00;
    $--red-color:#ff2972;
    $--MAX-CIRCLE: 440;

    .container {
        margin: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: $--bg-color;

        #time {
            display: flex;
            gap: 40px;
            color: #fff;
            padding: 1rem 1rem;

            .circle{
                position: relative;
                width: 150px;
                height: 150px;
                display: flex;
                justify-content: center;
                align-items: center;

                .dots{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    z-index: 10;
                    display: flex;
                    justify-content: center;

                    &::before {
                        content: "";
                        position: absolute;
                        top: -3px;
                        width: 15px;
                        height: 15px;
                        background: var(--clr);
                        border-radius: 50%;
                        box-shadow: 0 0 20px var(--clr), 0 0 60px var(--clr);
                    }
                }

                svg{
                    position: relative;
                    width: 150px;
                    height: 150px;
                    transform: rotate(270deg);

                    circle{
                        width: 100%;
                        height: 100%;
                        fill: transparent;
                        stroke: $--stroke-color;
                        stroke-width: 4px;
                        transform: translate(5px, 5px);
                    }

                    circle:nth-child(2){
                        stroke: var(--clr);
                        stroke-dasharray: $--MAX-CIRCLE;
                    }
                }
            }

            div{
                position: absolute;
                text-align: center;
                font-size: 1.5em;
                font-weight: 500;

                span{
                    position: absolute;
                    transform: translateX(-50%);
                    font-size: 0.35em;
                    font-weight: 300;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                }
            }

            .ap{
                position: relative;
                font-size: 1em;
                transform: translate(-20px);
            }
        }
    }
</style>