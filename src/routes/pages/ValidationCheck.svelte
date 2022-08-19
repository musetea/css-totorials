<script>
    import { onMount} from 'svelte';

    let _pass;
    let hide = false;
    let _values = '';
    const _validations = [
        { class:'lower', message: 'At least one lowercase character', self:undefined, valid:false},
        { class:'upper', message: 'At least one uppercase character', self:undefined,  valid:false},
        { class:'number', message: 'At least one number', self:undefined ,valid:false},
        { class:'special', message: 'At least one special character', self:undefined,  valid:false  },
        { class:'length', message: 'At least 8 character', self:undefined,  valid:false},
    ];
    const regExps = [
        new RegExp('(?=.*[a-z])'),
        new RegExp('(?=.*[A-Z])'),
        new RegExp('(?=.*[0-9])'),
        new RegExp('(?=.*[!@#\$%\^\&\*])'),
        new RegExp('(?=.{8,})'),
    ];

    function onToggleClick(e){
        if(_pass.type === 'password'){
            _pass.setAttribute('type', 'text');
            hide = true;
        }else{
            _pass.setAttribute('type', 'password');
            hide = false;
        }

    }

    function checkPassword(data){
    
        for(let i=0; i<regExps.length; i++){

            const reg = regExps[i];
            console.log(reg);

            if(reg.test(_values)){
                _validations[i].valid = true;
                console.log()
            }else{
                _validations[i].valid =false;
            }
        }
    }

    onMount(()=>{
        console.log(_validations);
    })

</script>

<div class="container">
    <div class="box">
        <div class="inputBox">
            <input type="password" bind:this={_pass} bind:value={_values} on:keyup={checkPassword} placeholder="Password">
            <span class="toggle" class:hide={hide} on:click={onToggleClick}></span>
        </div>
        <div class="validation">
            <ul>
                {#each _validations as v }
                    <li class={v.class} bind:this={v.self} class:valid={v.valid}>
                        {v.message}
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</div>

<style lang="scss">
    $--bg-color: #8cccff;
    $--bg-vali: #376488;

    @mixin --center(){
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @mixin --box(){
       
        border-radius: 8px;
        box-shadow: 0 15px 25px rgba(0,0,0, 0.15);
    }
    
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #8cccff;

        .box{
            position: relative;
            width: 300px;

            .inputBox{
                position: relative;
                width: 100%;
                padding: 5px;
                border-radius: 8px;
                background-color: #fff;
                box-shadow: 0 15px 25px rgba(0,0,0, 0.15);

                input{
                    position: relative;
                    width: 100%;
                    outline: none;
                    border: none;
                    padding: 10px 5px;
                }
            }

            .toggle{
                position: absolute;
                top: 8px;
                right: 10px;
                width: 34px;
                height: 34px;
                background-color: rgba(0,0,0, 0.05);
                border-radius: 50%;
                cursor: pointer;
                @include --center();

                &::before{
                    content: '\f06e';
                    font-family: fontAwesome;
                }

                &.hide{
                    &::before{
                        content: '\f070';
                        position: absolute;
                    }
                }
            }
        }

        .validation{
            margin-top: 30px;
            padding: 10px;
            background-color: $--bg-vali;
            @include --box();

            ul{
                position: relative;
                display: flex;
                flex-direction: column;
                gap: 8px;


                li{
                    position: relative;
                    color: #fff;
                    font-size: 0.85em;
                    transition: 0.5s;

                    &.valid{
                        color: rgba(255,255,255, 0.5);

                        &::before{
                            content: '\f00c';
                            color: #0f0;
                        }
                    }

                    &::before{
                        content: '\f192';
                        width: 20px;
                        height: 10px;
                        font-family: fontAwesome;
                        // background-color: #f00;
                        display: inline-flex;
                    }
                }

            }
        }
    }
</style>

