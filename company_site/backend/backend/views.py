from django.http import HttpResponse
from django.conf import settings
import os

def index(request):
    try:
        with open(os.path.join(settings.BASE_DIR, '../static/server/app/page.html'), 'r') as f:
            return HttpResponse(f.read(), content_type='text/html')
    except:
        return HttpResponse("""
        <h1>SMAT Concept Website</h1>
        <p>Backend is running successfully!</p>
        <p>For the full website, deploy the frontend to Vercel:</p>
        <pre>cd frontend && vercel --prod</pre>
        """, content_type='text/html')