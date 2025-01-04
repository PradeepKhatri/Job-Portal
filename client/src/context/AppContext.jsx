import { createContext, useState, useEffect } from "react";
import { assets, jobsData } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {

    const [isSignedIn, setIsSignedIn] = useState(false);
    const [searchFilter, setSearchFilter] = useState({
        title: '',
        location: ''
    });

    const [isSearched, setIsSearched] = useState(false);

    const [jobs, setJobs] = useState([]);

    
    const [showRecruiterLogin, setShowRecruiterLogin] = useState(false)

    const fetchJobs = () => {
       setJobs(jobsData);
    }

    useEffect(() => {
        fetchJobs();
    },[])

    const value = {
        searchFilter, setSearchFilter,
        isSignedIn, setIsSignedIn,
        isSearched, setIsSearched,
        jobs, setJobs,
        showRecruiterLogin, setShowRecruiterLogin
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
    
}