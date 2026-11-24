from django.urls import path
from . import views

urlpatterns = [
    path("html/", views.lesson_html, name="html"),
    path("html/<int:pk>/", views.lesson_html, name="lesson"),

    path("css/", views.lesson_css, name="css"),
    path("css/<int:pk>/", views.lesson_css, name="css_lesson"),

    path("javascript/", views.lesson_javascript, name="javascript"),
    path("javascript/<int:pk>/", views.lesson_javascript, name="javascript_lesson"),

    path("oop/", views.lesson_oop, name="oop"),
    path("oop/<int:pk>/", views.lesson_oop, name="oop_lesson"),

    path("python/", views.lesson_python, name="python"),
    path("python/<int:pk>/", views.lesson_python, name="python_lesson"),

    path("c/", views.lesson_c, name="c"),
    path("c/<int:pk>/", views.lesson_c, name="c_lesson"),

    path("cpp/", views.lesson_cpp, name="cpp"),
    path("cpp/<int:pk>/", views.lesson_cpp, name="cpp_lesson"),

    path("dsa/", views.lesson_dsa, name="dsa"),
    path("dsa/<int:pk>/", views.lesson_dsa, name="dsa_lesson"),

]