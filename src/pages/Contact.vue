<template>
    <section>
   <section class="container">
    <Top />
    <section class="right">
      <figure>
        <img src="../assets/meJoeKev.jpg" alt="Shelby, Joey, Kevin (left to right) for a closeup in winter clothes in the woods.">
          <figcaption>Shelby, Joey, and Kevin at Flat Rock.</figcaption>
      </figure>
      <section>
      <h2>Get in Touch</h2>
      <hr>
      <br>
            <form id="form" @submit="errorHandling" method="POST" action="https://bucs601.com/submit.php">
                <div>
                    <h2>Contact Form</h2>
                    <div id="firstNameDiv">
                        <label for="firstName">First Name:*</label><br>
                        <input type="text" name="firstName" id="firstName" required>
                    </div>
                    <div id="lastNameDiv">
                        <label for="lastName">Last Name:*</label><br>
                        <input type="text" name="lastName" id="lastName" required>
                    </div>
                    <div id="facDiv">
                        <label for="facilitator">Email:*</label><br>
                        <input type="text" name="facilitator" id="facilitator" required>
                    </div>
                </div>
                <div>
                    <hr>
                    <h3>Goal:</h3>
                    <div class="ima">
                        <div>
                            <label for="seeker">Let's Network</label>
                            <input name="status" type="radio" id="seeker" value="job seeker" checked>
                        </div>
                       <div>
                        <label for="poster">Come Work With Us</label>
                        <input name="status" type="radio" id="poster" value="job poster">
                       </div>
                    </div>
                    <hr>
                </div>
                <div>
                    <h3>Random Fact</h3>
                    <h6>Favorite Animal</h6>
                    <div class="skillset">
                        <div>
                            <label for="front">Dog</label>
                            <input class="checkbox" type="checkbox" id="front" value="front-end" name="front"><br>
                        </div>
                        <div>
                            <label for="back">Cat</label>
                            <input class="checkbox" type="checkbox" id="back" value="back-end" name="back"><br>
                        </div>
                        <div>
                            <label for="full">Horse</label>
                            <input class="checkbox" type="checkbox" id="full" value="full-stack" name="full"><br>
                        </div>
                        <div>
                            <label for="software">None</label>
                            <input class="checkbox" type="checkbox" id="software" value="software" name="software"><br>
                        </div>
                    </div>
                    <hr>
                </div>
                <br>
                <div>
                    <button type="submit">Giddy Up!</button>
                </div>
                
            </form>
            <br>
      </section>
    </section>  
    </section>
    <Bottom/>
    </section>
</template>

<script>
import Top from "../components/Top.vue";
import Bottom from "../components/Bottom.vue";
    export default {
        components: {Top,Bottom},
        name: "contact",
       
        // methods: {
        //     errorHandling: function (whichSection){
        //     // First Name error
        //     if (whichSection.id === 'firstName'){
        //         this.firstError.style.display = 'block';
        //         lastError.style.display = 'none';
        //         facError.style.display = 'none';
        //         typeError.style.display = 'none';
        //     // Last name error
        //     } else if (whichSection.id === 'lastName'){
        //         firstError.style.display = 'none';
        //         lastError.style.display = 'block';
        //         facError.style.display = 'none';
        //         typeError.style.display = 'none';
        //     // Fac name error
        //     } else if (whichSection.id === 'facilitator'){
        //         firstError.style.display = 'none';
        //         lastError.style.display = 'none';
        //         facError.style.display = 'block';
        //         typeError.style.display = 'none';
        //     } else if (whichSection === 'type'){
        //         firstError.style.display = 'none';
        //         lastError.style.display = 'none';
        //         facError.style.display = 'none';
        //         typeError.style.display = 'block';
        //     }
        // },


        // /**
        //  * Form Validation
        //  * @param {e} e form submission
        //  * @returns false on error
        //  */
        // validateForm:function(e){
        //     // regex for alphabet characters only
        //     const regex = /^[A-Za-z]+$/;

        //     // check length >= 2
        //     if (fName.value.length < 2 ){
        //         e.preventDefault();
        //         errorHandling(fName);
        //         return false;
        //     } 
        //     if (lName.value.length < 2){
        //         e.preventDefault();
        //         errorHandling(lName);
        //         return false;
        //     }

        //     // check for any characters that don't match the regex
        //     if (!fName.value.match(regex) || !lName.value.match(regex)){
        //         e.preventDefault();
        //         errorHandling('type')
        //         return false;
        //     }

        //     // check for a valid facilitator name
        //     let match = false;
        //     const facilitators = ['fazil', 'christian', 'josh', 'chris']
        //     for (let i = 0; i<facilitators.length; i++){
        //         if (fac.value.toLowerCase() === facilitators[i]){
        //             facError.style.display = 'none';
        //             match = true;
        //         }
        //     }
        //     // facilitator = no match 
        //     if (!match){
        //         e.preventDefault();
        //         errorHandling(fac);
        //         return false;
        //     }
        // }
        //     }
        }
</script>

<style scoped>

form {
    display: flex;
    flex-direction: column;
    padding: 10px 30px;
    border: 1px solid black;
    border-radius: 10px;
    text-align: center;
    background-color: black;
    width: 70%;
    color: lightgray;
    margin: auto;
    }

input{
    width: 80%;
    height: 30px;
    margin: 10px
}

.error{
    font-size: 14px;
    color: red;
    display: none;
}

.skillset, .ima{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}

</style>