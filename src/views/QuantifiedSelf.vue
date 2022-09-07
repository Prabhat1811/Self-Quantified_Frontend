<template>
  <main class="main-page">

    <div class="container">
      <h1 class="Qself">Quantified-Self</h1>
      <h2>Welcome to Quantified Self</h2>
      <h4><span class="auto-type"></span></h4>
    </div>

  </main>
</template>

<script>
  // import { VueTyper } from 'vue-typer'
  import Typed from 'typed.js'

  export default {
    mounted() {
      new Typed('.auto-type', {
        strings: [
          'This is where it all starts', 
          'This is where it all ends',
          'Add trackers',
          'Log Trackers',
          'Remove trackers by a single click',
          'All while automatically syncing with the database',
          'This is NOT your regular tracker',
          'This is NOT your regular tracker',
          'This is <strong>QUANTIFIED-SELF</strong>',
          'This is <strong>QUANTIFIED-SELF</strong>',
          'This is <strong>QUANTIFIED-SELF</strong>'
        ],
        typeSpeed: 20,
        backSpeed:15,
        loop:true
      });
    }
  }
</script>

<style lang="scss" scoped>

  .main-page{
    min-height: 100vh;
    min-width: 100vw;
    max-width: 100vw;

    padding: 0 0;
    margin-top: auto;
    background-color: #fff;

    .container{
      font-size: 25px;
      color: white;
      // background-color: #2b323c;
      background-color: black;
      min-height: 100vh;
      min-width: 100vw;
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      user-select: none;

      .Qself{
        font-size: 80px;
        font-weight: 600;

        // background-image: linear-gradient(90deg, red, blue);
        // background-clip: text;
        // color: transparent;
        background: -webkit-linear-gradient(45deg, red, blue);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

    }


  }
  
  </style>