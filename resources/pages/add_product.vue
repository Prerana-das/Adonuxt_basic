<template>
  
  <div>
     
        <Form inline>
            <FormItem>
                <Input type="text"  v-model="formData.name" placeholder="Product Name">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Input type="text"  v-model="formData.description" placeholder="Product Description">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Input type="number" v-model="formData.price" placeholder="Product Price">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit">Create Product</Button>
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
              description:'',
                price:'',
          }  
        }
    },

     methods:{
        async handleSubmit(){

            if(this.formData.name  ==  ""){
               return this.i("Product Name is empty!")
            }

            if(this.formData.description  ==  ""){
               return this.i("Product Name is empty!")
            }
            if(this.formData.price  ==  ""){
               return this.i("Product Name is empty!")
            }

            const res = await this.callApi('post','products',this.formData)
            if(res.status==201){
                this.s('Product Successfully Added !')
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