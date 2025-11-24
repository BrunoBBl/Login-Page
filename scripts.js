document.querySelector('#loginForm').addEventListener('submit', function(e){
            const email = document.querySelector('#emails').value;
            const password = document.querySelector('#passwords').value;

            if (!email || !password) {
                alert("Preencha todos os campos!");
                e.preventDefault();
            }else {
                alert("Você fez Login")
            }
        });
