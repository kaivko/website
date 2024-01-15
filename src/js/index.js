(function() {
    function init() {
        var button = document.getElementById('HelloButton');
        if (button) {
            button.addEventListener('click', function() {
                console.log('Hello World!');
            });
        }
    }

    // Wait for the DOM to be ready
    document.addEventListener('DOMContentLoaded', init);
})();
