export const SLIDE_TOP = {
    initial: {
        y: 25,
        opacity: 0,
    },
    visibleOnce: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 500,
            delay: 300,
        },
    },
}

export const SLIDE_BOTTOM = {
    initial: {
        y: -25,
        opacity: 0,
    },
    visibleOnce: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 500,
            delay: 200,
        },
    },
}

export const SLIDE_LEFT = {
    initial: {
        x: 25,
        opacity: 0,
    },
    visibleOnce: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 500,
            delay: 200,
        },
    },
}

export const SLIDE_RIGHT = {
    initial: {
        x: -25,
        opacity: 0,
    },
    visibleOnce: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 500,
            delay: 200,
        },
    },
}


