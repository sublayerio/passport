import React from 'react'
import close from '@cmds/icons/es/close'
import spinner from '@cmds/icons/es/spinner'
import check from '@cmds/icons/es/check'
import collaborator from '@cmds/icons/es/collaborator'
import hideFields from '@cmds/icons/es/hideFields'
import pencil from '@cmds/icons/es/pencil'

export default {
    brand: props => (
        <svg {...props} viewBox="0 0 560 560">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M91.875,1 C142.616161,1 183.75,42.459443 183.75,93.6022577 L183.75,467.147742 C183.75,518.290557 142.616161,559.75 91.875,559.75 C41.1338386,559.75 6.21400009e-15,518.290557 0,467.147742 L0,93.6022577 C-6.21400009e-15,42.459443 41.1338386,1 91.875,1 Z M410.625,299.75 C328.127465,299.75 261.25,232.872535 261.25,150.375 C261.25,67.8774655 328.127465,1 410.625,1 C493.122535,1 560,67.8774655 560,150.375 C560,232.872535 493.122535,299.75 410.625,299.75 Z"
                    fill="#000000"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    ),
    close,
    spinner,
    check,
    hideFields,
    pencil,
    collaborator
}