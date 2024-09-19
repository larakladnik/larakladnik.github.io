# 1. Ugani številko

## Opis

Igra naključno izbere številko med 1 in 100, igralec pa mora ugibati pravo številko. Po vsakem ugibanju igra poda povratno informacijo, kot na primer "Previsoko!" ali "Prenizko!".

## Dodatna naloga

Dodaj omejitev števila poskusov in prikaži sporočilo "Konec igre", ko je omejitev dosežena.

## TODO

- [ ] Ustvari osnovno strukturo HTML:
    - [ ] Dodaj vnosno polje za ugibanje številke.
    - [ ] Dodaj gumb za potrditev ugibanja.
    - [ ] Dodaj mesto za prikaz sporočil ("Previsoko!", "Prenizko!").

- [ ] Oblikuj osnovno postavitev s CSS:
    - [ ] Stiliziraj vnosno polje in gumb.
    - [ ] Postavi elemente na sredino strani z uporabo Flexbox ali druge metode.

- [ ] Dodaj logiko igre z JavaScript:
    - [ ] Generiraj naključno številko med 1 in 100.
    - [ ] Dodaj funkcijo, ki preveri, ali je ugibanje pravilno, preveliko ali premajhno.
    - [ ] Prikaži ustrezno sporočilo igralcu.
    - [ ] Dodaj števec poskusov.

- [ ] Implementiraj funkcijo za ponastavitev igre:
    - [ ] Dodaj gumb za ponastavitev, ki bo ponovno začel igro.
    - [ ] Ponastavi števec poskusov in skrito številko.

# 2. Kamen, škarje, papir

## Opis

Ustvari preprosto igro "Kamen, papir, škarje", kjer uporabnik izbere eno od možnosti, računalnik pa naključno izbere svojo. Igra nato prikaže zmagovalca.

## Dodatna naloga

Dodaj števec točk in gumb za ponastavitev igre po več krogih.

## TODO

- [ ] Ustvari osnovno strukturo HTML:
    - [ ] Dodaj tri gumbe: "Kamen", "Papir" in "Škarje".
    - [ ] Dodaj mesto za prikaz izbir igralca in računalnika ter rezultat igre.

- [ ] Oblikuj z CSS:
    - [ ] Stiliziraj gumbe.
    - [ ] Uporabi Flexbox ali CSS Grid za centriranje in postavitev elementov.

- [ ] Napiši JavaScript logiko igre:
    - [ ] Ustvari funkcijo za računalniško izbiro (naključna izbira med "Kamen", "Papir" ali "Škarje").
    - [ ] Zabeleži izbiro igralca ob kliku na enega izmed gumbov.
    - [ ] Primerjaj izbire igralca in računalnika ter določi zmagovalca.
    - [ ] Prikaži rezultat igre.

- [ ] Dodatne funkcije:
    - [ ] Implementiraj sistem točkovanja za več krogov.
    - [ ] Dodaj gumb za ponastavitev igre in točk.

# 3. Spominska igra

## Opis

Ustvari mrežo kart, ki jih igralec obrne, da razkrije simbol. Cilj je ujemanje parov kart. Če igralec obrne dve karti, ki se ne ujemata, se karte spet obrnejo nazaj.
Igra naključno izbere številko med 1 in 100, igralec pa mora ugibati pravo številko. Po vsakem ugibanju igra poda povratno informacijo, kot na primer "Previsoko!" ali "Prenizko!".

## Dodatna naloga

Dodaj omejitev števila poskusov in prikaži sporočilo "Konec igre", ko je omejitev dosežena.

## TODO

- [ ] Ustvari osnovno strukturo HTML:
    - [ ] Ustvari mrežo kart z div elementi.
    - [ ] Skrij simbole na kartah z uporabo CSS.

- [ ] Oblikuj mrežo s CSS:
    - [ ] Uporabi CSS Grid za postavitev kart v mrežo.
    - [ ] Stiliziraj karte, da so vse enako velike.
    - [ ] Dodaj prehode (transitions) za gladko obračanje kart.

- [ ] Napiši JavaScript logiko igre:
    - [ ] Ob kliku na karto razkrij simbol.
    - [ ] Če sta dve karti obrnjeni, preveri, ali se simbola ujemata.
    - [ ] Če se ne ujemata, karti po nekaj sekundah spet obrni.
    - [ ] Če se ujemata, pusti karti odkrito.

- [ ] Naključna postavitev kart:
    - [ ] Ustvari funkcijo za naključno mešanje kart ob začetku igre.

- [ ] Dodatne funkcije:
    - [ ] Dodaj štoparico, da meri, kako hitro igralec konča igro.
    - [ ] Dodaj števec potez, ki prikazuje število poskusov.

# 4. Križec krožec

## Opis

Ustvari igro Tic-Tac-Toe za dva igralca, kjer vsak igralec izmenično postavlja "X" ali "O" na mrežo 3x3. Igra zazna, kdaj je eden od igralcev zmagal (z izpolnjevanjem vrstice, stolpca ali diagonale) ali če se igra konča z neodločenim izidom.

## Dodatna naloga

Implementiraj preprost gumb za ponastavitev, da se igra ponovno začne, in poudari zmagovalno kombinacijo.

## TODO

- [ ] Ustvari osnovno strukturo HTML:
    - [ ] Dodaj mrežo 3x3 z div elementi za vsako celico.
    - [ ] Dodaj mesto za prikaz sporočila o zmagovalcu ali neodločenem izidu.

- [ ] Oblikuj igralno ploščo s CSS:
    - [ ] Uporabi CSS Grid za postavitev mreže 3x3.
    - [ ] Stiliziraj celice, da izgledajo kot igralna plošča.
    - [ ] Dodaj hover efekt, ko igralec premakne miškin kazalec nad celico.

- [ ] Napiši JavaScript logiko igre:
    - [ ] Sledi potezam igralcev (X in O).
    - [ ] Dodaj funkcijo, ki ob kliku na celico postavi X ali O.
    - [ ] Preveri, ali je kdo zmagal po vsaki potezi (vrstica, stolpec ali diagonala).
    - [ ] Če ni zmagovalca in so vse celice zapolnjene, prikaži sporočilo o neodločenem izidu.

- [ ] Dodatne funkcije:
    - [ ] Implementiraj gumb za ponastavitev igre.
    - [ ] Poudari zmagovalno kombinacijo.

# 5. Kača

## Opis

Implementiraj klasično igro kača, kjer igralec nadzira kačo, ki se daljša, ko poje hrano. Kača se mora premikati neprekinjeno, igra pa se konča, če kača trči sama vase ali v steno.

## Dodatna naloga

Dodaj povečanje hitrosti, ko kača raste, in sistem točkovanja, ki temelji na količini hrane, ki jo kača poje.

## TODO

- [ ] Ustvari HTML strukturo:
    - [ ] Ustvari element <canvas> za risanje igre.

- [ ] Oblikuj s CSS:
    - [ ] Nastavi dimenzije in stil platna (canvas).
    - [ ] Postavi element na sredino strani z uporabo Flexbox ali CSS Grid.

- [ ] Napiši JavaScript logiko igre:
    - [ ] Uporabi 2D kontekst platna za risanje kače in hrane.
    - [ ] Ustvari funkcijo za premikanje kače v določeni smeri.
    - [ ] Dodaj logiko za zaznavanje trka kače s stenami ali s seboj.
    - [ ] Ustvari naključno pozicijo za hrano in funkcijo, da se kača podaljša, ko hrano poje.

- [ ] Dodatne funkcije:
    - [ ] Dodaj funkcijo za povečevanje hitrosti, ko kača raste.
    - [ ] Implementiraj števec točk, ki se povečuje z vsako pojedeno hrano.
    - [ ] Dodaj gumb za ponastavitev igre.
