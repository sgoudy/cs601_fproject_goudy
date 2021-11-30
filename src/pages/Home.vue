<template>
    <section>
    <section class="container">    
        <Header />
        <section class="right">
        <figure>
            <img src="../assets/hiking.jpg" alt="Shelby on the left, Joey her red heeler in the middle, and Kevin on the right. Sitting on a snow covered log in the woods." >
            <figcaption>
                Shelby, Joey (red heeler), and Kevin in the Laurel Mountains.
            </figcaption>
        </figure>
        <hr>
            <h2 id="heading"></h2>
            <p>
                *** SEEKING REMOTE OPPORTUNITIES in Aviation or Automotive ***
            </p>
            <p>I'm a former Marine Corps Officer and Aviator. I served for a decade as an Osprey pilot (those helicopter/ plane combo things (MV-22B)). I thoroughly enjoyed it, but I am now enjoying civilian life even more thanks to some horses.</p>
    
            <p>I decided I wanted to be able to work from home... got my <strong>MBA</strong>, and then randomly discovered software. I haven't looked back since. Surprisingly, I do find it just as (if not even more so) stimulating as flying. I love challenging my brain and can't wait to see where I end up.</p>
             
           <p>I'm a huge gear-head and tinkerer. I love making things work so I'm hoping I could land somewhere in the <strong>automotive or aviation sector, as stated above.</strong></p>
    
            <p>I volunteer at a ranch up the road everyday and work with the horses. They have been lifesaving and great for my soul. A lot of folks will never understand the difficulties in transitioning from active duty to the civilian world. I hope that I can take my experiences and share it with others that might need help.</p>
    
            <h3>Take a look around!</h3>
            <button v-on:click="startProgram" >Play with the Calculator & Customizer!</button>
        </section>
        </section>
    <Footer />
    </section>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Header, Footer },
  name: "home",
  methods: {
    startProgram: function(){
    // initial welcome
    alert('Welcome to my page!');
    let viewer = "";
    while (viewer == ''){
        viewer = prompt("Please enter your name: ");
    }

    // return viewers name as alert and inside document (ES6)
    alert(`Welcome, ${viewer}!`)
    let header = document.querySelector('#heading');
    header.innerHTML = `Welcome to my Round Pen, ${viewer}!`;
    this.request();
},


/**
 * Requests numbers from User
 */
    request: function(){
    let firstNum="";
    let secondNum="";
    // check for number value
    while (isNaN(firstNum) || firstNum == ""){
        firstNum = prompt('Please enter a number: ');
    }
    while (isNaN(secondNum) || secondNum == ""){
        secondNum = prompt('Please enter another number: ');
    }
    this.calculator(firstNum, secondNum);
} ,


/**
 * Converts num to decimals, adds, returns total
 * @param {*} first 
 * @param {*} sec 
 * @returns 
 */
    calculator: function(first, sec){
    // Convert to float to allow for decimals
    const total = parseFloat(first) + parseFloat(sec);
    this.responses(total)
    return total;
},

/**
 * Determines big or small number
 * @param {total} total float passed from calculator()
 */
    responses: function(total){
    // using concatenation instead of ES6
    alert('The sum of your two numbers is ' + total + '.');
   
    // conditional statement to check for size
    if (total > 10){
        alert("That is a big number!");
    } else {
        alert("That is a small number.");
    }
    this.rerun();
},

    rerun: function(){
    // loop with prompt
    // eslint-disable-next-line no-constant-condition
    while(true){
        const response = prompt('Would you like to add 2 different numbers? (y/n)');
        // check for no or empty answer, if so, exit
        if (response.toLowerCase() === 'n'){
            break;
        // if yes
        } else if (response.toLowerCase() === 'y'){
            this.request();
        } else {
            alert("Please answer with 'y' or 'n' only");
        }
    }
    alert("Thanks for playing!");
}
} 
}


/**
 * Function handles if User requests to play again or 
 * quit
 */

</script>

<style>
    .landing-icons-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    }
    img{
    height: 100px;
    }
</style>