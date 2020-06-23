<template>
    <div class="w-100"> 
        <w-input-field :label="'Full name'" :defaultValue="form.fullName" @changeInValue="getValue($event)" />
        <label class="mt-4" style="color: #919090"> Gender </label>
        <div class="d-flex justify-content-between w-50">
            <div class="d-flex" style="align-items: center;" v-for="gender in gender" :key="gender">
                <button :class="gender == form.gender? 'active-option-style': 'inactive-option-style'" class="btn option-style" @click="form.gender = gender"> {{ gender }} </button>
            </div>
        </div>
        <w-dropdown :options="countries" :selectedOption="form.country" :label="'Country'" @selectedOption="getSelectedOption('country', $event)"/>
        <w-dropdown :options="states" :selectedOption="form.state" :label="'State'" @selectedOption="getSelectedOption('state', $event)"/>
        <label class="mt-4" style="color: #919090"> Phone </label>
        <div class="input-group mb-2">
            <div class="input-group-prepend">
                <div class="input-group-text">
                    <img :src="url" width="20px" height="auto" />
                    <span class="ml-2">  {{ selectedPhoneCode }} </span>
                </div>
            </div>
            <input type="number" class="form-control" id="inlineFormInputGroup" @blur="getPhoneNumber($event)" v-model="form.phone">
        </div>
        <w-button-input :buttonText="'Next'" :buttonType="'next'" :disabled="!disableNextBtn" @onButtonClick="handleClick()"/>
        <div class="text-center mt-5">
            <span style="color: #919090;">Already have an account? </span> <a href="#" class="achor-style">Log in</a>
        </div>
    </div>
</template>
<script>
import InputField from '../widgets/InputField'
import Dropdown from '../widgets/Dropdown'
import ButtonInput from '../widgets/ButtonInput'
export default {
    components: {
        'w-input-field': InputField,
        'w-dropdown': Dropdown,
        'w-button-input': ButtonInput
    },
    data() {
        return {
            gender: ["Male", "Female", "Other"],
            states: ["Tamil Nadu", "Kerala"],
            countries: ["India", "United States"],
            countryPhoneCode: ["+91", "+1"],
            flags: ['in', 'us'],
            url: "https://www.countries-ofthe-world.com/flags-normal/flag-of-India.png",
            selectedPhoneCode: "+91",
            form: {
                fullName: "",
                gender: "",
                country: "",
                state: "",
                phone: ""
            }
        }
    },
    computed: {
        disableNextBtn() {
            let { fullName, gender, country, state, phone } = this.form
            return fullName != '' && gender != '' && country != '' && state != '' && phone != ''
        }
    },
    created() {
        localStorage.getItem("fullName") != ''? this.form.fullName = localStorage.getItem("fullName"): this.form.fullName = ""
        localStorage.getItem("gender") != ''? this.form.gender = localStorage.getItem("gender"): ""
        localStorage.getItem("country") != ''? this.form.country = localStorage.getItem("country"): ""
        localStorage.getItem("state") != ''? this.form.state = localStorage.getItem("state"): ""
        localStorage.getItem("phone") != ''? this.form.phone = localStorage.getItem("phone"): ""
        
    },
    methods: {
        getValue(val) {
            this.form.fullName = val
        },
        getSelectedOption(type, val) {
            switch (type) {
                case 'country': this.form.country = val; this.updateValues(); break;
                case 'state': this.form.state = val; break;
            }
        },
        getPhoneNumber(event) {
            this.form.phone = event.target.value;
        },
        handleClick() {
            let { fullName, gender, country, state, phone } = this.form

            localStorage.setItem("fullName", fullName)
            localStorage.setItem("gender", gender)
            localStorage.setItem("country", country)
            localStorage.setItem("state", state)
            localStorage.setItem("phone", phone)

            this.$emit("clickedNext");
        },
        updateValues() {
            if(this.form.country == "India") {
                this.url = "https://www.countries-ofthe-world.com/flags-normal/flag-of-India.png"
                this.selectedPhoneCode = "+91"
            } else if (this.form.country == "United States") {
                this.url = "https://www.countries-ofthe-world.com/flags-normal/flag-of-United-States-of-America.png"
                this.selectedPhoneCode = "+1"
            }
        }
    }
}
</script>
<style scoped>
.active-option-style {
    background-color: #fdeee6;
    color: #ed5901;
    border-color: #fdeee6;
    padding: 5px 30px;
}
.inactive-option-style {
    background-color: transparent;
    border-color: #ececec;
    padding: 5px 30px;
}
.active-option-style:focus, .inactive-option-style:focus {
    box-shadow: none;
}
.form-control:focus {
    box-shadow: none;
    outline: none;
    border-color: #ed5901;
}
.achor-style {
    font-weight: bold;
    color: #ed5901;
}

</style>