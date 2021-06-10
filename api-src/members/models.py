from os import name
from django.db import models
from django.contrib.auth.models import Group
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser

from api.settings import BG_COLORS


class MemberCategory(models.Model):
    class Meta:
        verbose_name_plural = "Categories"

    title = models.CharField(
        max_length=250,
        blank=False,
        null=False,
        default=""
    )

    def __str__(self) -> str:
        return self.title or self.pk

    def save(self, *args, **kwargs):
        if self.title != "":
            new_group, created = Group.objects.get_or_create(name=self.title)
            if created:
                print(
                    f'{BG_COLORS["OKGREEN"]} Group created: {new_group.name} {BG_COLORS["ENDC"]}')
        super(MemberCategory, self).save(*args, **kwargs)


class Member(AbstractUser):
    username = models.CharField(
        max_length=25,
        blank=True,
        default="",
        unique=True
    )
    email = models.EmailField(
        blank=True,
        null=True,
        default=""
    )
    member_category = models.ForeignKey(
        MemberCategory,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )

    date_birth = models.DateTimeField(null=True, blank=True)
    date_death = models.DateTimeField(null=True, blank=True)

    location_birth = models.CharField(
        max_length=2250,
        null=True,
        blank=True,
        default=""
    )

    location_death = models.CharField(
        max_length=2250,
        null=True,
        blank=True,
        default=""
    )

    def __str__(self) -> str:
        return self.username

    USERNAME_FIELD = "username"
    EMAIL_FIELD = "email"
