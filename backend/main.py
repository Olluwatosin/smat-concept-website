from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="SMAT Concept API")

# Enable CORS for the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify the actual frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to SMAT Concept API", "version": "1.0.0"}

@app.get("/services")
async def get_services():
    return [
        {"id": "data-analysis", "name": "Data Analysis", "description": "Expert data insights and visualization."},
        {"id": "ai-workspace", "name": "AI Workspace Apps", "description": "Smart productivity tools with AI capabilities."},
        # Add more services as needed
    ]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
