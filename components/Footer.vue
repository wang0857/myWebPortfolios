<template>
    <footer class="root-footer">
        <p>&copy; {{ currentYear }}  Ruo-Fang Wang.</p>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
        computed: {
            currentYear() {
                return new Date().getFullYear();
            },
        },
    }
</script>

<style>
    footer {
        text-align: center;
    }
</style>