<template>
<section>
    <section class="container">
        <Top />
       <section class="right">
            <figure>
                <img src="../assets/meOnLu.jpg" alt="Shelby on her pony Pelusa with her horse friend Alex in the background">
                <figcaption>Shelby and Pelusa.</figcaption>
            </figure>
              <a class="resume" href="/ShelbyGoudyResume.pdf" id="resume" download>View My Resume</a><br><br>
            <hr>
                <h2>Skills</h2>
                <p>NOT all-inclusive.</p>
                <section class="skills">
                    <div>
                        <h3>General</h3>
                        <p>12+ years experience</p>
                        <ul>
                            <li>Aviation, Engineering, Systems Integration</li>
                            <li>Project Management</li>
                            <li>Military Operations & Logistics</li>
                            <li>Cross Functional Leadership</li>
                            <li>Communication & Time Management</li>
                            <li>Strategic, Operational, & Tactical Planning</li>
                            <li>Business Optimization</li>
                            <li>Planning & Scheduling</li>
                        </ul>
                    </div>
                    <hr>
                    <div>
                        <h3>Software</h3>
                        <p>2 years experience</p>
                        <ul>
                            <li>Java, JavaScript, Python, PHP</li>
                            <li>Data Structures & Algorithms</li>
                            <li>MongoDB, MySQL, SQLite3</li>
                            <li>React, Vue, HTML5, CSS3</li>
                            <li>OOP, Express, RESTful APIs</li>
                            <li>VCS: git & GitHub</li>
                            <li>Full-Stack Applications</li>
                            <li>WordPress, E-Commerce, SEO</li>
                        </ul>
                    </div>
                </section> 
                <hr><br>
                    <img src="../assets/aplus.png" height="70" alt="A plus">
                    <p>Team Lead for <a href="https://diary-library.herokuapp.com/" target="_blank">Capstone Project</a><br>...not optimized for mobile :(</p>
            <br>
            </section>
          </section>
          <Bottom/>
        </section>
</template>

<script>
    import Top from "../components/Top.vue";
    import Bottom from "../components/Bottom.vue";
    export default {
        components: {Top, Bottom},
        name: "skills"
    }
</script>

<style scoped>

    ul{
        list-style-type: none;
    }

    .skills{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .skills div{
        margin: 0 auto;
    }

@media screen and (max-width: 992px) {

  .skills{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    ul{
        padding: 10px;
    }
}

</style>