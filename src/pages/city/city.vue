<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :cities="cities"
      :hotCities="hotCities"
      :letter="letter"
    ></city-list>
    <city-alphabet
      :cities="cities"
      @change="keyChange"
    ></city-alphabet>
  </div>
</template>

<script>
  import axios from 'axios'
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList from './components/List'
  import CityAlphabet from './components/Alphabet'
    export default {
        name: "City",
      components : {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
      },
      data (){
        return{
          cities:{},
          hotCities:[],
          letter:''
        }
      },
      mounted() {
          this.getCityInfo()
      },
      methods: {
        getCityInfo : function () {
          axios.get('/api/city.json')
            .then(this.getCityInfoMsg)
        },
        getCityInfoMsg (res){
          res = res.data;
          if(res.ret && res.data){
            const data = res.data;
            this.cities = data.cities;
            this.hotCities = data.hotCities;
          }
        },
        keyChange (letter){
          this.letter = letter
        }
      },

    }
</script>

<style lang="stylus" scoped>

</style>
