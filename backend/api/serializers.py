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
        fields = ['date','id', 'customer', 'company_name', 'product_name']  # Exclude 'invoice_number'
        read_only_fields = ['invoice_number']

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'




# single invoice serializer
class SingleInvoiceSerializer(serializers.ModelSerializer):
    company_name = CompanySerializer()
    customer = CustomerSerializer()
    products = serializers.SerializerMethodField()

    class Meta:
        model = invoice
        fields = ['date', 'customer', 'company_name', 'products', 'invoice_number']

    def get_products(self, obj):
        products = obj.product_name.all()  # Retrieve all related products for the invoice
        serialized_products = ProductSerializer(products, many=True).data
        return serialized_products  # Exclude 'invoice_number'
       


#lis all invoices
class ListAllInvoiceSerializer(serializers.ModelSerializer):
    company_name = CompanySerializer(read_only=True)
    customer = CustomerSerializer(read_only=True)
    products = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = invoice
        fields = ['date', 'id', 'customer', 'company_name', 'products', 'invoice_number']

    def get_products(self, obj):
        products = obj.product_name.all()  # Retrieve all related products for the invoice
        serialized_products = ProductSerializer(products, many=True).data
        return serialized_products  # Exclude 'invoice_number''
    