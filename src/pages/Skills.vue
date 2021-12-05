<template>
<section>
    <section class="container">
        <Top />
       <section class="right">
            <figure>
                <img src="/meOnLu.jpg" alt="Shelby on her pony Pelusa with her horse friend Alex in the background">
                <figcaption>Shelby and Pelusa.</figcaption>
            </figure>
              <a class="resume" href="/ShelbyGoudyResume.pdf" id="resume" target="_blank" download>View My Resume</a><br><br>
            <hr>
                <h2>Skills</h2>
                <p>This list is not all-inclusive but just a summarization of some of my skills and qualifications. <br>
                    I also pride myself on being 'Semper Gumby' (aka. always flexible). <br> I love change and adapting to situations on the fly (pun intended), though not much can beat when everything goes to plan. </p>
                <section class="skills">
                    <div>
                        <h3>General</h3>
                        <p>12+ years experience</p>
                        <ul>
                            <li>Cross Functional Leadership</li>
                            <li>Communication & Time Management</li>
                            <li>Military Operations & Logistics</li>
                            <li>Strategic, Operational, & Tactical Planning</li>
                            <li>Project Management</li>
                            <li>Aviation, Engineering, Systems Integration</li>
                            <li>Business Optimization</li>
                            <li>Planning & Scheduling</li>
                        </ul>
                    </div>
                    <hr>
                    <div>
                        <h3>Software</h3>
                        <p>2 years experience, Preferred Stack: MERN</p>
                        <ul>
                            <li>Java, JavaScript, Python, PHP</li>
                            <li>MongoDB, MySQL</li>
                            <li>React, Vue, HTML5, CSS3</li>
                            <li>OOP, Express, RESTful APIs</li>
                            <li>Version Control Software (git & GitHub)</li>
                            <li>Full-Stack Applications</li>
                            <li>WordPress, E-Commerce</li>
                            <li>Search Engine Optimization</li>
                        </ul>
                    </div>
                </section> 
                <hr><br>
                    <img src="../assets/aplus.png" height="70" alt="A plus">
                    <p>I was also the Team Lead for Capstone, our project is <a href="https://diary-library.herokuapp.com/" target="_blank">HERE.</a></p>
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


</style>