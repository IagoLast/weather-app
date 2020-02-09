const state = {
    pathname: '/',
    pathNameChangedCb: () => { },
}

if (typeof window !== 'undefined' && typeof window.location !== 'undefined') {
    window.onpopstate = () => {
        state.pathNameChangedCb(getPathName());
    };
}


export function getPathName() {
    if (typeof window === 'undefined' || typeof window.location === 'undefined') {
        return state.pathname;
    }
    return window.location.pathname;
}


export function onPathNameChanged(callback) {
    state.pathNameChangedCb = callback;
}

export function navigateTo(pathName) {
    if (typeof window === 'undefined' || typeof window.location === 'undefined') {
        state.pathname = pathName;

    } else {
        window.history.pushState({}, pathName, pathName);
    }
    state.pathNameChangedCb(getPathName());
}

export default { getPathName, onPathNameChanged, navigateTo };