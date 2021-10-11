import requests

url = "https://api.jikan.moe/v3/search/anime?q="

def anime_list(name):
    url_string = url+name
    response = requests.get(url_string)
    anime_dict = {}
    # print(response.json()['results'][0]['title'])
    for anime in response.json()['results']:
        anime_dict[anime['title']] = anime['image_url']
    return anime_dict

