<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="formInfo.email"
        :rules="emailRules"
        label="E-mail"
        required
        :counter="20"
      ></v-text-field>

      <v-text-field
        v-model="formInfo.passWord"
        :counter="20"
        :rules="passWordRules"
        label="PassWord"
        required
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        @click:append="show1 = !show1"
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

      <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
    </v-form>
  </div>
</template>

<script>
import { setLStorage, getLStorage } from "../utils/authToken";

export default {
  name: "Login",
  data: () => ({
    valid: true,
    formInfo: {
      passWord: "",
      email: ""
    },
    passWordRules: [
      v => !!v || "passWord is required",
      v => (v && v.length >= 6) || "Name must be less than 6 characters"
    ],
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
    this.formInfo.email = getLStorage("email");
    //this.formInfo.passWord = getLStorage("passWord");
    // if (this.formInfo.email === undefined || this.formInfo.email == null || this.formInfo.email === "")
    //   this.formInfo.email = "qq@qq.ccc";
    // if (this.formInfo.passWord === undefined || this.formInfo.passWord == null)
    //   this.formInfo.passWord = "123456";
  },

  methods: {
    validate() {
      var valid = this.$refs.form.validate();
      return valid;
    },
    submitForm() {
      if (this.validate()) {
        this.loading = true;
        this.$store
          .dispatch("Login", this.formInfo)
          .then(() => {
            this.loading = false;
            setLStorage("email", this.formInfo.email);
            //setLStorage("passWord", this.formInfo.passWord);
            this.$router.push({ path: "/creative" });
          })
          .catch(error => {
            this.loading = false;
            console.log(error);
          });
      }
    },
    reset() {
      this.$refs.form.reset();
    }
    // resetValidation() {
    //   this.$refs.form.resetValidation();
    // }
  }
};
</script>
