<template>
<section>
<section class="container">
     <Top />
    <section class="right">
          <figure>
            <img src="../assets/LtBootNugMe.jpg" alt="Young Shelby in camouflage with an aircraft in the background">
            <figcaption>Shelby in front of a MV-22B Osprey at MCAS New River, NC.</figcaption>
          </figure>
          <a class="resume" href="/ShelbyGoudyResume.pdf" target="_blank" download>View My Resume</a><br><br>
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
            <th>Name</th>
            <th>Major</th>
            <th>Type</th>
            <th>Year</th>
                <tr v-for="(schools, index) in schoolData.Schools" :key="index">
                    <td v-for="(school, index) in schools" :key="index">{{school.Name}}</td>
                    <td v-for="(school, index) in schools" :key="index">{{school.Major}}</td>
                    <td v-for="(school, index) in schools" :key="index">{{school.Type}}</td>
                    <td v-for="(school, index) in schools" :key="index">{{school.Year_Conferred}}</td>
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
          <video src="@/assets/leaves.mp4" controls></video>
          <p>
            I shot this footage yesterday. I really enjoy being able to get my work done on my own time (be it 0400 in the morning or 7 pm) so that I can go and explore when and where I like.
             
          </p>
          <button v-on:click="getSchoolData">Get School Data</button>
                <p v-if="fetchedData != null">The first school I went to was {{fetchedData.Schools[3].School.Name}} in {{fetchedData.Schools[3].School.Year_Conferred}}. </p>
                <p v-else>Click the button to see my fetch function, with async/await, in action!</p>
        </section>
        </section>  
    </section>    
     <Bottom />
    </section>
</template>

<script>
import Top from "../components/Top.vue";
import Bottom from "../components/Bottom.vue";
import Data from "../config/data.json";

export default {
    components: { Top, Bottom},
    name: "about",
    data() {
        return {
            schoolData: Data,
            fetchedData: null
        };
    },
    methods: {
        async getSchoolData() {
            await fetch("/schoolData.json")
                .then(r => r.json())
                .then((data) => this.fetchedData = data)
                .catch(err => console.log("Error Reading data " + err));
        }
    }
};
</script>

<style scoped>
    
    
    table{
        margin: 0 auto;
        border: solid lightcyan 2px;
    }

    th{
        text-transform: uppercase;
        padding: 10px;
        border: solid 1px white;
    }

    tr{
        font-weight: 100;
    }

    td{
        border: solid 1px white;
        padding: 4px;
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