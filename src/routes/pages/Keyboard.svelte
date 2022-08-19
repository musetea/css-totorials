<script>
    import Key from '$comp/Key.svelte';

    const keys = [
        'ESC', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12',
        '`', '1', '2', '3', '4', '5', '6', '7', '8', '9','0', '-', '=', '<-',
    ]

</script>

<div class="container">
    <div class="keys">
        {#each keys as k }
            <Key key={k}/>
        {/each}
    </div>
    
</div>


<style lang="scss">
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 400px;
        background-color: aliceblue;

        .keys{
            display: grid;
            grid-template-columns: repeat(14, 1fr);
            gap: 1em;
        }
    }
</style>