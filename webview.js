module.exports = (Franz) => {
  const getMessages = function getMessages() {
    const elements = document.querySelectorAll('.msg-unread-count');
    let count = 0;
    if (elements[0]) {
      count = parseInt(elements[0].innerHTML, 10);
    }

    Franz.setBadge(count);
  };
  Franz.loop(getMessages);
};
