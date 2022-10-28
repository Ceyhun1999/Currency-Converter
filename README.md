https://ceyhun1999.github.io/Currency-Converter/

Modul 3. "Valyuta konvertoru tərtibatı" layihəsi
Açıq API-dən aktual məlumatları əldə edərək onlayn valyuta çeviricisi tərtib etmək:
https://exchangerate.host/#/#docs 
Valyuta məzənnəsi haqqında məlumat əldə etmək üçün URL-ə bu valyutaların iki abreviaturasını əlavə edərək (boşluq və ayırıcılar olmadan) valyuta cütü haqqında məlumat sorğulamaq lazımdır. USD və RUB cütü üçün nümunə:
https://api.exchangerate.host/latest?base=USD&symbols=RUB 
Cavab JSON obyekti olaraq qayıdır. Bu obyektin rates dəyişənində key-value cütləri şəklində obyekt var. RUB key-inə uyğun ədəd — hazırda olan cari məzənnə var.
Kalkulyatorun idarəetmə elementlərindən istifadə edərək istifadəçi iki valyuta və konvertasiya ediləcək məbləği seçmək imkanı əldə edir. Seçdikdən sonra kalkulyator çarpaz kursu və yekun məbləği göstərir. 
Yükləmə xətası halının emal olunmasını təmin edilməlidir.
Tələblər
İnterfeys layout-a uyğun olmalıdır:
https://www.figma.com/file/jprZt6p7xO6T7oj85woJyi/Converter-m4-part-time?node-id=59%3A0 
Başlıq üçün yalnız layout realizasiya olunmuşdur. Linklər və düymələrə hər hansı əməliyyat bağlamağa ehtiyac yoxdur.
Valyutaları daxil etmək üçün iki input. Rəqəm və nöqtələrin daxil edilməsi, həmçinin vergül daxil edildikdə onun nöqtəyə çevrilməsi mümkündür. 
Default olaraq sahələr aşağıdakı formatda əvvəlcədən doldurulur:

-Sol sahədə bir ədədi daxil edilmişdir.

-Sağ sahə isə sol sahədə olan ədədlə alınmış valyuta vahidi üzrə ədədin hasili ilə doldurulur.

Sahələrin yaxınlığında valyuta seçmək üçün düymə mövcuddur. 
  
https://ceyhun1999.github.io/Currency-Converter/
