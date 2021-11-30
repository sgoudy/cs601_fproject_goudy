<template>
    <footer>
        <span>
            <a href="https://www.linkedin.com/in/shelby-goudy/" target="_blank">
                <img src="../assets/LinkedIn.png" height="30" alt="linkedIn logo">
            </a>
            <a href="https://github.com/sgoudy" target="_blank">
                <img src="../assets/github.png" height="30" alt="Github logo">
            </a>
        </span>
        <p>&copy; Shelby 2021</p>
    </footer>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
    footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;
        background-color: #669900;
    }
</style>