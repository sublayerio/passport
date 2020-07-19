import {cx, css, keyframes} from 'emotion'
import icons from '../icons'

const spinScale = keyframes`
0% {
    transform: rotate(0) scale(1);
}

50% {
    transform: rotate(360deg) scale(.9);
}

100% {
    transform: rotate(720deg) scale(1);
}
`

const animateSpinScale = css`
    animation-name: ${spinScale};
    animation-duration: 1800ms;
    animation-timing-function: cubic-bezier(.785, .135, .15, .86);
`

const animateInfinite = css`
    animation-iteration-count: infinite;
`

const Spinner = ({width}) => icons.spinner({
    width: width || 16.2,
    className: cx(animateSpinScale, animateInfinite)
})

export default Spinner