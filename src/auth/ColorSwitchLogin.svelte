<script>
    import { browser } from '$app/env'
    const colors = [
        { clr:'#1dd1a1', active:true },
        { clr:'#ff6b6b', active:false},
        { clr:'#2e86de', active:false},
        { clr:'#f368e0', active:false},
        { clr:'#ff9f43', active:false}
    ];
    let bgColor = '#1dd1a1';
    
    /**
     * 바디색상변경
     * @param color
     */
    function changeColor(color){
        console.log(color, document.body);
        if(browser){

            document.body.style.background = color;
        }
    };
    function removeActive(){
        colors.forEach(e => e.active = false);
        console.log(colors);
    };
    function onClick(e, color){
        console.log(e);
        console.log(color);
        bgColor = color.clr;
        removeActive();
        changeColor(`${color.clr};`);
        const span = colors.find(e => e.clr == color.clr);
        if(span){
            span.active = true;
        }
        colors = colors;
    }
</script>

    <div class="login">
        <h2 id="txt" style="border-color:{bgColor}">Login</h2>
        <div class="inputBox">
            <input type="text" placeholder="UserName">
        </div>
        <div class="inputBox">
            <input type="password" placeholder="Password">
        </div>
        <div class="inputBox">
            <input id="btn" type="submit" value="Login" style="background-color: {bgColor};">
        </div>
        <div class="group">
            <a href={"#"}>Forget Password</a>
            <a href={"#"}>Sign Up</a>
        </div>
    </div>
   <!-- 칼라맵 -->
   <div class="colors">
        {#each colors as color}
            <span 
                style:--clr={color.clr}
                class:active={color.active}
                on:click={(e) => {
                   onClick(e, color);
                }}
            ></span>            
        {/each}
    </div>


<style lang="scss">
    $--width-len: 400px;
    $--color-h2 : #333;
    $--color-green: #1dd1a1;  

    :global(.teal) {
		background-color: teal;
	}

    .login{
        position: relative;
        padding: 50px;
        background-color: #fff;
        width: $--width-len;
        box-shadow: 0 25px 50px rgba(0,0,0, 0.1);
        display: flex;
        flex-direction: column;
        gap: 10px;

        h2{
            padding-left: 10px;
            font-weight: 500;
            line-height: 1em;
            border-left: 15px solid $--color-green;
            transition: 0.5s;
            color: $--color-h2;
        }

        .inputBox{
            position: relative;

            input{
                position: relative;
                width: 100%;
                padding: 10px 15px;
                outline: none;
                border: 2px solid #555;
                font-size: 1em;
                color: $--color-h2;
            }

            #btn{
                border: none;
                font-size: 1.1em;
                font-weight: 500;
                background-color: $--color-green;
                color: #fff;
                cursor: pointer;
                transition: 0.5s;
            }
        }

        .group{
            display: flex;
            justify-content: space-between;
        
            a{
                color: $--color-h2;
            
                &:nth-child(2){
                    font-weight: 500;
                    text-decoration: underline;
                }
            }

            
        }




    }

    //  칼라맵
    .colors{
        position: absolute;
        right: 0;
        padding: 10px;
        background-color: #fff;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        span{
            position: relative;
            width: 20px;
            height: 20px;
            background-color: var(--clr);
            margin: 10px 5px;
            border-radius: 50%;
            cursor: pointer;

            &.active{
                border: 2px solid #333;
                scale: 1.5;
                transition: 0.5s;
            }
        }
    }
</style>