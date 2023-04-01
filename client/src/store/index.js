import { proxy } from "valtio";

import { BEST_COLORS } from "../config/constants";

const state = proxy({
    intro: true,
    color: BEST_COLORS[0],
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './nike.svg',
    fullDecal: './nike.svg'
})

export default state;