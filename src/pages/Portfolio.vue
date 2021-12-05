<template>
    <section>
    <section class="container">
        <Top />
        <section class="right">
            <h2>View Some of My Full-Stack Projects</h2>
            <p><i>Numbered Projects Courtesy of the Team Treehouse Syllabus</i></p>
            <button v-on:click="getPortfolio">View Projects</button>
            <section v-if="projects != null" class="portfolio">
                <article v-for="project in projects" :key="`${project.key}`">
                    <h4>{{project.name}}</h4>
                    <img :src="project.src" :alt="project.alt" /><br>
                    <a class="button" :href="project.hrefRepo" target="_blank">Repo</a>
                    <a class="button" :href="project.hrefLive" target="_blank">Live</a>
                </article>
            
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
        name: "portfolio",
        data(){
            return{
                projects: null
            }
        },
        methods: {
            async getPortfolio (){ 
            await fetch("/portfolioData.json")
            .then(response => this.logData(response))
            .then((data) => this.projects = data)
            .catch(err => console.log("Uh Oh: " + err.message));
        },
            logData(response){
                if(response.status !== 200){
                    throw new Error("Invalid response status, " + response.status);
                } 
                return response.json();
            }
        }  
    }
</script>

<style scoped>

.button{
    background-color: black;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
}

.portfolio{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.portfolio article {
    background-color: #f8f8ff;
    max-width: 20%;
    margin: 15px;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 3px 3px 9px white;
    text-align: center;
    max-width: 40%;
    color: black
}

.portfolio img{
    max-width: 95%;
}

@media screen and (max-width: 414px) {
    .portfolio article{
        max-width: 80%;
    }}

</style>