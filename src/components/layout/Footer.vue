<template>
  <footer>
    <span>Developed by Henrique.</span>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
footer {
  display: flex;
  align-items: center;
  padding: 10px;
  grid-area: footer;
  background-color: #f0f3f5;
}

footer span {
  font-size: 0.875rem;
}
</style>
