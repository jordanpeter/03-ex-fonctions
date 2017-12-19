var calcul = prompt("Quel opération voulez-vous faire ? Addition, soustraction, multiplication, division, % ou vitesse ?")
     if(calcul === "multiplication"){
          var nbreMult = prompt("Quel est le nombre initial ?");
          var nbreMult2 = prompt("Par combien voulez-vous multiplier "+nbreMult);
          var resultMult = parseInt(nbreMult * nbreMult2);
          alert(nbreMult+" * "+nbreMult2+" = "+resultMult);
     }
     else if(calcul ==="soustraction"){
          var nbreSoustraction = prompt("Quel est le nombre initial ?");
          var nbreSoustraction2 = prompt("Combien voulez-vous soustraire de "+nbreSoustraction);
          var resultSous = (nbreSoustraction - nbreSoustraction2);
          alert(nbreSoustraction+" - "+nbreSoustraction2+" = "+resultSous);
     }
     else if(calcul ==="addition"){
          var nbreAddition = prompt("Quel est le nombre initial ?");
          var nbreAddition2 = prompt("Combien voulez-vous additionner à "+nbreAddition);
          var resultAdd = parseInt(nbreAddition) + parseInt(nbreAddition2);
          alert(nbreAddition+" + "+nbreAddition2+" = "+resultAdd);
     }
     else if(calcul === "%"){
          var nbrePourcent = prompt("Quel est le nombre initial ?");
          var nbrePourcent2 = prompt("Quel pourcentage de "+nbrePourcent+" voulez-vous savoir?");
          var resultPourcent = parseInt(nbrePourcent) / (100 / parseInt(nbrePourcent2) )
          alert(nbrePourcent2+"% de "+nbrePourcent+" = "+resultPourcent);
     }
     else if(calcul === "vitesse"){
          var nbreVit = prompt("Distance parcourue ? en mètres.");
          var nbreVit2 = prompt("Temps pour effectuer la distance de "+nbreVit+" mètres (en minutes)");
          var resultVit = (parseInt(nbreVit) / parseInt(nbreVit2))*3.6
          alert(nbreVit+" mètres effectués en "+nbreVit2+" minutes équivaut à une vitesse de "+resultVit+"km/h");
     }
