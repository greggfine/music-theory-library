<script>
    import Nav from "../components/nav.svelte";
    import '../global.css';
</script>
<Nav />
<main class="p-8 max-w-6xl mx-auto">
    <slot></slot>
</main>
<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>