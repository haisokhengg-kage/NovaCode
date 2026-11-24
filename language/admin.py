from django.contrib import admin
from .models import Lesson, Topic


class TopicInline(admin.TabularInline):
    model = Topic
    extra = 1


@admin.register(Lesson)
class LessonAdmin(admin.ModelAdmin):
    list_display = ("number", "title", "language")
    list_filter = ("language",)
    ordering = ("language", "number")
    inlines = [TopicInline]


@admin.register(Topic)
class TopicAdmin(admin.ModelAdmin):
    list_display = ("full_number", "title", "lesson")
    list_filter = ("lesson__language",)