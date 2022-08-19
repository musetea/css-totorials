<script>
    export let key = ''
</script>

<span class={key}>
    <i>
        {key}
    </i>
</span>

<style lang="scss">
    $--bg-color1: #282828;
    $--bg-color2: #202020;

    span{
        position: relative;
        display: inline-block;
        width: 80px;
        height: 80px;
        padding: 8px 15px;
        border-radius: 10px;
        background: linear-gradient(180deg, $--bg-color1, $--bg-color2);
        box-shadow: 0 -8px 8px rgba(0,0,0, 0.15),
            0 -8px 8px rgba(0,0,0, 0.25),
            0 0 0 2px rgba(0,0,0, 0.75),
            10px 20px 25px rgba(0,0,0, 0.4);
        overflow: hidden;

        &::before{
            content: '';
            position: absolute;
            top: 3px;
            left: 4px;
            right: 12px;
            bottom: 14px;
            background: linear-gradient(90deg, #232323, #4f4f4f);
            border-radius: 10px;
            box-shadow: -10px -10px 10px rgba(255,255,255, 0.25),
                10px 5px 10px rgba(0,0,0, 0.15);
            border-left: 1px solid #0004;
            border-bottom: 1px solid #0004;
            border-top: 1px solid #0009;

        }

        &.F1{
            grid-column: 3;
            grid-row: 1;
        }
        &.F5{
            grid-column: 8;
            grid-row: 1;
        }

        i{
            position: relative;
            font-size: 1.5em;
            color: #fff;
            font-style: normal;
            text-transform: uppercase;
        }
    }
</style>