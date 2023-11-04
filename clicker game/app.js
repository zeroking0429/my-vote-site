var logs = 0;
var logPlus = 1;
var hello;

function add()
{
    logs+=logPlus;
    update();
}

function update()
{
    document.querySelector("#countNum").value = logs;
    document.querySelector("#nowPlusLogs").innerHTML = "Currently there are "+ logPlus + " additional logs";
    document.querySelector("#nowNeedLogs").innerHTML = "The currently required log is " + (20*(1+logPlus)) + ".";
    document.querySelector("#easter").innerHTML = hello;
}

function save()
{
    localStorage.setItem("logs", logs);
    localStorage.setItem("logPlus", logPlus)
}

function load()
{
    logs = localStorage.getItem("logs");
    logs = parseInt(logs);
    logPlus = localStorage.getItem("logPlus");
    logPlus = parseInt(logPlus);
    hello = sessionStorage.getItem("hello");
    update();
}

function store()
{
    if (logs >= (20*(1+logPlus))) 
    {
        logs-=(20*(1+logPlus));
        logPlus++;
        update();
    } 
    else 
    {
        alert("Not enough")
    }
}
