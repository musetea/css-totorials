<script>
    import { onMount } from 'svelte';
    import Calendar from 'js-year-calendar';
    let _calendar;


    onMount(()=>{
        console.log(_calendar);
        new Calendar(_calendar);
    })
</script>

<svelte:head>
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/js-year-calendar@latest/dist/js-year-calendar.min.css" />

</svelte:head>


<div class="container">
    <div class="calendar" bind:this={_calendar}></div>
</div>


<style lang="scss">

    $--bg-color: #f1fbff;
    $--title-color: #5a8990;
    $--sun-color: #f75c90;
    $--sat-color: #405cf7;
    $--day-color: #777;

    .container{
        // min-height: 100vh;
        background: $--bg-color;
        font-family: 'Quicksand', sans-serif;
        font-family: 'Oswald', sans-serif;

        .calendar{
            padding: 20px 40px;

            :global(.calendar-header){
                border: none;

                :global(table){
                    :global(th:hover){
                        background-color: transparent;
                    }
                }

                :global(th.year-title){
                    font-size: 4em;
                    font-family: 'Dancing Script', cursive;
                    color: $--sun-color;
                }

                :global(.year-title.year-neighbor){
                    font-size: 2.25em;
                }
                :global(.year-title.year-neighbor2){
                    font-size: 1.1em;
                }
            }
            
             
            :global(.months-container){
                 justify-content: center;
                 gap: 40px;

                :global(.month-container){
                    min-width: 280px;
                    padding: 20px;
                    background: #fff;
                    box-shadow: 15px 15px 40px rgba(0,0,0, 0.15);
               }
            }
            // .calendar table.month th.month-title
            :global(table.month){

                :global(thead){
                    :global(tr:nth-child(2)){
                        :global(th:first-child){
                            color:$--sun-color
                        }
                        :global(th:last-child){
                            color:$--sat-color
                        }
                    }
                }

                :global(tr td){
                    font-size: 0.9em;
                    font-weight: 500;
                    color: $--day-color;
                }

                :global(th.month-title){
                    color : $--title-color;
                    font-size: 1.9em;
                    font-weight: 200;
                    font-family: 'Dancing Script', cursive;
                }

                :global(th.day-header){
                    color: $--day-color;
                    font-size: 0.9em;
                    font-weight: 700;
                }

                :global(td:first-child){
                    color: $--sun-color;
                }
                :global(td:last-child){
                    color: $--sat-color;
                }

                

                :global(td.day){
                    :global(.day-content){
                        padding: 6px 8px;

                        &:hover{
                            background: $--sun-color;
                            color: #fff;

                        }
                    }
                }

            }
        }

        
    }
</style>