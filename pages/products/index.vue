<template>
  <section class="container">
    <div>
      <Logo />
      <h1 class="title">
    
      </h1>
      <ul class="users">
        <li v-for="(product, index) in products" :key="index" class="user">
          <nuxt-link :to="{ name: 'products-id', params: { id: index }}">
            {{ product.name }}
          </nuxt-link>
        </li>
      </ul>
      <nuxt-link class="button" to="/">
        Homepage
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ $http }) {
    const data = await $http.$get('/api/products')
    return { products: data }
  },
  head () {
    return {
      title: 'Products'
    }
  }
}
</script>