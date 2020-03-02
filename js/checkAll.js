if (document.querySelector('#checkAll')) {
    document.querySelector('#checkAll').addEventListener('change', function () {
        let checkboxes = document.querySelectorAll('input[type="checkbox"]');
        if (this.checked) {
            this.setAttribute('checked', 'checked');
            for (let checkbox of checkboxes) {
                if (!checkbox.hasAttribute('checked')) {
                    checkbox.click();
                }
            }
        } else {
            this.removeAttribute('checked');
            for (let checkbox of checkboxes) {
                if (checkbox.hasAttribute('checked')) {
                    checkbox.click();
                }
            }
        }

    })
}
