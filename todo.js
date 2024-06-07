document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector("button#add");
  const taskInput = document.querySelector("input#task");
  const prioritySelect = document.querySelector("select#priority");
  let messageBox = 0;

  //add task button
  addButton.addEventListener("click", function () {
    checkNum(messageBox);
    const taskValue = taskInput.value;
    const priorityValue = prioritySelect.value;
    console.log(priorityValue);
    const priorityParagraph = document.createElement("p");
    priorityParagraph.append(priorityValue);

    const imgTag = document.createElement("img");
    imgTag.src = "https://cdn-icons-png.flaticon.com/512/8832/8832119.png";
    imgTag.classList.add("tick");

    const alarm = document.createElement("img");
    alarm.src = "https://cdn-icons-png.flaticon.com/512/2058/2058148.png";
    alarm.classList.add("ringbell");

    const removebtn = document.createElement("button");
    removebtn.classList.add("remove");
    removebtn.append(imgTag, alarm);

    //tick button
    imgTag.addEventListener("click", function () {
      const messageDiv = imgTag.closest(".message");
      if (messageDiv) {
        messageDiv.remove();
        messageBox--;
        alert("Mission completed! Well done!");
      }
    });

    const tagDiv = document.createElement("div");
    tagDiv.classList.add("tag");

    tagDiv.append(priorityParagraph, removebtn);

    const taskParagraph = document.createElement("p");
    taskParagraph.append(taskValue);

    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    messageDiv.append(tagDiv, taskParagraph);

    const container = document.querySelector(".container2");
    messageBox++;
    container.append(messageDiv);

    //change tag color
    if (priorityValue === "High") {
      priorityParagraph.style.backgroundColor = "rgb(128, 61, 59)";
      messageDiv.style.order = "-2";
    } else if (priorityValue === "Medium") {
      priorityParagraph.style.backgroundColor = "rgb(175, 130, 96)";
      messageDiv.style.order = "-1";
    } else {
      priorityParagraph.style.backgroundColor = "rgb(228, 197, 158)";
      messageDiv.style.order = "0";
    }

    //alarm
    alarm.addEventListener("click", function () {
      alarm.style.filter = "grayscale(0%)";
      alert("Alarm set in 5 seconds");
      setTimeout(function () {
        alarm.style.filter = "grayscale(100%)";

        alert("Ring Ring Ring");
      }, 4000);
    });
  });
});
//check message quantity
function checkNum(i) {
  if (i >= 15) {
    alert("Let's finish the current tasks before tackling new challenges!!");
    container.remove();
  }
}
