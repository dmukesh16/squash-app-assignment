<template>
    <div>
        <otp-view :amount="4" :onFill="handleOnFill"/>
        <div class="row m-0">
            <w-button-input class="pl-0 col-3" :buttonText="'Back'" :buttonType="'back'" @onButtonClick="handleBackBtnClick()"/>
            <w-button-input class="pr-0 col-9" :buttonText="'Verify'" :buttonType="'next'" :disabled="disableVerifyBtn" @onButtonClick="handleVerify()"/>
        </div>
        <hr class="mt-4" />
        <div class="text-center" style="padding: 0 50px;">Didn't receive the email? Check your spam filter for an email from <a class="anchor-style">name@domain.com</a></div>
    </div>
</template>

<script>
import VueOTPField from 'vue-otp-field'
import ButtonInput from '../widgets/ButtonInput'

export default {
    components: {
        'otp-view': VueOTPField,
        'w-button-input': ButtonInput
    },
    data() {
        return {
            otp: "",
            disableVerifyBtn: true
        }
    },
    methods: {
        handleOnFill(val) {
           if(val.isFieldsComplete) {
               this.otp = val.values;
               this.disableVerifyBtn = false;
           } else {
               this.disableVerifyBtn = true;
           }
        },
         handleBackBtnClick() {
            this.$emit("clickedBack");
        },
        handleVerify() {
            this.$emit("verify");
        }
    }
}
</script>

<style scoped>
.anchor-style {
    font-weight: bold;
    color: #ed5901;
}
</style>
<style>
.vue-otp-field {
    height: 50px;
}
</style>