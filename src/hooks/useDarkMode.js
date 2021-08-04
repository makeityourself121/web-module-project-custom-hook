import useLocalStorage from './useLocalStorage';


function useDarkMode() {
    const [darkMode, setDarkMode]=useLocalStorage('key','false')
    return [darkMode, setDarkMode]
}

export default useDarkMode;