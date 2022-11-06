<template>
  <div>
    <div class="text-center">Welcome</div>
    <div id="username_display" class="display-6">{{ this.email }}</div>
    <button id="sign_out" class="mt-4 btn btn-danger" @click="signOut">
      Logout
    </button>
    
  </div>

   <div>
    <button id="calculate" class="mt-4 btn btn-danger" @click="moveToRegister">
      calculate
    </button>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";

const auth = getAuth();

export default {
  data() {
    return {
      name: auth.currentUser.email,
    };
  },
  methods: {
    signOut() {
      auth
        .signOut()
        .then(() => {
          console.log("Sign Out completed");
          this.$router.push("/");
        })
        .catch((error) => console.log(error));
    },
     moveToRegister() {
     this.$router.push("/calculate");
    },
  },
};
</script>
