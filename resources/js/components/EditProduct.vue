<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2>Update Product</h2>
                <form @submit.prevent="updateProduct">
                    <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input type="text" class="form-control" v-model="product.name" >
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Description</label>
                        <textarea cols="15" rows="5" class="form-control" v-model="product.description"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Price</label>
                        <input type="number" class="form-control" v-model="product.price">
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
                    </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            product: {}
        }
    },
    async created() {
        try {
            const response = await axios.get(`/api/products/${this.$route.params.id}/edit`);
            this.product = response.data;
        } catch(error) {
            console.log(error)
        }
    },
    methods: {
        async updateProduct() {
            try {
                await axios.put(`/api/products/${this.$route.params.id}`, this.product);
                this.$router.push('/');
            } catch(error) {
                console.log(error);
            }
        }
    }
}
</script>