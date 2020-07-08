from selenium import webdriver
import time
import json

chrome_path = r"C:\Users\jackf\OneDrive\Desktop\chromedriver_win32 (1)\chromedriver.exe"
driver = webdriver.Chrome(chrome_path)
driver.get("http://schools.lawschoolnumbers.com/")
time.sleep(3)

for tr in driver.find_elements_by_xpath('//*[@id="schools_list"]/table'):
    tds = tr.find_elements_by_tag_name('td')
    print ([td.text for td in tds])


           
#f()


#print(majors)