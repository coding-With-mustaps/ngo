const sizes = {
    mobile: '600px',
    tablet: '880px',
    laptop: '1050px',
    desktop: '1200px'
};

const sizesNum = {
    mobile: 480,
    tablet: 880,
    laptop: 1024,
    desktop: 1200
}

const media = {
    mobile: `(max-width: ${sizes.mobile})`,
    tablet: `(max-width: ${sizes.tablet})`,
    laptop: `(max-width: ${sizes.laptop})`,
    desktop: `(max-width: ${sizes.desktop})`
};

export { media, sizesNum };