<script>
    import { onMount} from 'svelte';
    let _value;
    let eleIcon;
    let eleContainer;
    let active = false;

    const onIconClick  = (e) => {
        active = !active;
    }
    const onClearClick  = (e) => {
        _value = '';
    }


    onMount(()=>{

    });


</script>


<div class="container" class:active>
    <div class="icon" bind:this={eleIcon} on:click={onIconClick}></div>
    <div class="inputBox" >
        <input type="text" placeholder="Search" bind:value={_value}>
    </div>
    <span class="clear" on:click={onClearClick}></span>
</div>


<style lang="scss">
    $--icon-color: #2573ef;

    .container{
        position: relative;
        width: 60px;
        height: 60px;
        background: #fff;
        border-radius: 60px;
        transition: 0.5s;
        box-shadow: 0 0 0 5px $--icon-color;
        overflow: hidden;

        &.active{
            width: 360px;
        }

        .icon{
            position: absolute;
            top: 0;
            left: 0;
            width: 60px;
            height: 60px;
            background: #fff;
            border-radius: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10;
            cursor: pointer;

            &::before {
                content: '';
                position: absolute;
                width: 15px;
                height: 15px;
                border: 3px solid #287dfc;
                border-radius: 50%;
                transform: translate(-4px, -4px);
            }

            &::after{
                content: '';
                position: absolute;
                width: 3px;
                height: 12px;
                background: #287dfc;
                transform: translate(6px, 6px) rotate(315deg);
            }
        }

        .inputBox {
            position: relative;
            width: 300px;
            left: 60px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;

            input{
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                border: none;
                outline: none;
                font-size: 18px;
                padding: 10px 0;
            }
        }

        .clear{
            position: absolute;
            width: 15px;
            height: 15px;
            top: 50%;
            right: 15px;
            transform: translateY(-50%);
            // background: #f00;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            
            &::before{
                content: '';
                position: absolute;
                width: 1px;
                height: 15px;
                background: #999;
                transform:  rotate(45deg);
            }
            &::after{
                content: '';
                position: absolute;
                width: 1px;
                height: 15px;
                background: #999;
                transform:  rotate(135deg);
            }
        }
    }
</style>