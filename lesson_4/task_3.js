﻿// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day = 25;
if (day < 11) alert('Первая декада')
else if (day > 20) alert('Третья декада')
else alert('Вторая декада')