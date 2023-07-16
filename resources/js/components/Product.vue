<template>
      <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <table class="table caption-top">
                            <caption>Product Details</caption>
                            <tr>
                                <th>name</th>
                                <th>:</th>
                                <td>{{ product.name }}</td>
                            </tr>
                            <tr>
                                <th>Description</th>
                                <th>:</th>
                                <td>{{ product.description }}</td>
                            </tr>
                            <tr>
                                <th>Price</th>
                                <th>:</th>
                                <td>{{ product.price }}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      </div> 
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            product: {}
        }
    },
    async created() {
        try {
            const response = await axios.get(`/api/products/${this.$route.params.id}`);
            this.product = response.data;
        } catch(error) {
            console.log(error)
        }
    }
}
</script>