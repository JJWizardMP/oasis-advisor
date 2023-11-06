from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
from webdriver_manager.chrome import ChromeDriverManager
import time
from bs4 import BeautifulSoup
import re

# Default TripAdvisor website as an Constant
URL_ADVISOR = "https://www.tripadvisor.com.mx"
# Oasis Hotels
HOTELS = {
    1: 'https://www.tripadvisor.com.mx/Hotel_Review-g150807-d8009670-Reviews-The_Pyramid_Cancun-Cancun_Yucatan_Peninsula.html',
    2: 'https://www.tripadvisor.com.mx/Hotel_Review-g150807-d154444-Reviews-Grand_Oasis_Cancun-Cancun_Yucatan_Peninsula.html',
    5: 'https://www.tripadvisor.com.mx/Hotel_Review-g150807-d566509-Reviews-Grand_Oasis_Palm-Cancun_Yucatan_Peninsula.html',
    6: 'https://www.tripadvisor.com.mx/Hotel_Review-g150807-d17165483-Reviews-Hotel_Oasis_Palm-Cancun_Yucatan_Peninsula.html',
    9: 'https://www.tripadvisor.com.mx/Hotel_Review-g150807-d154429-Reviews-Smart_Cancun_by_Oasis-Cancun_Yucatan_Peninsula.html',
    10: 'https://www.tripadvisor.com.mx/Hotel_Review-g150807-d7229684-Reviews-Oh_Cancun_The_Urban_Oasis-Cancun_Yucatan_Peninsula.html',
    41: 'https://www.tripadvisor.com.mx/Hotel_Review-g150807-d671741-Reviews-The_Sens_Cancun-Cancun_Yucatan_Peninsula.html'
}
PARENT_BUTTONS = "//div[contains(@class, 'lXxJN') and contains(@class, 'Gi') and contains(@class, 'Z') and contains(@class, 'BB')]"
LANG = ["//label[@for='LanguageFilter_1']", "//label[@for='LanguageFilter_2']" ]
RATES = ["//*[@id='ReviewRatingFilter_5']", "//*[@id='ReviewRatingFilter_4']", "//*[@id='ReviewRatingFilter_3']"]
BUTTON_PAGE = "//*[contains(@class, 'pageNum')]"
BUTTON_RATE = "//ul[@class='LojWi w S4']"
PER_PAGE = 5
# Class of Elements
CARD_COMMENT = "div.YibKl.MC.R2.Gi.z.Z.BB.pBbQr"
CARD_COMMENT_XPATH = "//div[@class='YibKl MC R2 Gi z Z BB pBbQr']"
PROFILE_PICTURE = "a.kjIqZ.I.ui_social_avatar.inline img"
DATE = "div.cRVSd"
TITLE = "a.Qwuub span span"
COMMENT_LINK = "a.Qwuub"
NAME = "a.ui_header_link.uyyBf"
COMMENT = "span.QewHA.H4._a span"
DATE_STAYED = "span.teHYY._R.Me.S4.H3" 
STARS_RATE = ".ui_bubble_rating"
RATE_HEX = '\ue00b'
# Script to get the pseudo after class
GET_PSEUDO_SCRIPT = "return window.getComputedStyle(arguments[0], '::after').getPropertyValue('content');"
# Properties of Comments
PP = 'profile_picture'
D = 'date_comment'
DS = 'date_stayed'
N = 'author'
T = 'title'
C = 'comment'
LC = 'comment_link'
R = 'rate'

def extract_content(string):
    # Use regular expression to find content between parentheses
    pattern = r'\((.*?)\)'
    match = re.search(pattern, string)
    if match:
        # Extract the content between parentheses
        content = match.group(1)
        return content
    else:
        return None

def get_selenium_driver(url):
    # Set up the Selenium WebDriver
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    driver.get(url)
    return driver

def refresh_and_filer(driver, page, rate, lang):
    pass

def get_html_source(driver, page, rate, lang):
    #wait = WebDriverWait(driver, 10)
    page_element = driver.find_elements(By.XPATH, BUTTON_PAGE)
    lang_element = driver.find_element(By.XPATH, lang)
    del page_element[0]
    #page_element[page].click()
    time.sleep(6)
    lang_element.click()
    print(lang_element.is_selected())
    driver.refresh()
    #wait.until(EC.invisibility_of_element_located((By.XPATH, lang)))
    #wait.until(EC.element_to_be_clickable((By.XPATH, lang))).click()
    time.sleep(6)

    # Get the HTML source code
    html_source = driver.page_source
    # Create a BeautifulSoup object
    soup = BeautifulSoup(html_source, "html.parser")
    return driver, soup

# This function is because we extract the rate from a css-pseudo class
def get_rates(driver, page, rate, lang, elements):
    rates = []
    # scrape rate
    for i in range(len(elements)):
        # driver.maximize_window()

        elements = driver.find_elements(By.XPATH, CARD_COMMENT_XPATH)
        # Find the element with the pseudo-element
        element = elements[i].find_element(By.CSS_SELECTOR, STARS_RATE)
        # Get the computed style of the element
        computed_style = driver.execute_script(GET_PSEUDO_SCRIPT, element)
        rates.append(computed_style.strip().strip('"'))
    return rates

def scrape_data(url, page, rate, lang):
    # get driver and soup objects
    driver =  get_selenium_driver(url)
    driver, soup = get_html_source(driver, page, rate, lang)
    # Find the elements using BeautifulSoup
    elements_soup = soup.select(CARD_COMMENT)
    # Do the same but for selenium driver
    elements_driver = driver.find_elements(By.XPATH, CARD_COMMENT_XPATH)
    #rates = get_rates(driver, page, rate, lang, elements_driver)
    # Iterate through the elements and perform actions
    for i, element in enumerate(elements_soup):
        # Find the values of the comment
        node_comment = {
            PP: element.select_one(PROFILE_PICTURE),
            D: element.select_one(DATE),
            DS: element.select_one(DATE_STAYED),
            N:  element.select_one(NAME),
            T: element.select_one(TITLE),
            C: element.select_one(COMMENT),
            LC: element.select_one(COMMENT_LINK),
            #R: rates[i]
        }
        # Get the text values
        json_comment = {
            PP: node_comment[PP].get("src"),
            D: extract_content(node_comment[D].get_text(strip=True)) if node_comment[D] else "",
            DS: node_comment[DS].get_text(strip=True).split(':')[1] if node_comment[DS] else "",
            N: node_comment[N].get_text(strip=True) if node_comment[N] else "",
            T: node_comment[T].get_text(strip=True) if node_comment[T] else "",
            C: node_comment[C].get_text() if node_comment[C] else "",
            LC: "{0}{1}".format(URL_ADVISOR, node_comment[LC].get("href")),
            #R: node_comment[R].count(RATE_HEX)
        }
        # Print the values
        print(json_comment)

# Run the code
#for i in range(0, 5):
scrape_data(HOTELS[1], 2, 2, LANG[1])

