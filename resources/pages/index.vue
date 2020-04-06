<template>
  <div>
      <nuxt-link to="/add_product">
          Add Product
      </nuxt-link>
		<nuxt-link to="/register">
         Register
      </nuxt-link>
	  <nuxt-link to="/login">
         Login
      </nuxt-link>
      <div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">
			<p class="_title0">Product</p>
			<div class="_overflow _table_div">
				<table class="_table">
						<!-- TABLE TITLE -->
				<thead>
					<tr>
						<th>Name</th>
						<th>Description</th>
						<th>Price</th>
						<th>Action</th>
					</tr>
				<!-- TABLE TITLE -->
				</thead>

				<!-- ITEMS -->
				<tbody>
					<tr v-for="(item,index) in product" :key="index">
						<td class="_table_name">
							<span>{{ item.name }}</span>
						</td>
						<td>{{ item.description }}</td>
						<td>
							{{ item.price }}				
						</td>
						<td>
							<template>
								<button class="_btn _action_btn edit_btn1" @click="editProduct(item,index)" >Edit</button>
								<button class=" _btn _action_btn make_btn1" @click="city_delete(item.id,index)" >Delete</button>
							</template>
						</td>
					</tr>
						<!-- ITEMS -->
					</tbody>
				</table>
			</div>

			<!-- Edit modal -->
				<Modal
				v-model="editModal"
					:mask-closable="false"
					:closable="false"
					title="Edit City"
					>
			<div class="row">
				<div class="col-12 col-md-12">
					<div class="_3login_input_group">
						<label class="form_label"> Name</label>
						<Input type="text" v-model="edit_form.name" placeholder="Name"/>
					</div>
				</div>
				<div class="col-12 col-md-12">
					<div class="_3login_input_group">
						<label class="form_label"> Description</label>
						<Input type="text" v-model="edit_form.description" placeholder="Description"/>
					</div>
				</div>
				<div class="col-12 col-md-12">
					<div class="_3login_input_group">
						<label class="form_label">Price</label>
						<Input type="text" v-model="edit_form.price" placeholder="Price"/>
					</div>
				</div>
			</div>
			<div slot="footer">
				<Button type="default" @click="editModal=false">Close</Button>
				<Button type="primary" @click="updateProduct">Update</Button>
			</div>
		</Modal>
	</div>

  </div>
</template>

<script>
export default {
	data(){
		return{
			product:[],

			editModal: false,
			edit_form:{
				name:'',
				description:'',
				price:'',
				id:''
			},
			editIndex:-1,
		}
	},
	methods:{
		async all_product(){
			const res = await this.callApi('get','all_product')
			if(res.status == 200){
				this.product = res.data
			}
		},
		async updateProduct(){
				if(this.edit_form.name == '') return this.i("Product Name is empty!");
				if(this.edit_form.description == '') return this.i("City price is empty!");
				if(this.edit_form.price == '') return this.i("Product price is empty!");

				const res = await this.callApi('post','edit_product',this.edit_form)
				if(res.status == 200){
					this.product[this.editIndex] = res.data
					this.s("Product Updated  !")
					let ob ={
						name:'',
						description:'',
						price:'',
						id:''
					}
					this.edit_form = ob 
					this.editIndex = -1
					this.editModal = false
				}
				else{
					this.swr();
				}
			},
			async city_delete(id,index){
				if(!confirm("Are you sure to delete this Product")){
					return;
				}
				let ob = {
					id:id
				}
				const res = await this.callApi('post','delete_product',ob)
				if(res.status == 204){
					this.i(' Product have been successfully Deleted!')
					this.product.splice(index,1)
				}
			},

			editProduct(item,index){
				this.edit_form.id=this.product[index].id
				this.edit_form.name=this.product[index].name
				this.edit_form.description=this.product[index].description
				this.edit_form.price=this.product[index].price

				this.editIndex = index
				this.editModal = true
			},

	},
	created(){
		this.all_product();
	}
}
</script>

<style>

</style>