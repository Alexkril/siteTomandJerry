import React from "react";
import Price from "../Price/Price.jsx";
import clases from './BlockInfo.module.css' ;

const BlokInfo = () => {
    return (
        <div class={clases.BlokInfo}>
            
            Груминг является важной частью заботы о благополучии и здоровье собаки, улучшает её качество жизни. Объём и частота необходимых процедур зависят от породы собаки, её возраста и состояния здоровья. Регулярный уход помогает собаке быть здоровой и делает проживание с ней более комфортным. Многие собаки линяют и сбрасывают шерсть. Другие, такие как пудель, не линяют, как другие породы, и требуют ухода и стрижки каждые 4-8 недель.
            Основными причинами ежедневного ухода являются:

уменьшение вероятности возникновения различных проблем со здоровьем, таких как грибок, расчёсы и другие проблемы с кожей;<br/>
общая чистота туловища собаки;<br/>
мониторинг здоровья собаки, проверка на наличие порезов, раздражений, отёков, хромоты или изменений в поведении, которые могут указывать на болезнь;<br/>
установление более тесной связи между собакой и владельцем;
избавление от кожных паразитов;<br/>
удаление колтунов, которые могут вызвать проблемы со здоровьем собаки, такие как раздражение кожи или попадание вредных бактерий в шёрстный покров собаки. 
 
         <Price/>
         
       </div>
    );
    }
export default BlokInfo;