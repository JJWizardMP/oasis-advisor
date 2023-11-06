from bs4 import BeautifulSoup
import json
import base64
import re

# CONSTANT
# Default TripAdvisor website as an Constant
URL_ADVISOR = "https://www.tripadvisor.com.mx"
# Oasis Hotels
# PARENT_BUTTONS = "//div[contains(@class, 'lXxJN') and contains(@class, 'Gi') and contains(@class, 'Z') and contains(@class, 'BB')]"
# LANG = ["//label[@for='LanguageFilter_1']", "//label[@for='LanguageFilter_2']"]
# RATES = ["//*[@id='ReviewRatingFilter_5']", "//*[@id='ReviewRatingFilter_4']", "//*[@id='ReviewRatingFilter_3']"]
# BUTTON_PAGE = "//*[contains(@class, 'pageNum')]"
# BUTTON_RATE = "//ul[@class='LojWi w S4']"
# PER_PAGE = 5
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
STARS_RATE = "span.ui_bubble_rating"
# Script to get the pseudo after class
#GET_PSEUDO_SCRIPT = "return window.getComputedStyle(arguments[0], '::after').getPropertyValue('content');"
# Properties of Comments
PP = 'profile_picture'
D = 'date_comment'
DS = 'date_stayed'
N = 'author'
T = 'title'
C = 'comment'
LC = 'comment_link'
R = 'rate'
# FILES NAMES
URLS = 'urls.txt'
SQL = 'advisor.sql'

def read_html_file(file_path):
    with open(file_path, 'r') as file:
        html = file.read()
    return html

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

def escape_single_quotes(text):
    return text.replace("'", "\\'")#.replace('\\\\', '\\')

def extract_rate(element):
  # Extract the last class of the element
  element_classes = element['class'][1]
  # Get the rate but got the string from the class
  string_rate = element_classes.split('_')[1]
  # Parse rate to string and divide by 10
  rate = int(string_rate) / 10
  return rate

def get_html_source(html_source):
    # Create a BeautifulSoup object
    soup = BeautifulSoup(html_source, "html.parser")
    return soup

def get_node_comment(element):
    # Find the values of the comment
    node_comment = {
      PP: element.select_one(PROFILE_PICTURE),
      D: element.select_one(DATE),
      DS: element.select_one(DATE_STAYED),
      N:  element.select_one(NAME),
      T: element.select_one(TITLE),
      C: element.select_one(COMMENT),
      LC: element.select_one(COMMENT_LINK),
      R: extract_rate(element.select_one(STARS_RATE))
    }
    return node_comment

def get_json_comment(node_comment):
    json_comment = {
      PP: node_comment[PP].get("src"),
      D: extract_content(node_comment[D].get_text(strip=True)) if node_comment[D] else "",
      DS: node_comment[DS].get_text(strip=True).split(':')[1] if node_comment[DS] else "",
      N: node_comment[N].get_text(strip=True) if node_comment[N] else "",
      T: node_comment[T].get_text(strip=True) if node_comment[T] else "",
      C: escape_single_quotes(node_comment[C].get_text()) if node_comment[C] else "",
      LC: "{0}{1}".format(URL_ADVISOR, node_comment[LC].get("href")),
      R: node_comment[R]
    }
    return json_comment

def build_json(element):
  node_comment = get_node_comment(element)
  json_comment =  get_json_comment(node_comment)
  return json_comment

def define_format(params):
  sql_format = "INSERT INTO comments_advisor(hotel_id, rate, comment, lang) VALUES({0}, {1}, '{2}', '{3}');\n"
  sql = sql_format.format(params['hotel'], params['rate'], params['json_s'], params['lang'])
  return sql

def append_to_file(content):
    with open(SQL, 'a') as file:
        file.write(content)

def scrape_data():
    # Read the URL list from url.txt
    with open(URLS, 'r') as file:
        url_list = file.readlines()
    # Remove newline characters from each URL
    url_list = [url.strip() for url in url_list]
    # Iterate through each URL
    for url in url_list:
      root, lang, hotel, file = url.split('/')
      html_source = read_html_file(url)
      soup = get_html_source(html_source)
      # Find the elements using BeautifulSoup
      elements_soup = soup.select(CARD_COMMENT)
      for element in elements_soup:
        json_comment = build_json(element)
        sql = define_format({'hotel': hotel, 'rate': json_comment[R], 'json_s': json.dumps(json_comment), 'lang': lang})
        append_to_file(sql)

def main():
    # Run the scrapper
    scrape_data()

# Call the main function if the script is executed directly
if __name__ == "__main__":
    main()
