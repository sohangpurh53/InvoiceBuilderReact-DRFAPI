from django.contrib import admin
from api.models import company_detail, customer, invoice, Product
admin.site.register(invoice)
admin.site.register(company_detail)
admin.site.register(customer)
admin.site.register(Product)