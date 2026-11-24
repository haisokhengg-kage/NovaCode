
from django.db import models

class Lesson(models.Model):
    LANGUAGES = [
        ("html", "HTML"),
        ("css", "CSS"),
        ("javascript", "JavaScript"),
        ("python", "Python"),
        ("oop", "Object-Oriented Programming"),
        ("c", "C"),
        ("cpp", "C++"),
        ("dsa", "Data Structures & Algorithms"),
    ]

    language = models.CharField(
        max_length=20,
        choices=LANGUAGES,
        default="html"
    )

    number = models.PositiveIntegerField()
    title = models.CharField(max_length=200)

    class Meta:
        ordering = ["language", "number"]
        unique_together = ("language", "number")

    def __str__(self):
        return f"{self.get_language_display()} {self.number}. {self.title}"


class Topic(models.Model):
    lesson = models.ForeignKey(
        Lesson,
        on_delete=models.CASCADE,
        related_name="topics"
    )

    number = models.PositiveIntegerField()
    title = models.CharField(max_length=200)
    content = models.TextField(blank=True)
    code = models.TextField(blank=True)
    image = models.ImageField(
        upload_to="topics/",
        blank=True,
        null=True
    )

    class Meta:
        ordering = ["lesson__number", "number"]
        unique_together = ("lesson", "number")

    @property
    def full_number(self):
        return f"{self.lesson.number}.{self.number}"

    def __str__(self):
        return f"{self.full_number} {self.title}"
