<script>
    let active =false;
    const menus = ['Home', 'About', 'Services', 'Work', 'Team', 'Contact'];

    const toggle = () => active = !active;
</script>

<div class="container">
    <nav class="navigation" class:active={active}>
        <div class="toggle" class:active={active} on:click={toggle}>
            <span></span>
        </div>
        <ul>
            {#each menus as menu, i}
                <li style:--i={i}>
                    <a href={"#"}>{menu}</a>
                </li>
            {/each}
        </ul>
    </nav>
</div>

<style lang="scss">
    $--bg1-color: #ff216d;
    $--bg2-color: #2196f3;

    .container{
        min-height: 100vh;
        background: linear-gradient(45deg, $--bg1-color, $--bg2-color);
    }
    .navigation{
        position: fixed;
        top: 20px;
        right: 20px;
        height: 20px;
        width: 250px;
        z-index: 10;

        &.active{
            ul li{
                visibility: visible;
                opacity: 1;
                transform: translateX(0px);
            }
        }

        .toggle{
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            height: 50px;
            padding: 5px 20px;
            color: $--bg1-color;
            background: #fff;
            cursor: pointer;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            
            
            &::before{
                content: 'Menu';
                margin-right: 10px;
            }
            &.active{
                span{
                    &::before{
                        transform: rotate(225deg);
                        top:24px
                    }
                    &::after{
                        transform: rotate(135deg);
                        bottom: 24px;
                    }
                }
            }

            &.active::before{
                content: 'Close';

            
            }

            span{
                position: relative;
                width: 20px;
                height: 50px;

                &::before{
                    content: '';
                    position: absolute;
                    top: 20px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: $--bg1-color;
                    transition: 0.5s;
                }
                &::after{
                    content: '';
                    position: absolute;
                    bottom: 20px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: $--bg1-color;
                    transition: 0.5s;
                }
            }
        }

        ul{
            position: relative;
            display: flex;
            flex-direction: column;

            li{
                position: relative;
                transition: 0.5s;
                visibility: hidden;
                opacity: 0;
                transform: translateX(-250px);
                transition-delay: calc(0.1s * var(--i));

                a{
                    position: relative;
                    display: block;
                    // height: 50px;
                    padding: 10px 20px;
                    background: #fff;
                    color: #333;
                    transition: 0.5s;

                    &:hover{
                        background-color: #f6f6f6;
                        color: $--bg1-color;
                        transition: 0s;
                    }
                }
            }
        }
    }
</style>