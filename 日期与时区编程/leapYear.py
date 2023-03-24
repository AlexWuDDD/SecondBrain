def isLeapYear(year):
  return year%4 == 0 and (year%100 != 0 or year%400 ==0)

print(isLeapYear(2004))
print(isLeapYear(2005))

print(11/3)
print(11//2)