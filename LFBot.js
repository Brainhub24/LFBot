/**
The reason for developing this script was to automate the process of expanding content boxes on the "The Linux Foundation" website.
As part of a training program on 07.06.2023, it was necessary to expand each content box manually, which could be time-consuming and repetitive. To streamline this process, i created this code to automatically expand all the boxes on the page.

By developing this script, i´ll aimed to enhance the efficiency and productivity of the training process. Instead of manually expanding each box, the script automates the task, saving time and effort. This allows me to focus more on the training content itself rather than repetitive actions.

I also intend to improve the script by adding additional functionality such as automatic screenshots. This extra functionality could possibly be interesting for capturing autonomous screenshots to look at the whole thing local again afterwards. But probably I won't implement this because the "LF" doesn't like such activities.

Overall, my motivation for developing this script was driven by the need to optimize the "tep= training enhancement process" at "The Linux Foundation" by automating the task of expanding content boxes.
 - - - - - - - - - - - - - - - - - -
|   Developer: Jan Gebser           |
|   Email: github@brainhub24.com    |
|   Github: www.brainhub24.com      |
 - - - - - - - - - - - - - - - - - -
Reporsitory:
https://github.com/Brainhub24/LFBot

*/

// Function to display a message on the page
function displayMessage(html) {
const messageContainer = document.createElement('div');
messageContainer.style.position = 'fixed';
messageContainer.style.top = '50%';
messageContainer.style.left = '50%';
messageContainer.style.transform = 'translate(-50%, -50%)';
messageContainer.style.backgroundColor = '#fff';
messageContainer.style.borderRadius = '4px';
messageContainer.style.padding = '20px';
messageContainer.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
messageContainer.style.zIndex = '9999';

const messageContent = document.createElement('div');
messageContent.innerHTML = html;

messageContainer.appendChild(messageContent);
document.body.appendChild(messageContainer);

// Automatically remove the message after 10 seconds
setTimeout(() => {
document.body.removeChild(messageContainer)
;
}, 10000); // 10 seconds
}

// Function to create a link to the GitHub repository
function createGitHubLink() {
const linkContainer = document.createElement('div');
linkContainer.style.position = 'fixed';
linkContainer.style.bottom = '10px';
linkContainer.style.right = '10px';
linkContainer.style.zIndex = '9999';

const link = document.createElement('a');
link.href = 'https://github.com/Brainhub24/LFBot';
link.target = '_blank';


const infoText = document.createElement('span');
infoText.innerText = 'Bot active!';
infoText.style.color = '#fff';
infoText.style.backgroundColor = '#28a745';
infoText.style.padding = '4px 8px';
infoText.style.borderRadius = '4px';
infoText.style.display = 'inline-block';

link.appendChild(infoText);
link.innerHTML += ' LFBot v.1.0';
link.style.color = '#fff';
link.style.textDecoration = 'none';
link.style.backgroundColor = '#007bff';
link.style.padding = '8px 12px';
link.style.borderRadius = '4px';

link.addEventListener('click', (event) => {
event.preventDefault();
// displayMessage('{MSG}');
    displayMessage('<div style="color: #000; font-size: 16px; line-height: 1.5; text-align: center;"><strong>LFBot - Tool Information</strong><br><br>' +
      'LFBot is a JavaScript tool developed by Jan Gebser to automate the process of expanding content boxes on "The Linux Foundation" website. It enhances the efficiency and productivity of the training process by saving time and effort.<br><br>' +
      'For more information and to access the code, visit the <a href="https://github.com/Brainhub24/LFBot" target="_blank">GitHub repository</a>.</div>');
  });

linkContainer.appendChild(link);
document.body.appendChild(linkContainer);
}

// Function to expand a single box
function expandBox(button) {
if (button.getAttribute('aria-expanded') === 'false') {
button.click();
}
}

// Function to expand all closed boxes on the page
function expandClosedBoxes() {
const expandButtons = document.querySelectorAll('button[data-ember-action]');

expandButtons.forEach((button) => {
expandBox(button);
});
}

// Function to handle mutations and expand new boxes
function handleMutations(mutationsList) {
mutationsList.forEach((mutation) => {
const addedNodes = mutation.addedNodes;
addedNodes.forEach((node) => {
if (node.nodeType === Node.ELEMENT_NODE) {
const expandButtons = node.querySelectorAll('button[data-ember-action]');
expandButtons.forEach((button) => {
expandBox(button);
});
}
});
});
}

// Function to observe mutations in the DOM
function observeMutations() {
const observer = new MutationObserver(handleMutations);
const observeTarget = document.documentElement;
const observeOptions = {
childList: true,
subtree: true
};
observer.observe(observeTarget, observeOptions);
}

// Function to expand all boxes
function expandAllBoxes() {
expandClosedBoxes();
observeMutations();
}

// Call the function to expand all boxes
expandAllBoxes();

// Call the function to create the GitHub link
createGitHubLink();