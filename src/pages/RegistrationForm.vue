<template>
  <div class="registration-form">
      <div class="nav-bar w-100">
          <div class="d-flex justify-content-around m-auto h-100 navbar-item-container">
              <div class="d-flex" style="align-items: center;" v-for="(item, index) in navbarItems" :key="index">
                <span v-if="!item.completed" class="mx-4" :class="item.active? 'active-nav-item' : 'inactive-nav-item'"> {{ item.step}}</span>
                <span v-else class="inactive-nav-item mx-4"> ✓ </span>
                <span :style="item.active? 'color: #ffffff' : 'color: #ffffffab'"> {{ item.name }} </span>
              </div>
          </div>
      </div>
      <div class="heading-position mx-auto text-center" v-for="(item, index) in navbarItems" :key="index">
        <h2 v-if="item.active"> {{ item.heading }} </h2>
        <h6 v-if="item.active" class="mt-3" v-html="item.subHeading"></h6>
      </div>
      <b-card class="w-50 border-0 mx-auto py-4 px-3">
        <personal-details   v-if="navbarItems[0].active" @clickedNext="handleClick()"/>
        <company-details    v-if="navbarItems[1].active" @clickedBack="goToPersonalDetails()" @clickedSendOTP="goToEmailVerification()"/>
        <email-verification v-if="navbarItems[2].active" @clickedBack="goToComapanyDetails()" @verify="handleVerification()"/>
      </b-card>
  </div> 
</template>

<script>
import PersonalDetails from '../components/PersonalDetails';
import CompanyDetails from '../components/CompanyDetails';
import EmailVerification from '../components/EmailVerification';
export default {

  components: {
    'personal-details': PersonalDetails,
    'company-details': CompanyDetails,
    'email-verification': EmailVerification
  },
  data() {
    return {
        navbarItems: [
          {
            name: "Personal Details",
            active: true,
            completed: false,
            step: 1,
            heading: "Add your Personal Details",
            subHeading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          },
          {
            name: "Company Details",
            active: false,
            completed: false,
            step: 2,
            heading: "Add your Company Details",
            subHeading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          },
          {
            name: "Email Verification",
            active: false,
            completed: false,
            step: 3,
            heading: "Enter your OTP",
            subHeading: "For your security, we need to verify your identity. We sent a 4-digit code to <b>name@domain.com</b>.Please enter it below."
          }
        ],

    }
  },
  methods: {
    handleClick() {
      this.navbarItems[0].active = false
      this.navbarItems[0].completed = true
      this.navbarItems[1].active = true
    },
    goToPersonalDetails() {
      this.navbarItems[0].active = true
      this.navbarItems[0].completed = false
      this.navbarItems[1].active = false
    },
    goToEmailVerification() {
      this.navbarItems[2].active = true
      this.navbarItems[1].completed = true
      this.navbarItems[1].active = false
    },
    goToComapanyDetails() {
      this.navbarItems[2].active = false
      this.navbarItems[1].completed = false
      this.navbarItems[1].active = true
    },
    handleVerification() {
      this.$router.push('/registration-success');
    }
  }
}
</script>

<style scoped>
.registration-form {
  background-color: #f9fafa;
  height: 100vh;
  width: 100vw;
}

.nav-bar {
  /* height: 80px; */
  padding: 20px 0;
  background-color: #2e4b64;
}

.navbar-item-container {
  width: 60%;
  font-size: 21px;
  color: #ffffff;
}

.active-nav-item{
  border-radius: 50%;
  background-color: #ed5901;
  padding: 5px 15px;
}

.inactive-nav-item{
  border-radius: 50%;
  background-color: #28435a;
  padding: 5px 15px;
  color: #ffffffab;
}

.heading-position {
  width: 50%;
  margin-top: 40px;
}
</style>
