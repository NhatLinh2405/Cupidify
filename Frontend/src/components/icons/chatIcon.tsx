import { SVGProps } from 'react';

const ChatIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width={25} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g fill="#7A838C">
            <path
                opacity={0.4}
                d="M12.52 2C6.71 2 2.5 6.74 2.5 12c0 1.68.49 3.41 1.35 4.99.16.26.18.59.07.9l-.67 2.24c-.15.54.31.94.82.78l2.02-.6c.55-.18.98.05 1.491.36 1.46.86 3.279 1.3 4.919 1.3 4.96 0 10-3.83 10-10C22.5 6.65 18.2 2 12.52 2Z"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.48 13.29c-.71-.01-1.28-.58-1.28-1.29 0-.7.58-1.28 1.28-1.27.71 0 1.28.57 1.28 1.28 0 .7-.57 1.28-1.28 1.28Zm-4.61 0c-.7 0-1.28-.58-1.28-1.28 0-.71.57-1.28 1.28-1.28.71 0 1.28.57 1.28 1.28 0 .7-.57 1.27-1.28 1.28Zm7.94-1.28c0 .7.57 1.28 1.28 1.28.71 0 1.28-.58 1.28-1.28 0-.71-.57-1.28-1.28-1.28-.71 0-1.28.57-1.28 1.28Z"
            />
        </g>
    </svg>
);

export default ChatIcon;
