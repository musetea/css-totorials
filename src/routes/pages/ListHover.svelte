<script>


    let _title = "Popular Creator List";
    const _lists = [
        {
            rank: 1,
            name: 'Ricardo Flanagan',
            desc: 'Digital Artist'
        },
        {
            rank: 2,
            name: 'Muhammad Irshad',
            desc: 'UX/UI Designer'
        },
        {
            rank: 3,
            name: 'Clara Jones',
            desc: 'Backend Developer'
        },
        {
            rank: 4,
            name: 'Mark Devis',
            desc: 'Illustrator Designer'
        },
        {
            rank: 5,
            name: 'Shara Anderson',
            desc: 'Food Vloggers'
        },
        {
            rank: 6,
            name: 'Eric Karine',
            desc: 'Food Vloggers'
        },
        {
            rank: 7,
            name: 'Fredrik Walter',
            desc: 'Photoshop Exprot'
        },

    ]
</script>

<div class="container">
    <div class="list-container">
        <h3>{_title}</h3>
        {#each _lists as list }
            <div class="list">
                <div class="rank">
                    <span>{list.rank}</span>
                </div>
                <div class="creator">
                    <h4>{list.name}</h4>
                    <p>{list.desc}</p>
                </div>
            </div>
        {/each}
    </div>
</div>


<style lang="scss">
    $--bg-color: #2f363e;
    $--white-color: #fff;
    $--rank-color: #1f83f3;

    @mixin --box-shadow{
        box-shadow: 25px 25px 75px rgba(0,0,0, 0.25),
            10px 10px 70px rgba(0,0,0, 0.25),
            inset 5px 5px 10px rgba(0,0,0, 0.5),
            inset 5px 5px 20px rgba(255, 255, 255, 0.2),
            inset -5px -5px 15px rgba(0,0,0, 0.75);
    }
    
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: $--bg-color;

        .list-container{
            padding: 50px;
            position: relative;
            width: 350px;
            min-height: 500px;
            background-color: $--bg-color;
            border-radius: 30px;
            @include --box-shadow();

            h3{
                font-size: 1.2em;
                font-weight: 700;
                color: $--white-color;
            }

            .list{
                margin: 20px 0;
                position: relative;
                
                display: flex;
                align-items: center;
                cursor: pointer;

                &:hover{
                    
                    &::before{
                        width: 100%;
                    }
                    
                    
                    .rank{
                        &::before{
                            transform: scale(1);
                        }
                    }
                    .creator{
                        h4,
                        p{
                            color: $--white-color;
                        }
                    }
                }    
                
                &::before{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 45px;
                    height: 45px;
                    background-color: $--rank-color;
                    border-radius: 22.5px;
                    box-shadow: 5px 5px 7px rgba(0,0,0, 0.25),
                        inset 2px 2px 5px rgba(255, 255, 255, 0.5),
                        inset -3px -3px 5px rgba(0,0,0, 0.5);
                    transition: 0.5s;
                }

                .rank{
                    min-width: 45px;
                    height: 45px;
                    margin-right: 10px;
                    // background-color: $--white-color;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    &::before{
                        content: '';
                        position: absolute;
                        // top: 6px;
                        width: 30px;
                        height: 30px;
                        border-radius: 30px;
                        background-color: $--bg-color;
                        transform: scale(0);
                        transition: 0.5s;
                    }

                    

                    span{
                        position: relative;
                        font-weight: 600;
                        font-size: 1em;
                        color: $--white-color;
                        transition: 0.5s;
                    }
                }

                // CREATOR
                .creator{
                    position: relative;
                    line-height: 1.15em;

                    h4{
                        font-weight: 600;
                        color: #bcbcc0;
                        transition: 0.5s;
                    }

                    p{
                        font-weight: 400;
                        color: #95999d;
                        font-size: 0.85em;
                        transition: 0.5s;
                    }
                }
            }
        }
    }
</style>