<script>
    import Link from '$comp/Link.svelte';
    
    const menus = [
        {title:'Home', icon:'<ion-icon name="home-outline"></ion-icon>', color:'#f44336', active:false},
        {title:'About',icon:'<ion-icon name="person-outline"></ion-icon>', color:'#ffa117',active:false}, 
        {title:'Messages', icon:'<ion-icon name="chatbubble-outline"></ion-icon>', color:'#0fc70f', active:false}, 
        {title:'Photos', icon:'<ion-icon name="camera-outline"></ion-icon>', color:'#2196f3', active:false}, 
        {title:'Settins', icon:'<ion-icon name="settings-outline"></ion-icon>', color:'#b145e9', active:false}
    ];

    
    

    let _open= ''
    function onToggleClick(e){
        _open = !_open;
    };

    function removeAllLinkActive(){
        menus.forEach(e => e.active = false);
    }

    function onMenuClick(e){
        // console.log(e.detail)
        const find = menus.find((ele) => {
            return ele.title == e.detail.title;
        });
        if(find){
            removeAllLinkActive();
            find.active = true;
            // console.log(find);
            menus = menus;
        }
    }
</script>

<!-- 
    
 -->
<div class="container">
    <nav class="navigation" class:open={_open} 
        >
        <div class="toggle" on:click={onToggleClick}></div>
        <ul>
            {#each menus as menu}
                <Link title={menu.title} icon={menu.icon} color={menu.color} 
                    active={menu.active} open={_open} 
                    on:click={onMenuClick}
                />
            {/each}
        </ul>
    </nav>
</div>


<style lang="scss">
    $--bg-color: #3d4152;
    $--bar-color: #333;
    $--WIDTH: 75px;
    $--HEIGHT: 60px;

    .container{
        min-height: 100vh;
        background-color: $--bg-color;

        .navigation{
            position: fixed;
            inset: 20px 0 20px 20px;
            width: $--WIDTH;
            background-color: #fff;
            transition: 0.5s;
            display: flex;
            justify-content: center;
            align-items: center;

            &.open{
                width: 250px;

                .toggle::before{
                    transform: translateY(0px) rotate(45deg);
                }
                .toggle::after{
                    transform: translateY(0px) rotate(-45deg);
                    box-shadow: 0 0 0 $--bar-color;
                }
            }

            .toggle{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: $--HEIGHT;
                border-bottom: 1px solid rgba(0,0,0, 0.25);
                cursor: pointer;
                display: flex;
                align-items: center;
                padding: 0 23px;

                &::before{
                    content: '';
                    position: absolute;
                    width: 30px;
                    height: 2px;
                    background-color: $--bar-color;
                    transform: translateY(-8px);
                    transition: 0.5s;
                }
                &::after{
                    content: '';
                    position: absolute;
                    width: 30px;
                    height: 2px;
                    background-color: $--bar-color;
                    transform: translateY(8px);
                    transition: 0.5s;
                    box-shadow: 0 -8px 0 $--bar-color;
                }
            }

            ul{
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
        }
    }
</style>