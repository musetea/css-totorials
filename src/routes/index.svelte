<script>
    import Login2  from '../auth/Login2.svelte';
    import Loading from '../load/Loading.svelte';
    import GrowRing from '../load/GrowRing.svelte';
    import Button from '../components/Button.svelte';
    // import DigitalClock from '../components/DigitalClock.svelte';
    import Clock from '../components/Clock.svelte';
    import CheckBox from '../components/CheckBox.svelte';
    import Calculator from '$comp/Calculator.svelte';
    import SearchBox from '../components/SearchBox.svelte';
    import SearchBox2 from '../components/SearchBox2.svelte';
    import TextLoader from '../load/TextLoader.svelte';
   

</script>


<section>
    <TextLoader />
</section>
<!-- 
<section class="searchBox2">
    <SearchBox2 />
</section>

<section class="searchBox">
    <SearchBox />
</section>

<section class={"calc"}>
    <Calculator />
</section>

<section style={`background:#cfd1e1; overflow:hidden; min-height:180px; `}>
    <CheckBox />
</section> -->

<!-- 
<section>
    <GrowRing />
</section> -->

<!-- 클럭
<section>
    <Clock />
</section>
 -->

<!-- <Login2 /> -->
<!-- <Loading /> -->


<!-- <div class="buttons">
    <Button title={"Button0"} color={"#1e9bff"} />
    <Button title={"Button1"} color={"#ff1867"} />
    <Button title={"Button2"} color={"#62ff32"} />
</div> -->

<section>
    <!-- <DigitalClock /> -->
</section>


<style lang="scss">

    section{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem;
    }

    .searchBox2{
        background: #e84118;
        height: 100px;
    }

    .searchBox{
        display: flex;
        align-items: center;
        justify-content: center;
        background: #297eff;
        min-height: 180px;
        z-index: 1;
    }


    .calc{
        position: relative;
        padding:2rem;
        background:#091921; 
        font-family:'Quicksand', sans-serif;
        height: 800px; 
        &::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(#e91e63, #ffc107);
            clip-path: circle(22% at 30% 20%);
        }
        &::after{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(#fff, #da00ff);
            clip-path: circle(22% at 70% 90%);
        }
    }

    // .buttons{
    //     margin-top: 1rem;
    //     width: 100%;
    //     // height: 600px;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     // flex-direction: column;
    //     gap: 10px;
    // }
</style>