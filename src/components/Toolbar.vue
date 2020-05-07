<template>
  <div>
    <v-app-bar text app>
      <v-navigation-drawer v-model="drawer" app class="d-md-none">
        <v-list dense>
          <v-list-item to="/">
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      />
      <v-container mx-auto py-0>
        <v-layout>
          <v-img
            :src="require('@/assets/logo.png')"
            class="mr-5"
            contain
            height="48"
            width="48"
            max-width="48"
          />
          <v-btn class="ml-0 hidden-sm-and-down" height="48" to="/">Home</v-btn>
          <v-btn class="ml-0 hidden-sm-and-down" height="48" to="/Creative">
            Creative
          </v-btn>
          <v-btn
            class="ml-0 hidden-sm-and-down"
            height="48"
            @click="loginState()"
            >{{ loginInfo }}</v-btn
          >

          <!-- <v-btn class="ml-0 hidden-sm-and-down"  height="48" >Button</v-btn>
          <v-btn class="ml-0 hidden-sm-and-down"  height="48" @click="a">Button</v-btn>-->
          <v-spacer />
          <v-text-field
            append-icon="mdi-magnify"
            flat
            hide-details
            solo-inverted
            style="max-width: 300px;"
          />
        </v-layout>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  }),
  computed: {
    loginInfo: function() {
      let name = this.$store.state.user.name;
      if (name === "" || name === undefined || name === null)
        return "login/register";
      return name;
    }
  },
  methods: {
    loginState() {
      let token = this.$store.state.user.token;
      if (token === "" || token === undefined) {
        this.$router.push({ path: "/login" });
      } else {
        this.$store.dispatch("LogOut").then(() => {
          this.$store.commit("showSnackBar", {
            text: "注销成功",
            color: "success"
          });
        });
      }
    }
  }
};
</script>
