from django.db import models

# Create your models here.
class company_detail(models.Model):
    seller_name = models.CharField(max_length=100)
    mobile_no = models.CharField(max_length=10, blank=True)
    email = models.EmailField(blank=True)
    seller_address = models.TextField(max_length=400)
    

    def __str__(self):
        return self.seller_name

#product model
class Product(models.Model):
    product_name=models.CharField(max_length=50)
    product_price=models.FloatField()
    product_quantity= models.SmallIntegerField()

    def __str__(self):
        return self.product_name

class customer(models.Model):
    customer_name = models.CharField(max_length=100)
    customer_address = models.TextField()
    mobile_no = models.CharField(max_length=10, blank=True)
    email = models.EmailField(blank=True)

    def __str__(self):
        return f"{self.customer_name}"


#invoice model
class invoice(models.Model):
    invoice_number = models.IntegerField(unique=True)
    date = models.DateTimeField(auto_now_add=True)
    customer = models.ForeignKey(customer, on_delete=models.PROTECT)
    company_name = models.ForeignKey(company_detail, on_delete=models.PROTECT)
    product_name = models.ManyToManyField(Product, default='')

    def __str__(self):
        return f"INV-{self.invoice_number:04d}"  # Format the displayed invoice number

    def save(self, *args, **kwargs):
        if not self.invoice_number:
            # Generate your invoice number logic here, for example:
            last_invoice = invoice.objects.order_by('-invoice_number').first()
            if last_invoice:
                self.invoice_number = last_invoice.invoice_number + 1
            else:
                self.invoice_number = 1

        super().save(*args, **kwargs)