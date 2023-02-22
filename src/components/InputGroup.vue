<template>
<div class="custom-input-group">
  <label>이름</label>
  <input type="text">
</div>
</template>

<script>
export default {
  name: "InputGroup"
}
</script>

<style lang="scss">
.custom-input-group {
  display: flex;
  flex-direction: column;
  label {
    font-weight: bold;
    margin-bottom: 8px;
  }
  input {
    border: 1px solid #6C6C6C;
    height: 45px;
    padding: 10px 20px;
    box-sizing: border-box;
    font-size: 16px;
  }
}
</style>