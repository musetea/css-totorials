<script>
    import { onMount} from 'svelte';
    let eleFile;


    onMount(()=>{
        eleFile.addEventListener('change', (e) => {
            // console.log(e);
            const file = eleFile.files[0];
            const reader = new FileReader();
            reader.addEventListener('load', ()=>{
                console.log(reader.result);

            });
            reader.readAsDataURL(file);
        })
    })

</script>

<div class="container">
    <input type="file" bind:this={eleFile}>
</div>