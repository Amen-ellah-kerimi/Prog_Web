document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btnVerifier").addEventListener("click", function () {
        var textalert = "Résultat:\n";
        var score = 0;

        // Question 1
        if (qcm.Q1[1].checked) {
            score += 10;
            textalert += "Question 1: Bonne Réponse !\n";
        } else {
            textalert += "Question 1: Mauvaise Réponse !\n";
        }

        // Question 2
        if (qcm.Q2[1].checked && !qcm.Q2[0].checked && !qcm.Q2[2].checked && !qcm.Q2[3].checked) {
            score += 10;
            textalert += "Question 2: Bonne Réponse !\n";
        } else {
            textalert += "Question 2: Mauvaise Réponse !\n";
        }

        // Question 3
        if (qcm.Q3[0].checked && !qcm.Q3[1].checked && !qcm.Q3[2].checked) {
            score += 10;
            textalert += "Question 3: Bonne Réponse !\n";
        } else {
            textalert += "Question 3: Mauvaise Réponse !\n";
        }

        // Question 4
        if (qcm.Q4[1].checked && !qcm.Q4[0].checked && !qcm.Q4[2].checked && !qcm.Q4[3].checked) {
            score += 10;
            textalert += "Question 4: Bonne Réponse !\n";
        } else {
            textalert += "Question 4: Mauvaise Réponse !\n";
        }

        // Question 5
        if (qcm.Q5[0].checked) {
            score += 10;
            textalert += "Question 5: Bonne Réponse !\n";
        } else {
            textalert += "Question 5: Mauvaise Réponse !\n";
        }

        // Question 6
        if (qcm.Q6[0].checked && qcm.Q6[1].checked && !qcm.Q6[2].checked && !qcm.Q6[3].checked) {
            score += 10;
            textalert += "Question 6: Bonne Réponse !\n";
        } else {
            textalert += "Question 6: Mauvaise Réponse !\n";
        }

        // Question 7
        if (qcm.Q7[0].checked) {
            score += 10;
            textalert += "Question 7: Bonne Réponse !\n";
        } else {
            textalert += "Question 7: Mauvaise Réponse !\n";
        }

        // Question 8
        if (!qcm.Q8[0].checked && qcm.Q8[1].checked && qcm.Q8[2].checked && !qcm.Q8[3].checked) {
            score += 10;
            textalert += "Question 8: Bonne Réponse !\n";
        } else {
            textalert += "Question 8: Mauvaise Réponse !\n";
        }

        // Question 9
        if (qcm.Q9[1].checked) {
            score += 10;
            textalert += "Question 9: Bonne Réponse !\n";
        } else {
            textalert += "Question 9: Mauvaise Réponse !\n";
        }

        // Question 10
        if (!qcm.Q10[0].checked && qcm.Q10[1].checked && qcm.Q10[2].checked) {
            score += 10;
            textalert += "Question 10: Bonne Réponse !\n";
        } else {
            textalert += "Question 10: Mauvaise Réponse !\n";
        }

        textalert += "\nVotre Score = " + score + " / 100";
        alert(textalert);
    });
});
