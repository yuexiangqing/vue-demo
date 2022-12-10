<template>
      <div>
         <h2>Home组件内容</h2>
         <div>
           <ul class="nav nav-tabs">
             <li>
               <router-link class="list-group-item " active-class="active" to="/home/news">News</router-link>
             </li>
             <li>
               <router-link class="list-group-item " active-class="active" to="/home/message">Message</router-link>
             </li>
           </ul>
           <!-- 这样就会保存缓存,这里要缓存的名字，是组件名，就是name后跟的-->
           <!-- 缓存一个 -->
           <keep-alive include="NewsIndex">

            <!-- 如果要缓存多个 -->
           <!-- <keep-alive :include="['NewsIndex','Message']"> -->
            <router-view></router-view>
           </keep-alive>
          
         </div>
      </div>
  </template>
  
  <script>
  export default {
  name: 'HomeIndex'
  }
  </script>
  
  <style>
  
  </style>