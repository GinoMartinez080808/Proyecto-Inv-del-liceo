<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {ref} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Whastapp from './components/Whastapp.vue';
const linksM = ref(true)
const mateM = ref(true)
const fisicaM = ref(true)
const quimicaM = ref(true)
const literaturaM = ref(true)
const ciM = ref(true)
const ghcM = ref(true)
const edufM = ref(true)

function mostrarM(){
 
}
function mostrarF(){
 
}
function mostrarQ(){
 
}
function mostrarL(){
 
}
function mostrarC(){
 
}
function mostrarGHC(){
 
}
function mostrarEduF(){
 
}

</script>

<template>
  <header>
    <div class="logo">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    </div>
   
    <div class="info">
    <ul class="ulI">
      <li>Terminos y condiciones</li>
      <li><Whastapp/></li>
      <li></li>
    </ul>
    </div>
  </header>
  <div class="clases">
    <div class="links">
       <ul class="ulL"  v-if="linksM == true" >
        <li v-if="linksM == true" @click="()=>{
           mateM = false;
           linksM = false;
        }" class="matematica">Matematica</li>
        <li v-if="linksM == true" @click="()=>{
           fisicaM = false;
           linksM = false;
        }" class="fisica">Fisica</li>
        <li v-if="linksM == true" @click="() =>{
           quimicaM = false;
           linksM = false;
        }" class="quimica">Quimica</li>
        <li v-if="linksM == true" @click="()=>{
 literaturaM = false;
 linksM = false;
        }" class="literatura">Literatura</li>
        <li v-if="linksM == true" @click="()=>{
           ciM = false;
           linksM = false;
        }" class="ci">Ciencia de la tierra</li>
        <li v-if="linksM == true" @click="()=>{
 ghcM = false;
 linksM = false;
        }" class="ghc">GHC</li>
        <li v-if="linksM == true" @click="()=>{ edufM = false;
   linksM = false;} " class="edufisica">Edu Fisica</li>
       </ul>
       <ul class="ulL" v-if="mateM == false">
        <li class="btnS" @click="()=>{
          mateM = true;
          linksM = true;
        }"><</li>
        <li class="matematica"> <RouterLink class="matematica" to="/">Clase</RouterLink>
          </li>
        <li class="matematica"><RouterLink class="matematica" to="/about">Clase</RouterLink></li>
        <li class="matematica"><RouterLink class="matematica" to="/about">Clase</RouterLink></li>

       </ul>
       <ul class="ulL" v-if="fisicaM == false">
        <li class="btnS" @click="()=>{
          fisicaM = true;
          linksM = true;
        }"><</li>
        <li class="fisica"> <RouterLink class="fisica" to="/">Clase</RouterLink>
          </li>
        <li class="fisica"><RouterLink class="fisica" to="/about">Clase</RouterLink></li>
        <li class="fisica"><RouterLink class="fisica" to="/about">Clase</RouterLink></li>

       </ul>
    </div>
  </div>
<main>
  <RouterView />
</main>
 <footer>

 </footer>
</template>

<style scoped>
@media (min-width: 1024px) {
header { grid-area: header; 
  background: hsla(160, 100%, 37%, 1);
  display: flex;
  align-items: center;
  flex-direction: row;
  
}
.matematica{
  color: green;
  font-weight: bolder;
  list-style:decimal-leading-zero ;
   
}
.quimica{
  color: blue;
  font-weight: bolder;
  list-style:decimal-leading-zero ;
   
}
.fisica{
  
  color: black;
  font-weight: bolder;
  list-style:decimal-leading-zero ;
   
}
.ghc{
  color: red;
  font-weight: bolder;
  list-style:decimal-leading-zero ;
   
}
.literatura{
  color:brown;
  font-weight: bold;
  list-style:decimal-leading-zero ;
   
}
.ci{
  color:chocolate;
  font-weight: bolder;
  list-style:decimal-leading-zero ;
   
}
.edufisica{
  color:cadetblue;
  font-weight: bolder; 
  list-style:decimal-leading-zero;
   
}
li:hover{
  cursor: pointer;
  font-weight: bolder;
}

.btnS{
  background: none;
  border: none;
  color: green;
  font-weight: bold;
  font-size: 20px;
  list-style: none;
}

.ulI{
height: 100%;
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: row;
font-size: 22px;
list-style: none;
}
.clases { grid-area: clases; 
display: flex;
justify-content: center;
align-items: center;}

main { grid-area: main; 
display: flex;
justify-content: center;
align-items: center;}

footer { grid-area: footer; 
background-color: gray;}
.logo{
  width: 30%;
  height: 100%;
}
.info{
  width: 70%;
  height: 100%;
}
}

@media (min-width: 400px) {
header { grid-area: header; 
  background: hsla(160, 100%, 37%, 1);
  display: flex;
  align-items: center;
  flex-direction: row;
  
}
.matematica{
  color: green;
  font-weight: bolder;
 
   
}
.quimica{
  color: blue;
  font-weight: bolder;
  
   
}
.fisica{
  
  color: black;
  font-weight: bolder;

   
}
.ghc{
  color: red;
  font-weight: bolder;
 
   
}
.literatura{
  color:brown;
  font-weight: bold;
 
   
}
.ci{
  color:chocolate;
  font-weight: bolder;
  
   
}
.edufisica{
  color:cadetblue;
  font-weight: bolder; 
  
   
}
li:hover{
  cursor: pointer;
  font-weight: bolder;
}

.btnS{
  background: none;
  border: none;
  color: green;
  font-weight: bold;
  font-size: 20px;
  list-style: none;
}

.ulI{
height: 100%;
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: row;
font-size: 22px;
list-style: none;
}
.clases { grid-area: clases; 
display: flex;
justify-content: center;
align-items: center;
}

main { grid-area: main; 
display: flex;
justify-content: center;
align-items: center;}

footer { grid-area: footer; 
background-color: gray;}
.logo{
  width: 30%;
  height: 100%;
}
.info{
  width: 70%;
  height: 100%;
}
}
</style>
