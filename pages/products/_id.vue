<template>
  <div class="card text-center">
    <div class="card-header">
    {{ product.name }}
    </div>
    <div class="card-body">
      <div>{{ product.fullName }}</div>
      <div>{{ product.titleDescription }}</div>
      <div class="row justify-content-center">
        <div>{{ product.price }}</div>
        <div>{{ product.currency }}</div>
      </div>
      <div>Код подукта: {{ product.id }}</div>
    </div>
    <div class="card-footer text-muted">
    <nuxt-link class="btn btn-primary" to="/">На главную</nuxt-link>
  </div>
</div>
</template>
{{{{/raw}}}}

<script>
export default {
  async asyncData({store, params}) {
    const product = await store.dispatch('products/fetchById', params.id)
    return {product}
  },

  head () {
    return {
      title: `${this.product.name}`
    }
  }

}
</script>
