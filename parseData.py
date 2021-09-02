#
# This Script parses data from FHI and outputs a JS file with a data array
#

import csv
import json

csvFilePath = 'data/data_covid19_lab_by_time_2021-09-01.csv'
jsonFilePath = 'src/data/output.js'

data = []

with open(csvFilePath) as csvFile:
    csvReader = csv.DictReader(csvFile)
    for row in csvReader:
        data.append({ 'date': row['date'], 'Positive': row['n_pos'], 'Negative': row['n_neg'] })

with open(jsonFilePath, 'w') as jsonFile:
    jsonFile.write('const data = ' + json.dumps(data, indent=4))
