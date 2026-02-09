import { fn } from 'storybook/test'

import TextButton from './TextButton'

export default {
    tittle: "Components/TextButton",
    component: TextButton,
    argTypes: {
        label: { control: "text" }
    }
}

export const Default = {
    args: {
        label: "Storybook "
    }
}