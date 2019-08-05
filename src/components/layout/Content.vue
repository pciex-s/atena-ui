<template>
  <content>
    <router-view></router-view>
  </content>
</template>

<script>
export default {
  name: "Content",
};
</script>

<style>
content {
  padding: 20px;
  grid-area: content;
  background-color: #e4e5e6;
}
</style>
