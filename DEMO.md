
# Introduction

Design system - е самостоятелен проект той е базиран на **CRA**, а за пекидж мениджър се използва **yarn**.
Проекта се хоства в **github** и ползва **prettier** за форматиране на кода. 

В центъра на проекта е **storybook** - така наречения component explorer.
За visual review на storybook-a ще използваме **Chromatic** той е създаден от хората които поддържат storybook.
С него можем да билдваме и хостваме storybook в клауда.
За автоматизиране на процеса или така наречения **Continuous integration** ще използваме **GitHub Actions**

Следваща стъпка е настройването на тестовете. Освен визуалните има **interaction** и **accessibility** тестове. 
Те могат да се пускат както през storybook така и да се автоматизират през **test runner** 

Друга основна стъпка е генерирането на документация. Това става с коментари на компонентите и пропъртитата. Също 
така може да се използват .mdx файлове. Документацията може да се билдне и да се генерира статичен сайт.

Последна стъпка е дистрибуцията на design system-а и подготвяне за експорт. 

За целите на демото ползвам готови ui компоненти, а за стилове се ползват styled components