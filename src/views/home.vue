<template>
    <div class="home">
        这是{{page}}页面
    </div>
</template>
<style>
.home{
  font-size: 22px;
}
</style>
<script>
    module.exports = {
        data: function () {
            return {
                page: 'home'
            }
        }
    }
</script>
