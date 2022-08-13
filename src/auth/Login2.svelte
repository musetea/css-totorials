<script>
    import InputBox2 from '../components/InputBox2.svelte';
</script>


<div class="container">
    <InputBox2 title={"First Name"} />
    <InputBox2 title={"Last Name"} />
    <button>Login</button>
</div>

<style lang="scss">
    .container
    {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
        background-color: #1d2b3a;
        height: 600px;

        button{
            width: 250px;
            cursor: pointer;
            text-transform: uppercase;
            padding: 10px;
            outline: none;
            border: none;
            background: rgba(255,255,255, 0.25);
            color: rgba(255,255,255, 0.5);
            transition: 0.5s;

            &:hover {
                border: 1px solid #00dfc4;
                background-color: #1d2b3a;
                color: #00dfc4;
            }

        }
    }
</style>

