# REACT felvételi feladat

Feladatom egy GYIK (gyakran ismételt kérdések) weboldal létrehozása volt Reactban.

## Projekt képernyőképek

![alt text](https://i.imgur.com/KyI0uxI.png)
![alt text](https://i.imgur.com/6UsNJRF.png)
![alt text](https://i.imgur.com/ihRaJnq.png)
![alt text](https://i.imgur.com/QU8d1WN.png)

## Beüzemelés

Szükség van a `node` és `npm` csomagokra a folytatáshoz.

A fájlokat tartalmazó mappát le kell tölteni, és ki kell csomagolni. Az alábbi műveleteket ezen a mappán kell elvégezni terminálban.

Instaláció:

`npm install`

Szerver indítása:

`npm start`

Oldal látogatása:

`localhost:3000`

## Bemutatás

Projekt specifikaciók:

- Felhasználókezelés (opcionális)
- Kérdések hozzáadása, módosítása, törlése illetve megtekintése (összes, saját, címkézett)
- Kérdések megválaszolása, valamint a válaszok kedvelése, nem kedvelése, módosítása és törlése
- Kérdések címkézése (opcionális)

A projektem elkészítését szeptember 16-án kezdtem el és 27-én fejeztem be. A tervem egy olyan felhasználókra bontott weboldal létrehozása volt amely letisztult és átlátható, emellett sok funkcionalitással is rendelkezzen. A folyamatot a `create-react-app` paranccsal kezdtem meg, amely létrehozta az alap kezdőfileokat, ezekhez hozzácsatoltam még a `react-router-dom 5.3.3`-as verzióját. 

Az átláthatósághoz olyan színeket, szegélyeket és háttérszíneket alkalmaztam amelyek egyszerű, de annál felhasználó barátabb felületet biztosítanak. Több weboldal is a segítségémre szolgált, de amit főleg kiemelnék az a `https://hype4.academy/tools/glassmorphism-generator` és a `https://cssgradient.io/`. Ezek segítségével üveg hátterű komponenseket és szép gradienseket tudtam létrehozni.

A design után neki álltam a funkcionalitás létrehozásának. Az első feladatnak az authentikációt jelöltem ki, mivel az volt a tervem, hogy a kérdések és a válaszok felhasználókra legyenek bontva. Egy-egy felhasználó csak a saját kérdését és válaszát bírja módosítani és törölni, másét nem. Minden adatot a `localStorage`-ba tároltam, kezdve a felhasználói profilokkal. Email és jelszó kombinációt tartottam a legauthentikusabbnak, mivel rengeteg weboldal használja már ezt a metódust. Regisztráció után létrehozásra kerül a profil és átirányít a bejelentkezés oldalra.

A főoldal az összes kérdést listázó felület, amely tartalmazza minden adott kérdéshez tartozó főinformációkat. Ide tartozik maga a kérdés, a címkék, a kérdező emailje és a likeok száma. Kérdésre való kattintás után átdob a kérdés aloldalára, ahol az előbb említett információk mellett megjelenik a kérdéshez fűzött leírás. A kérdés alatt látható a válasz beküldéséhez szükséges felület, és ha van válasz, akkor azt/azokat felette lehet látni.

Válaszokat lehet tetszik és nem tetszikelni, amelyet a weboldal meg is jelenít szám és szöveg sötétítés segítségével. A választ kedvelők és nem kedvelők alul vannak listázva, természetesen ha vannak.

Minden kérdést és választ van lehetőség módosítani és törölni, de ezeket a műveleteket csak a feltevő teheti meg. A gombok amelyekkel elinditható a művelet az is csak nekik jelenik meg, ezzel is betartva a felhasználókhoz fűzött élményt.

A címkékre kattintva csak a kiválasztott címkével ellátott kérdések jelennek meg.

Ha a navigációs felületen a saját emailünkre kattintunk, akkor csak az általunk feltett kérdéseket láthatjuk.

## Értékelés

Egy érdekes, de komoly kihívásnak tartottam ezt a projektet, mivel ténylegesen tesztelhettem a react tudásomat. A localStorage-el való munka tökéletesen próbára tette a JavaScript tudásom, mivel rengetegszer kellett tömbökkel dolgoznom. Az adatok zömének indexet kellett adnom ahhoz, hogy betudjam azonosítani és tudjak velük dolgozni. A fő kihívásom a válasz módosítás komponens volt, ahol egyszerre kellett megadnom a kérdés és a válasz indexét is, hogy tudjak vele dolgozni. Eleinte nem nagyon tudtam rájönni, hogy hogyan is tudnám átadni neki az azonosítokat, de végül useProps és localStorage-el sikerült megoldanom. Kedvenc részem a tetszik/nem tetszik szekció létrehozása volt a válaszoknál, ahol sok JavaScript kódot kellett írnom, de végül sikerült megoldanom.

Köszönöm szépen a WebOrbit csapatának a kihívást és a lehetőséget.
