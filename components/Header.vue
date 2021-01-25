<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="dark" >
    <b-navbar-brand href="#">Vue(nuxt)-express REST API</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
          <nuxt-link to="/">
            Главная
          </nuxt-link>
          <nuxt-link to="/edit">
            Редактировать
          </nuxt-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {

}
</script>

<style>
.nuxt-link-exact-active{
  color: #ecf0f1;
  margin-left: 15px;
}
.nuxt-link-active{
  color: #ecf0f1;
  margin-left: 15px;

}
</style>