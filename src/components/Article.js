import React from "react";

function minutesToRead(minutes) {
    let emojis = ""
  
    if (minutes < 30) {
      const emojisNeeded = Math.ceil(minutes / 5)
      for (let i = 1; i <= emojisNeeded; i++) {
        emojis += "☕️"
      }
    } else if (minutes >= 30) {
      const emojisNeeded = Math.ceil(minutes / 10)
      for (let i = 1; i <= emojisNeeded; i++) {
        emojis = emojis + "🍱"
      }
    }
    
    return `${emojis} ${minutes} to read`
  }

function Article(
    {
        title, 
        date = "January 1, 1970", 
        preview, 
        minutes
    }
){
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} • {minutesToRead(minutes)}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article