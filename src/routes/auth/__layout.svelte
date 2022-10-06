<div class="container">
    <slot></slot>
</div>


<style lang="scss">
    $--color-green: #1dd1a1;    
    .container{
        position: absolute;
        top: 80px;
        width: 100%;
        min-height: calc(100vh - 80px);
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $--color-green;
    }
</style>