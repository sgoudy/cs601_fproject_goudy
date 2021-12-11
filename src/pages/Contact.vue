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
            <form id="form" @submit="validateForm">
                <div>
                    <h2>Contact Form</h2>
                    <div id="nameDiv">
                        <label for="name">Name:*</label><br>
                        <input class="input" type="text" name="name" id="name" required>
                    </div>
                    <div id="facDiv">
                        <label for="email">Email:*</label><br>
                        <input class="input" type="email" name="email" id="email" required>
                    </div>
                    <div>
                        <label>Message:*</label><br>
                        <textarea 
                            name="message"
                            cols="30" 
                            rows="5"
                            class="input" 
                            placeholder="Please include a brief message" 
                            required>
                        </textarea>
                    </div>
                </div>
                <br>
                <div>
                    <input class="submit" type="submit" value="Giddy Up!">
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
import emailjs from 'emailjs-com';

export default {
    components: {Top,Bottom},
    data() {
        return {
        name: '',
        email: '',
        message: ''
        }
    },
    methods: {
        sendEmail(e) {
            console.log('sending email')
            e.preventDefault();
        try {
            emailjs.sendForm('service_tkt6spc', 'template_b04s9g2', e.target,
            'user_Xwa1ypJ5JyG6NVsWgu1MO', {
            name: this.name,
            email: this.email,
            message: this.message
            })
            alert('Sent!');

        } catch(error) {
            console.log({error})
        }
        // Reset form field
        this.name = ''
        this.email = ''
        this.message = ''
        },

        validateForm(e){
            console.log('validating')
            // Created Error Handlers 
            const name = document.getElementById('name');
            const nameError = document.createElement('div');
            const typeError = document.createElement('div');

            // First Name min length = 2
            nameError.innerHTML = 'The first name must be at least 2 letters.';
            nameError.style.color = 'red';
            nameError.style.fontSize = '14px';

            // Names can only contain letters A-Z
            typeError.innerHTML = 'Names should only include the letters A-Z'
            typeError.style.fontSize = '14px';
            typeError.style.color = 'red';

            e.preventDefault();

            // regex for alphabet characters only
            const regex = /^[A-Za-z]+$/;

            let shouldSubmit = true;

            // remove all error elements from DOM
            nameError.remove();
            typeError.remove();

            // check length >= 2
            if (name.value.length < 2) {
                shouldSubmit = false;
                name.appendChild(nameError);  
            }

            // check for any characters that don't match the regex
            if (!name.value.match(regex)) {
                shouldSubmit = false;
                name.appendChild(typeError);
            }

            if(shouldSubmit){
                this.sendEmail(e);
            }
        }}
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
    .input{
        width: 80%;
        height: 30px;
        margin: 10px
    }
    .error{
        font-size: 14px;
        color: red;
        display: none;
    }

    .submit{
        text-transform: uppercase;
        text-decoration: none;
        background-color: black;
        padding: 20px;
        border-radius: 10px;
        margin: 10px;
        flex-grow: 1;
        text-align: center;
        color: gold;
    }

    .submit:visited{
        color: lightblue;
    }

    .submit:hover{
        color: gold;
        transform: rotate(1deg);
        cursor: pointer;
    }
    </style>

// @submit="errorHandling" 
//             method="POST" 
//             action="https://bucs601.com/submit.php"