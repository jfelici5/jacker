from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import json

url = "http://harvard.lawschoolnumbers.com/applicants"

chrome_path = r"C:\Users\jackf\OneDrive\Desktop\chromedriver_win32 (1)\chromedriver.exe"
driver = webdriver.Chrome(chrome_path)
driver.get(url)

time.sleep(2)

users = []
user_lsats = []
user_gpas = []
user_statuses = []

#finds range for iteration
num_rows = len(driver.find_elements_by_tag_name("tr")) + 1

for i in range (2, num_rows):

    #user column
    xpathone_users = '//*[@id="applicants_list"]/table/tbody/tr['
    xpathtwo_users = str(i) + ']/td[1]'
    xpath_users = xpathone_users + xpathtwo_users
    
    #user lsat
    xpathone_user_lsat = '//*[@id="applicants_list"]/table/tbody/tr['
    xpathtwo_user_lsat = str(i) + ']/td[2]'
    xpath_user_lsat = xpathone_user_lsat + xpathtwo_user_lsat
    
    #user gpa
    xpathone_user_gpa = '//*[@id="applicants_list"]/table/tbody/tr['
    xpathtwo_user_gpa = str(i) + ']/td[3]'
    xpath_user_gpa = xpathone_user_gpa + xpathtwo_user_gpa

    #user gpa
    xpathone_status = '//*[@id="applicants_list"]/table/tbody/tr['
    xpathtwo_status = str(i) + ']/td[6]'
    xpath_status = xpathone_status + xpathtwo_status

    time.sleep(2)

    for tr in driver.find_elements_by_xpath('//*[@id="applicants_list"]/table'):

        rows_user = tr.find_element_by_xpath(xpath_users)
        rows_user_lsat = tr.find_element_by_xpath(xpath_user_lsat)
        rows_user_gpa = tr.find_element_by_xpath(xpath_user_gpa)
        rows_status = tr.find_element_by_xpath(xpath_status)
        users.append(rows_user.text)
        user_lsats.append(rows_user_lsat.text)
        user_gpas.append(rows_user_gpa.text)
        user_statuses.append(rows_status.text)

statuses = [{"User" : users[i],
        "Results" : {
        "GPA" : user_gpas[i], "LSAT" : user_lsats[i], "Status" : user_statuses[i]}} for i in range(len(users))]

print(json.dumps({"User Statistics" : statuses}, indent = 4))

driver.quit()