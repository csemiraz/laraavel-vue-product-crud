import { createRouter, createWebHistory } from "vue-router";

import ProductList from '../components/ProductList.vue';
import ProductForm from '../components/ProductForm.vue';
import Product from '../components/Product.vue';
import ProductUpdate from '../components/EditProduct.vue';

const routes = [
    //router.addRoute({ path: '/', component: ProductList }),
    { path: '/', component: ProductList},
    { path: '/product/create', component: ProductForm},
    { path: '/product/:id', component: Product},
    { path: '/product/:id/edit', component: ProductUpdate},
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;