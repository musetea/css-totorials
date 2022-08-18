<script>
    import { createEventDispatcher } from 'svelte';
    export let _href = '#';
    export let icon = '';
    export let title = ''; 
    export let color = '';
    export let active = false;
    export let open = false;

    const dispatch = createEventDispatcher();

    function notify(e) {
		dispatch('click', { title });
	};

</script>

<li class="list" 
    class:active={active} 
    style={`--clr:${color}`}
    class:open={open}
    on:click={notify}
    >
    <a href={_href}>
        <span class="icon">{@html icon}</span>
        <span class="text" class:open={open}>{title}</span>
    </a>
</li>

<style lang="scss">

    li.list{
        list-style: none;
        position: relative;
        width: 100%;
        height: 60px;
        padding: 0 10px;
        transition: 0.5s;

        &.open{
            &.active{
                transform: translateX(10px);
            }
        }

        &.active{
            transform: translateX(30px);

            .icon{
                color: #fff;
                background: var(--clr);

                &::before{
                    opacity: 0.5;
                }
            }

            .text{
                color: var(--clr);
            }
        }

        a{
            position: relative;
            text-align: center;
            text-decoration: none;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .icon{
                position: relative;
                display: block;
                min-width: 55px;
                height: 55px;
                line-height: 60px;
                transition: 0.5s;
                color: #222;
                border-radius: 10px;
                font-size: 1.75em;

                &::before{
                    content: '';
                    position: absolute;
                    top: 10px;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: var(--clr);
                    filter: blur(8px);
                    opacity: 0;
                }
            }

            .text{
                position: relative;
                padding: 0 15px;
                height: 60px;
                display: flex;
                align-items: center;
                color: #333;
                opacity: 0;
                visibility: hidden;
                transition: 0.5s;

                &.open{
                    opacity: 1;
                    visibility: visible;
                }
            }
        }
    }


</style>