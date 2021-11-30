<template>
<section>
<section class="container">
     <Header />
    <section class="right">
          <figure>
            <img src="../assets/LtBootNugMe.jpg" alt="Young Shelby in camouflage with an aircraft in the background">
            <figcaption>Shelby in front of a MV-22B Osprey at MCAS New River, NC.</figcaption>
          </figure>
          <a class="resume" href="..assets/ShelbyGoudyResume.pdf" target="_blank" download>View My Resume</a><br><br>
        <hr>
        <h2>Background</h2>
        <p>
          Originally from Annapolis, MD, I went to school at the oldest private military college in the U.S., Norwich University. Located in podunk Northfield, Vermont, it was the greatest life choice I ever made. Since then I've traveled to dozens of countries and seen 5 of 7 continents. I don't miss serving but I do miss my Marines and all of the incredibly unique experiences.
        </p>
          
        <br />
        <hr>
        <section class="table">
          <h2>My Timeline</h2>
         
          <table>
            <tr>
              <th><strong>Year</strong></th>
              <th><strong>School</strong></th>
              <th><strong>Degree Type</strong></th>
              <th><strong>Field of Study</strong></th>
            </tr>
            <tr>
              <td>2020 - 2022</td>
              <td>Boston University</td>
              <td>MS</td>
              <td>Software Development</td>
            </tr>
              <tr>
                <td>2020 - 2020</td>
                <td>Team Treehouse</td>
                <td>TechDegree Certification</td>
                <td>Full Stack JS</td>
              </tr>
              <tr>
                <td>2019 - 2020</td>
                <td>Seton Hill University</td>
                <td>MBA</td>
                <td>Entrepreneurship</td>
              </tr>
              <tr>
                <td>2005 - 2009</td>
                <td>Norwich University</td>
                <td>BS</td>
                <td>Civil Engineering</td>
              </tr>
          </table>
          <br />
        </section>
        <hr>
        <section>
          <h2>Favorite Deployment</h2>
          <img src="../assets/afghan_rex.jpg" alt="Me in camouflage with two Afghan dogs">
          <p>I served from 2009 to the last day of 2018. On my last deployment, I got to meet these dogs (and help care for them as an additional perk of the gig). Quite frankly, I think they kept me safe and more sane than I would've been had they not been there. <br><br>Thanks Rex (and unnamed puppy)! I hope you boys are okay.</p>
        </section>
        <hr>
        <section>
          <h2>Favorite Part About Working from Home!</h2>
          <video src="../assets/leaves.mp4" controls></video>
          <p>
            I shot this footage yesterday. I really enjoy being able to get my work done on my own time (be it 0400 in the morning or 7 pm) so that I can go and explore when and where I like.
          </p>
        </section>
        </section>  
    </section>    
     <Footer />
    </section>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
    export default {
        components: { Header, Footer},
        name: "about"
    }
</script>

<style scoped>
    table{
        margin: 0 auto;
        border: solid lightcyan 2px;
    }

    th{
        text-transform: uppercase;
        font-size: 20px;
        padding: 10px;
    }
    td{
        padding: 10px;
        border: solid lightcyan 1px;
    }

    ul{
        list-style-type: none;
    }
    .resume {
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