<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
    body{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin: 0;
    }

    figcaption{
        font-style: italic;
        color: lightgrey;
        font-size: 12px;
    }

    h1{
        color: gold;
        font-size: 35px;
    }

    h2{
        font-size: 28px;
    }

    p, a, button, span{
        font-size: 20px;
        text-decoration: none;
        color: lightgray;
        line-height: 1.7;
    }

    p{
        padding: 10px;
    }

    nav > a, button, .resume {
        text-transform: uppercase;
        text-decoration: none;
        background-color: black;
        padding: 20px;
        border-radius: 10px;
        margin: 10px;
        flex-grow: 1;
        text-align: center;
    }

    a:visited, button:visited{
        color: lightblue;
    }

    a:hover, button:hover{
        color: gold;
        transform: rotate(1deg);
        cursor: pointer;
    }

    nav{
        display: flex;
        flex-direction: column;
    }
   
    .container{
        display: flex;
        flex-direction: row;
    }

    button.menu  {
        background-color: transparent;
        display: none;
        visibility: hidden;
    }


    figure {
        animation-duration: 1.5s;
        animation-name: slidein;
        }

    @keyframes slidein {
    from {
        margin-left: 100%;
    }

    to {
        margin-left: 20%;
    }}

    #hamburger{
        display: none;
    }

    .leftSidebar{
        flex-direction: column;
        width: 200px;
        padding: 20px;
        background-color: #618abb;
        text-align: center;
    }

    .list a{
    text-decoration: none;
    color: white;
    }

    .list a:hover{
        color: gold;
    }

    .list a:visited{
        color: silver;
    }

    .right img, video{
        max-height: 400px;
    }

    .right{
        flex-direction: column;
        flex-grow: 1;
        padding: 40px;
        background-image: url(assets/blackTexture.jpg);
        background-attachment: fixed;
        text-align: center;
        color: gainsboro;
        line-height: 1.7;
    }

@media screen and (max-width: 992px) {

    form{
        width: 80%;
    }
    
    table{
        margin: 0 auto;
        font-size: 12px;
    }

    .th{
        text-transform: uppercase;
        font-size: 12px;
        padding: 3px;
        border-bottom: solid 1px white;
    }

    td{
        padding: 3px;
        border: solid lightcyan 1px;
    }

    .container{
        flex-direction: column;
    }

    .leftSidebar{
        width: inherit;
    }

    #name-title {
        display: none;
    }

    nav{
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        background-color: #618abb;
    }
   
    nav a{
        text-transform: uppercase;
        color: white;
        text-decoration: none;
        background-color: black;
        border-radius: 10px;
        padding: 5px;
        font-size: 16px;
    }

    .portfolio h2{
        font-size: 20px;
    }


    .right img, video{
        max-width: 100%;   
    }

    .right{
        padding: 10px;
    }
}

@media screen and (max-width: 414px) {
  
    button.menu  {
        background-color: transparent;
        visibility: visible;
        display: flex;
        margin: auto;
        padding: 5px;
        border: none;
    }

    nav{
       display: none;
        position: absolute;
        top: 80px;
        left: 25%;
        flex-direction: column;
        width: 50%;
        margin: auto;
        border-radius: 10px;
    }
  
    #hamburger{
        display:block;
        margin: auto;
        position: relative;
    } 

    .leftSidebar{
        padding: 5px;
    }

    .nav a{
        font-size: 16px;
    }

    .portfolio a{
        max-width: 80%;
    }
}

</style>