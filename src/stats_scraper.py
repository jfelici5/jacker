from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import json

chrome_path = r"C:\Users\jackf\OneDrive\Desktop\chromedriver_win32 (1)\chromedriver.exe"
driver = webdriver.Chrome(chrome_path)
driver.get("http://schools.lawschoolnumbers.com/")
time.sleep(2)

schools  = []
rankings = []
rates = []
lsats = []
gpas = []


#scraps data for first seven pages
for j in range(0, 7):
    
    for i in range(2, 22):
        
        #school column
        xpathone_schools = '//*[@id="schools_list"]/table/tbody/tr['
        xpathtwo_schools = str(i) + ']/td[1]'
        xpath_schools = xpathone_schools + xpathtwo_schools
        
        #ranking column
        xpathone_ranking = '//*[@id="schools_list"]/table/tbody/tr['
        xpathtwo_ranking = str(i) + ']/td[2]'
        xpath_ranking = xpathone_ranking + xpathtwo_ranking
        
        #acceptance rate
        xpathone_rate = '//*[@id="schools_list"]/table/tbody/tr['
        xpathtwo_rate = str(i) + ']/td[3]'
        xpath_rate = xpathone_rate + xpathtwo_rate
        
        #median lsat
        xpathone_lsat= '//*[@id="schools_list"]/table/tbody/tr['
        xpathtwo_lsat = str(i) + ']/td[4]'
        xpath_lsat = xpathone_lsat + xpathtwo_lsat
        
        #median gpa
        xpathone_gpa = '//*[@id="schools_list"]/table/tbody/tr['
        xpathtwo_gpa = str(i) + ']/td[5]'
        xpath_gpa = xpathone_gpa + xpathtwo_gpa
        
        for tr in driver.find_elements_by_class_name("scllist"):
            rows_schools = tr.find_element_by_xpath(xpath_schools)
            rows_ranking = tr.find_element_by_xpath(xpath_ranking)
            rows_rate = tr.find_element_by_xpath(xpath_rate)
            rows_lsat = tr.find_element_by_xpath(xpath_lsat)
            rows_gpa = tr.find_element_by_xpath(xpath_gpa)
            schools.append(rows_schools.text)
            rankings.append(rows_ranking.text)
            rates.append(rows_rate.text)
            lsats.append(rows_lsat.text)
            gpas.append(rows_gpa.text)

    time.sleep(2) #waits for "next page" button to become clickable
    driver.find_element_by_class_name("""next_page""").click()
    time.sleep(2)

#handles the last page (different index)
def last_page_handler():
    
    time.sleep(5)    
    for i in range(2,7):
        
        #school column
        xpathone_schools = '//*[@id="schools_list"]/table/tbody/tr['
        xpathtwo_schools = str(i) + ']/td[1]'
        xpath_schools = xpathone_schools + xpathtwo_schools
        
        #ranking column
        xpathone_ranking = '//*[@id="schools_list"]/table/tbody/tr['
        xpathtwo_ranking = str(i) + ']/td[2]'
        xpath_ranking = xpathone_ranking + xpathtwo_ranking
        
        #acceptance rate
        xpathone_rate = '//*[@id="schools_list"]/table/tbody/tr['
        xpathtwo_rate = str(i) + ']/td[3]'
        xpath_rate = xpathone_rate + xpathtwo_rate
        
        #median lsat
        xpathone_lsat= '//*[@id="schools_list"]/table/tbody/tr['
        xpathtwo_lsat = str(i) + ']/td[4]'
        xpath_lsat = xpathone_lsat + xpathtwo_lsat
        
        #median gpa
        xpathone_gpa = '//*[@id="schools_list"]/table/tbody/tr['
        xpathtwo_gpa = str(i) + ']/td[5]'
        xpath_gpa = xpathone_gpa + xpathtwo_gpa
        
        for tr in driver.find_elements_by_class_name("scllist"):
            rows_schools = tr.find_element_by_xpath(xpath_schools)
            rows_ranking = tr.find_element_by_xpath(xpath_ranking)
            rows_rate = tr.find_element_by_xpath(xpath_rate)
            rows_lsat = tr.find_element_by_xpath(xpath_lsat)
            rows_gpa = tr.find_element_by_xpath(xpath_gpa)
            schools.append(rows_schools.text)
            rankings.append(rows_ranking.text)
            rates.append(rows_rate.text)
            lsats.append(rows_lsat.text)
            gpas.append(rows_gpa.text)

last_page_handler()

stats = [{"School" : schools[i],
        "Ranking" : rankings[i],
        "Statistics" : {"Acceptance Rate" : rates[i], "Median GPA" : gpas[i],"Median LSAT" : lsats[i]}} for i in range(len(schools))]

print(json.dumps({"Admissions Statistics" : stats}))

driver.quit()