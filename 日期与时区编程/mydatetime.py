# year, month, day -> ordinal, considering 01-Jan-0001 as day 1
def ymd_to_ord(year, month, day):
  return days_before_year(year) + days_before_month(year, month) + day

# year -> number of days before Jan 1st of year
# Remember start with year1, so days_before_year(1) == 0
def days_before_year(year):
  y = year - 1
  assert(year >= 1)
  #四年一闰， 百年不闰，四百年又闰
  return y*365 + y//4-y//100+y//400;

def is_leap(year):
  return year%4 == 0 and (year%100 != 0 or year%400==0)

_days_before_month = {
  0, #unused; this vector uses 1-based index
  0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334
}

# year, month -> number of days in year preceing first day of month

def days_before_month(year, month):
  assert(month >= 1)
  assert(month <= 12)
  days = _days_before_month[month]
  if month > 2 and is_leap(year):
    ++days;
  return days


def toJulianDayNumber(year, month, day):
  ADJ = (14-month)//12
  Y = year + 4800 - ADJ
  M = month + 12*ADJ -3
  return day + (153*M + 2)//5 + Y*365 + Y//4 - Y//100 + Y//400 - 32045

def toYearMonthDay(julianDayNumber):
  a = julianDayNumber + 32044
  b = (4*a + 3) //146097
  c = a - ((b*146097)//4)
  d = (4*c+3)//1461
  e = c - 1461*d//4
  m = (5*e + 2) // 153
  year = b*100 + d - 4800 + m // 10
  month = m + 3 - 12 * (m//10)
  day = e - ((153*m+2)//5) + 1

  return year, month, day

def test():
  diff = toJulianDayNumber(2000, 3, 1) - toJulianDayNumber(2000, 2, 1) 
  print(diff)
  print(toYearMonthDay(toJulianDayNumber(2000, 3, 1)))
  
if __name__ == '__main__':
  test()