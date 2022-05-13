import json

yes = ["y", "yes", "Y", "Yes"]

game = []
gameS =  []

dates = {
    "game" : [],
    "gameS" : []
}

def di1(dates, game, gameS):
    
    var2 = input("Enter the date in human terms and add any extraneous info. (Ex: 'Febuary 11th', or 'November 3rd (at CHS)') ")

    
  
    inp = input(f"Is {var2} the correct format? (y,n) ")

    if (inp in yes):
        
        gameS.append(var2)

        inp = input("Add another? (y, n, r to restart) ")

        if (inp in yes):
            dateInput(dates, game, gameS)
        elif (inp == "r" or inp == "R"):
            game.clear
            gameS.clear 
            dateInput(dates, game, gameS)
        else:
            for datee in game:
                dates["game"].append(datee)
            for dateS in gameS:
                dates["gameS"].append(dateS)

            with open("dates.json", "w") as dateFile:
                json.dump(dates, dateFile, indent=4)
            
    else:
        di1(dates, game, gameS)

def dateInput(dates, game, gameS):
    var = input("Enter a date: (MM;DD;YYYY) ")
    inp = input(f"Is {var} the correct date? (y,n) ")

    varL = var.split(';')

    try:
        for i, item in enumerate(varL):
            itemI = int(item)

            if i == 0 or i == 1:
                if len(item) != 2:
                    print("Error: Incorrect number of digits were provided")
                    dateInput(dates, game, gameS)
            elif i == 2:
                if len(item) != 4:
                    print("Error: Incorrect number of digits were provided")
                    dateInput(dates, game, gameS)
            else:
                print("Error: Too many values provided")
                dateInput(dates, game, gameS)

    except ValueError:
        print("Error: non-integer fields were provided")
        dateInput(dates, game, gameS)

    if (inp in yes):
        game.append(var)
        di1(dates, game, gameS)
    else:
        dateInput(dates, game, gameS)


dateInput(dates, game, gameS)