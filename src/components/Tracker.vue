<template>
  <a href="#" class="card">
    <div class="heading">
      <h6>{{ tracker.name }}</h6>
      <button type="button" class="btn-close" aria-label="Close"></button>
    </div>

    <div>
      description: {{ tracker.description }}
    </div>


  </a>
</template>


<script>

export default {
  name: "Tracker",
  props: ['tracker']
}
</script>


<style lang="scss" scoped>

  .card{
    display: flex;
    // background-color: #FFF5F7;
    margin: 1rem;
    padding: 1rem;
    min-width:15rem;

    .heading{
      display: flex;
      flex-direction: row;
      
      button{
        margin-left: auto;
      }
    }
  }

</style>