"use client"

import { ChangeEvent, useEffect, useState } from "react"
import { FaMagnifyingGlass } from "react-icons/fa6";

import styles from "./styles.module.scss";

export function GameSearchInput() {
    const [searchValue, setSearchValue] = useState("");

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();

        setSearchValue(e.target.value.length <= 0 ? "" : e.target.value);
    }

    useEffect(() => {
        if(searchValue.length >= 4) {
            console.log(searchValue);
        }
    }, [searchValue]);

    return (
        <div className={styles.inputContainer}>
            <input 
                value={searchValue} 
                onChange={handleOnChange} 
                placeholder="Search for a game..."
                className={styles.input}
            />
            <div className={styles.buttonContainer} onClick={() => console.log("click")}>
             <FaMagnifyingGlass color='#FFF' size={24} />
            </div>
        </div>
    )
}