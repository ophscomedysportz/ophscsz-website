
const navSlide = () => {
    const expand = document.querySelector('.expand');
    const nav = document.querySelector(".mobileDropdown");
    const navLinks = document.querySelectorAll('.unorderedNav li');
    //toggle Nav

 
    expand.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        //link anims
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + .4}s`;
            }
        });
        expand.classList.toggle('toggle')
    });
    
}
/*
$('.form').css('background', 'white');
$('.form').contents().find('body').css('backgroundColor', 'linear-gradient(180deg, red, yellow);');


var frame = document.querySelector('.form');
if (frame != null) {
    frame.style.background = 'linear-gradient(180deg, red, yellow);';
    frame.contentWindow.document.body.style.backgroundColor = 'linear-gradient(180deg, red, yellow);';
}*/



var gameS = ["December 10th (vs. CHS)",  "January 14th (at CHS)", "January 28th (Newbie Game)", "February 25th", "April 1st", "April 29th", "May 13th"]

// ok so month number is 1 less than actual number
//["11;9;2021",  "0;13;2022", "0;27;2022", "1;24;2022", "3;0;2022", "3;28;2022", "4;12;2022"]
var game = ["11;10;2021",  "0;14;2022", "0;28;2022", "1;11;2022", "3;1;2022", "3;29;2022", "4;13;2022"]

function gameDAY() {
    var sheet = document.createElement('style')
    sheet.innerHTML = "h1 {color:#0917f5;}h2 {color:#db1010;}h3{color:#db1010;}";
    document.body.appendChild(sheet);
}

function getDateTime() {
    var d = new Date();

    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();

    var gDate = 0;
    var gMonth = 0;
    var gYear = 0;
    var randBool = false;
    var i = 0;
    var thg = ``;
    var gameDayToday = false;

    const p = document.getElementById("jsTest");
    
    //TODO if statment for if today is friday
        
    i = 0;

    for (const gameDate of game) {
        gDate = parseInt(gameDate.split(';')[1]);
        gMonth = parseInt(gameDate.split(';')[0]);
        gYear = parseInt(gameDate.split(';')[2]);
        /*console.log(gDate);
        console.log(gMonth);
        console.log(gYear);
        console.log(date);
        console.log(month);
        console.log(year);*/
        if (year < gYear) {
            thg = `Friday, ${gameS[i]}.`;
            break;
            
        } else if (year == gYear){
            //game this year
            if (month < gMonth) {
                thg = `Friday, ${gameS[i]}.`;
                break;
            } else if (month == gMonth) {
                //game this month
                if (date < gDate) {
                    thg = `Friday, ${gameS[i]}.`;
                    break;
                } else if (date == gDate) {
                    thg = `GAME DAY TODAY, GET HYPED!`;
                    gameDAY();
                    gameDayToday = true;
                    break;
                } else {
                    thg = `Season's over! Hope to see you next year!`;
                }
            } else {
                thg = `Sometime within last few months. If the school year just started, yell at csz management to update the lists. ~Kai`;
                //update the lists, dumbass
                //game and gameS lists above. If you can't find them use ctrl+f
            }
        } else {
            thg = `Sometime last year, cos some dumbass forgot to update the game lists. Protip: Check the Javascript. ~Kai`;
            //update the lists, dumbass
            //game and gameS lists above. If you can't find them use ctrl+f
        }

        i++;
        

    }
    try {
        p.innerHTML = thg;
    } catch (error) {
        //ignore this try, js is dumb.
        ;
    }

    

    //p.innerHTML = day <= 4 || new Date().getDay() == 6 ? `Next Meeting: Friday  ` : `Friday`;
}



navSlide();
getDateTime();
