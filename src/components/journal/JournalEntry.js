import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">

            <div className="journal__entry-picture" style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: 'url(https://r1.abcimg.es/resizer/resizer.php?nuevoancho=620&imagen=%2F%2Fstatic1.abc.es%2Fmedia%2Fopinion%2F2020%2F10%2F09%2Ffgh-kjd--620x349%40abc.jpg&medio=abc)'
            }}>

            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-contetn">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                </p>
            </div>

            <div className="journal__entry-date-box">
                <samp>Monday</samp>
                <h4><b>19</b></h4>
            </div>

        </div>
    )
}
