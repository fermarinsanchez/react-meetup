import classes from './Spinner.module.css'

const Spinner = () => {
    return (
        <div className={classes.spinner_root}>
            <div className={classes.spinner}><div></div><div></div><div></div></div>
            <p>Loading ...</p>
        </div>
    )
}

export default Spinner