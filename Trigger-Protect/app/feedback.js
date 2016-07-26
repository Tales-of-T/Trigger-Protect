var txtFile = "//feedback.txt";

function writeFeedback() {
	var name = document.userform.name.value;
	var feedback = document.userform.feedback.value;
	ar fso, fileHandle;
    fso = new ActiveXObject("Scripting.FileSystemObject");
    fileHandle = fso.CreateTextFile(txtFile, true);
	fileHandle.writeln("Name: "+name +"\n");
	fileHandle.writeln("Feedback: "+feedback + "\n");
	fileHandle.close();
}