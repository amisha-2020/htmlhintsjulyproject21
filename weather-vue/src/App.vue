<template>
<div class="card col-4 mx-auto bg-image" v-if="visible">
    <div class="card-body">
      <h5 class="card-title text-white">{{city}}</h5>
      <h6 class="card-subtitle mb-2" >{{country}}</h6>
      <h1 class="text-white">{{temp}}°C</h1>
    </div>
</div>
<div v-else>
  <p>Loading...</p>
</div>
</template>
<script>
export default {
  name: 'App',
   components:{
   },
  data(){
    return{
      city:'Not',
      country:'uk',
      temp:0,
      visible:false
     }
  },
created(){
     fetch('https://api.openweathermap.org/data/2.5/weather?q=Delhi,in&appid=f9516fc8fc236162043c8d8d1e388dab&units=metric')
     .then((response)=>response.json())
     .then(data=>(this.city=data.name, this.country=data.sys.country, this.temp=data.main.temp,this.visible=true))
     
     },
}
</script>

<style>
.bg-image
{
  background-image: url('https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
  background-repeat: no-repeat;
  background-size: cover;
  height:80vh;
  width:60vw;
}
h1
{
    position:absolute;
    bottom: 0;
    right:15px;
}
h5
{
  font-size: 50px;
}
h6
{
    font-size:30px;
  color:black;
}

</style>
