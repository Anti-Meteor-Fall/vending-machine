from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from vending.models import Product, Order_Method, Order


class ProductListViewTestCase(APITestCase):
    def test_product_list(self):
        url = reverse('productslist')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class ProductViewTestCase(APITestCase):
    def setUp(self):
        self.product = Product.objects.create(
            name="test product",
            price=100,
            image="test.png",
            is_set=True,
            quantity=10
        )

    def test_get_product(self):
        url = reverse('products', kwargs={'pk': self.product.pk})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['id'], self.product.pk)


class OrderMethodViewTestCase(APITestCase):
    def test_order_method_list(self):
        url = reverse('order-methods')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class OrderViewTestCase(APITestCase):
    def setUp(self):
        self.product = Product.objects.create(
            name="test product",
            price=100,
            image="test.png",
            is_set=True,
            quantity=10
        )
        self.order_method = Order_Method.objects.create(
            name="test order method",
            image="test.png"
        )
        self.order = Order.objects.create(
            product_id=self.product,
            order_method_id=self.order_method
        )

    def test_order_list(self):
        url = reverse('orders')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_create_order(self):
        url = reverse('orders')
        data = {
            'product_id': self.product.pk,
            'order_method_id': self.order_method.pk
        }
        response = self.client.post(url, data=data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data['product_id'], self.product.pk)
