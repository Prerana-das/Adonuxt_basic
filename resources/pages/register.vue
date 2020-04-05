<template>
  
  <div>
     
        <Form inline>
            <FormItem>
                <Input type="text"  v-model="formData.name" placeholder=" Name">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Input type="email"  v-model="formData.email" placeholder="email">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Input type="password" v-model="formData.password" placeholder="password">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Input type="password" v-model="formData.confirm_password" placeholder="confirm password">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit">Register</Button>
            </FormItem>
        </Form>

  </div>
</template>

<script>
export default {
    data()
    {
        return{
          formData:{
              name:'',
              email:'',
            password:'',
            confirm_password:''
          }  
        }
    },

     methods:{
        async handleSubmit(){

            if(this.formData.name.trim()  ==  ""){
               return this.i("Name is empty!")
            }

            if(this.formData.email.trim()  ==  ""){
               return this.i("email is empty!")
            }
            if(this.formData.password.trim()  ==  ""){
               return this.i("password is empty!")
            }
            if(this.formData.confirm_password.trim()  ==  ""){
               return this.i("confirm_password is empty!")
            }
           if(this.formData.password != this.formData.confirm_password){
                return this.i("The password does not match.");
            }

            const res = await this.callApi('post','register',this.formData)
            if(res.status==201){
                this.s('Registration Successfull!')
                 this.$router.push('/')
                
            }
            else if(res.status === 400){
                for(let d of res.data){
                    this.e(d.message)
                }
            }
            else{
                console.log(res)
                this.e('Error!')
            }
        }
    },

}
</script>

<style>

</style>