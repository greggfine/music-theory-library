<script>
    import TProptester from "./t-proptester.svelte";
    let myAge = 0;
    function incAge(){
        myAge++;
    }
</script>
<TProptester />
<TProptester age={myAge}/>
<button on:click={incAge}>inc age</button>
<h1 class="p-2 text-center text-green-600 text-4xl border-dashed border-2 border-orange-600">TW</h1>
<h2 class="p-2 text-2xl text-red-600 uppercase m-8 border-solid border-2 border-indigo-600">Colors</h2>
<h3 class="border-solid border-2 border-blue-800 text-blue-700">blue</h3>
<h3 class="border-solid border-2 border-red-800 text-red-500">red</h3>
<h3 class="border-solid border-2 border-green-800 text-green-700">green</h3>
<section class="shadow-xl bg-blue-700 w-1/2">
    hello
</section>

<aside>
    <h2 class="border-solid border-2 border-red-800 font-extrabold my-12 p-2  text-orange-800">Here's some info about donuts.</h2>
    <p class="border-solid border-2 border-purple-600 p-4 shadow-lg text-2xl">I <em class="text-red-600 font-bold">love</em> to eat frosted donuts!</p>
</aside>

<ul class="flex space-around justify-around border-solid border-2 border-black p-2">
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>


<style>

</style>