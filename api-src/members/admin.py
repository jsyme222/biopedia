from django.contrib import admin
from .models import Member, MemberCategory


@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    exclude = ["date_death", "location_death"]


@admin.register(MemberCategory)
class MemberCategoryAdmin(admin.ModelAdmin):
    pass
