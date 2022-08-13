<script>
    import Login2  from '../auth/Login2.svelte';
    import Loading from '../load/Loading.svelte';
    import Button from '../components/Button.svelte';
    import DigitalClock from '../components/DigitalClock.svelte';
</script>


<!-- <Login2 /> -->
<!-- <Loading /> -->
<div class="buttons">
    <Button title={"Button0"} color={"#1e9bff"} />
    <Button title={"Button1"} color={"#ff1867"} />
    <Button title={"Button2"} color={"#62ff32"} />
</div>

<section>
    <DigitalClock />
</section>


<style lang="scss">
    .buttons{
        margin-top: 1rem;
        width: 100%;
        // height: 600px;
        display: flex;
        justify-content: center;
        align-items: center;
        // flex-direction: column;
        gap: 10px;
    }
</style>