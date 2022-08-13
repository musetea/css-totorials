<script>
    export let href = "#"
    export let title="Button";
    export let color="#1e9bff";
</script>


<a href={href}
    style={`--clr:${color}`}
    >
    <span>{title}</span>
    <i></i>
</a>


<style lang="scss">
    $--bg-color: #27283c;


    a{
        position: relative;
        background: #444;
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 1.5em;
        letter-spacing: 0.1em;
        padding: 10px 20px;
        transition: 0.5s;

        &:hover {
            letter-spacing: 0.25em;
            background: var(--clr);
            color: var(--clr);
            box-shadow: 0 0 35px var(--clr);            

            i::before{
                width: 20px;
                left: 20%;
            }
            i::after{
                width: 20px;
                left: 80%;
            }
        }

        &::before{
            content: '';
            position: absolute;
            inset: 2px;
            background: $--bg-color;
        }

        span{
            position: relative;
            opacity: 1;
        }

        i {
            position: absolute;
            inset: 0;
            display: block;

            &::before {
                content: '';
                position: absolute;
                left: 80%;
                top: -3.5px;
                width: 10px;
                height: 5px;
                border: 2px solid var(--clr);
                background: $--bg-color;
                transform: translateX(-50%);
                transition: 0.5s;
            }

            &::after {
                content: '';
                position: absolute;
                bottom: -3.5px;
                left: 20%;
                width: 10px;
                height: 5px;
                border: 2px solid var(--clr);
                background: $--bg-color;
                transform: translateX(-50%);
                transition: 0.5s;
            }
        }


    }
</style>