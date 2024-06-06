
        function f1(){
            input=document.getElementById("nom")
            var nom =document.getElementById("nom").value;
            var nomPattern = /^[A-Z][a-z]*(\s+[A-Z][a-z]*)+$/;
            if (!nomPattern.test(nom)) {
            input.style.borderColor = "red"
            document.getElementById('nomError').innerText = 'Le nom complet doit contenir au moins deux mots,chaque mot commençant par une lettre majuscule !';
            document.getElementById('nomError').style.color="red"
            }else {
            input.style.borderColor = "green"
            document.getElementById('nomError').innerText="✓";
            document.getElementById('nomError').style.color="green"
        }
    }
        function f2(){
            input=document.getElementById("email")
            var email = document.getElementById('email').value;
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(email)) {
                input.style.borderColor = "red"
            document.getElementById('emailError').innerText = 'Veuillez entrer un email valide.';
            document.getElementById('emailError').style.color="red"
            }else {
                input.style.borderColor = "green"
            document.getElementById('emailError').innerText="✓";
            document.getElementById('emailError').style.color="green"
            }
    }
        function f3(){
            input=document.getElementById("matiere")
            var matiere = document.getElementById("matiere").value;
            var matierePattern = /^[A-Za-z]+$/;
            if (!matierePattern.test(matiere)) {
                input.style.borderColor = "red"
               document.getElementById('MError').innerText = 'Veuillez entrer nom valide.';
               document.getElementById('MError').style.color="red"
            }else {
                input.style.borderColor = "green"
               document.getElementById('MError').innerText="✓";
               document.getElementById('MError').style.color="green";
            }
    }
        function f4(){
            input=document.getElementById("n1")
            var nb1 = document.getElementById("n1").value;
            if (nb1>=0 && nb1 <=20){
                input.style.borderColor = "green"
                document.getElementById('nb1Error').innerText = '✓';
                document.getElementById('nb1Error').style.color="green"
            } else{
                input.style.borderColor = "red"
                document.getElementById('nb1Error').innerText = 'Veuillez entrer un nombre  compris entre 0 et 20.';
                document.getElementById('nb1Error').style.color="red"
            }
    }
        function f5(){
            input=document.getElementById("n2")
            var nb1 = document.getElementById("n2").value;
            if (nb1>=0 && nb1 <=20){
                input.style.borderColor = "green"
                document.getElementById('nb2Error').innerText = '✓';
                document.getElementById('nb2Error').style.color="green";
            } else{
                input.style.borderColor = "red"
                document.getElementById('nb2Error').innerText = 'Veuillez entrer un nombre  compris entre 0 et 20.';
                document.getElementById('nb2Error').style.color="red";
            }
    }
        function f6(){
            input=document.getElementById("coefficient")
            var nb1 = document.getElementById("coefficient").value;
            var coefPattern = /^\d+$/;
            if (!coefPattern.test(nb1)){
                input.style.borderColor = "red";
                document.getElementById('Coef').innerText = 'Veuillez entrer un nombre  .';
                document.getElementById('Coef').style.color="red";
            } else{
                input.style.borderColor = "green"
                document.getElementById('Coef').innerText = '✓';
                document.getElementById('Coef').style.color="green";
            }
    }
        function ajoute(){
            var nom = document.getElementById("nom").value;
            var email = document.getElementById('email').value;
            var matiere =document.getElementById("matiere").value;
            var nb1 = parseInt (document.getElementById("n1").value);
            var nb2 = parseInt(document.getElementById("n2").value);
            var coef = parseInt (document.getElementById("coefficient").value);
            var M= ((nb1+nb2)/coef);

            var table = document.getElementById("matable");
            var nouvelleLigne = document.createElement("tr");

            var c1 = document.createElement("td");
            var c2 = document.createElement("td");
            var c3 = document.createElement("td");
            var c4 = document.createElement("td");
            var c5 = document.createElement("td");
            var c6 = document.createElement("td");
            var c7 = document.createElement("td");

            c1.innerText = nom;
            c2.innerText = email;
            c3.innerText = matiere;
            c4.innerText = nb1;
            c5.innerText = nb2;
            c6.innerText = coef;
            c7.innerText = M;
            nouvelleLigne.appendChild(c1);
            nouvelleLigne.appendChild(c2);
            nouvelleLigne.appendChild(c3);
            nouvelleLigne.appendChild(c4);
            nouvelleLigne.appendChild(c5);
            nouvelleLigne.appendChild(c6);
            nouvelleLigne.appendChild(c7);

            table.appendChild(nouvelleLigne);

            document.getElementById("nom").value = "";
            document.getElementById("email").value = "";
            document.getElementById("matiere").value = "";
            document.getElementById("n1").value = "";
            document.getElementById("n2").value = "";
            document.getElementById("coefficient").value = "";
            // document.getElementById("c7").value = "";
        }
        // var formulaire = document.getElementById('Form');
        // function validation(){
        //     if (formulaire.checkValidity()){
        //     alert('Le formulaire a été soumis avec succès.');
        //     }
        // }