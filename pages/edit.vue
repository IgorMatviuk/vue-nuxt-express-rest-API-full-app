<template>
  <div>
    <div>
      <table class="table table-striped table-bordered">
        <thead>
            <tr>
                <th>id</th>
                <th>Продукт</th>
                <th>Цена</th>
                <th>Валюта</th>
                <th>Удалить</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(product, index) in productsGet" :key="index">
                <td>{{product.id}}</td>
                <td>{{product.name}}</td>
                <td>{{product.price}}</td>
                <td>{{product.currency}}</td>
                <td><b-btn class="btn-danger" @click="remove(product.id)">Удалить</b-btn></td>
            </tr>
        </tbody>
      </table>   
    </div>  
    <div></div>
    <div>
      <h2>Создать новый товар</h2>
      <form @submit.prevent="createProduct()" class="form-group">
          <div class="col-sm-3">
            <label>id (Поле обязательно к заполнению):</label>
            <input type="text" class="form-control" v-model="id">
          </div>
          <div class="col-sm-3">
            <label>Имя:</label>
            <input type="text" class="form-control" v-model="name">
          </div>
          <div class="col-sm-3">
            <label>Цена:</label>
            <input type="text" class="form-control" v-model="price">
          </div>
          <div class="col-sm-3">
            <label>Валюта:</label>
            <select type="text" class="form-control" v-model="currency">
              <option>₴</option>
              <option>₽</option>
              <option>$</option>
              <option>€</option>
              <option>₿</option>
            </select>
          </div>
          <div class="col-sm-3">
            <label>Короткое описание:</label>
            <input type="text" class="form-control" v-model="titleDescription">
          </div>
          <div class="col-sm-3">
            <label>Полное описание:</label>
            <textarea type="text" class="form-control"  v-model="fullName"/>
          </div>
          <button type="submit" class="btn btn-success col-sm-3 b-button-custom">Создать товар</button>
      </form>    
    </div>
  </div>
</template>

<script>
export default {
  //Отобразить
    async fetch({store}) {
    await store.dispatch('products/fetch')
  },
  data() {
    return {
      id: '',
      name: '',
      price: '',
      titleDescription: '',
      currency: '',
      fullName: ''
    }
  },
  methods: {
    // Создать товар
    async createProduct () {
      const data = {
        id: this.id,
        name: this.name,
        price: this.price,
        fullName: this.price,
        titleDescription: this.titleDescription,
        currency: this.currency
      }
      await this.$store.dispatch('products/create', { data })
      this.id = ''
      this.name = ''
      this.fullName= ''
      this.price = ''
      this.titleDescription = ''
      this.currency =''
    },
    //удаление по "id"
    async remove(id) {
      await this.$store.dispatch('products/delete', { id }),
      location.reload();

    },
    //Локальный вывод созданного продукта
    setProducts(){
      this$store.commit('products/setProducts')
    }
  }, 
  computed: {
    productsGet() {
      return this.$store.getters['products/products']
    },
  }
}
</script>

<style>
  .b-button-custom{
    margin-top: 10px;
  }
</style>