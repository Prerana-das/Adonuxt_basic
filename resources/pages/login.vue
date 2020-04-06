<template>
  
  <div>
     
        <Form inline>
            <FormItem>
                <Input type="email"  v-model="formData.email" placeholder="email" >
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Input type="password" v-model="formData.password" placeholder="password">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit">Login</Button>
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
              email:'',
            password:''
          }  
        }
    },

     methods:{
        async handleSubmit(){
            if(this.formData.email.trim()  ==  ""){
               return this.i("email is empty!")
            }
            if(this.formData.password.trim()  ==  ""){
               return this.i("password is empty!")
            }

            const res = await this.callApi('post','login',this.formData)
             if(res.status===200){
                this.s("Login Successfully !")
                // this.$store.commit("updateAuthUser", res.data);
                window.location='/'
            }
            else{
                this.swr();
            }
        }
    },

}
</script>

<style>

</style>