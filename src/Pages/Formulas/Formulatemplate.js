import '../../App.css';
import video1 from "../../res/aaaaaaaaaapache.mp4";
import Comment from "../../Components/comment";

function Formulatemplate()
{
    const text=<div>
            <h1 style={{
                backgroundImage:`url('${process.env.PUBLIC_URL} /paper.png')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>Мой батя готовит адовые блюда</h1>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <img src={process.env.PUBLIC_URL +"/adovische.png"} alt="image" />
            </div>
        <>
         <h1 style={{
             backgroundImage:`url('${process.env.PUBLIC_URL}/paper.png')`,
             backgroundPosition: 'center',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat',
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
         }}>Индигриенты</h1>
         <ul style={{backgroundImage:`url('${process.env.PUBLIC_URL}/paper.png')`,
             backgroundPosition: 'center',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat',}}>
             <li style={{
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
             }}>суп (желательно борщ): 1 сковорода</li>
             <li style={{
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
             }}>лук: 3 луковицы</li>
             <li style={{
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
             }}>чеснок: 2 головки</li>
             <li style={{
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
             }}>черный перец (по вкусу)</li>
             <li style={{
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
             }}>красный перец (по вкусу)</li>
             <li style={{
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
             }}>стакан муки</li>
             <li style={{
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
             }}>томатная паста: 400г</li>
             <li style={{
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
             }}>майонез: 400г</li>
         </ul>
        </>
        <div style={{
            backgroundImage:`url('${process.env.PUBLIC_URL}/paper.png')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            Ну такой вот примерно рецепт усредненный, потому что вариаций масса.
            <br />Возьмите суп, вывалите его на сковороду и начинайте жарить.
            <br />Добавьте в него огромное количество лука, чеснока, перца черного и красного, не забудьте добавить МУКИ! для вязкости, томатная паста сверху.
            <br />Все это жарится до дыма.
            <br />Потом снимается с огня и остужается на балконе.
            <br />Когда суп остудится, занесите его обратно в квартиру, щедро полив майонезом начинайте есть.

        </div>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <img src= {process.env.PUBLIC_URL + "/endresult.jpg"} alt="image"/>
        </div>
        <h1 style={{
            backgroundImage:`url('${process.env.PUBLIC_URL}/paper.png')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>Видео гайд</h1>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <video src={video1} width="800" height="400" controls="controls" autoPlay="false"/>
        </div>
        </div>;

     return(
         <>
         <div style={{
             backgroundImage:`url('${process.env.PUBLIC_URL}/fireland.jpg')`,
             backgroundPosition: 'center',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat',
         }}>
             {text}

             <div>
                 <h1 style={{
                     backgroundImage:`url('${process.env.PUBLIC_URL}/paper.png')`,
                     backgroundPosition: 'center',
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                 }}>От самых умных</h1>
                 <ul>
                     <li>{Comment("Батя (мудрец 345)", "Из многолетнего опыта приготовления данного блюда, сделал вывод, что лучше всего готовить не из борща, а из нажористого рассольника. Блюдо прекрасно скрасит ваш винный вечер!")}</li><br/>
                 </ul>
             </div>

             <h1 style={{
                 backgroundImage:`url('${process.env.PUBLIC_URL}/paper.png')`,
                 backgroundPosition: '-1230px',
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat',}}>Отзывы</h1>
         <ul>
             <li>{Comment("Ершат Ордынов", "Бате очень понравилось! Ел и всё приговаривал 'Ух блин'")}</li><br/>
             <li>{Comment("Поварёнок Кузя", "У меня так друг умер")}</li>
         </ul>
         </div>
         </>
     )
}
export default Formulatemplate;