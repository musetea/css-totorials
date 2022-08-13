<script>
    export let title="";
    
</script>

<div class="inputBox">
    <input type="text" required="required">
    <span>{title}</span>
</div>

<style lang="scss">
    .inputBox{
        position: relative;
        width: 250px;

        &:nth-child(2) input:valid ~ span,
        &:nth-child(2) input:focus ~ span {
            background: #00dfc4;
            color: #1d2b3a;
            border-radius: 2px;
        }

        input{
            width: 100%;
            padding: 10px;
            border: 1px solid rgba(255,255,255, 0.25);
            border-radius: 5px;
            background: #1d2b3a;
            color: #fff;
            outline: none;
            font-size: 1rem;
            transition: 0.5s;

            &:valid,
            &:focus {
                border: 1px solid #00dfc4;
            }
            
            &:valid ~ span,
            &:focus ~ span{
                color: #00dfc4;
                transform: translateX(10px) translateY(-7px);
                font-size: 0.65rem;
                padding: 0 10px;
                background: #1d2b3a;
                border-left: 1px solid #00dfc4;
                border-right: 1px solid #00dfc4;
                letter-spacing: 0.2em;
            }
        }

        // 
        span{
            position: absolute;
            left: 0;
            padding: 10px;
            pointer-events: none;
            font-size: 1em;
            color: rgba(255,255,255,0.25);
            text-transform: uppercase;
        }
    }


</style>