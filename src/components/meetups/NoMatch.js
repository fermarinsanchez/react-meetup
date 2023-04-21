import React from 'react'
import { Link } from 'react-router-dom'
import classes from './NoMatch.module.css'

const NoMatch = () => {
    return (
        <div className={classes.root}>
            <h3>404</h3>
            <p>We couldn't find this page.</p>
            <p>Please, go back to <Link to='/'>React Meetups</Link></p>

        </div>
    )
}

export default NoMatch