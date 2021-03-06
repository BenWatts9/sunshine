export const HomeCard = ({user, note}) => {
    
    
    return(
        <>
            

            <div className="home__character__card">
                <div>
                    <div className="home-character-card-title">Your Character:</div>
                    <div className="home-picture-name">
                        <div className="home-card-charactername">
                            {user.character.name}   
                        </div>
                        <picture>
                            <img className="home-stockIcon" src={`/images/${user.character.stockIcon}Render.png`}    alt="Character Stock Icon" />
                        </picture>
                    
                    </div>
                </div>
            </div>
        </>
    )
}