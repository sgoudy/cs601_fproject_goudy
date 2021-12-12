<template>
    <section>
   <section class="container">
    <Top />
    <section class="right">
      <figure>
        <img src="../assets/meJoeKev.jpg" alt="Shelby, Joey, Kevin (left to right) for a closeup in winter clothes in the woods.">
      </figure>
      <section>
      <h2>Get in Touch</h2>
      <hr>
      <br>
            <form id="form" @submit="validateForm" novalidate="true">
                    <h2>Contact Form</h2>
                    <p class="error" v-if="errors.length">
                        <b>Please correct the following error(s):</b>
                        <ul>
                        <li v-for="error in errors" :key="error">{{ error }}</li>
                        </ul>
                    </p>
                    <div id="nameDiv">
                        <label for="name">Name:*</label><br>
                        <input class="input" v-model="name" type="text" name="name" id="name" required>
                    </div>
                    <div>
                        <label for="email">Email:*</label><br>
                        <input class="input" v-model="email" type="email" name="email" id="email" required>
                    </div>
                    <div>
                        <label>Message:*</label><br>
                        <textarea 
                            name="message"
                            id="message"
                            v-model="message"
                            cols="30" 
                            rows="5"
                            class="input" 
                            placeholder="Please include a brief message" 
                            required>
                        </textarea>
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
        sent: false,
        errors: [],
        name: null,
        email: null,
        message: null
        }
    },
    methods: {
        // sends me an email with the information supplied
        sendEmail(e) {
            console.log('sending email')
        try {
            emailjs.sendForm('service_tkt6spc', 'template_b04s9g2', e.target,
            'user_Xwa1ypJ5JyG6NVsWgu1MO', {
            name: this.name,
            email: this.email,
            message: this.message
            })
            alert('Message delivered')

        } catch(error) {
            console.log({error})
        }
        // Reset form field
        this.name = null,
        this.email = null,
        this.message = null
        },
        // validates form content
        validateForm(e){
            this.errors = [];
            const regex = /^[A-Za-z]+$/;
            const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!this.name || this.name.length < 2) {
                this.errors.push("Name required. Please check for more than 1 character.");
                e.preventDefault();
                return;
            } if (!this.name.match(regex)) {
                 this.errors.push("Please ensure the name contains letters only.");
                 e.preventDefault();
                 return;
            } if (!this.email) {
                this.errors.push('Email required.');
                e.preventDefault();
                return;
            } if (!this.email.match(emailRegex)){
                this.errors.push('Please enter valid email.');
                e.preventDefault();
                return;     
            } if (!this.message){
                this.errors.push('Please enter brief message.');
                e.preventDefault();
                return; 
            } if (!this.errors.length) {
                console.log('sending')
                e.preventDefault();
                this.sendEmail(e);
            }
            }
        }
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