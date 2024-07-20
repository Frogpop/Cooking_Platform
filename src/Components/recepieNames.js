export function getNames(astate) {
    if (astate == 0) {
        return [
            { name: "батин борщ", link: "/recipes/batin-borsh" },
            { name: "овощной суп", link: "/recipes/ovoshnoi-sup" },
            { name: "несквик с пивом", link: "/recipes/neskvik-s-pivom" }
        ]; // все блюда
    }
    if (astate == 1) {
        return [
            { name: "овощной суп", link: "/recipes/ovoshnoi-sup" },
            { name: "несквик с пивом", link: "/recipes/neskvik-s-pivom" }
        ]; // здоровое питание
    }
    if (astate == 2) {
        return [
            { name: "батин борщ", link: "/recipes/batin-borsh" },
            { name: "несквик с пивом", link: "/recipes/neskvik-s-pivom" }
        ]; // выбор редакции
    }
    if (astate == 3) {
        return [
            { name: "несквик с пивом", link: "/recipes/neskvik-s-pivom" }
        ]; // летние супы
    }
    if (astate == 4) {
        return []; // самые популярные
    }
    if (astate == 5) {
        return []; // самые новые
    }
}

export function getHead(astate) {
    if (astate == 0) { return "Адовые блюда"; } // все блюда
    if (astate == 1) { return "Питаться здорово"; } // здоровое питание
    if (astate == 2) { return "Батина кострюля"; } // выбор редакции
    if (astate == 3) { return "Летняя расслабуха"; } // летние супы
    if (astate == 4) { return "Горячие чертежи"; } // самые популярные
    if (astate == 5) { return "Новинки"; } // самые новые
}

export default getNames();
