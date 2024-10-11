<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {ref} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Whastapp from './components/Whastapp.vue';
const lapsoM = ref(true)
const linksM = ref(false)
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
      <li ><RouterLink style="color: white;"  to="/about">Terminos y condiciones</RouterLink></li>
      <li><a style="color: white;" target="_blank"href="https://www.instagram.com/ginojmm17?igsh=YmtjOHlqcWxpYXYz"><Whastapp/></a></li>
      <li></li>
    </ul>
    </div>
  </header>
  <div class="clases">
    <div class="links">
      <ul class="ulL" style="list-style: decimal-leading-zero;" v-if="lapsoM == true"> 
        <li @click="()=>{
          lapsoM = false;
           linksM = true;
        }" style="color:coral; border: none;
  font-weight: bold;
  font-size: 20px;
  list-style:decimal-leading-zero;"> Lapso  </li>
  
        <li  @click="()=>{
          
        }" style="color:gray; border: none;
  font-weight: bold;
  font-size: 20px;
  list-style:decimal-leading-zero;"> Lapso  </li>
    
    <li  @click="()=>{
         
        }" style="color:gray; border: none;
  font-weight: bold;
  font-size: 20px;
  list-style:decimal-leading-zero;"> Lapso  </li>
      </ul>
      
       <ul class="ulL"  v-if="linksM == true" >
        <p v-if="linksM == true" @click="()=>{
          lapsoM = true;
           linksM = false;
        }" style="color:coral; border: none;
  font-weight: bold;
  font-size: 20px;
  "> < </p>
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
       <ul class="ulL" style="list-style: decimal-leading-zero;" v-if="mateM == false">
        <p class="btnS" @click="()=>{
          mateM = true;
          linksM = true;
        }"><</p>
        <li class="matematica"> <RouterLink class="matematica" to="/">Clase</RouterLink>
          </li>
        <li class="matematica"><RouterLink class="matematica" to="/about">Clase</RouterLink></li>
        <li class="matematica"><RouterLink class="matematica" to="/about">Clase</RouterLink></li>

       </ul>
       <ul class="ulL" style="list-style: decimal-leading-zero;" v-if="fisicaM == false">
        <p style="  background: none;
  border: none;
  color: black;
  font-weight: bold;
  font-size: 20px;
  " @click="()=>{
          fisicaM = true;
          linksM = true;
        }"><</p>
        <li class="fisica"> <RouterLink class="fisica" to="/">Clase</RouterLink>
          </li>
        <li class="fisica"><RouterLink class="fisica" to="/about">Clase</RouterLink></li>
        <li class="fisica"><RouterLink class="fisica" to="/about">Clase</RouterLink></li>

       </ul>
       <ul class="ulL" style="list-style: decimal-leading-zero;" v-if="quimicaM == false">
        <p style="  background: none;
  border: none;
  color: blue;
  font-weight: bold;
  font-size: 20px;
" @click="()=>{
          quimicaM = true;
          linksM = true;
        }"><</p>
        <li class="quimica"> <RouterLink class="quimica" to="/">Clase</RouterLink>
          </li>
        <li class="quimica"><RouterLink class="quimica" to="/about">Clase</RouterLink></li>
        <li class="quimica"><RouterLink class="quimica" to="/about">Clase</RouterLink></li>

       </ul>
       <ul class="ulL" style="list-style: decimal-leading-zero;" v-if="literaturaM == false">
        <p style="  background: none;
  border: none;
  color: brown;
  font-weight: bold;
  font-size: 20px;
  " @click="()=>{
          literaturaM = true;
          linksM = true;
        }"><</p>
        <li class="literatura"> <RouterLink class="literatura" to="/">Clase</RouterLink>
          </li>
        <li class="literatura"><RouterLink class="literatura" to="/about">Clase</RouterLink></li>
        <li class="literatura"><RouterLink class="literatura" to="/about">Clase</RouterLink></li>

       </ul>
       <ul class="ulL" style="list-style: decimal-leading-zero;" v-if="ghcM == false">
        <p style="  background: none;
  border: none;
  color: red;
  font-weight: bold;
  font-size: 20px;
  " @click="()=>{
          ghcM = true;
          linksM = true;
        }"><</p>
        <li class="ghc"> <RouterLink class="ghc" to="/">Clase</RouterLink>
          </li>
        <li class="ghc"><RouterLink class="ghc" to="/about">Clase</RouterLink></li>
        <li class="ghc"><RouterLink class="ghc" to="/about">Clase</RouterLink></li>

       </ul>
       <ul class="ulL" style="list-style: decimal-leading-zero;" v-if="ciM == false">
        <p style="  background: none;
  border: none;
  color: chocolate;
  font-weight: bold;
  font-size: 20px;
  " @click="()=>{
          ciM = true;
          linksM = true;
        }"><</p>
        <li class="ci"> <RouterLink class="ci" to="/">Clase</RouterLink>
          </li>
        <li class="ci"><RouterLink class="ci" to="/about">Clase</RouterLink></li>
        <li class="ci"><RouterLink class="ci" to="/about">Clase</RouterLink></li>

       </ul>
       <ul class="ulL" style="list-style: decimal-leading-zero;" v-if="edufM == false">
        <p style="  background: none;
  border: none;
  color: cadetblue;
  font-weight: bold;
  font-size: 20px;
  list-style: none;" @click="()=>{
          edufM = true;
          linksM = true;
        }"><</p>
        <li class="edufisica"> <RouterLink class="edufisica" to="/">Clase</RouterLink>
          </li>
        <li class="edufisica"><RouterLink class="edufisica" to="/about">Clase</RouterLink></li>
        <li class="edufisica"><RouterLink class="edufisica" to="/about">Clase</RouterLink></li>

       </ul>
    </div>
  </div>
<main>
  <RouterView />
</main>
 <footer>
   <h3 style="color: black; font-weight: bold;">@Todo los derechos de autor a <span style="color: hsla(160, 100%, 37%, 1); font-weight: bold;">Gino Martinez</span></h3>
 </footer>
</template>

<style scoped>
@media screen and (min-width: 1024px) {
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

@media screen and (min-width: 300px) {
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
background-color: gray;
display: flex;
align-items: center;
justify-content: center;

border-top: 3px solid hsla(160, 100%, 37%, 1);
}
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
