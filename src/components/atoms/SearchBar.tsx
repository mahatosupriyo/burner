import styles from 'styles/components/atoms/SearchBar.module.scss'

const SearchBar = () => {
    return (
        <button className={styles.SearchBar}>



            <svg className={styles.SearchIcon} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8521 7.89092C15.8252 4.86407 10.9177 4.86407 7.89092 7.89092C4.86407 10.9177 4.86407 15.8252 7.89092 18.8521C10.9177 21.8789 15.8252 21.8789 18.8521 18.8521C21.8789 15.8252 21.8789 10.9177 18.8521 7.89092ZM7.01311 7.01311C10.5248 3.50149 16.2182 3.50149 19.7299 7.01311C23.094 10.3772 23.2353 15.7437 20.1539 19.2761L22.8183 21.9405C23.0607 22.1829 23.0607 22.5759 22.8183 22.8183C22.5759 23.0607 22.1829 23.0607 21.9405 22.8183L19.2761 20.1539C15.7437 23.2353 10.3772 23.094 7.01311 19.7299C3.50149 16.2182 3.50149 10.5248 7.01311 7.01311Z" fill="#858585" />
            </svg>


            search for anything ...

        </button>
    )
}

export default SearchBar
