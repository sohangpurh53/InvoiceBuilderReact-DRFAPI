from rest_framework import serializers
from api.models import company_detail, customer, invoice, Product

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = company_detail
        fields = '__all__'

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = customer
        fields = '__all__'

class InvoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = invoice
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'