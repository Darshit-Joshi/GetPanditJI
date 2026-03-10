from fastapi import FastAPI
from pydantic import BaseModel
from astrology import get_house_position_and_lagna

app = FastAPI()

# Input Validation Model
class BirthDetails(BaseModel):
    year: int
    month: int
    day: int
    hour: int
    minute: int
    lat: float
    lon: float

@app.post("/generate-kundli")
def generate_kundli_endpoint(details: BirthDetails):
    
    # Call the math engine
    house_data = get_house_position_and_lagna(
        year=details.year, 
        month=details.month, 
        day=details.day, 
        hour=details.hour, 
        minute=details.minute, 
        lat=details.lat, 
        lon=details.lon
    )
    
    # Output JSON format
    return {
        "success": True, 
        "data": house_data
    }