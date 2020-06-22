import csv
import re
from datetime import date

covid_cases = {}
covid_deaths = {}
covid_averages = {}
all_cases = {}

def checkState(state):
    if state not in covid_cases:
        covid_cases[state] = []
        covid_deaths[state] = []
        covid_averages[state] = []
        all_cases[state] = []         # for averages

def addCases(row):
    state = row[1]
    cases = int(row[3])
    if cases > 99:
        covid_cases[state].append(cases)

def addDeaths(row):
    state = row[1]
    deaths = int(row[4])
    if deaths > 9:
        covid_deaths[state].append(deaths)

# does not add zeros if there are no cases, dates will not align
def addAverages(row):
    state = row[1]
    total_cases = int(row[3])
    all_cases[state].append(total_cases)
    average_new = 0
    number_of_days = len(all_cases[state])
    print()
    print (state, "days:", number_of_days)
    if number_of_days == 0:
        covid_averages[state].append(total_cases)
        #print ("in 0 days, appended", total_cases, "to", state, covid_averages[state])
        return
    elif number_of_days < 7:
        #print ("in under 7 for", state, "day:", day, "cases:", total_cases)
        average_new = (total_cases - all_cases[state][0]) * 1.0 / (number_of_days + 1)
    else:
        average_new = (total_cases - all_cases[state][number_of_days - 7]) / 7.0
        #print ("in over 7 for", state, "day:", day, " cases:", total_cases)
    covid_averages[state].append(average_new)
    print (state, covid_averages[state], len(covid_averages[state]))

def createTitleRow(data):
    long = 0
    for state in sortData(data):
        if len(data[state]) > long:
            long = len(data[state])
    return(["state"] + range(0,long))

def sortData(data):
    return sorted(data)

with open('covid.csv') as csvfile:
    readCSV = csv.reader(csvfile, delimiter=',')
    next(readCSV)
    for row in readCSV:
        checkState(row[1])
        addCases(row)
        addDeaths(row)
        addAverages(row)

with open('formattedCovidCases.csv', 'w') as newfile:
    writer = csv.writer(newfile)
    writer.writerow(createTitleRow(covid_cases))
    for state in sortData(covid_cases):
        if len(covid_cases[state]) > 0:
            newrow = [state] + covid_cases[state]
            writer.writerow(newrow)

with open('formattedCovidDeaths.csv', 'w') as newfile:
    writer = csv.writer(newfile)
    writer.writerow(createTitleRow(covid_deaths))
    for state in sortData(covid_deaths):
        if len(covid_deaths[state]) > 0:
            newrow = [state] + covid_deaths[state]
            writer.writerow(newrow)

with open('formattedCovidAverages.csv', 'w') as newfile:
    writer = csv.writer(newfile)
    writer.writerow(createTitleRow(covid_averages))
    for state in sortData(covid_averages):
        if len(covid_averages[state]) > 0:
            newrow = [state] + covid_averages[state]
            writer.writerow(newrow)

# set date in both files
today = date.today()
todayString = today.strftime("%B %d, %Y")
searchTerm = "<span id=\"date\">.*<\/span>"
newDateString = "<span id=\"date\">" + todayString + "</span>"

casesFile = open("index.html", "rt")
casesFileContents = casesFile.read()
casesFileContents = re.sub(searchTerm, newDateString, casesFileContents)
casesFile.close()

casesFile = open("index.html", "wt")
casesFile.write(casesFileContents)
casesFile.close()

deathsFile = open("deaths.html", "rt")
deathsFileContents = deathsFile.read()
deathsFileContents = re.sub(searchTerm, newDateString, deathsFileContents)
deathsFile.close()

deathsFile = open("deaths.html", "wt")
deathsFile.write(deathsFileContents)
deathsFile.close()
