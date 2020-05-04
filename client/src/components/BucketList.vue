<template lang="html">
  <div id="favourite_countries">
    <h2>Bucket List</h2>
    <ul>
      <li v-for="country in bucketList" :class=" country.visited ? 'visited': 'non-visited'">{{country.name}} <img class="small-flag" :src="country.flag" />
        <button v-if="!country.visited"v-on:click="updateList(country)">Visit!</button>
         <button type="button" class="delete-btn" v-on:click="deleteCountry(country)"></button></li>
    </ul>
  </div>
</template>

<script>

import { eventBus } from '@/main.js'
import BucketService from "@/services/BucketService.js"
export default {
  name: 'bucket-list',
  props: ['bucketList'],
  methods: {
    updateList(country){
      const updateCountry = {
        name: country.name,
        flag: country.flag,
        visited: true}
        BucketService.updateBucketList(country._id, updateCountry)
        .then((place) => eventBus.$emit('country-updated', place ))
},
  deleteCountry(country){
      BucketService.deleteCountry(country._id)
      .then(() => eventBus.$emit('country-deleted', country._id))
    },

  }
}
</script>

<style lang="css" scoped>
.visited{
  border-style: double
}
.delete-btn {
   width: 20px;
   height: 20px;
   background: url(../assets/delete.png);
   background-size: 20px;
   border: none;
   padding: 0;
   border-radius: 5px;
 }
</style>
