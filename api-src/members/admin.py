from django.contrib import admin
from .models import Member, MemberCategory


@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    exclude = ["date_death", "location_death"]
    readonly_fields = ["password"]

    fieldsets = (
        ("Status", {
            'fields': (
                (
                    'is_superuser',
                    'is_staff',
                ),
                'is_active',
                # 'jwt_token',
                )
        }),
        ("General", {
            'fields': (
                (
                    'last_login',
                    'date_joined'
                ),
                'groups',
                'user_permissions',
                'member_category'
            )
        }),
        ("Personal Info", {
            'fields': (
                (
                    'username',
                    (
                        'first_name',
                        'last_name'
                    ),
                    'date_birth',
                    'location_birth'
                )
            )
        }),
        ("Contact", {
            'fields': (
                (
                    'email',
                )
            )
        })
    )


@admin.register(MemberCategory)
class MemberCategoryAdmin(admin.ModelAdmin):
    pass
