<script>
</script>

<label for="checkbox">
    <input type="checkbox" name="" id="checkbox">
    <div class="icon">
        <div class="shadow"></div>
        <div class="iconBox">
            <ion-icon name="power-outline"></ion-icon>
        </div>
    </div>
</label>



<style lang="scss">
    label{
        position: relative;
        width: 120px;
        height: 60px;
        // background: #777;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &::before{
            content: '';
            position: absolute;
            width: 60%;
            height: 4px;
            background: #444;
            border-radius: 4px;
        }

        input{
            position: absolute;
            appearance: none;

            &:checked ~ .icon {
                left: 60px;

                .iconBox {
                    ion-icon{
                        color: #00ffe2;
                        filter: drop-shadow(0 0 4px #00ffe2) 
                            drop-shadow(0 0 15px #00ffe2);
                    }
                }
            }

        }

        .icon{
            position: absolute;
            left: 0;
            width: 60px;
            height: 100%;
            // background: #f00;
            transition: 0.5s;

            &::before{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 10px;
                height: 100%;
                background: linear-gradient(#fff, #fff, #e3e3e3);
                filter: blur(1px);
                z-index: 1;
            }
            &::after{
                content: '';
                position: absolute;
                top: 0;
                right: -1px;
                width: 10px;
                height: 100%;
                background: #9d9d9d;
                filter: blur(1px);
            }

            .shadow{
                position: absolute;
                top: 30px;
                left: -12px;
                width: 84.85px;
                height: 240px;
                background: linear-gradient(180deg, rgba(0,0,0,0.1), 
                    transparent,transparent);
                transform-origin: top;
                transform: rotate(315deg);
                pointer-events: none;
            }

            .iconBox{
                position: relative;
                width: 100%;
                height: 100%;
                background: linear-gradient(#dbdae1, #a3aaba);
                box-shadow: 5px 5px 5px rgba(0,0,0,0.1),
                    15px 15px 15px rgba(0,0,0,0.1),
                    20px 20px 15px rgba(0,0,0,0.1),
                    30px 30px 15px rgba(0,0,0,0.1),
                    inset 1px 1px 2px #fff;

                display: flex;
                justify-content: center;
                align-items: center;

                ion-icon{
                    color: #555;
                    font-size: 1.5em;
                    --ionicon-stroke-width: 48px;
                    transition: 0.5s;
                    z-index: 10;
                }
            }

            
        }
    }
</style>