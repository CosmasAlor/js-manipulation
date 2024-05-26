var inputs = document.querySelectorAll('.controls input');

function handleupdate() {

    var suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+ suffix)


}

inputs.forEach(input => input.addEventListener('change', handleupdate));
inputs.forEach(input => input.addEventListener('mousemove', handleupdate));