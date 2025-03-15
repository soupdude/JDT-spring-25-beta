function Experiences({title, info, dates, bullets}) {
    return(
        <div className="job">
            <h4>{title}</h4>
            <p>{info}</p>
            <p>{dates}</p>
            <ul>
                {
                bullets.map((item, index) => (
                <li key={index}>{item}</li>
                ))
                }
            </ul>
        </div>
    )
}

export default Experiences;