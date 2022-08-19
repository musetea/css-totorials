<script>
    const menus = [
        {title:'Home', icon:'<ion-icon name="home-outline"></ion-icon>', color:'#f44336', active:true},
        {title:'Profile',icon:'<ion-icon name="person-outline"></ion-icon>', color:'#ffa117',active:false}, 
        {title:'Messages', icon:'<ion-icon name="chatbubble-outline"></ion-icon>', color:'#0fc70f', active:false}, 
        {title:'Photos', icon:'<ion-icon name="camera-outline"></ion-icon>', color:'#2196f3', active:false}, 
        {title:'Settins', icon:'<ion-icon name="settings-outline"></ion-icon>', color:'#b145e9', active:false}
    ];

    function removeAllActive(){
        menus.forEach(m => m.active = false);
    }

    function onMenuClick(menu){
        removeAllActive();
        const f = menus.find(e => e.title === menu.title);
        if(f){
            f.active = !f.active;
            menus = menus;
        }
    }

</script>

<div class="container">
    <nav>
        <ul class="nav">
            {#each menus as menu}
            <li class:active={menu.active} on:click={() => onMenuClick(menu)}>
                <a href="#">
                    <span class="icon">{@html menu.icon}</span>
                    <span class="title">{menu.title}</span>
                </a>
            </li>
            {/each}
        </ul>
    </nav>
</div>


<style lang="scss">
    $--bg-color: #2f363e;
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: $--bg-color;

        .nav{
            position: relative;
            width: 540px;
            height: 120px;
            box-shadow: 25px 25px 75px rgba(0,0,0, 0.25),
                10px 10px 70px rgba(0,0,0, 0.25),
                inset 5px 5px 10px rgba(0,0,0, 0.5),
                inset 5px 5px 20px rgba(255,255,255, 0.2),
                inset -5px -5px 15px rgba(0,0,0, 0.75);
            border-radius: 30px;
            display: flex;
            justify-content: center;
            align-items: center;

            li{
                position: relative;
                list-style: none;
                width: 80px;
                margin: 0 5px;

                &::before{
                    content: '';
                    top: 35px;
                    left: 50%;
                    transform: translateX(-50%);
                    position: absolute;
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background-color: #222;
                    transition: 0.5s;
                }

                &.active{
                    &::before{
                        background-color: #29fd53;
                        box-shadow: 0 0 5px #29fd53,
                            0 0 10px #29fd53,
                            0 0 20px #29fd53,
                            0 0 30px #29fd53,
                            0 0 40px #29fd53, 
                            0 0 50px #29fd53;
                    }

                    a{
                        .icon{
                            background: #29fd53;
                            color: #fff;
                            transform: translateY(-55px);
                            box-shadow: 5px 5px 7px rgba(0,0,0, 0.25),
                                inset 2px 2px 3px rgba(255,255,255, 0.25),
                                inset -3px -3px 5px rgba(0,0,0, 0.5);
                            transition-delay: 0s;

                                &::before{
                                    transform: scale(1);
                                }
                        }

                        // 
                        .title{
                            opacity: 1;
                            transform: translateY(10px);
                            transition-delay: 0.2s;
                        }
                    }
                   
                }
                

                a{
                    text-decoration: none;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;

                    .icon{
                        position: absolute;
                        font-size: 1.75em;
                        width: 80px;
                        height: 80px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: #aaa;
                        border-radius: 50%;
                        transition: 0.5s;
                        transition-delay: 0.2s;

                        &::before{
                            content: '';
                            position: absolute;
                            inset: 10px;
                            background-color: $--bg-color;
                            border-radius: 50%;
                            box-shadow: 5px 5px 5px rgba(0,0,0, 0.5),
                                inset 2px 2px 3px rgba(255,255,255, 0.25),
                                inset -3px -3px 5px rgba(0,0,0, 0.5);
                            transform: scale(0);
                            transition: 0.5s;
                        }
                    }

                    .title{
                        position: absolute;
                        font-size: 0.75em;
                        color: $--bg-color;
                        border-radius: 15px;
                        transform: translateY(20px);
                        padding: 2px 10px;
                        background-color: #fff;
                        box-shadow: 5px 5px 7px rgba(0,0,0, 0.25),
                            inset -3px -3px 5px rgba(0,0,0, 0.5);
                        opacity: 0;
                        transition: 0.5s;
                        transition-delay: 0s;
                    }
                }
            }
        }
    }
</style>