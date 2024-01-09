from django.shortcuts import render
from rest_framework.permissions import IsAdminUser
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateAPIView, DestroyAPIView, RetrieveAPIView
from api.models import company_detail, customer, invoice, Product
from api.serializers import CompanySerializer, CustomerSerializer, ProductSerializer,SignInSerializer, InvoiceSerializer,SingleInvoiceSerializer,ListAllInvoiceSerializer
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.tokens import TokenError
from rest_framework.views import APIView
# Create your views here.

#creating all details
class CustomerCreateView(CreateAPIView): 
    serializer_class =  CustomerSerializer
    permission_classes = [IsAdminUser]

class InvoiceCreateView(CreateAPIView):
    serializer_class = InvoiceSerializer
    permission_classes = [IsAdminUser]

class ProductCreateView(CreateAPIView):
    serializer_class = ProductSerializer
    permission_classes = [IsAdminUser]

class CompanyCreateView(CreateAPIView):
    serializer_class = CompanySerializer
    permission_classes = [IsAdminUser]



#list all detail
class CustomerListView(ListAPIView):
    queryset = customer.objects.all()
    serializer_class = CustomerSerializer
    permission_classes = [IsAdminUser]


class InvoiceListView(ListAPIView):
    queryset = invoice.objects.all()
    serializer_class = ListAllInvoiceSerializer
    permission_classes = [IsAdminUser]

class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAdminUser]

class CompanyListView(ListAPIView):
    queryset = company_detail.objects.all()
    serializer_class = CompanySerializer
    permission_classes = [IsAdminUser]



#update all details
class CustomerUpdateView(RetrieveUpdateAPIView):
    queryset = company_detail.objects.all()
    serializer_class = CustomerSerializer
    permission_classes = [IsAdminUser]

class InvoiceUpdateView(RetrieveUpdateAPIView):
    queryset = invoice.objects.all()
    serializer_class = InvoiceSerializer
    permission_classes = [IsAdminUser]

class ProductUpdateView(RetrieveUpdateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAdminUser]

class CompanyUpdateView(RetrieveUpdateAPIView):
    queryset = company_detail.objects.all()
    serializer_class = CompanySerializer
    permission_classes = [IsAdminUser]



#delete all details
class CustomerDeleteView(DestroyAPIView):
    queryset = company_detail.objects.all()
    serializer_class = CustomerSerializer
    permission_classes = [IsAdminUser]

class InvoiceDeleteView(DestroyAPIView):
    queryset = invoice.objects.all()
    serializer_class = InvoiceSerializer
    permission_classes = [IsAdminUser]

class ProductDeleteView(DestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAdminUser]

class CompanyDeleteView(DestroyAPIView):
    queryset = company_detail.objects.all()
    serializer_class = CompanySerializer
    permission_classes = [IsAdminUser]



#get single Invoice
class SingleInvoiceView(RetrieveAPIView):
    serializer_class = SingleInvoiceSerializer
    queryset = invoice.objects.all()
    permission_classes = [IsAdminUser]




# Signout 
class BlacklistRefreshTokenView(APIView):
    def post(self, request):
        refresh_token = request.data.get('refresh_token')
        if not refresh_token:
            return Response({'error': 'refresh_token required'}, status=status.HTTP_400_BAD_REQUEST)
        try:
            RefreshToken(refresh_token).blacklist()
            return Response({'message': 'refresh token blacklisted successfully'}, status=status.HTTP_200_OK)
        except TokenError as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)