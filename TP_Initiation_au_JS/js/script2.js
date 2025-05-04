document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btnValider").addEventListener("click", function () {
      var nom = document.getElementById("nom").value;
      var prenom = document.getElementById("prenom").value;
      var section = document.getElementById("section").value;
      var moy1 = document.getElementById("moyenne1").value;
      var moy2 = document.getElementById("moyenne2").value;
  
      if (nom === "" || prenom === "") {
        alert("Vérifiez votre nom et prénom !");
      } else {
        alert(
          "Hello " +
            nom +
            " " +
            prenom +
            "!\nSection: " +
            section +
            "\nMoyenne S1: " +
            moy1 +
            "\nMoyenne S2: " +
            moy2
        );
      }
    });
  });
  