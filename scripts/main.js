let people = ["Kayla", "Sawyer"];
let evenWeekList = ["BigLaundry", "Vacuum", "Garbage", "Bathroom", "Kitchen"];
let oddWeekList = ["RegLaundry", "Vacuum", "Garbage"];
let currWeekSchedule = [[], [], [], [], [], [], []];

// Determines whether the current week is even (use evenWeekList) or odd (use oddWeekList)
function isEvenWeek()
{
    currentDate = new Date();
    startDate = new Date(currentDate.getFullYear(), 0, 1);
    var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
    
    var weekNumber = Math.ceil(days / 7);
         
    isEvenWeek = (weekNumber % 2 == 0);

    // Display the calculated result
    console.log("Week number of " + currentDate + " is: " + weekNumber);
    console.log("Week is odd? " + isEvenWeek);

    return isEvenWeek;
}

// Randomly assigns the task 'Groceries' to a day between 0 (Mon.) and 3 (Thur.)
function getGroceryDate()
{
    //return Math.floor(Math.random() * 4); // This can only return 0, 1, 2, or 3
    var num = Math.floor(Math.random() * 4);
    //console.log("Day is: " + num);
    return num;
}

function assignDishesTask()
{
    var num = Math.floor(Math.random() * 2);
    //console.log(people[num] + " got dishes!");
    return num;
}

function main()
{
    var groceryDateNum = getGroceryDate();
    currWeekSchedule[groceryDateNum].push("Groceries");

    let i = 0;

    while(i < currWeekSchedule.length)
    {
        var dishesNum = assignDishesTask();
        currWeekSchedule[i].push("Dishes - " + people[dishesNum]);
        i++;
    }

    return currWeekSchedule;
}

main();
console.log(currWeekSchedule);

//var groceryDateNum = getGroceryDate();
//isEvenWeek();
//assignDishesTask();