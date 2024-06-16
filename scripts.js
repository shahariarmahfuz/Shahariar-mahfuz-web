function toggleMenu() {
            var menu = document.querySelector('.menu');
            menu.classList.toggle('active');
        }

        // Prevent right-click on profile picture
        document.addEventListener('contextmenu', function(e) {
            if (e.target.closest('.profile-picture')) {
                e.preventDefault();
            }
        });
           function toggleMenu() {
            var menu = document.querySelector('.menu');
            menu.classList.toggle('active');
        }

        // Add a function to search the content of the page
        function searchContent() {
            var input, filter, body, txtValue;
            input = document.getElementById('search');
            filter = input.value.toUpperCase();
            body = document.body;
            txtValue = body.textContent || body.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                body.style.display = "";
            } else {
                body.style.display = "none";
            }
        }

        // Prevent right-click on profile picture
        document.addEventListener('contextmenu', function(e) {
            if (e.target.closest('.profile-picture')) {
                e.preventDefault();
            }
        });
