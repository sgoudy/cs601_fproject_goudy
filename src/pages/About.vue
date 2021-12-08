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
          From Annapolis, MD, I went to school at the oldest private military college in the U.S., Norwich University. Located in podunk Northfield, Vermont, it was the greatest life choice I ever made. Since then I've traveled to dozens of countries and seen 5 of 7 continents. This home-body enjoys civilian life and working from home!
        </p>
        <br />
        <hr>
        <section class="table">
            <button v-on:click="getSchoolData">View School Info</button>
                <table v-if="fetchedData != null">
                    <th>Name</th>
                    <th>Major</th>
                    <th>Type</th>
                    <th>Year</th>
                        <tr v-for="(schools, index) in fetchedData.Schools" :key="index">
                            <td v-for="(school, index) in schools" :key="index.Name">{{school.Name}}</td>
                            <td v-for="(school, index) in schools" :key="index.Major">{{school.Major}}</td>
                            <td v-for="(school, index) in schools" :key="index.Type">{{school.Type}}</td>
                            <td v-for="(school, index) in schools" :key="index.Year_Conferred">{{school.Year_Conferred}}</td>
                        </tr>
                </table>
          <br />
        </section>
        <hr>
        <section>
          <h2>Favorite Deployment</h2>
          <img src="../assets/afghan_rex.jpg" alt="Me in camouflage with two Afghan dogs">
          <p>Met these guys on my last deployment. I kept them healthy and they kept me safe. <br><br>Thanks Rex (and unnamed puppy)! I hope you boys are okay.</p>
        </section>
        <hr>
        <section>
          <h2>Favorite Part About Working from Home?</h2>
          <video src="@/assets/leaves.mp4" controls></video>
          <p>
            America <img src="../assets/usa.png" height="30" alt="american flag">
          </p>
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
    components: { Top, Bottom},
    name: "about",
    data() {
        return {
            fetchedData: null
        };
    },
    methods: {
        async getSchoolData() {
            await fetch("/schoolData.json")
                .then(response => this.logData(response))
                .then(data => this.fetchedData = data)
                .catch(err => console.log("Uh Oh: " + err.message));
        },
            logData(response){
                if(response.status !== 200){
                    throw new Error("Invalid response status, " + response.status);
                } 
                return response.json();
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