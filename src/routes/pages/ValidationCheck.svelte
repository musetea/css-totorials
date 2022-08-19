<script>
    
    const _validations = [
        { class:'lower', message: 'At least one lowercase character' },
        { class:'upper', message: 'At least one uppercase character' },
        { class:'number', message: 'At least one number' },
        { class:'special', message: 'At least one special character' },
        { class:'length', message: 'At least 8 character' },
    ]
</script>

<div class="container">
    <div class="box">
        <div class="inputBox">
            <input type="password" placeholder="Password">
            <span class="toggle"></span>
        </div>
        <div class="validation">
            <ul>
                {#each _validations as v }
                    <li class={v.class}>
                        {v.message}
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</div>

<style lang="scss">
    $--bg-color: #8cccff;
    
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #8cccff;
    }
</style>

