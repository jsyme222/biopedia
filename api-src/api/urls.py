"""api URL Configuration
"""
from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from django.conf.urls.static import static
from django.views.decorators.csrf import csrf_exempt

from graphene_file_upload.django import FileUploadGraphQLView

from .settings import DEBUG, MEDIA_ROOT, MEDIA_URL

urlpatterns = [
    path('admin/', admin.site.urls),
    path('i18n/', include('django.conf.urls.i18n')),
    path("graphql", csrf_exempt(FileUploadGraphQLView.as_view(graphiql=True))),
]

if DEBUG:
    urlpatterns += static(MEDIA_URL,
                          document_root=MEDIA_ROOT)
