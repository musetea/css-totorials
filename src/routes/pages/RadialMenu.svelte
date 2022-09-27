<script>
    const menus = [
        {i:0, clr:'#ff2972', icon:"home-outline"},
        {i:1, clr:'#fee800', icon:"person-outline"},
        {i:2, clr:'#04fc43', icon:"settings-outline"},
        {i:3, clr:'#fe00f1', icon:"mail-outline"},
        {i:4, clr:'#00b0fe', icon:"key-outline"},
        {i:5, clr:'#fea600', icon:"videocam-outline"},
        {i:6, clr:'#a529ff', icon:"camera-outline"},
        {i:7, clr:'#01bdab', icon:"game-controller-outline"},
    ];
    let active =false;
</script>

<div class="container">
    <ul class="menu" 
        class:active 
        style="--len:{menus.length}"
        >
        <div class="toggle"
            on:click={() => {
                active = !active;
            }}
            >
            <ion-icon name="add-outline"></ion-icon>
        </div>
        {#each menus as menu}
            <li style={`--i:${menu.i}; --clr:${menu.clr};`}>
                <a href={"#"}><ion-icon name={menu.icon}></ion-icon></a>
            </li>
        {/each}
    </ul>
</div>

<style lang="scss">
    $--bg-color: #2f363e;
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background-color: $--bg-color;
    }

    .menu {
        position: relative;
        width: 280px;
        height: 280px;
        display: flex;
        justify-content: center;
        align-items: center;

        &.active{
        
            .toggle{
                transform: rotate(315deg);
            }

            li{
                transform: rotate(calc(360deg / 8 * var(--i))) translateX(0px);
            }
        }

        .toggle{
            position: absolute;
            width: 60px;
            height: 60px;
            background-color: $--bg-color;
            border: 2px solid #fff;
            border-radius: 50%;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            z-index: 100;
            transition: transform 1.25s;
            font-size: 2em;
        }

        li{
            position: absolute;
            left: 0;
            transition: 0.5s;
            transition-delay: calc(0.1s * var(--i));
            transform-origin: 140px;
            transform: rotate(0deg) translateX(110px);

            a{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 60px;
                height: 60px;
                color: var(--clr);
                border: 2px solid var(--clr);
                border-radius: 50%;
                font-size: 1.5em;
                transform: rotate(calc(360deg / -8 * var(--i)));
                transition: 1s;

                &:hover{
                    transition: 0s;
                    background: var(--clr);
                    color: #333;
                    box-shadow: 0 0 10px var(--clr),
                        0 0 30px var(--clr),
                        0 0 50px var(--clr);
                }
            }
        }
    }
</style>