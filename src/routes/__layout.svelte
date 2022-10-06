<script>
    const menus = [
        'Home', 'Blog', 'Contact', 'Services', 'About'
    ];
    let active = false;
    let open = false;
    let hide = false;
</script>


<header class:open={open}>
    <a class="logo" href={"/"}>Logo</a>
    <div class="group">
        <ul class="nav">
            {#each menus as menu}
                <li><a href={""}>{menu}</a></li>
            {/each}
            <li><a href={"/auth/Login"}>{'Login'}</a></li>
        </ul>
        <div class="search">
            <span class="icon">
                <ion-icon 
                    class="searchBtn" 
                    class:active={active} 
                    name="search-outline" 
                    on:click={()=> { 
                        active=true; 
                        hide=true;
                    }}>
                </ion-icon>
                <ion-icon 
                    class="closeBtn" 
                    class:active={active} 
                    name="close-outline"  
                    on:click={()=> {active=false; hide=false;}}>
                </ion-icon>
            </span>
        </div>
        <ion-icon
            class:hide={hide} 
            class="menuToggle" 
            name="menu-outline" 
            on:click={() => {
                open = !open;
                active = false;
            }}>
        </ion-icon>
    </div>
    <div class="searchBox" class:active={active}>
        <input type="text" placeholder="Search ...">
    </div>
</header>
<slot></slot>

<style lang="scss">
    $--bg-color: #fff;
    $--font-color: #333;
    $--top-header: 80px;

    

    header{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: $--top-header;
        background-color: $--bg-color;
        padding: 20px 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 15px 15px rgba(0,0,0, 0.05);
    }

    .logo{
        font-size: 1.5em;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: $--font-color;
    }

    .group{
        display: flex;
        align-items: center;

        // 
        ul{
            position: relative;
            display: flex;
            gap: 30px;

            li a{
                position: relative;
                font-size: 1em;
                color: $--font-color;
                text-transform: uppercase;
                letter-spacing: 0.2em;

                &::before{
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    width: 100%;
                    height: 2px;
                    background-color: $--font-color;
                    transform: scaleX(0);
                    transition: transform 0.5s ease-in-out;
                    transform-origin: right;
                }

                &:hover::before{
                    transform: scaleX(1);
                    transform-origin: left;

                }
            }
        }

        // 
        .search{
            position: relative;
            font-size: 1.5em;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;


            .searchBtn{
                position: relative;
                left: 30px;
                top: 2.5px;
                transition: 0.5s ease-in-out;

                &.active{
                    left: 0;
                }
            }
            .closeBtn{
                opacity: 0;
                visibility: hidden;
                transition: 0.5s;
                scale: 0;

                &.active{
                    opacity: 1;
                    visibility: visible;
                    transition: 0.5s;
                    scale: 1;
                }
            }
        }
        // 토글메뉴
        .menuToggle{
            position: relative;
            display: none;
        }
    }

    // 
    .searchBox{
        position: absolute;
        right: -100%;
        width: 100%;
        height: 100%;
        padding: 0 30px;
        background-color: $--bg-color;
        display: flex;
        align-items: center;
        transition: 0.5s ease-in-out;

        &.active{
            right: 0;
        }

        input{
            border: none;
            outline: none;
            width: 100%;
            height: 50px;
            font-size: 1.25em;
            color: $--font-color;
            background-color: $--bg-color;
            border-bottom: 1px solid rgba(0,0,0, 0.5);
        }

        
    }

    // now, make it responsive
    @media (max-width: 800px){

        .group{

            .search{

                .searchBtn{
                    left: 0;
                }
            }
            .menuToggle{
                position: absolute;
                display: block;
                font-size: 2em;
                cursor: pointer;
                transform: translateX(30px);
                z-index: 10;
            }
        }

        

        header {
            .nav{
                position: absolute;
                opacity: 0;
                visibility: hidden;
                left: 100%;
            }

            &.open{
                .nav{
                    padding: 40px;
                    opacity: 1;
                    visibility: visible;
                    top: $--top-header;
                    left: 0;
                    width: 100%;
                    height: calc(100vh - $--top-header);
                    background-color: $--bg-color;
                    border-top: 1px solid rgba(0,0,0, 0.05);
                    display: flex;
                    flex-direction: column;

                    li a{
                        font-size: 1.25em;
                    }
                }
            }

            .hide{
                display: none;
            }
        }

        
    }

</style>