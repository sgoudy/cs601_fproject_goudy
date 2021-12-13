<template>
    <header class="leftSidebar">
        <div id="name-title">
            <a href="/"><h1>Shelby 'EVA' Goudy </h1></a>
            <h2> MBA, MSSD</h2>
            <hr>
        </div>
        <div class="menu">
            <a href="/"><img  src="/favicon.ico" alt="Image of a Fox" height="50"></a>
            
            <button class="menu" v-on:click="toggleMenu">
                <img src="../assets/Hamburger_icon.png" height="50" alt="hamburger menu icon" id="hamburger"/>
            </button>
        </div>
        
        <nav>
            <a href="/">Home</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/skills">Skills</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </nav>
    </header>

</template>

<script>

    export default {
        
        name: "top",
        methods:{
            toggleMenu: function (){
                const nav = document.getElementsByTagName('nav')[0];
                if (nav.style.display == 'flex'){
                    nav.style.display = "none";
                } else {
                    nav.style.display = 'flex';
                }
            }
    }}
</script>

<style scoped>
    nav > a{
        text-transform: uppercase;
        text-decoration: none;
        background-color: black;
        padding: 20px;
        border-radius: 10px;
        margin: 10px;
        flex-grow: 1;
        text-align: center;
    }

</style>