<script>
    import { onMount} from 'svelte';
    const Tools = ['Rectangle', 'Circle', 'Triangle'];
    const ToolImg = ["/icons/rectangle.svg", "/icons/circle.svg", "/icons/triangle.svg"];
    const ToolBrash = ['Brush', 'Eraser'];
    const ToolBrashImg = ["/icons/brush.svg", "/icons/eraser.svg"];
    const Colors = ['#fff', '#000', '#e02020', '#6dd400'];

    const selectedColor = '#000'; 
    const selectedTool = 'Brush';
    let isDrawing = false;
    let brushWidth = 5;

    // const canvas = document.getElementById('canvas');
    // const ctx = canvas.getContext('2d');
    let canvas, ctx;

    const startDrawing = (e) => {
        isDrawing = true;
        ctx.beginPath();
        ctx.lineWidth = brushWidth;
    };
    
    const drawing = (e) => {
        if(!isDrawing) return;
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    };
    const stopDrawing = (e) => {
        isDrawing = false;
    };

    const onLoad = () =>{

    };
    

    onMount(()=>{
        console.log(canvas);
        ctx = canvas.getContext('2d');
        console.log(ctx);

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', drawing);
        canvas.addEventListener('mouseup', stopDrawing);
    })


</script>
<svlelte:window on:load={onLoad} />
<div class="container-out">

    <div class="container">
        <section class="tools">
            <div class="row">
                <label for="" class="title">Shapes</label>
                <ul class="options">
                    {#each Tools as tool, i }
                        <li class="option">
                            <img src={ToolImg[i]} alt="">
                            <span>{tool}</span>
                        </li>
                    {/each}
                    <li class="option">
                        <input type="checkbox" id="fill-color">
                        <label for="fill-color">Fill Color</label>
                    </li>
                </ul>
            </div>
            <!--  -->
            <div class="row">
                <label for="" class="title">Options</label>
                <ul class="options">
                    {#each ToolBrash as tool, i }
                        <li class="option" class:active={tool === selectedTool}>
                            <img src={ToolBrashImg[i]} alt="">
                            <span>{tool}</span>
                        </li>
                    {/each}
                    <li class="option">
                        <input type="range" id="size-slider">
                    </li>
                </ul>
            </div>
            <!-- Colors -->
            <div class="row" class:colors={true}>
                <label for="" class="title">Colors</label>
                <ul class="options" >
                    {#each Colors as color}
                        <li class="option" 
                            class:selected={selectedColor === color}
                            style={`--clr:${color}`}>
                        </li>
                    {/each}
                    <li class="option"
                        class:selected={selectedColor === '#4a98f7'}
                        style={`--clr:${'#4a98f7'}`}
                        >
                        <input type="color" value="#4a98f7" id="color-picker">
                    </li>
                </ul>
            </div>
            <!--  -->
            <div class="row" class:buttons={true}>
                <button class="clear-canvas">Clear Canvas</button>
                <button class="save-img">Save As Image</button>
            </div>
    
        </section>
        <section class="drawing">
            <!-- <canvas bind:this={canvas}></canvas> -->
            <canvas id="canvas" bind:this={canvas}></canvas>
        </section>
    </div>
</div>



<!-- 스타일 -->
<style lang="scss">
    $--container-width: 1050px;
    $--bg-color: #4a98f7;
    $--write-color:#fff;
    $--gray-color: #5a6168;
    $--button-color: #6c757d;

    .container-out{
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background-color: $--bg-color;
    }

    .container{
        display: flex;
        width: 100%;
        padding: 10px;
        gap: 10px;
        max-width: $--container-width;
    }

    section{
        background-color: $--write-color;
        border-radius: 7px;
    }

    // 툴박스
    .tools{
        width: 210px;
        padding: 15px 22px 0;

        .row{
            margin-bottom: 20px;

            .options{
                list-style: none;
                margin: 10px 0 0 5px;

                .option{
                    display: flex;
                    align-items: center;
                    margin-bottom: 10px;
                }
                .option:is(:hover, .active) img{
                    filter: invert(17%) sepia(90%) saturate(3000%) hue-rotate(900deg) brightness(100%) contrast(100%);
                }

                // 
                .option :where(span, label){
                    color: $--gray-color;
                    padding-left: 10px;
                    cursor: pointer;
                }
                .option:is(:hover, .active) :where(span, label){
                    color: $--bg-color;
                }

                // FILL COLOR
                #fill-color{
                    height: 14px;
                    width: 14px;
                }
                #fill-color:checked ~ label{
                    color: $--bg-color;
                }

                #size-slider{
                    width: 100%;
                    height: 5px;
                    margin-top: 10px;
                }


            }

        }

        .colors{
            .options{
                display: flex;
                justify-content: space-between;
            }

            .option{
                position: relative;
                margin-top: 3px;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: var(--clr);

                &.selected::before{
                    position: absolute;
                    content: '';
                    width: 12px;
                    height: 12px;
                    background: inherit;
                    border-radius: inherit;
                    border: 2px solid $--write-color;
                    // 가운데정렬
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
            .option:nth-child(1){
                border: 1px solid #bfbfbf;
            }
            .option:first-child:hover::before{
                border-color: #ccc;
            }

            #color-picker{
                opacity: 0;
                cursor: pointer;
            }
        }

        .buttons{
            button{
                width: 100%;
                font-size: 0.9rem;
                color: $--write-color;
                border: none;
                outline: none;
                padding: 11px 0;
                margin-bottom: 13px;
                background: none;
                border-radius: 5px;
            }

            .clear-canvas{
                color: $--button-color;
                border: 1px solid $--button-color;
                transition: all .3s ease;
                &:hover{
                    color: $--write-color;
                    background-color: $--button-color;
                }
            }
            .save-img{
                color: $--bg-color;
                border: 1px solid $--bg-color;
                transition: all .3s ease;
                &:hover{
                    color: $--write-color;
                    background-color: $--bg-color;
                }
            }
        }

    }

    // 
    .drawing {
        flex: 1;

        canvas{
            width: 100%;
            height: 100%;
        }
    }

</style>