from django.contrib import admin
from django.urls import path, include
from api.views import (
CustomerCreateView, ProductCreateView, InvoiceCreateView, CompanyCreateView,
CustomerListView, ProductListView, InvoiceListView, CompanyListView,SingleInvoiceView,
CustomerUpdateView, ProductUpdateView, InvoiceUpdateView, CompanyUpdateView,
CustomerDeleteView, ProductDeleteView, InvoiceDeleteView, CompanyDeleteView
)

urlpatterns = [
  path('customer/create/', CustomerCreateView.as_view() , name='customer-create'),
  path('product/create/', ProductCreateView.as_view() , name='product-create'),
  path('invoice/create/', InvoiceCreateView.as_view() , name='invoice-create'),
  path('company/create/', CompanyCreateView.as_view() , name='company-create'),

  path('invoice/<int:pk>/', SingleInvoiceView.as_view() , name='invoice-list'),
  path('customer/list/', CustomerListView.as_view() , name='customer-list'),
  path('product/list/', ProductListView.as_view() , name='product-list'),
  path('invoice/list/', InvoiceListView.as_view() , name='invoice-list'),
  path('company/list/', CompanyListView.as_view() , name='company-list'),
  
  path('customer/update/', CustomerUpdateView.as_view() , name='customer-update'),
  path('product/update/', ProductUpdateView.as_view() , name='product-update'),
  path('invoice/update/', InvoiceUpdateView.as_view() , name='invoice-update'),
  path('company/update/', CompanyUpdateView.as_view() , name='company-update'),

  path('customer/delete/', CustomerDeleteView.as_view() , name='customer/delete'),
  path('product/delete/', ProductDeleteView.as_view() , name='product-delete'),
  path('invoice/delete/', InvoiceDeleteView.as_view() , name='invoice-delete'),
  path('company/delete/', CompanyDeleteView.as_view() , name='company-delete'),
]