<template>
    <section>
    <section class="container">
        <Top />
        <section class="right">
         
            <h2>View Some of My Full-Stack Projects</h2>
            <p><i>Numbered Projects Courtesy of the Team Treehouse Syllabus</i></p>
            <section class="portfolio">
                    <a href="https://github.com/sgoudy/Techdegree-Project-1" target="_blank"><h2>Project #1</h2><img src="../assets/p1.png" alt="Project 1 screenshot"></a>
                    <a href="https://github.com/sgoudy/Techdegree-Project-2" target="_blank"><h2>Project #2</h2><img src="../assets/p2.png" alt="Project 2 screenshot"></a>
                    <a href="https://github.com/sgoudy/Techdegree-Project-3" target="_blank"><h2>Project #3</h2><img src="../assets/p3.png" alt="Project 3 screenshot"></a>
                    <a href="https://github.com/sgoudy/Techdegree-Project-4" target="_blank"><h2>Project #4</h2><img src="../assets/p4.png" alt="Project 4 screenshot"></a>
                    <a href="https://github.com/sgoudy/Techdegree-Project-5" target="_blank"><h2>Project #5</h2><img src="../assets/p5.png" alt="Project 5 screenshot"></a>
                    <a href="https://github.com/sgoudy/Techdegree-Project-6" target="_blank"><h2>Project #6</h2><img src="../assets/p6.png" alt="Project 6 screenshot"></a>
                    <a href="https://github.com/sgoudy/Techdegree-Project-7" target="_blank"><h2>Project #7</h2><img src="../assets/p7.png" alt="Project 7 screenshot"></a>
                    <a href="https://sgoudy-library.herokuapp.com/books/page1" target="_blank"><h2>Project #8</h2><img src="../assets/p8.png" alt="Project 8 screenshot"></a>
                    <a href="https://github.com/sgoudy/Techdegree-Project-6" target="_blank"><h2>Milkshake</h2><img src="../assets/p10.png" alt="Milkshake screenshot"></a>
                </section>
          </section>
        </section>
        <Bottom />
        </section>
</template>

<script>
    import Top from "../components/Top.vue";
    import Bottom from "../components/Bottom.vue";
    export default {
        components: {Top, Bottom},
        name: "portfolio"
        
    }
</script>

<style scoped>

.portfolio{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.portfolio a {
    background-color: #f8f8ff;
    max-width: 20%;
    margin: 15px;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 3px 3px 9px white;
    cursor: pointer;
    text-align: center;
    max-width: 40%;
    color: black
}

.portfolio img{
    max-width: 95%;
}

</style>