function ut(ClickEvent) {
        ClickEvent.stopPropagation();
        let clickedButton = ClickEvent.target;
        if (!clickedButton)
            return;
        let folderContainer = clickedButton.parentElement;
        let folderOuter = folderContainer.nextElementSibling;
        if (!folderOuter)
            return;
        folderOuter.classList.toggle("open");
    }

console.log('hi');
for (let Ve of document.getElementsByClassName("folder_button"))
    Ve.addEventListener("click", ut)