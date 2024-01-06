from django.shortcuts import render
from rest_framework.permissions import IsAdminUser
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateAPIView, DestroyAPIView
from api.models import company_detail, customer, invoice, Product
from api.serializers import CompanySerializer, CustomerSerializer, ProductSerializer, InvoiceSerializer

# Create your views here.

#creating all details
class CustomerCreateView(CreateAPIView): 
    serializer_class =  CustomerSerializer

class InvoiceCreateView(CreateAPIView):
    serializer_class = InvoiceSerializer

class ProductCreateView(CreateAPIView):
    serializer_class = ProductSerializer

class CompanyCreateView(CreateAPIView):
    serializer_class = CompanySerializer



#list all detail
class CustomerListView(ListAPIView):
    queryset = customer.objects.all()
    serializer_class = CustomerSerializer

class InvoiceListView(ListAPIView):
    queryset = invoice.objects.all()
    serializer_class = InvoiceSerializer

class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CompanyListView(ListAPIView):
    queryset = company_detail.objects.all()
    serializer_class = CompanySerializer



#update all details
class CustomerUpdateView(RetrieveUpdateAPIView):
    queryset = company_detail.objects.all()
    serializer_class = CustomerSerializer

class InvoiceUpdateView(RetrieveUpdateAPIView):
    queryset = invoice.objects.all()
    serializer_class = InvoiceSerializer

class ProductUpdateView(RetrieveUpdateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CompanyUpdateView(RetrieveUpdateAPIView):
    queryset = company_detail.objects.all()
    serializer_class = CompanySerializer



#delete all details
class CustomerDeleteView(DestroyAPIView):
    queryset = company_detail.objects.all()
    serializer_class = CustomerSerializer

class InvoiceDeleteView(DestroyAPIView):
    queryset = invoice.objects.all()
    serializer_class = InvoiceSerializer

class ProductDeleteView(DestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CompanyDeleteView(DestroyAPIView):
    queryset = company_detail.objects.all()
    serializer_class = CompanySerializer