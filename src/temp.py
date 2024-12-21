import requests
from bs4 import BeautifulSoup


# Making a GET request
r = requests.get('https://91e0-36-255-16-53.ngrok-free.app/')

# check status code for response received
# success code - 200

# Parsing the HTML
soup = BeautifulSoup(r.content, 'html.parser')
print(soup.prettify())
