var storage = chrome.storage.sync;
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("submit").addEventListener("click", saveTriggers);
});

$(document).ready(function() {


  var container = document.getElementById("yourtriggers")
  
  storage.get(null, function(items) {
    var allKeys = Object.keys(items);
    for(var key in allKeys){
      var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.name = key;
  checkbox.value = "checked";
  checkbox.id = "id";

  var label = document.createElement('label')
  label.htmlFor = "id";
  label.appendChild(document.createTextNode(storage.get(key, function(items){})));

  container.appendChild(checkbox);
  container.appendChild(label);
  }});

  $(".checkboxes").on("change", ":checkbox", saveSettings);

  //Save or delete settings
  function saveSettings() {
    var name = this.name;   

    if($(this).is(':checked')) {
      storage.set({name:'checked'},function(){
        console.log("saved");
      });
    }
    else {
      storage.remove(name, function(){
        console.log("removed");
      });
    }
  }

  

});
function saveTriggers() {
    var trigger = document.userform.name.value;
    storage.get(null, function(items) {
    var allKeys = Object.keys(items);});
    var triggerNumber = allKeys.length();
    var key = "trigger" + triggerNumber;
    storage.set({key:trigger}, function(){});
  }