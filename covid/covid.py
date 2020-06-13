import csv
from datetime import date

covid_cases = {}
covid_deaths = {}

def checkState(state):
    if state not in covid_cases:
        covid_cases[state] = []
        covid_deaths[state] = []

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

# Something here is not working to create a long enough title row
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

# set date in both files
today = date.today()
todayString = today.strftime("%B %d, %Y")

casesFile = open("index.html", "rt")
casesFileContents = casesFile.read()
casesFileContents = casesFileContents.replace("{{DATE}}", todayString)
casesFile.close()

casesFile = open("index.html", "wt")
casesFile.write(casesFileContents)
casesFile.close()

deathsFile = open("deaths.html", "rt")
deathsFileContents = deathsFile.read()
deathsFileContents = deathsFileContents.replace("{{DATE}}", todayString)
deathsFile.close()

deathsFile = open("deaths.html", "wt")
deathsFile.write(deathsFileContents)
deathsFile.close()