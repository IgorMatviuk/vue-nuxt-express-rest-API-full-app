<template>
  <div>
    <div class="product-cards">
      <div v-for="(product, index) in products" :key="index">
        <div class="product-cards__card">
          <div class="product-cards__card__container">
            <div>
              <div class="product-cards__card__container__title">
                <nuxt-link :to="{ name: 'products-id', params: { id: index }}">
                  {{ product.name }}
                </nuxt-link>
              </div>
              <div class="product-cards__card__container__titleDescription">
                <p>{{ product.titleDescription }}</p>
              </div>
            </div>
            <div>
              <div class="product-cards__card__container__price">
                <div><p>Цена:</p></div>
                <div>{{ product.price }} {{ product.currency }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
    components: {
  },
    async fetch({store}) {
    await store.dispatch('products/fetch')
  },
    computed: {
    products() {
      return this.$store.getters['products/products']
    }
  },
}
</script>

<style scoped lang="scss">
.product-cards{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 100%;
  &__card{
    display: flex;
    background-color:#ecf0f1;
    color: #34495e;
    box-shadow: 0 0 10px rgba(0,0,0,0.5); 
    width: 200px;
    height: 300px;
    margin: 10px 10px 10px 10px;
    &__container{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 10px 10px 0px 10px;
      &__title{
        display: flex;
        font-size: 30px;
      }
      &__titleDescription{
        display: flex;
        font-size: 15px;
      }
      &__price{
        display: flex;
        font-size: 30px;
        justify-content: space-between;
        &__currency{
          display: flex;
          font-size: 30px;
        }
      }
    }
  }
  .router-link{
    text-decoration: none;
}
}
</style>