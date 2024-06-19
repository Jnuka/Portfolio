export class ModalWindow {
  
  constructor() {
    this.overlay = '';
    this.modal = '';
    this.modalContent = '';
    this.modalCloseButton = '';
  }

  bildModalWindow(content) {
    this.overlay = document.createElement('div');
    this.overlay.classList.add('overlay');

    this.modal = document.createElement('div');
    this.modal.classList.add('modal');

    this.modalContent = document.createElement('div');
    this.modalContent.classList.add('modal__wrapper');

    this.modalCloseButton = document.createElement('button');
    this.modalCloseButton.classList.add('modal__close-button');

    this.setContent(content);
    this.appendModalElements();
    this.buildEvents();
    this.openModal();
  }

  setContent(content) {
    if (typeof content === 'string') {
      this.modalContent.innerHtml = content;
    } else {
      this.modalContent.innerHTML = '';
      this.modalContent.appendChild(content);
    }        
  }

  appendModalElements() {    
    this.modal.append(this.modalContent);
    this.modal.append(this.modalCloseButton);
    this.overlay.append(this.modal);
  }

  buildEvents() {
    this.modalCloseButton.addEventListener("click", this.closeModal);
    this.overlay.addEventListener("click", this.closeModal);
  }

  openModal() {
    document.body.append(this.overlay); 
  }

  closeModal(e) {
    let target = e.target.classList;
    if (target.contains('overlay') || target.contains('modal__close-button')) {
      let overlay = document.querySelector('.overlay');
      if (overlay) {
        overlay.remove();
      }
      document.body.classList.remove('body__no-scroll');
    }
  }

  generateModalCardTemplate() {
    let template = '';
    let modal = document.createElement('div');
    modal.className = 'modal__content';

    template += `<div class="modal__inner">`;
    
    template += `<div class="modal__text">`;
    template += ` <p class="modal__title">Расскажите о своем проекте</p>`;

    template += `<h3 class="modal__description">Заполните все поля, и я свяжусь с вами в&nbsp;ближайшее время</h3>`;
    template += `</div>`;

    template += `<div class="feedback__form">`;
    template += ` <form action method="POST">`;
    template += `<div class="feedback__line">`;
    template += `<h5 class="feedback__name">Телефон или почта</h5>`;
    template += `<input type="text" name="name" placeholder="Введите телефон или почту" autocomplete="off">`;
    template += ` <h5 class="feedback__name">Выберите удобный способ связи</h5>`;
    template += `<label class="drop">`;
    template += `<input type="checkbox" id="target-drop-example">`;
    template += `<span class="control">Telegram<span class="control__img"></span></span>`;
    template += `<ul class="drop-items">`;
    template += `<li class="item-drop"><a target="_blank" href="#">WhatsApp</a></li>`;
    template += `<li class="item-drop"><a target="_blank" href="#">Viber</a> </li>`;
    template += `<li class="item-drop"><a target="_blank" href="#">Звонок на телефон</a></li>`;
    template += `<li class="item-drop"><a target="_blank" href="#">SMS сообщение</a></li>`;
    template += `</ul>`;
    template += `<label class="overlay-close" for="target-drop-example"></label>`;
    template += ` </label>`;
    template += ` </div>`;
    template += ` <button class="feedback__btn" type="submit">Отправить</button>`;
    template += ` </form>`;

    template += `</div>`;
    template += `</div>`;
    template += `</div>`;
    template += `</div>`;

    template += `</div>`;
    template += `</div>`;
    modal.innerHTML = template;
    return modal;
  }

  renderModal() {  
    let content = this.generateModalCardTemplate();
    this.bildModalWindow(content);
  }
}

const modalWindow = new ModalWindow();

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn-modal');
  
  buttons.forEach(item => {
    // item.addEventListener('click', () => {modalWindow.renderModal()});
    item.addEventListener("click", (event) => { 
      if (event.currentTarget.closest('.btn-modal')) {
        document.body.classList.toggle('body__no-scroll');
        modalWindow.renderModal();
      }
    });
  })
})
