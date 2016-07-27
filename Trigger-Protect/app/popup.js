
//var myid = chrome.runtime.id;
//alert(myid);

// Run our add-on once the page has loaded.
document.addEventListener('DOMContentLoaded', function () {
});

function onOptionClick(){
	var options_url = "/options.html";
	chrom.tabs.create({
		url: options_url
	});
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var text = 
{"police brutality":
    {
        "general":[
            "gunshot",
            "vehicle",
            "taser",
            "physical restraint",
            "pepper spray",
            "struck by vehicle",
            "asphyxiated",
            "beaten",
            "medical emergency",
            "baton",
            "death in castody",
            "stabbed",
            "#blacklivesmatter",
            "#sayhername"
        ],
        "people":[
            "Jordan Davis",
            "Michael Gardner",
            "Tamir Rice",
            "Sandra Bland",
            "Tanisha Anderson",
            "Yvette Smith",
            "Miriam Carey",
            "Shelly Frey",
            "Darnisha Harris",
            "Malissa Williams",
            "Alesia Thomas",
            "Shantel Davis",
            "Rekia Boyd",
            "Shereese Francis",
            "Tarika Wilson",
            "Aiyana Stanley-Jones"
        ]
    }
}

var fillTriggerArea = function (triggers) {
    document.getElementById("TriggerArea").innerHTML = "";
    var triggerarea = document.getElementById("TriggerArea");
    console.log(triggers);
    //trigger in text['police brutality']['general']
    //triggers = text['police brutality']['general'];

    for (var i = 0; i < triggers.length; i++) {

        document.getElementById("TriggerArea").innerHTML += "<input type=checkbox checked='checked' id="+i+">" + triggers[i] + "<br />"; 
        document.getElementById(i).addEventListener("click", function(){
            document.getElementById(i).setAttribute("checked", "false");
        });   
    }
};

document.addEventListener('DOMContentLoaded', function () {
    var dispTriggers = document.getElementById("your");
    dispTriggers.addEventListener("click", function () { fillTriggerArea(text['police brutality']['general']) });
    
});
    

// JQuery to Add Trigger List Options
(function($){

$(document).ready(function () {

    $(function () {

        $('#triggerList').multiSelect({

            includeSelectAllOption: true
        });
        $('#btnSelectTriggers').click(function () {
            var selected = $("#triggerList option:selected");
            var message = "";
            selected.each(function () {
                message += $(this).text() + " " + "\n";
            });
            document.getElementById("triggerResults").value = message;
        });
        $('#btnClearTriggers').click(function () {
            var message = "";
            document.getElementById("triggerResults").value = message;
        });
    });

})

})(jQuery)
