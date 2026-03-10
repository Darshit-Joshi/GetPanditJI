import swisseph as swe
from datetime import datetime
import pytz

def get_house_position_and_lagna(year, month, day, hour, minute, lat, lon, tz_string='Asia/Kolkata'):
  local_tz=pytz.timezone(tz_string)
  local_time = local_tz.localize(datetime(year,month, day, hour, minute))
  utc_time = local_time.astimezone(pytz.utc)
  
  utc_decimal_hour = utc_time.hour + (utc_time.minute / 60.0)
  
  julian_day= swe.julday(utc_time.year,utc_time.month, utc_time.day, utc_decimal_hour)
  
  swe.set_sid_mode(swe.SIDM_LAHIRI)
  flags = swe.FLG_SIDEREAL | swe.FLG_SWIEPH | swe.FLG_SPEED
  
  houses, ascmc = swe.houses_ex(julian_day ,lat, lon, b'P', flags)
  asc_lon= ascmc[0]
  asc_sign= int(asc_lon /30)+1
  
  chart_houses = {i: [] for i in range(1, 13)}
  
  for house_num in range(1, 13):
        sign_in_house = ((asc_sign + house_num - 2) % 12) + 1
        chart_houses[house_num].append(str(sign_in_house))
        
  chart_houses[1].append("ASC")
  
  planets = {
        "Su": swe.SUN,       # Surya (Sun)
        "Ch": swe.MOON,      # Chandra (Moon)
        "Ma": swe.MARS,      # Mangal (Mars)
        "Bu": swe.MERCURY,   # Budh (Mercury)
        "Gu": swe.JUPITER,   # Guru / Brihaspati (Jupiter)
        "Sk": swe.VENUS,     # Shukra (Venus)
        "Sa": swe.SATURN,    # Shani (Saturn)
        "Ra": swe.TRUE_NODE  # Rahu (North Node)
    }
  
  rahu_lon = 0
  for abbr, swe_const in planets.items():
        data, _ = swe.calc_ut(julian_day, swe_const, flags)
        lon = data[0]
        
        if abbr == "Ra": 
            rahu_lon = lon # Save Rahu's longitude to calculate Ketu
            
        planet_sign = int(lon / 30) + 1
        house_num = ((planet_sign - asc_sign + 12) % 12) + 1
        chart_houses[house_num].append(abbr)
  ketu_lon = (rahu_lon + 180) % 360
  ketu_sign = int(ketu_lon / 30) + 1
  ketu_house = ((ketu_sign - asc_sign + 12) % 12) + 1
  chart_houses[ketu_house].append("Ke")
  
  return chart_houses

