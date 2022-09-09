import { defineStore } from "pinia";

export const useMainStore = defineStore('MainStore', {
    state: () => {
        return {
            showModal: false,
            modalContent: null,
            staticEffectActive: false,
            showMessage: false,
            modalMessage: '',
        }
    },
    actions: {
        openModal(content) {
            this.showModal = true
            this.modalContent = content
        },
        openMessageModal(message) {
            this.showMessage = true
            this.modalMessage = message
        },
        closeModal() {
            this.showModal = false
            this.modalContent = null
        },
        closeMessageModal() {
            this.showMessage = false
            this.modalMessage = ''
        },
        closeModalOnEscape(e) {
            if (e.keyCode == 27) {
                if (this.showMessage) {
                    this.closeMessageModal();
                } else if (this.showModal) {
                    this.closeModal();
                }
            }
        },
        closeOnOutsideClick(e) {
            if (e.target.classList.contains('modal-container')) {
                if (this.showMessage) {
                    this.closeMessageModal();
                } else if (this.showModal) {
                    this.closeModal();
                }
            }
        },
        setRandomStaticEffect() {
            let longTimerOut = (Math.random() * 10000)
            let shortTimeOut = (Math.random() * 2500)
            // console.log(longTimerOut, shortTimeOut)
            setTimeout(() => {
                this.staticEffectActive = true
                setTimeout(() => {
                    this.staticEffectActive = false
                    this.setRandomStaticEffect()
                }, shortTimeOut);
            }, longTimerOut);
        },
        test() {
            console.log('poop')
        }
    }
})