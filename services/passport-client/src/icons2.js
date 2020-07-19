import React from 'react'

export default {
    payments: props => (
        <svg {...props} fill="none" viewBox="0 0 20 20">
            <g fill="currentColor">
                <path clipRule="evenodd"
                      d="M5.5 4a1.5 1.5 0 1 0 0 3h9a1.5 1.5 0 0 0 0-3zm0 10a1.5 1.5 0 0 0 0 3h9a1.5 1.5 0 0 0 0-3z"
                      fillOpacity=".6" fillRule="evenodd"/>
                <rect height="5" rx="2.5" width="16" x="2" y="8"/>
            </g>
        </svg>
    ),
    orders: props => (
        <svg {...props} fill="none" viewBox="0 0 20 20">
            <g clipRule="evenodd" fill="currentColor" fillRule="evenodd">
                <path
                    d="M4 2a1 1 0 0 0-1 1v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a1 1 0 0 0-1-1h-1.056a.944.944 0 0 0-.944.944.944.944 0 0 1-.944.945H6.944A.944.944 0 0 1 6 2.944.944.944 0 0 0 5.056 2zm11 4H5v11h10z"/>
                <path d="M9 1a2 2 0 0 0-2 2h6a2 2 0 0 0-2-2zm5 6H6v9h8z" fillOpacity=".6"/>
            </g>
        </svg>
    ),
    statistics: props => (
        <svg {...props} fill="none" viewBox="0 0 20 20">
            <clipPath>
                <path d="M0 0h20v20H0z"/>
            </clipPath>
            <g clipPath="url(#icon-statistics-a)" clipRule="evenodd" fill="currentColor" fillRule="evenodd">
                <path
                    d="M3 11.176V16.5a1.5 1.5 0 0 0 3 0v-7-.012l-.215-.257-1.763 1.479A2.09 2.09 0 0 1 3 11.176zm5 .378V16.5a1.5 1.5 0 0 0 3 0v-5.903l-.779.654A2.1 2.1 0 0 1 8 11.554zm5.014-2.263c-.01.068-.014.138-.014.209v7a1.5 1.5 0 0 0 3 0v-5.857c-.785.299-1.74.133-2.363-.61z"
                    fillOpacity=".6"/>
                <path
                    d="M10.715 2.273l5.767-.45a1.1 1.1 0 0 1 1.15 1.371l-1.445 5.601a1.1 1.1 0 0 1-1.908.432l-1.453-1.732-3.371 2.828a1.1 1.1 0 0 1-1.55-.135L5.785 7.66 3.256 9.782a1.1 1.1 0 0 1-1.414-1.685l3.371-2.829a1.1 1.1 0 0 1 1.55.136l2.12 2.527 2.529-2.121-1.454-1.733a1.1 1.1 0 0 1 .757-1.804z"/>
            </g>
        </svg>
    ),
    administration: props => (
        <svg {...props} fill="none" viewBox="0 0 20 20">
            <g fill="currentColor">
                <path
                    d="M2 4a1 1 0 0 1 1-1h5a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-.56-.56A2 2 0 0 0 7.172 17H3a1 1 0 0 1-1-1z"
                />
                <path
                    d="M19 4a1 1 0 0 0-1-1h-5a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l.56-.56A2 2 0 0 1 13.828 17H18a1 1 0 0 0 1-1z"
                    fillOpacity=".6"
                />
            </g>
        </svg>
    ),
    developer: props => (
        <svg {...props} fill="none" viewBox="0 0 20 20">
            <g fill="currentColor">
                <path clipRule="evenodd"
                      d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 7.869v4.263c0 1.597 1.78 2.55 3.11 1.664l3.197-2.132a2 2 0 0 0 0-3.328L7.109 8.204C5.78 7.318 4 8.271 4 9.87z"
                      fillOpacity=".6" fillRule="evenodd"/>
                <path
                    d="M5 9.869v4.263a1 1 0 0 0 1.555.831l3.197-2.13a1 1 0 0 0 0-1.665L6.555 9.036A1 1 0 0 0 5 9.87z"/>
            </g>
        </svg>
    ),
    notification: props => (
        <svg {...props} fill="none" viewBox="0 0 20 20">
            <clipPath>
                <path d="M0 0h20v20H0z"/>
            </clipPath>
            <g fill="currentColor">
                <path d="M5.725 17.548a.5.5 0 0 1 .354-.612L9.943 15.9a.5.5 0 0 1 .612.354 2.5 2.5 0 1 1-4.83 1.294z"
                      fillOpacity=".6"/>
                <path clipRule="evenodd"
                      d="M6.802 2.248A1 1 0 1 0 6.285.316a1 1 0 0 0 .517 1.932zm.742.836a5.5 5.5 0 0 0-3.89 6.737l.44 1.642-.6 1.962c-.459 1.502.914 2.923 2.43 2.517l9.45-2.532c1.518-.407 1.996-2.324.847-3.395l-1.501-1.4-.44-1.641a5.5 5.5 0 0 0-6.736-3.89z"
                      fillRule="evenodd"/>
            </g>
        </svg>
    ),
    account: props => (
        <svg
            {...props}
            fill="none"
            viewBox="0 0 20 20"
        >
            <g fill="currentColor">
                <path
                    d="M14.846 6.8c0 2.651-2.17 4.8-4.846 4.8S5.154 9.451 5.154 6.8 7.324 2 10 2s4.846 2.149 4.846 4.8z"/>
                <path clipRule="evenodd"
                      d="M5.97 11.099A5.329 5.329 0 0 0 3 15.867C3 17.045 3.964 18 5.154 18h9.692c1.19 0 2.154-.955 2.154-2.133a5.329 5.329 0 0 0-2.97-4.768A5.933 5.933 0 0 1 10 12.667a5.933 5.933 0 0 1-4.03-1.568z"
                      fillOpacity=".6" fillRule="evenodd"/>
            </g>
        </svg>
    ),
    settings: props => (
        <svg
            {...props}
            fill="none"
            viewBox="0 0 20 20"
        >
            <g clipRule="evenodd" fill="currentColor" fillRule="evenodd">
                <path
                    d="M10.83 6a2.996 2.996 0 0 0 0-2H17a1 1 0 1 1 0 2zM5.17 6H3a1 1 0 0 1 0-2h2.17a2.995 2.995 0 0 0 0 2zm5.66 10a2.997 2.997 0 0 0 0-2H17a1 1 0 1 1 0 2zm-5.66 0H3a1 1 0 1 1 0-2h2.17a2.995 2.995 0 0 0 0 2zM15 10c0 .35-.06.687-.17 1H17a1 1 0 1 0 0-2h-2.17c.11.313.17.65.17 1zM3 11h6.17a2.995 2.995 0 0 1 0-2H3a1 1 0 0 0 0 2z"
                    fillOpacity=".6"/>
                <path
                    d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm2-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
            </g>
        </svg>
    ),
    help: props => (
        <svg {...props} fill="none" height="20" viewBox="0 0 20 20" width="20">
            <g clipRule="evenodd" fill="currentColor" fillRule="evenodd">
                <path d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-2a7 7 0 1 0 0-14 7 7 0 0 0 0 14z" fillOpacity=".6"/>
                <path
                    d="M10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm-.693-5.599c-.122.298-.182.697-.182 1.198H10.5l.021-.328c.04-.35.195-.657.467-.918l.435-.414c.34-.329.579-.628.715-.897.136-.272.204-.56.204-.864 0-.67-.21-1.187-.629-1.553-.419-.368-1.008-.553-1.767-.553-.752 0-1.346.194-1.783.58-.433.387-.653.922-.66 1.606H9.06c.007-.286.09-.51.247-.671.161-.165.374-.247.64-.247.558 0 .837.302.837.908 0 .2-.053.392-.161.574-.107.18-.324.414-.65.704-.322.286-.544.578-.666.875zm-.097 2.256a.781.781 0 0 0-.241.591c0 .236.079.431.236.586.161.153.372.23.634.23.261 0 .47-.077.628-.23a.775.775 0 0 0 .242-.586.773.773 0 0 0-.247-.59c-.161-.158-.369-.237-.623-.237s-.464.079-.629.236z"/>
            </g>
        </svg>
    ),
    chat: props => (
        <svg
            {...props}
            fill="none"
            viewBox="0 0 20 20"
        >
            <g clipRule="evenodd" fill="currentColor" fillRule="evenodd">
                <path
                    d="M11.423 8.57A5.98 5.98 0 0 0 12 6c0-.7-.12-1.373-.34-1.998a7.5 7.5 0 1 1-3.57 14.18L4 19l.818-4.09a7.464 7.464 0 0 1-.816-3.25A5.99 5.99 0 0 0 6 12a5.98 5.98 0 0 0 2.57-.577l3.804.951z"
                    fillOpacity=".6"/>
                <path d="M10.362 8.446a5 5 0 1 0-1.915 1.915L11 11z"/>
            </g>
        </svg>
    ),
    signout: props => (
        <svg {...props} fill="none" viewBox="0 0 20 20">
            <g clipRule="evenodd" fill="currentColor" fillRule="evenodd">
                <path
                    d="M4 2a2 2 0 0 0-2 2v4.044l4-.004V6.996C6 5.39 7.695 4.434 8.99 5.368l4.19 3.02a1.987 1.987 0 0 1 0 3.216l-4.19 3.02c-1.295.935-2.99.02-2.99-1.587v-1.044l-4 .003V16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"
                    fillOpacity=".6"/>
                <path
                    d="M12.59 10.802L8.41 13.815c-.647.466-1.546 0-1.546-.802v-2.027H2V9.014h4.863V6.987c0-.801.899-1.268 1.546-.802l4.182 3.013a.99.99 0 0 1 0 1.604z"/>
            </g>
        </svg>
    )
}