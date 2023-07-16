<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <table class="table caption-top">
                    <caption>List of products</caption>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(product, index) in products" :key="product.id" >
                            <td>{{ index + 1 }}</td>
                            <td>{{ product.name }}</td>
                            <td>{{ product.description }}</td>
                            <td>{{ product.price }}</td>
                            <td>
                                <router-link :to="`/product/${product.id}`" class="btn btn-success">Show</router-link>
                                <router-link :to="`/product/${product.id}/edit`" class="btn btn-warning">Edit</router-link>
                                <button @click="deleteProduct(product.id)" class="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            products: []
        }
    },
    
    async created() {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/products');
            this.products = response.data;
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        async deleteProduct(id) {
            try {
                await axios.delete(`/api/products/${id}`);
                this.products = this.products.filter(product => product.id !== id);
            } catch(error) {
                console.log(error);
            }
        }
    }
}
</script>