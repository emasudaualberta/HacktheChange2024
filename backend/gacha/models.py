from django.db import models

# Create your models here.

class Book(models.Model):
    title = models.CharField(max_length=50)
    summary = models.TextField()
    ban_reason = models.TextField()

    def __str__(self):
        return self.title