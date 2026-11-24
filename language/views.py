
from django.shortcuts import get_object_or_404, render
from .models import Lesson


def lesson_html(request, pk=None):
    lessons = Lesson.objects.filter(language="html")

    if pk:
        current = get_object_or_404(lessons, pk=pk)
    else:
        current = lessons.first()

    topics = current.topics.all() if current else []

    return render(request, "html.html", {
        "lessons": lessons,
        "current": current,
        "topics": topics,
    })


def lesson_css(request, pk=None):
    lessons = Lesson.objects.filter(language="css")

    if pk:
        current = get_object_or_404(lessons, pk=pk)
    else:
        current = lessons.first()

    topics = current.topics.all() if current else []

    return render(request, "css.html", {
        "lessons": lessons,
        "current": current,
        "topics": topics,
    })


def lesson_javascript(request, pk=None):
    lessons = Lesson.objects.filter(language="javascript")

    if pk:
        current = get_object_or_404(lessons, pk=pk)
    else:
        current = lessons.first()

    topics = current.topics.all() if current else []

    return render(request, "javascript.html", {
        "lessons": lessons,
        "current": current,
        "topics": topics,
    })


def lesson_python(request, pk=None):
    lessons = Lesson.objects.filter(language="python")

    if pk:
        current = get_object_or_404(lessons, pk=pk)
    else:
        current = lessons.first()

    topics = current.topics.all() if current else []

    return render(request, "python.html", {
        "lessons": lessons,
        "current": current,
        "topics": topics,
    })


def lesson_oop(request, pk=None):
    lessons = Lesson.objects.filter(language="oop")

    if pk:
        current = get_object_or_404(lessons, pk=pk)
    else:
        current = lessons.first()

    topics = current.topics.all() if current else []

    return render(request, "oop.html", {
        "lessons": lessons,
        "current": current,
        "topics": topics,
    })


def lesson_c(request, pk=None):
    lessons = Lesson.objects.filter(language="c")

    if pk:
        current = get_object_or_404(lessons, pk=pk)
    else:
        current = lessons.first()

    topics = current.topics.all() if current else []

    return render(request, "c.html", {
        "lessons": lessons,
        "current": current,
        "topics": topics,
    })


def lesson_cpp(request, pk=None):
    lessons = Lesson.objects.filter(language="cpp")

    if pk:
        current = get_object_or_404(lessons, pk=pk)
    else:
        current = lessons.first()

    topics = current.topics.all() if current else []

    return render(request, "cpp.html", {
        "lessons": lessons,
        "current": current,
        "topics": topics,
    })


def lesson_dsa(request, pk=None):
    lessons = Lesson.objects.filter(language="dsa")

    if pk:
        current = get_object_or_404(lessons, pk=pk)
    else:
        current = lessons.first()

    topics = current.topics.all() if current else []

    return render(request, "dsa.html", {
        "lessons": lessons,
        "current": current,
        "topics": topics,
    })
