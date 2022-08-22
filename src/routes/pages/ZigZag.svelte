<script></script>



<div class="container">
    <div class="box">
    
    </div>
</div>


<style lang="scss">
    $--bg-color:#f8f8f8;
    $--box-color:#62baea;

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: $--bg-color;
    }

    .box{
        position: relative;
        width: 340px;
        height: 400px;
        background-color: $--box-color;

        &::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 24px;
            //background-color: red;
            background: linear-gradient(-135deg, $--bg-color 12px,transparent 0%),
                linear-gradient(135deg, $--bg-color 12px, transparent 0%) ;
            background-size: 24px;
        }

        &::after{
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 24px;
            background: linear-gradient(-45deg, $--bg-color 12px, transparent 0%),
                linear-gradient(45deg, $--bg-color 12px, transparent 0%);
            background-size: 24px;
        }
    }

</style>