<template>
    <footer>
        <span>
            <a class="footerIcons" href="https://www.linkedin.com/in/shelby-goudy/" target="_blank">
                <img src="../assets/LinkedIn.png" height="30" alt="linkedIn logo">
            </a>
            <a class="footerIcons" href="https://github.com/sgoudy" target="_blank">
                <img src="../assets/github.png" height="30" alt="Github logo">
            </a>
            <a class="footerIcons" href="mailto:shelbygoudy@gmail.com" target="_blank">
                <img src="../assets/email.png" height="30" alt="Email icon">
            </a>
            <a href="tel:4432236514" target="_blank">
                <img src="../assets/phone.png" height="30" alt="Phone icon">
            </a>
        </span>
        <p>&copy; Shelby 2021</p>
    </footer>
</template>

<script>
    export default {
        name: "bottom"
    }
</script>

<style scoped>
    footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;
        background-color: #618abb;
    }

    .footerIcons{
        margin-right: 10px;
    }
    
</style>