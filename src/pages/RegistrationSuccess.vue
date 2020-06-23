<template>
  <div>
    <div class="container-style">
      <div>
        <img :src="url" class="success-img" width="700px" height="auto" />
        <div class="text-center font-weight-bold">
            <p style="color: #2e4b64; font-size: 24px;">You have been successfully registered. :)</p>
            <p style="color: #2e4b64; font-size: 21px;">Thank you for being awesome!</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url:
        "https://cdn.dribbble.com/users/1498143/screenshots/5415135/onboarding-icons-05.png"
    };
  }
};
</script>
<style>
.container-style {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>