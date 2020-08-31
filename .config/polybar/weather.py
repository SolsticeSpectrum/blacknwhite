#!/usr/bin/env python

import json
import urllib
import urllib.parse
import urllib.request
import os


def main():
    city = "Jihlava"
    api_key = "REPLACE_ME"

    try:
        data = urllib.parse.urlencode({'q': city, 'appid': api_key, 'units': 'metric'})
        weather = json.loads(urllib.request.urlopen(
            'http://api.openweathermap.org/data/2.5/weather?' + data)
            .read())
        desc = weather['weather'][0]['description'].capitalize()
        temp = int(float(weather['main']['temp']))
        #return '{}, {}°C'.format(desc, temp)
        return '{}°C'.format(temp)
    except:
        return ''


if __name__ == "__main__":
	print(main())
