<script>
    import Ring from '$comp/Ring.svelte';
</script>

<div class="container">
    <div class="loadding">
        <div class="ring"></div>
        <div class="ring"></div>
        <div class="ring"></div>
        <p>Loadding...</p>
    </div>
    <!-- <Ring />
    <Ring />
    <Ring /> -->
</div>

<style lang="scss">
    .container {
       
        
        min-height: 100vh;
        background-color: #111; 
        display:  flex;
        justify-content: center;
        align-items: center;
        
        .loadding{
            position: relative;
            width: 100%;
            display:  flex;
            justify-content: center;
            align-items: center;

            .ring:nth-child(2){
                border-top: 4px solid transparent;
                border-left: 4px solid #93ff2d;
                animation: animate2 4s linear infinite;
                animation-delay: -1s;

                &::before{
                    content: '';
                    position: absolute;
                    top: initial;
                    bottom: 12px;
                    left: 12px;
                    width: 15px;
                    height: 15px;
                    border-radius: 50%;
                    background: #93ff2d;
                    box-shadow: 0 0 0 5px #93ff2d33, 
                        0 0 0 10px #93ff2d22,
                        0 0 0 20px #93ff2d11, 
                        0 0 20px #93ff2d, 
                        0 0 50px #93ff2d;
                }
            }
            
            .ring:nth-child(3){
                animation: animate2 4s linear infinite;
                animation-delay: -3s;
                position: absolute;
                top: -66.66px;
                border-top: 4px solid transparent;
                border-left: 4px solid #e41cf8;

                &::before {
                    content: '';
                    position: absolute;
                    top: initial;
                    bottom: 12px;
                    left: 12px;
                    width: 15px;
                    height: 15px;
                    border-radius: 50%;
                    background: #e41cf8;
                    box-shadow: 0 0 0 5px #e41cf833, 
                        0 0 0 10px #e41cf822,
                        0 0 0 20px #e41cf811, 
                        0 0 20px #e41cf8, 
                        0 0 50px #e41cf8;
                }
            } 
            
            .ring{
                position: relative;
                width: 150px;
                height: 150px;
                margin: -30px;
                // border: 4px solid #fff;
                border: 4px solid transparent;
                border-radius: 50%;
                border-top: 4px solid #24ecff;
                animation: animate 4s linear infinite;

                &::before {
                    content: '';
                    position: absolute;
                    top: 12px;
                    right: 12px;
                    width: 15px;
                    height: 15px;
                    border-radius: 50%;
                    background: #24ecff;
                    box-shadow: 0 0 0 5px #24ecff33, 
                        0 0 0 10px #24ecff22,
                        0 0 0 20px #24ecff11, 
                        0 0 20px #24ecff, 
                        0 0 50px #24ecff;
                }
            }

            p{
                position: absolute;
                color: #fff;
                font-size: 1.5em;
                font-family: consolas;
                bottom:  -80px;
                letter-spacing: 0.15em;
            }
            
        }
        @keyframes animate {
            0%{
                transform: rotate(0deg);
            }
            100%{
                transform: rotate(360deg);
            }
        }
        @keyframes animate2 {
            0%{
                transform: rotate(360deg);
            }
            100%{
                transform: rotate(0deg);
            }
        }
    }
</style>