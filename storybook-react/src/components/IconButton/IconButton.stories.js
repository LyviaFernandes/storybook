import { fn } from 'storybook/test'

import IconButton from './index'

export default {
    tittle: "Components/IconButton",
    component: IconButton,
    argTypes: {
        src: { control: "text" }
    }
}

export const Default = {
    args: {
        src: "https://files.softicons.com/download/application-icons/button-icons-pack-by-deleket/png/256/Button%20Info.png",
        alt: "Icon"
    }
}