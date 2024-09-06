import React from 'react'
import Button from './Button'
import TournamentItemInfo from './TournamentItemInfo'
import TournamentItemMetadata from './TournamentItemMetadata'

export default function TournamentItem({
    id,
    selected = false,
    pin = false,
    state = '',
    name = '',
    date = '',
    tag = '',
    players = '',
    tourney = '',
    types = [],
    customClass = '',
    setActiveEl,
    activeEl
}) {
    const handleClick = (e) => {
        e.preventDefault;
        setActiveEl(id)
    }
    const classes = `tournamentItem${state === 'Canceled' ? ' canceled' : ''}${selected ? ' selected' : ''}${customClass ? ' ' + customClass : ''}`

    return (
        <a href='#' onClick={handleClick} className={`${classes} ${activeEl === id ? 'active' : ''}`}>
            <div className='tournamentItem-state'>
                <span className='tournamentItem-state-text'>{state}</span>
            </div>
            <div className='tournamentItem-content'>
                <div className='tournamentItem-details'>
                    <TournamentItemInfo pin={pin} tag={tag} name={name} types={types} />
                    <Button className='tournamentItem-button' disabled={state === 'Canceled'}>
                        {state === 'Canceled' ? 'Canceled' : 'Join table'}
                    </Button>
                </div>
                <div className='tournamentItem-details'>
                    <TournamentItemMetadata date={date} players={players} tourney={tourney} />
                </div>
            </div>
        </a>
    )
}
