"use strict";

// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

showHideBtn.onclick = ToggleCommentsVisibility;

function ToggleCommentsVisibility() {
    const showHideText = showHideBtn.textContent;
    if (showHideText === 'Show comments') {
        showHideBtn.textContent = 'Hide comments';
        commentWrapper.style.display = 'block';
    } else {
        showHideBtn.textContent = 'Show comments';
        // Using absolute positioning instead of display = "none" is more
        // accessible (I think).
        commentWrapper.style.display = 'none';
    }
};

// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
    e.preventDefault();
    submitComment();
};

function submitComment() {
    const listItem = document.createElement('li');
    const namePara = document.createElement('p');
    const commentPara = document.createElement('p');
    const nameValue = nameField.value;
    const commentValue = commentField.value;

    namePara.textContent = nameValue;
    commentPara.textContent = commentValue;

    list.appendChild(listItem);
    listItem.appendChild(namePara);
    listItem.appendChild(commentPara);

    nameField.value = '';
    commentField.value = '';
}

const transcript = document.querySelector(".transcript");
const transcriptBtn = document.querySelector(".transcript-container button");

transcriptBtn.addEventListener("click", function() {
    if ("Show transcript" === transcriptBtn.textContent) {
        transcript.style.height = "100%";
        transcriptBtn.textContent = "Hide transcript";
    } else {
        transcript.style.height = "0";
        transcriptBtn.textContent = "Show transcript";
    }
});
