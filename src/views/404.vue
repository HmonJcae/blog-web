<template>
  <div>
    <a href="/api/swagger-ui.html"><h1>swagger接口文档</h1></a>
    <img :src="img_404" />
  </div>
</template>

<script>
import img_404 from "@/assets/404.png";
export default {
  name: "wrongpage",
  data() {
    return {
      img_404
    };
  }
};
</script>
