import React from "react";

function Article({title, date="January 1, 1970", preview, minutes}){
    function calculateMinutes(){
        console.log(minutes)
        let emojis = ""
        if (minutes < 30){
            const numEmojis = Math.ceil(minutes/5)
            for(let i=1; i<=numEmojis; i++){
                emojis += "☕️"
            }
        } else {
            const numEmojis = Math.ceil(minutes/10)
            for(let i=1; i<=numEmojis; i++){
                emojis += "🍱"
            }
        }
        return emojis
    }

    return(
        <article>
            <h3>{title}</h3>
            <small>{date} · {calculateMinutes()} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article