function Calculadora() {
    this.display = document.querySelector('.display');

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.limpaDisplay();
            if (el.classList.contains('btn-del')) this.apagaNum();
            if (el.classList.contains('btn-eq')) this.realizaConta();


        })
    };

    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);
            if (!conta) {
                alert('Valor inválido!');
            }
            this.display.value = conta;
            return;
        } catch (e) {
            alert('Valor inválido!');
            return;
        }
    };

    this.capturaEnter = () => {
        document.addEventListener('keypress', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });
    }

    this.limpaDisplay = () => {
        this.display.value = '';
    };

    this.apagaNum = () => {
        this.display.value = this.display.value.slice(0, -1)
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

};

const calculadora = new Calculadora();
calculadora.inicia();