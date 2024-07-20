
export function getNames(astate)
{
    if (astate==0)
    {return(["батин борщ", "овощной суп", "несквик с пивом"])}{/*все блюда*/}
    if (astate ==1)
        {return(["овощной суп", "несквик с пивом"])} {/*здоровое питание*/}
    if (astate==2) { return( ["батин борщ", "несквик с пивом"])} {/*выбор редакции*/}
    if (astate ==3)
    {return(["несквик с пивом"])} {/*летние супы*/}
    if (astate ==4)
    {return([])} {/*самые популярные*/}
    if (astate ==5)
    {return([])} {/*самые новые*/}
}

export function getHead(astate)
{
    if (astate==0)
    {return("Адовые блюда")}{/*все блюда*/}
    if (astate ==1)
    {return("Питаться здорово")} {/*здоровое питание*/}
    if (astate==2) { return("Батина кострюля")} {/*выбор редакции*/}
    if (astate ==3)
    {return("Летняя расслабуха")} {/*летние супы*/}
    if (astate ==4)
    {return("Горячие чертежи")} {/*самые популярные*/}
    if (astate ==5)
    {return("Новинки")} {/*самые новые*/}
}

export default getNames();