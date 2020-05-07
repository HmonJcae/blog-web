<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="formInfo.email"
        :rules="emailRules"
        label="E-mail"
        required
        :counter="30"
      ></v-text-field>

      <v-text-field
        v-model="formInfo.passWord"
        :counter="20"
        type="password"
        :rules="passWordRules"
        label="PassWord"
        required
      ></v-text-field>
      <v-text-field
        v-model="cPassWord"
        :counter="20"
        type="password"
        :rules="cPassWordRules"
        label="Confirm Password"
        required
      ></v-text-field>

      <!-- 选项框<v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select>-->

      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="submitForm"
        :loading="loading"
        >submit</v-btn
      >
    </v-form>
  </div>
</template>

<script>
import { setLStorage } from "../utils/authToken";
import { register } from "../api/login";

export default {
  name: "Register",
  data: () => ({
    valid: true,
    formInfo: {
      passWord: "",
      email: ""
    },
    passWordRules: [
      v => !!v || "passWord is required",
      v => (v && v.length >= 6) || "Password must be less than 6 characters"
    ],
    cPassWord: "",
    cPassWordRules: [],
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: true,
    show1: false,
    loading: false
  }),
  created() {
    // this.formInfo.email = "qq@qq.ccc";
    // this.formInfo.passWord = "123456";
    // this.cPassWord= "123456"
  },

  methods: {
    validate() {
      var valid = this.$refs.form.validate();
      return valid;
    },
    submitForm() {
      if (this.validate()) {
        this.loading = true;
        const userName = this.formInfo.email.trim();
        register(userName, this.formInfo.passWord)
          .then(response => {
            console.log("Register:" + response);
            setLStorage("email", response.userName);
            this.$store.commit("showSnackBar", {
              text: "注册成功",
              color: "success"
            });
            this.$router.push({ path: "/login" });
            this.loading = false;
          })
          .catch(() => {
            this.loading = false;
          });
      }
    }
  },
  mounted: function() {
    this.cPassWordRules = [
      v =>
        v === this.formInfo.passWord ||
        "Confirm Password need to be consistent with the Password"
    ];
  }
};
</script>
