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
        <p>
            * Seeking REMOTE Opportunities in Defense, Aviation, or Automotive *
        </p>
        <a class="resume" href="/ShelbyGoudyResume.pdf" download>View My Resume</a><br><br>
        <p>Marine Corps Officer and Osprey Pilot with over 10 years of service.</p>
        <p>Gear-head, nature lover, tinkerer.</p>
        <p>Stable-hand & Pony Adopter</p>
        <h3>Take a look around!</h3>
        <img @mouseover="active = true" @mouseout="active = false" :src="active ? URLprimary : URLsec" :alt="active ? 'front photo of Lu the pony' : 'side photo of Lu the pony'"/>
        <img @mouseover="secActive = true" @mouseout="secActive = false" :src="secActive ? URLter : URLfour" :alt="secActive ? 'sun-backed side photo of Lu the pony' : 'sun-backed front photo of Lu the pony'"/>
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
          secActive: true,
          URLprimary: '/Lu1.jpg',
          URLsec: '/Lu2.jpg',
          URLter: '/Lu3.PNG',
          URLfour: '/Lu4.PNG',
      }
  }
}
  
</script>

<style scoped>
    h3{
        color: gold;
    }
    
    img{
        margin: 20px;
        border-radius: 10px;
    }
</style>