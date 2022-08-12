<script>
    import InputBox  from '$comp/InputBox.svelte';

</script>



<div class="container">

    <InputBox title={"First Name"} />
    <InputBox title={"Last Name"} />
    <button>Login</button>

</div>


<style lang="scss">
    .container  {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 600px;
        gap: 2rem;
        background-color: #222;

        button{
            border: none;
            outline: none;
            width: 250px;
            height: 2rem;
            cursor: pointer;
            text-transform: uppercase;

            &:hover {
                background-color: #2196f3;
                color: #fff;
            }
        }
    }
</style>