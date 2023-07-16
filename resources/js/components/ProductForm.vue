<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2>Add Product</h2>
                <form @submit.prevent="submitForm">
                    <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input type="text" class="form-control" v-model="product.name">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Description</label>
                        <textarea cols="15" rows="5" class="form-control" v-model="product.description"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Price</label>
                        <input type="number" class="form-control" v-model="product.price">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            product: {
                /* name: '',
                description: '',
                price: 0 */
            }
        }
    },
    methods: {
        async submitForm() {
            try {
                await axios.post('/api/products', this.product);
                //console.log(response.data);
                this.$router.push('/');
            } catch (error) {
                console.log(error);
            }
        }
    }
} 
</script>