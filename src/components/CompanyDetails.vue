<template>
    <div class="w-100">
        <input class="d-none" type="file" accept="image/*" ref="selectImage" @change="onFileChange">
        <div id="image-upload" @click="$refs.selectImage.click()" class="d-inline-block">
            <img v-if="form.companyLogoURL != null" :src="form.companyLogoURL" width="100%" height="100%" style="border-radius: 50%;"/>
            <img v-else src="../assets/default.jpg" width="100%" height="100%" style="border-radius: 50%;"/>
        </div>
        <span class="ml-4" style="color: #ed5901; font-size: 21px;">Upload your company logo</span>
        <w-input-field class="mt-4" :defaultValue="form.companyName" :label="'Company Name'" @changeInValue="getValue('Company Name', $event)" />
        <w-input-field class="mt-4" :defaultValue="form.emailID" :label="'Email ID'" @changeInValue="getValue('Email ID', $event)" />
        <w-input-field class="mt-4" :defaultValue="form.jobTitle" :label="'Job Title'" @changeInValue="getValue('Job Title', $event)" />
        <w-input-field class="mt-4" :defaultValue="form.yearsOfExperience" :label="'Years of Experience'" @changeInValue="getValue('Years of Experience', $event)" />
        <div class="mt-4">
             <b-form-checkbox
                id="checkbox-1"
                v-model="status"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted"
                >I accept the <a class="anchor-style">Terms and condition</a></b-form-checkbox>
        </div>
        <div class="row m-0">
            <w-button-input class="pl-0 col-3" :buttonText="'Back'" :buttonType="'back'" @onButtonClick="handleBackBtnClick()"/>
            <w-button-input class="pr-0 col-9" :buttonText="'Send OTP'" :buttonType="'next'" :disabled="!disableSendOTPBtn" @onButtonClick="handleSendOTP()"/>
        </div>
    </div>
</template>
<script>
import InputField from '../widgets/InputField'
import ButtonInput from '../widgets/ButtonInput'
export default {
    components: {
        'w-input-field': InputField,
        'w-button-input': ButtonInput
    },
    data() {
        return {
            status: "not_accepted",
            form: {
                companyName: "",
                emailID: "",
                jobTitle: "",
                yearsOfExperience: "",
                companyLogoURL: null,
            }
        }
    },
    computed: {
        disableSendOTPBtn() {
            let { companyName, emailID, jobTitle, yearsOfExperience, companyLogoURL } = this.form
            return companyName != '' && emailID != '' && jobTitle != '' && yearsOfExperience != '' && companyLogoURL != '' && this.status == "accepted"
        }
    },
    created() {
        localStorage.getItem("fullName") != ''? this.form.companyName = localStorage.getItem("companyName"): this.form.companyName = ""
        localStorage.getItem("emailID") != ''? this.form.emailID = localStorage.getItem("emailID"): ""
        localStorage.getItem("jobTitle") != ''? this.form.jobTitle = localStorage.getItem("jobTitle"): ""
        localStorage.getItem("yearsOfExperience") != ''? this.form.yearsOfExperience = localStorage.getItem("yearsOfExperience"): ""
        localStorage.getItem("companyLogoURL") != ''? this.form.companyLogoURL = localStorage.getItem("companyLogoURL"): ""
    },
    methods: {
        getValue(type, val) {
            switch (type) {
                case 'Company Name': this.form.companyName = val; break;
                case 'Email ID': this.form.emailID = val; break;
                case 'Job Title': this.form.jobTitle = val; break;
                case 'Years of Experience': this.form.yearsOfExperience = val; break;
            }
        },
        handleBackBtnClick() {
            this.$emit("clickedBack");
        },
        handleSendOTP() {
            let { companyName, emailID, jobTitle, yearsOfExperience, companyLogoURL } = this.form

            localStorage.setItem("companyName", companyName)
            localStorage.setItem("emailID", emailID)
            localStorage.setItem("jobTitle", jobTitle)
            localStorage.setItem("yearsOfExperience", yearsOfExperience)
            localStorage.setItem("companyLogoURL", companyLogoURL)

            this.$emit("clickedSendOTP");
        },
         onFileChange(e) {
            const file = e.target.files[0];
            this.form.companyLogoURL = URL.createObjectURL(file);
        }
    }
}
</script>
<style scoped>
.active-option-style {
    background-color: #fdeee6;
    color: #ed5901;
    border-color: #fdeee6;
    padding: 5px 15px;
}
.inactive-option-style {
    background-color: transparent;
    border-color: #ececec;
    padding: 5px 15px;
}
.active-option-style:focus, .inactive-option-style:focus {
    box-shadow: none;
}
.form-control:focus {
    box-shadow: none;
    outline: none;
    border-color: #ed5901;
}
.anchor-style {
    font-weight: bold;
    color: #ed5901;
}
#image-upload {
    position: relative;
    border: 3px dotted #eaedef;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    cursor: pointer;
}
</style>