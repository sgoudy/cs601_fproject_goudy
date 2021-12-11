<template>
    <section>
    <section class="container">    
        <Top />
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
                * Seeking REMOTE Opportunities in Defense, Aviation, or Automotive *
            </p>
            <a class="resume" href="/ShelbyGoudyResume.pdf" download>View My Resume</a><br><br>
            <p>Marine Corps Officer and Osprey Pilot with over 10 years of service.</p>
            <p>Gear-head, nature lover, tinkerer.</p>
            <p>Stable-hand & Pony Adopter</p>
            <div>
                
            </div>
            <h3>Take a look around!</h3>
            <img @mouseover="active = true" @mouseout="active = false" :src="active ? URLprimary : URLsec" alt="front photo of Lu the pony"/>
        </section>
        </section>
    <Bottom />
    </section>
</template>

<script>
import Top from "../components/Top.vue";
import Bottom from "../components/Bottom.vue";

export default {
  components: { Top, Bottom },
  data(){
      return {
          active: true,
          URLprimary: '/Lu1.jpg',
          URLsec: '/Lu2.jpg'
      }
  }
}
  
</script>

<style>
    h3{
        color: gold;
    }

    .landing-icons-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    }

    .tab1 {
        tab-size: 4;
        }
  
    .tab2 {
        tab-size: 8;
    }

    .tab3 {
        tab-size: 12;
    }
    
</style>