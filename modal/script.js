const deleteButton = document.getElementById('delete');
const modal = {
  main: document.getElementById('modal-main'),
  header: document.getElementById('modal-header'),
  content: document.getElementById('modal-content'),
  cancel: document.getElementById('modal-cancel'),
  confirm: document.getElementById('modal-confirm'),
  container: document.getElementById('modal-container'),
};

const deleteText = {
  header: 'Are you sure you want to delete?',
  content: 'This action cannot be undone',
  confirm: 'Delete',
};

const handleDelete = () => console.log('its gone!');

const closeModal = (callback) => {
  return (evt) => {
    if (callback) callback(evt);
    modal.container.classList.remove('modal-open');
  }
}

const openModal = (text, callback) => {
  return () => {
    const { header, content, cancel, confirm } = text;
    const cancelText = cancel || 'Cancel';
    const confirmText = confirm || 'Confirm';
    modal.header.textContent = header;
    modal.content.textContent = content;
    modal.cancel.textContent = cancelText;
    modal.confirm.textContent = confirmText;
    modal.confirm.addEventListener('click', closeModal(callback));
    modal.container.classList.add('modal-open');
    console.log(modal);
  }
}

deleteButton.addEventListener('click', openModal(deleteText, handleDelete));
modal.container.addEventListener('click', closeModal());
modal.cancel.addEventListener('click', closeModal());
modal.main.addEventListener('click', (evt) => evt.stopPropagation());