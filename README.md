# -React-Django-
This Project will let you know how to integrate React with Django by using simple CRUD base application/
# 1-Install Django, Django Rest Framework 

# 2-Install django-cors-headers

# 3-Include CORS in your settings.py file
INSTALLED_APPS = [
    'corsheaders',
]

MIDDLEWARE = [
    # ...
    # 👇 Add this line here
    'corsheaders.middleware.CorsMiddleware',
    # Add above line just before this line 👇
    'django.middleware.common.CommonMiddleware',
]

# 👇 Add this line here
CORS_ORIGIN_ALLOW_ALL = True

# 4-Create URLS for Your Views.

# FRONT END ( VITE + REACT )
I have used Vite React for frontend development

# 1-Install Axios
You just have to install axios from "npm install axios" and then make a request to backend URL
# For-Example:-

useEffect(() => {
    axios.get('http://localhost:8000/api/hello-world/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
