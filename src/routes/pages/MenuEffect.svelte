<script>

</script>

<div class="container">
    <ul>
        <li style={"--i:6"}><a href="#">Home</a></li>
        <li style={"--i:5"}><a href="#">About</a></li>
        <li style={"--i:4"}><a href="#">About</a></li>
        <li style={"--i:3"}><a href="#">Services</a></li>
        <li style={"--i:2"}><a href="#">Our Team</a></li>
        <li style={"--i:1"}><a href="#">Content</a></li>
    </ul>
</div>


<style lang="scss">
    $--li-color: #3e3f46;
    $--a-color: #999;

    .container{
        font-family: 'Oswald', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: #434750;

        ul{
            position: relative;
            transform: skewY(-15deg);
            

            li{
                position: relative;
                list-style: none;
                width: 200px;
                background: $--li-color;
                padding: 15px;
                z-index: var(--i);
                transition: 0.5s;

                &:hover{
                    background: #33a3ee;
                    transform: translateX(-50px);
                    
                    &::before{
                        background: #1f5378;
                    }

                    &::after{
                        background: #2982b9;
                    }
                    
                    a{
                        color: #fff;
                    }
                }

                &::before{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -40px;
                    width: 40px;
                    height: 100%;
                    background: #2e3133;
                    transform-origin: right;
                    transform: skewY(45deg);
                    transition: 0.5s;
                }
                &::after{
                    content: '';
                    position: absolute;
                    top: -40px;
                    left: 0;
                    width: 100%;
                    height: 40px;
                    background: #35383e;
                    transform-origin: bottom;
                    transform: skewX(45deg);
                }

                &:last-child::after{
                    box-shadow: -120px 120px 20px rgba(0,0,0,0.5);
                }


                a{
                    text-decoration: none;
                    color: $--a-color;
                    display: block;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    transition: 0.5s;
                }
            }
        }

    }
</style>