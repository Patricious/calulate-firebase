<template>
  <div class="container">
    <form @submit.prevent="register">
      <h2 class="mb-3">Register</h2>
      
      <div class="input">
        <label for="name"> Name</label>
        <input
          class="form-control"
          type="name"
          name="name"
          placeholder="Name"
        />
      </div>
      <div class="input">
        <label for="surname">Surname</label>
        <input
          class="form-control"
          type="surname"
          name="surname"
          placeholder="Surname"
        />
      </div>
      <div class="input">
        <label for="email">Email address</label>
        <input
          class="form-control"
          type="text"
          name="email"
          placeholder="email@adress.com"
        />
      </div>
      <div class="input">
        <label for="password">Password</label>
        <input
          class="form-control"
          type="password"
          name="password"
          placeholder="password123"
        />
      </div>

      <div class="alternative-option mt-4">
        Already have an account? <span @click="moveToLogin">Login</span>
      </div>

      <button type="submit" id="register_button" class="mt-4 btn-pers">
        Register
      </button>
      <div
        class="alert alert-warning alert-dismissible fade show mt-5 d-none"
        role="alert"
        id="alert_2"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </form>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import firebase from "firebase";
import "firebase/firestore";

export default {
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      password: "123456",
    };
  },
  methods: {
    register(submitEvent) {
      // data update
      this.name = submitEvent.target.elements.name.value;
      this.surname = submitEvent.target.elements.email.value;
      this.email = submitEvent.target.elements.email.value;
      this.password = submitEvent.target.elements.password.value;

      // firebase registration
      const auth = getAuth();
      createUserWithEmailAndPassword(
        auth,
        this.email,
        this.password,
        this.name,
        this.surname
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          console.log("Registration completed");
          this.$router.push("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          let alert_2 = document.querySelector("#alert_2");
          alert_2.classList.remove("d-none");
          alert_2.innerHTML = errorMessage;
          console.log(alert_2);
        });
    },
    moveToLogin() {
      this.$router.push("/");
    },

    mounted: function() {
    const user = firebase.auth().currentUser;
    if (user) {
      firebase
        .firestore()
        .collection("salary-salary")
        .doc(user.uid)
        .get()
        .then((doc => {
          if (doc.exists) {
            this.info.bio = doc.data().bio;
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        }),
    },
  },
  },
};
</script>
